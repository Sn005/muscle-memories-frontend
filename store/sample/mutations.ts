import { State } from './state'

export enum types {
  CHANGE_FIRST_NAME = 'CHANGE_FIRST_NAME',
  CHANGE_LAST_NAME = 'CHANGE_LAST_NAME'
}

export interface Mutations {
  [types.CHANGE_FIRST_NAME]: (state: State, payload?: any) => void
  [types.CHANGE_LAST_NAME]: (state: State, payload?: any) => void
}

const mutations: Mutations = {
  [types.CHANGE_FIRST_NAME](state, { firstName }) {
    state.firstName = firstName
  },
  [types.CHANGE_LAST_NAME](state, { lastName }) {
    state.lastName = lastName
  }
}

export default {
  ...mutations
}
