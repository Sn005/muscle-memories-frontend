import { State } from './state'

export enum types {
  SET_USER = 'CHANGE_USER_STATE'
}

export interface Mutations {
  [types.SET_USER]: (state: State, payload?: any) => void
}

const mutations: Mutations = {
  [types.SET_USER](state, { user }) {
    state.user = user
  }
}

export default {
  ...mutations
}
