import { ChainId } from '@pancakeswap/chains'
import { perpLangMap } from 'utils/getPerpetualLanguageCode'
import { perpTheme } from 'utils/getPerpetualTheme'

interface GetPerpetualUrlProps {
  chainId: ChainId | undefined
  languageCode: string | undefined
  isDark: boolean
}

const mapPerpChain = (chainId: ChainId): string => {
  return undefined
  /*
  switch (chainId) {
    case ChainId.ETHEREUM:
      return 'ethereum'
    case ChainId.ARBITRUM_ONE:
      return 'arbitrum'
    default:
      return 'bsc'
  }
  */
}

const supportV2Chains: ChainId[] = []

export const getPerpetualUrl = ({ chainId, languageCode, isDark }: GetPerpetualUrlProps) => {
  if (!chainId || !languageCode) {
    return 'https://perp.pancakeswap.finance/en/futures/v2/BTCUSD'
  }

  const perpChain = mapPerpChain(chainId)
  const version = supportV2Chains.includes(chainId) ? 'v2/' : ''
  return `https://perp.pancakeswap.finance/${perpLangMap(languageCode)}/futures/${version}BTCUSD?theme=${perpTheme(
    isDark,
  )}&chain=${perpChain}`
}
