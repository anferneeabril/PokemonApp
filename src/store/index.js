import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import weaknesses from './module/weaknesses/index.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // number: 10
  },

  mutations,

  actions: {
  },
  modules: {
    weaknesses
  },
})
