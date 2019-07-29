import { State } from './state'

export enum getterTypes {
  isOpen = 'isOpen',
  isClose = 'isClose'
}
export interface Getters {
  [getterTypes.isOpen](type: State): boolean
  [getterTypes.isClose](type: State): boolean
}

const getters: Getters = {
  [getterTypes.isOpen]: state => state.isOpen,
  [getterTypes.isClose]: state => !state.isOpen
}

export default {
  ...getters
}
