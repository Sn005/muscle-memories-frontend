import actions from '../actions'
import { types } from '../mutations'
import { mockState } from './mocks/mockState'

const mockRes = {
  uid: 'hoge',
  name: 'hoge'
}

jest.mock('@/api/auth/AuthServiceFactory', () => ({
  __esModule: true,
  authService: {
    fetchMyAccount: async () => mockRes,
    signInByEmail: async () => mockRes,
    signInBySns: async () => mockRes,
    signOut: async () => null
  }
}))

describe('domain/user/actionsのテスト', async () => {
  it(`setUser実行時、commitメソッドに、${
    types.SET_USER
  }とauthService.fetchMyAccountからの戻り値を渡していること`, async () => {
    const commit = jest.fn()
    const wrapper = async (methods: any) =>
      await methods.bind(mockState)({ commit })
    await wrapper(actions.setUser)
    expect(commit).toHaveBeenCalledWith(types.SET_USER, mockRes)
  })
  it(`signInByEmail実行時、commitメソッドに、${
    types.SET_USER
  }とauthService.signInByEmailからの戻り値を渡していること`, async () => {
    const commit = jest.fn()
    const wrapper = async (methods: any) =>
      await methods.bind(mockState)({ commit })
    await wrapper(actions.signInByEmail)
    expect(commit).toHaveBeenCalledWith(types.SET_USER, mockRes)
  })
  it(`signInBySns実行時、commitメソッドに、${
    types.SET_USER
  }とauthService.signInBySnsからの戻り値を渡していること`, async () => {
    const commit = jest.fn()
    const wrapper = async (methods: any) =>
      await methods.bind(mockState)({ commit })
    await wrapper(actions.signInBySns)
    expect(commit).toHaveBeenCalledWith(types.SET_USER, mockRes)
  })
  it(`signOut実行時、commitメソッドに、${
    types.SET_USER
  }とnullを渡していること`, async () => {
    const commit = jest.fn()
    const wrapper = async (methods: any) =>
      await methods.bind(mockState)({ commit })
    await wrapper(actions.signOut)
    expect(commit).toHaveBeenCalledWith(types.SET_USER, null)
  })
})
