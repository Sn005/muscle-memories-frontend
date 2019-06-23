import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import { namespace as rootNameSpace } from '../index'

export const namespace = `${rootNameSpace}/user`

export default {
  state,
  getters,
  actions,
  mutations
}
