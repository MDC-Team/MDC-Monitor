import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Distribution from '@/components/distribution/Distribution'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/distribution',
      name: 'Distribution',
      component: Distribution
    }
  ]
})
