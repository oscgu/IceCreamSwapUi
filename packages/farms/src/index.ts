import { PublicClient, formatEther } from 'viem'
import BigNumber from 'bignumber.js'
import {
  FarmV3SupportedChainId,
  masterChefAddresses,
  masterChefV3Addresses,
  supportedChainIdV2,
  supportedChainIdV3,
  bCakeSupportedChainId,
  FarmV2SupportedChainId,
  supportedChainId,
  FarmSupportedChainId,
} from './const'
import { farmV2FetchFarms, FetchFarmsParams, fetchMasterChefV2Data } from './v2/fetchFarmsV2'
import {
  farmV3FetchFarms,
  fetchMasterChefV3Data,
  fetchCommonTokenUSDValue,
  fetchTokenUSDValues,
  CommonPrice,
  LPTvl,
  getCakeApr,
} from './fetchFarmsV3'
import { ComputedFarmConfigV3, FarmV3DataWithPrice } from './types'

export {
  type FarmV3SupportedChainId,
  type FarmSupportedChainId,
  supportedChainIdV3,
  bCakeSupportedChainId,
  supportedChainIdV2,
  supportedChainId,
}

export function createFarmFetcher(provider: ({ chainId }: { chainId: FarmV2SupportedChainId }) => PublicClient) {
  const fetchFarms = async (
    params: Pick<FetchFarmsParams, 'chainId' | 'farms'>,
  ) => {
    const { farms, chainId } = params
    const masterChefAddress = masterChefAddresses[chainId]
    const { poolLength, totalRegularAllocPoint, totalSpecialAllocPoint, icePerBlock } = await fetchMasterChefV2Data({
      provider,
      masterChefAddress,
      chainId,
    })
    const regularCakePerBlock = formatEther(icePerBlock)
    const farmsWithPrice = await farmV2FetchFarms({
      provider,
      masterChefAddress,
      chainId,
      farms: farms.filter((f) => !f.pid || poolLength > f.pid),
      totalRegularAllocPoint,
      totalSpecialAllocPoint,
    })

    return {
      farmsWithPrice,
      poolLength: Number(poolLength),
      regularCakePerBlock: +regularCakePerBlock,
      totalRegularAllocPoint: totalRegularAllocPoint.toString(),
    }
  }

  return {
    fetchFarms,
    isChainSupported: (chainId: number) => supportedChainIdV2.includes(chainId),
    supportedChainId: supportedChainIdV2,
  }
}

export function createFarmFetcherV3(provider: ({ chainId }: { chainId: number }) => PublicClient) {
  const fetchFarms = async ({
    farms,
    chainId,
    commonPrice,
  }: {
    farms: ComputedFarmConfigV3[]
    chainId: FarmV3SupportedChainId
    commonPrice: CommonPrice
  }) => {
    const masterChefAddress = masterChefV3Addresses[chainId]
    if (!masterChefAddress) {
      throw new Error('Unsupported chain')
    }

    try {
      const { poolLength, totalAllocPoint, latestPeriodCakePerSecond } = await fetchMasterChefV3Data({
        provider,
        masterChefAddress,
        chainId,
      })

      const cakePerSecond = new BigNumber(latestPeriodCakePerSecond.toString()).div(1e18).div(1e12).toString()

      const farmsWithPrice = await farmV3FetchFarms({
        farms,
        chainId,
        provider,
        masterChefAddress,
        totalAllocPoint,
        commonPrice,
      })

      return {
        chainId,
        poolLength: Number(poolLength),
        farmsWithPrice,
        cakePerSecond,
        totalAllocPoint: totalAllocPoint.toString(),
      }
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  const getCakeAprAndTVL = (farm: FarmV3DataWithPrice, lpTVL: LPTvl, cakePrice: string, cakePerSecond: string) => {
    const [token0Price, token1Price] = farm.token.sortsBefore(farm.quoteToken)
      ? [farm.tokenPriceBusd, farm.quoteTokenPriceBusd]
      : [farm.quoteTokenPriceBusd, farm.tokenPriceBusd]
    const tvl = new BigNumber(token0Price).times(lpTVL.token0).plus(new BigNumber(token1Price).times(lpTVL.token1))

    const cakeApr = getCakeApr(farm.poolWeight, tvl, cakePrice, cakePerSecond)

    return {
      activeTvlUSD: tvl.toString(),
      activeTvlUSDUpdatedAt: lpTVL.updatedAt,
      cakeApr,
    }
  }

  return {
    fetchFarms,
    getCakeAprAndTVL,
    isChainSupported: (chainId: number): chainId is FarmV3SupportedChainId => supportedChainIdV3.includes(chainId),
    supportedChainId: supportedChainIdV3,
    isTestnet: (chainId: number) => false,
  }
}

export * from './apr'
export * from './utils'
export * from './v2/farmsPriceHelpers'
export * from './types'
export type { FarmWithPrices } from './v2/farmPrices'
export * from './v2/deserializeFarmUserData'
export * from './v2/deserializeFarm'
export * from './v2/filterFarmsByQuery'
export { getFarmsPriceHelperLpFiles } from '../constants/priceHelperLps/getFarmsPriceHelperLpFiles'

export { masterChefV3Addresses, masterChefAddresses, fetchCommonTokenUSDValue, fetchTokenUSDValues }
