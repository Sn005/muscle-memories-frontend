import actions from '../actions'
import { State } from '../state'
import { mutationTypes } from '../mutations'

describe('ui/mobile/drawer/acttionsのテスト', () => {
  test(`toggleDrawerを実行したら${
    mutationTypes.TOGGLE_DRAWER
  }が実行されるか`, () => {
    const mockState: State = {
      isOpen: false
    }
    const commit = jest.fn()
    const wrapper = (methods: any) => methods.bind(mockState)({ commit })
    wrapper(actions.toggleDrawer)
    expect(commit).toHaveBeenCalledWith(mutationTypes.TOGGLE_DRAWER)
  })
})
