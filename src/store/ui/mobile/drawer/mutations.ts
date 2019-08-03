import { State } from './state'

export enum mutationTypes {
  TOGGLE_DRAWER = 'TOGGLE_DRAWER',
  SET_DRAWER = 'SET_DRAWER'
}

export interface Mutations {
  [mutationTypes.TOGGLE_DRAWER]: (state: State) => void
  [mutationTypes.SET_DRAWER]: (state: State, payload: boolean) => void
}

const mutations: Mutations = {
  [mutationTypes.TOGGLE_DRAWER](state) {
    state.drawer = !state.drawer
  },
  [mutationTypes.SET_DRAWER](state, payload) {
    state.drawer = payload
  }
}

export default {
  ...mutations
}
