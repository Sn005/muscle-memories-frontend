import { State } from './state'

export const types = {
  TOGGLE_DRAWER: 'TOGGLE_DRAWER'
} as const

export interface Mutations {
  [types.TOGGLE_DRAWER]: (state: State) => void
}

const mutations: Mutations = {
  [types.TOGGLE_DRAWER](state) {
    state.isOpen = !state.isOpen
  }
}

export default {
  ...mutations
}
