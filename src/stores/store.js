import Vue from 'vue'
import Vuex from 'vuex'
import items from './modules/items'
import auth from './modules/auth'
import messages from './modules/messages'

import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
    auth,
    items,
    messages
  },
})
