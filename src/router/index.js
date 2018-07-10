import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Distribution from '@/components/distribution/Distribution'
import Containers from '@/components/containers/Containers'

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
    },{
      path: '/containers',
      name: 'Containers',
      component: Containers
    }
  ]
})
