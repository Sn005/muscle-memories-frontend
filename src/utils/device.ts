/**
 * IOSか否かをUAから判断する
 */
export const isIOS = () => /iP(hone|(o|a)d)/.test(navigator.userAgent)

/**
 * Androidか否かをUAから判断する
 */
export const isAndroid = () => navigator.userAgent.includes('Android')

/**
 * モバイルか否かをUAから判断する
 */
export const isMobile = () => isIOS() || isAndroid()
