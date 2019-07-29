import { RootContext } from '@/store/index'
import { mutationTypes } from './mutations'

export enum actionTypes {
  toggleDrawer = 'toggleDrawer'
}

export interface Actions {
  [actionTypes.toggleDrawer]: (context: RootContext) => void
}
const actions: Actions = {
  [actionTypes.toggleDrawer]({ commit }): void {
    commit(mutationTypes.TOGGLE_DRAWER)
  }
}

export default {
  ...actions
}
