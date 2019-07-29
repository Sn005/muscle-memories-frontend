import { generateTypePath } from '@/utils/store'
import { namespace as rootNameSpace } from '../index'
import state from './state'
import actions, { actionTypes } from './actions'
import mutations, { mutationTypes } from './mutations'
import getters, { getterTypes } from './getters'

export const namespace = `${rootNameSpace}drawer`
export default {
  state,
  getters,
  actions,
  mutations
}

export const paths = {
  getters: generateTypePath(getterTypes, namespace),
  actions: generateTypePath(actionTypes, namespace),
  mutations: generateTypePath(mutationTypes, namespace)
}

const hoge = generateTypePath(getterTypes, namespace)
