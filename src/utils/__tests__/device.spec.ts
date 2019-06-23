import { isIOS, isAndroid, isMobile } from '../device'
const chrome =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.95 Safari/537.36'

const iphone =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3'

const android =
  'Mozilla/5.0 (Linux; U; Android 4.4.4; zh-cn; M351 Build/KTU84P) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'

describe('utils/deviceのテスト', () => {
  describe('isIOS関数のテスト', () => {
    test('userAgentがchromeの場合、falseが返ってくること', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        value: chrome,
        configurable: true
      })
      expect(isIOS()).toBeFalsy()
    })

    test('userAgentがandroidの場合、falseが返ってくること', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        value: android,
        configurable: true
      })
      expect(isIOS()).toBeFalsy()
    })
    test('userAgentがiosの場合、trueが返ってくること', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        value: iphone,
        configurable: true
      })
      expect(isIOS()).toBeTruthy()
    })
  })
  describe('isAndroid関数のテスト', () => {
    test('userAgentがchromeの場合、falseが返ってくること', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        value: chrome,
        configurable: true
      })
      expect(isAndroid()).toBeFalsy()
    })
    test('userAgentがiosの場合、falseが返ってくること', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        value: iphone,
        configurable: true
      })
      expect(isAndroid()).toBeFalsy()
    })

    test('userAgentがandroidの場合、trueが返ってくること', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        value: android,
        configurable: true
      })
      expect(isAndroid()).toBeTruthy()
    })
  })
  describe('isMobile', () => {
    test('userAgentがiosの場合、trueが返ってくること', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        value: iphone,
        configurable: true
      })
      expect(isMobile()).toBeTruthy()
    })

    test('userAgentがandroidの場合、trueが返ってくること', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        value: android,
        configurable: true
      })
      expect(isMobile()).toBeTruthy()
    })

    test('userAgentがchromeの場合、falseが返ってくること', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        value: chrome,
        configurable: true
      })
      expect(isMobile()).toBeFalsy()
    })
  })
})
