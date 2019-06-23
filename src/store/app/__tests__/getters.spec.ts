import getters from '../getters'

describe('app/gettersのテスト', () => {
  test('fullNameの値がfirstNameとlastNameの結合結になっているか', () => {
    const state = {
      firstName: '田代',
      lastName: 'まさし'
    }
    expect(getters.fullName(state)).toBe('田代・まさし')
  })
})
