import getters from '../getters'
import { mockState } from './mockState'

describe('domain/user/getterのテスト', () => {
  test('isAuthの値がstate.userをbooleanに型変換したものになっていること', () => {
    expect(getters.isAuth(mockState)).toBeTruthy()
    expect(getters.isAuth({ user: null })).toBeFalsy()
  })
})
