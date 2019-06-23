import { authService } from '@/api/auth/AuthServiceFactory'
import { RootContext } from '@/store/index'
import { State } from './state'
import { types } from './mutations'

export enum actionTypes {
  setUser = 'setUser',
  signInByEmail = 'signInByEmail',
  signInBySns = 'signInBySns',
  signOut = 'signOut'
}

export interface Actions {
  [actionTypes.setUser]: (
    context: RootContext,
    payload: Pick<State, 'user'>
  ) => void
  [actionTypes.signInByEmail]: (
    context: RootContext,
    payload: {
      email: string
      password: string
    }
  ) => void
  [actionTypes.signInBySns]: (
    context: RootContext,
    payload: 'google' | 'twitter' | 'facebook'
  ) => void
  [actionTypes.signOut]: (context: RootContext) => void
}

const actions: Actions = {
  async [actionTypes.setUser]({ commit }): Promise<void> {
    const result = await authService.fetchMyAccount()
    commit(types.SET_USER, result)
  },
  async [actionTypes.signInByEmail]({ commit }, payload): Promise<void> {
    const result = await authService.signInByEmail(payload)
    commit(types.SET_USER, result)
  },
  async [actionTypes.signInBySns]({ commit }, sns): Promise<void> {
    const result = await authService.signInBySns(sns)
    commit(types.SET_USER, result)
  },
  async [actionTypes.signOut]({ commit }): Promise<void> {
    const result = await authService.signOut()
    commit(types.SET_USER, null)
  }
}

export default {
  ...actions
}
