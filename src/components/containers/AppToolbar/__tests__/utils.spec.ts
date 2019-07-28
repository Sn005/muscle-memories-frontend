import { generateFormattedTitle } from '../utils'

describe('AppToolbar/utilsのテスト', () => {
  describe('generateFormattedTitle関数のテスト', () => {
    test('引数で受け取った文字列に|が含まれている場合、|より前の文字列を返すこと', () => {
      const rawTitle = 'hoge | fuga'
      expect(generateFormattedTitle(rawTitle)).toBe('hoge')
    })
    test('引数で受け取った文字列に|が含まれていない場合、引数の文字列をそのまま返すこと', () => {
      const rawTitle = 'hoge'
      expect(generateFormattedTitle(rawTitle)).toBe('hoge')
    })
    test('戻り値の文字列には両端の空白が存在しないこと', () => {
      const rawTitle = ' hoge '
      expect(generateFormattedTitle(rawTitle)).toBe('hoge')
    })
  })
})
