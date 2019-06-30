import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

export default () => {
  const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
  })
  // vuex 热重载 hotUpdate()
  if (module.hot) {
    module.hot.accept([
      './state',
      './mutations',
      './getters',
      './actions'
    ], () => {
      const newState = require('./state').default
      const newMutations = require('./mutations').default
      const newGetters = require('./getters').default
      const newActions = require('./actions').default

      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        getters: newGetters,
        actions: newActions
      })
    })
  }
  return store
}