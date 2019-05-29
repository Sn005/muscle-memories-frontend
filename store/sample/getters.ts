import { State } from './state'

export enum getterTypes {
  firstName = 'firstName',
  lastName = 'lastName',
  fullName = 'fullName'
}
export interface Getters {
  [getterTypes.firstName](type: State): string
  [getterTypes.lastName](type: State): string
  [getterTypes.fullName](type: State): string
}

const getters: Getters = {
  [getterTypes.firstName]: state => state.firstName,
  [getterTypes.lastName]: state => state.lastName,
  [getterTypes.fullName]: state => `${state.firstName}・${state.lastName}`
}

export default {
  ...getters
}
