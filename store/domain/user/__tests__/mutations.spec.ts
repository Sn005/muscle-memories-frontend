import mutations, { types } from '../mutations'
import { State } from '../state'
import { mockState } from './mocks/mockState'

describe('domain/user/mutationsのテスト', () => {
  test('SET_USERを実行したらstate.userの値がpayloadで渡した値になること', () => {
    const payload: State = {
      user: {
        uid: 'fuga',
        name: 'fuga'
      }
    }
    mutations[types.SET_USER](mockState, payload)
    expect(mockState.user).toBe(payload.user)
  })
})
