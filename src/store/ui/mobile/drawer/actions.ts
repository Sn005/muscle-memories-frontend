import { RootContext } from '@/store/index'
import { types } from './mutations'

export const actionTypes = {
  toggleDrawer: 'toggleDrawer'
} as const

export interface Actions {
  [actionTypes.toggleDrawer]: (context: RootContext) => void
}
const actions: Actions = {
  [actionTypes.toggleDrawer]({ commit }): void {
    commit(types.TOGGLE_DRAWER)
  }
}

export default {
  ...actions
}
