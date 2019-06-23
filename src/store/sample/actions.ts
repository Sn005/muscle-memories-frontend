import { RootContext } from '../index'
import { State } from './state'
import { types } from './mutations'

// export interface RootContext {
//   commit: (name: string, payload?: any) => void
// }

export enum actionTypes {
  changeFirstNameAsync = 'changeFirstNameAsync',
  changeLastNameAsync = 'changeLastNameAsync'
}

export interface Actions {
  [actionTypes.changeFirstNameAsync]: (
    context: RootContext,
    payload: Pick<State, 'firstName'>
  ) => void
  [actionTypes.changeLastNameAsync]: (
    context: RootContext,
    payload: Pick<State, 'lastName'>
  ) => void
}
const actions: Actions = {
  [actionTypes.changeFirstNameAsync]({ commit }, payload): Promise<string> {
    return new Promise(resolve => {
      setTimeout(() => {
        commit(types.CHANGE_FIRST_NAME, payload)
        resolve()
      }, 10)
    })
  },
  [actionTypes.changeLastNameAsync]({ commit }, payload): Promise<string> {
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
