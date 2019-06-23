import mutations, { types } from '../mutations'

const mockState = {
  firstName: '山田',
  lastName: '太郎'
}
describe('app/mutationsのテスト', () => {
  test('CHANGE_FIRST_NAMEを実行したらstate.firstNameがpayloadで渡した値になるか', () => {
    const payload = {
      firstName: '田代'
    }
    mutations[types.CHANGE_FIRST_NAME](mockState, payload)
    expect(mockState.firstName).toBe('田代')
  })
})
