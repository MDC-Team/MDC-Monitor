import Vue from 'vue'
import Vuex from 'vuex'
import alertLog from './modules/alertLog'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    alertLog
  },
})
