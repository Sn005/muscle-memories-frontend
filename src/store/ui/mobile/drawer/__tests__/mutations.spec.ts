import mutations, { types } from '../mutations'

describe('ui/mobile/drawer/mutationsのテスト', () => {
  test('stateのisOpenがfalseの状態で、TOGGLE_DRAWERを実行した場合、isOpenがtrueになるか', () => {
    const mockState = {
      isOpen: true
    }
    mutations[types.TOGGLE_DRAWER](mockState)
    expect(mockState.isOpen).toBeFalsy()
  })
  test('stateのisOpenがtrueの状態で、TOGGLE_DRAWERを実行した場合、isOpenがfalseになるか', () => {
    const mockState = {
      isOpen: false
    }
    mutations[types.TOGGLE_DRAWER](mockState)
    expect(mockState.isOpen).toBeTruthy()
  })
})
