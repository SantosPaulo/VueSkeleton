import Vue from 'vue'
import Vuex from 'vuex'
import BaseModule from './modules/BaseModule'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: false,
  modules: {
    BaseModule
  }
})
