import { State } from './state'

export interface Getters {
  isAuth(type: State): boolean
}

const getters: Getters = {
  isAuth: state => !!state.user
}

export default {
  ...getters
}
