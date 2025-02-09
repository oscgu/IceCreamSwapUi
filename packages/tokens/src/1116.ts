import { ChainId, ERC20Token, WETH9 } from '@pancakeswap/sdk'

export const coreTokens = {
  wcore: WETH9[ChainId.CORE],
  wcore_old: new ERC20Token(ChainId.CORE, '0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f', 18, 'WCORE', 'WrappedCoreOld'),
  core: new ERC20Token(ChainId.CORE, '0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f',18,'CORE','CORE'),
  score: new ERC20Token(ChainId.CORE, '0xA20b3B97df3a02f9185175760300a06B4e0A2C05',18,'SCORE','StakedCore','https://icecreamswap.com'),
  ice: new ERC20Token(ChainId.CORE, '0xc0E49f8C615d3d4c245970F6Dc528E4A47d69a44', 18, 'ICE', 'IceCream', 'https://icecreamswap.com'),
  usdt: new ERC20Token(ChainId.CORE, '0x81bCEa03678D1CEF4830942227720D542Aa15817', 18, 'USDT', 'Tether USD'),
  usdc: new ERC20Token(ChainId.CORE, '0xD2683b22287E63D22928CBe4514003a92507f474', 18, 'USDC', 'USD Coin'),
  eth: new ERC20Token(ChainId.CORE, '0xeF6b7BC74C9354BCf2e3F2A068e4b0B5CDf08F29', 18, 'ETH', 'Ether'),
  bnb: new ERC20Token(ChainId.CORE, '0x12AA82525DEfF84777fa78578A68ceB854A85f43', 18, 'BNB', 'BNB'),
  huc: new ERC20Token(ChainId.CORE, '0x5EE2c2aE144218b52CF756c0907bA384C7E35fba', 18, 'HUC', 'Hobo Universe'),
  aicore: new ERC20Token(ChainId.CORE, '0x7621c97683A3b0499EC156bD257E44175e793bb1', 9, 'AICore', 'AI CORE TOKEN'),
  bcore: new ERC20Token(ChainId.CORE, '0xBFa14641bf0fE84dE3fcf3Bf227900af445f09C3', 18, 'Bcore', 'Big Core'),
  bcore_new: new ERC20Token(ChainId.CORE, '0x165290C62126083E31345Ebd74606eB562cDdD66', 9, 'Bcore', 'BigCore', "https://bigcoreproject.wixsite.com/bigcore"),
  kishu: new ERC20Token(ChainId.CORE, '0xb2172C92e22F09Bc7d15C4B1790c7704f8429d14', 18, 'CKISHU', 'Core Kishu'),
  gte: new ERC20Token(ChainId.CORE, '0xdA7dAA9a07ef5070dB671307fEa819c75d2D6cE3', 18, 'GTE', 'Goatge'),
  word: new ERC20Token(ChainId.CORE, '0xAA7912C028E058e4bD90Bcbb9fB41C27DbcC3245', 6, 'WORD', 'StarlyBooks'),
  cshib: new ERC20Token(ChainId.CORE, '0x751669F3dCE1ED1c449dE44889365E40F13ce57f', 9, 'CoreShib', 'CoreShib'),
  ctomb: new ERC20Token(ChainId.CORE, '0xC830a752eef79F2D66a36645A70fB0bA176b4Cea', 18, 'CTOMB', 'CoreTomb'),
  cshare: new ERC20Token(ChainId.CORE, '0x6501cCA79ca8D6F68784f2345c9a379951e30A05', 18, 'CSHARE', 'CoreShare'),
  lung: new ERC20Token(ChainId.CORE, '0xE8b0dF74192CCA9C4de66F23653476f6e6CD1d98', 18, 'LUNG', 'LunaGens'),
  hobo: new ERC20Token(ChainId.CORE, '0x25100C0083e8E53b1cb264E978522bd477011A0d', 18, 'HOBO', 'Hobo Universe'),
  coreshiba: new ERC20Token(ChainId.CORE, '0x84F0FDAA0a34B5F4a1144372072a706A4A8121A4', 18, 'SHIBA', 'ShibaCore'),
  usdtrain: new ERC20Token(ChainId.CORE, '0xFB59984Fd355C60064fcb191C0Ed817F1365eec0', 18, 'USDTRAIN', 'USDT Rain'),
  fsxm: new ERC20Token(ChainId.CORE, '0x5aE225fa6573903CA58E26Cd4171B87060CeEAA2', 18, 'FSXM', 'FlashX Max'),
  royale: new ERC20Token(ChainId.CORE, '0xA7c0B19645B653B4373E3592C84fce8C64D89E8F', 18, 'ROYALE', 'MemeRoyale'),
  cfee: new ERC20Token(ChainId.CORE, '0x7241C79C5Bf1C69eA6f0F8FAF2dFB30e37EF0820', 8, 'CFEE', 'Coffee Crypto'),
  usdtl0: new ERC20Token(ChainId.CORE, '0x900101d06A7426441Ae63e9AB3B9b0F63Be145F1', 6, 'USDT_l0', 'Tether USD (Layer0 Bridge)'),
  usdcl0: new ERC20Token(ChainId.CORE, '0xa4151B2B3e269645181dCcF2D426cE75fcbDeca9', 6, 'USDC', 'USD Coin (Layer0 Bridge)'),
  btv: new ERC20Token(ChainId.CORE, '0xE8dEC1bFC7BF572D60403c609d6589715d2a23fC', 8, 'BTV', 'Bitvexa Network'),
  woof: new ERC20Token(ChainId.CORE, '0x5C44d3D2312AbA4d5F2406A98Bf374Bc76455092', 18, 'WOOF', 'WOOF'),
  miidas: new ERC20Token(ChainId.CORE, '0xcfd38184c30832917A2871695F91e5e61bBD41fF', 6, 'Miidas', 'Miidas NFT'),
  block: new ERC20Token(ChainId.CORE, '0xbFf24592345094DFA4d6f75aFF5BE79AbCbC9bD9', 8, 'BLOCK', 'BlockVerse'),
  ucore: new ERC20Token(ChainId.CORE, '0x496Bb259D0117E89B2e73433524e9838c3073e60', 18, 'UCORE', 'UnityCore'),
  crystal: new ERC20Token(ChainId.CORE, '0x005133502d02ddDe90D5f5283E4Af0F33A4a4db2', 18, 'CRYSTAL', 'CRYSTAL STONES'),
  maxi: new ERC20Token(ChainId.CORE, '0xDd5d49910c5D475c984EE891A928De6658d2042d', 18, 'MAXL', 'Maxi Protocol'),
  cmct: new ERC20Token(ChainId.CORE, '0x9EcC5C0179F02d2e8dBdaEbC8a6fC2B544ded9ba', 18, 'CMCT', 'CoinMarketCart'),
  but: new ERC20Token(ChainId.CORE, '0x40FFb9CCEA71c7E3b34593E83Aa362388f2fB4dC', 18, 'BUT', 'Butros'),
  bliz: new ERC20Token(ChainId.CORE, '0xd33b7081aEBA462333356757BFC78Bc000F6b1f4', 18, 'BLIZ', 'BLIZZARD CORP.'),
  asi: new ERC20Token(ChainId.CORE, '0xEF51585D985bad6818C8aD7BA6D70cCf6D216c89', 18, 'ASI', 'Asi Core'),
  musk: new ERC20Token(ChainId.CORE, '0x154B5D670Ee6BA945B20A343d68Dff29720e9170', 18, 'MUSK 2.0', 'MUSK 2.0'),
  kigu: new ERC20Token(ChainId.CORE, '0xB0Da4ae4e087DCE159AE1C2d6C6f502e902516A1', 8, 'KIGU', 'Kigurumi'),
  cts: new ERC20Token(ChainId.CORE, '0x4225A3C57B2622f270D32C12e8135a095ED2dAf6', 18, 'CTS', 'Coretoshis'),
  kice: new ERC20Token(ChainId.CORE, '0xB946F9eB7556F41e825C535a052fbE23d3D04358', 18, 'KICE', 'ICE KING'),
  cBTC: new ERC20Token(ChainId.CORE, '0xb30692a602A22b7074FfA997b342eE7deEC6E85E', 18, 'cBTC', 'CoretoshisBTC'),
  hice: new ERC20Token(ChainId.CORE, '0xEcf2AdDc7267D65fBa77A8cFB23a9160B435fa31', 18, 'HICE', 'HOLD ICE'),
  gator: new ERC20Token(ChainId.CORE, '0xa386c445fb7219bFC37674D9fed086817dDF79BB', 9, 'GATOR', 'GATOR INU'),
}
