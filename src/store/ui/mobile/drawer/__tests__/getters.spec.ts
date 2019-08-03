import getters, { getterTypes } from '../getters'
import { State } from '../state'
describe('ui/mobile/drawer/gettersのテスト', () => {
  test('drawerの値とisOpenの値は同一であること', () => {
    const mockState: State = {
      drawer: true
    }
    expect(getters.isOpen(mockState)).toBeTruthy()
    mockState.drawer = !mockState.drawer
    expect(getters.isOpen(mockState)).toBeFalsy()
  })
  test('drawerの値とisOpenの値は逆であること', () => {
    const mockState: State = {
      drawer: false
    }
    expect(getters.isOpen(mockState)).toBeFalsy()
    mockState.drawer = !mockState.drawer
    expect(getters.isOpen(mockState)).toBeTruthy()
  })
})
