import { RootContext } from '@/store/index'
import { mutationTypes } from './mutations'

export enum actionTypes {
  toggleDrawer = 'toggleDrawer',
  setDrawer = 'setDrawer'
}

export interface Actions {
  [actionTypes.toggleDrawer]: (context: RootContext) => void
  [actionTypes.setDrawer]: (context: RootContext, payload: boolean) => void
}
const actions: Actions = {
  [actionTypes.toggleDrawer]({ commit }): void {
    commit(mutationTypes.TOGGLE_DRAWER)
  },
  [actionTypes.setDrawer]({ commit }, payload): void {
    commit(mutationTypes.SET_DRAWER, payload)
  }
}

export default {
  ...actions
}
