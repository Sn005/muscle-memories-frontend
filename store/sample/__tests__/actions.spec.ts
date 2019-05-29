import actions from '../actions'
import { State } from '../state'
import { types } from '../mutations'

const mockState: State = {
  firstName: '山田',
  lastName: '太郎'
}

describe('app/acttionsのテスト', () => {
  test(`changeFirstNameAsyncを実行したら${
    types.CHANGE_FIRST_NAME
  }が実行されるか`, async () => {
    const payload = {
      firstName: '田代'
    }
    const commit = jest.fn()
    const wrapper = async (methods: any) =>
      await methods.bind(mockState)({ commit }, payload)
    await wrapper(actions.changeFirstNameAsync)
    expect(commit).toHaveBeenCalledWith(types.CHANGE_FIRST_NAME, payload)
  })
  test(`changeFirstNameAsyncを実行したら${
    types.CHANGE_LAST_NAME
  }が実行されるか`, async () => {
    const payload = {
      lastName: '田代'
    }
    const commit = jest.fn()
    const wrapper = async (methods: any) =>
      await methods.bind(mockState)({ commit }, payload)
    await wrapper(actions.changeLastNameAsync)
    expect(commit).toHaveBeenCalledWith(types.CHANGE_LAST_NAME, payload)
  })
})
