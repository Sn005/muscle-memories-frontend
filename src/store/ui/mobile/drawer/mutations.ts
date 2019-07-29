import { State } from './state'

export enum mutationTypes {
  TOGGLE_DRAWER = 'TOGGLE_DRAWER'
}

export interface Mutations {
  [mutationTypes.TOGGLE_DRAWER]: (state: State) => void
}

const mutations: Mutations = {
  [mutationTypes.TOGGLE_DRAWER](state) {
    state.isOpen = !state.isOpen
  }
}

export default {
  ...mutations
}
