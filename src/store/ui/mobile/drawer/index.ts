import { generateTypePath } from '@/store/utils'
import { namespace as rootNameSpace } from '../index'
import state from './state'
import actions, { actionTypes } from './actions'
import mutations, { types as mutationTypes } from './mutations'

export const namespace = `${rootNameSpace}drawer/`
export default {
  state,
  actions,
  mutations
}

export const types = {
  actions: generateTypePath(actionTypes, namespace),
  mutations: generateTypePath(mutationTypes, namespace)
}
