import actions from '../actions'
import { State } from '../state'
import { mutationTypes } from '../mutations'

describe('ui/mobile/drawer/acttionsのテスト', () => {
  test(`toggleDrawerを実行したら${
    mutationTypes.TOGGLE_DRAWER
  }が実行されるか`, () => {
    const mockState: State = {
      drawer: false
    }
    const commit = jest.fn()
    const wrapper = (methods: any) => methods.bind(mockState)({ commit })
    wrapper(actions.toggleDrawer)
    expect(commit).toHaveBeenCalledWith(mutationTypes.TOGGLE_DRAWER)
  })
  test(`setDrawerを実行したら${mutationTypes.SET_DRAWER}が実行されるか`, () => {
    const mockState: State = {
      drawer: false
    }
    const commit = jest.fn()
    const wrapper = (methods: any, payload?: any) =>
      methods.bind(mockState)({ commit }, payload)
    wrapper(actions.setDrawer, true)
    expect(commit).toHaveBeenCalledWith(mutationTypes.SET_DRAWER, true)
  })
})
