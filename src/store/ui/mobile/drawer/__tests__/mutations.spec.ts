import mutations, { mutationTypes } from '../mutations'

describe('ui/mobile/drawer/mutationsのテスト', () => {
  test('stateのisOpendrawerがfalseの状態で、TOGGLE_DRAWERを実行した場合、drawerがtrueになること', () => {
    const mockState = {
      drawer: true
    }
    mutations[mutationTypes.TOGGLE_DRAWER](mockState)
    expect(mockState.drawer).toBeFalsy()
  })
  test('stateのdrawerがtrueの状態で、TOGGLE_DRAWERを実行した場合、drawerがfalseになること', () => {
    const mockState = {
      drawer: false
    }
    mutations[mutationTypes.TOGGLE_DRAWER](mockState)
    expect(mockState.drawer).toBeTruthy()
  })
  test('SET_DRAWERを実行した場合、引数で渡したboolean値がdrawerの値になること', () => {
    const mockState = {
      drawer: false
    }
    mutations[mutationTypes.SET_DRAWER](mockState, true)
    expect(mockState.drawer).toBeTruthy()
    mutations[mutationTypes.SET_DRAWER](mockState, false)
    expect(mockState.drawer).toBeFalsy()
  })
})
