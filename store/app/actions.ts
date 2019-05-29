import { DefineActions } from 'vuex-type-helper'
import { State } from './state'
import { Getters } from './getters'
import { Mutations, types } from './mutations'

export interface Actions {
  changeFirstNameAsync: {
    firstName: string
  }
  changeLastNameAsync: {
    lastName: string
  }
}

const actions: DefineActions<Actions, State, Mutations, Getters> = {
  changeFirstNameAsync({ commit }, payload): Promise<string> {
    return new Promise(resolve => {
      setTimeout(() => {
        commit(types.CHANGE_FIRST_NAME, payload)
        resolve()
      }, 10)
    })
  },
  changeLastNameAsync({ commit }, payload): Promise<string> {
    return new Promise(resolve => {
      setTimeout(() => {
        commit(types.CHANGE_LAST_NAME, payload)
        resolve()
      }, 300)
    })
  }
}

export default {
  ...actions
}
