// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import RootRouterView from './RootRouterView'
import store from './store'
import router from './router'
import Vuetify from 'vuetify'
import ECharts from 'vue-echarts/components/ECharts'
import axios from 'axios'
import 'echarts'
import 'vuetify/dist/vuetify.min.css'
import '@/assets/css/main.css'

Vue.use(Vuetify)
Vue.use(Vuex)
Vue.component('chart', ECharts)

Vue.prototype.$axios = axios


Vue.config.productionTip = false

Vue.mixin({
  methods: {
    pagerouter: function (name, param) {
      router.push({name:name,query:param})
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { RootRouterView },
  template: '<RootRouterView/>'
})
