import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/Login'
import Distribution from '@/components/distribution/Distribution'
import User from '@/components/user/User'
import UserAdd from '@/components/user/UserAdd'
import UserEdit from '@/components/user/UserEdit'
import Role from '@/components/user/Role'
import CurrentMonitor from '@/components/deviceMonitor/CurrentMonitor'
import Containers from '@/components/containers/Containers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/distribution',
      name: 'Distribution',
      component: Distribution
    },{
      path: '/containers',
      name: 'Containers',
      component: Containers
    },{
      path: '/user',
      name: 'User',
      component: User
    },{
      path: '/userAdd',
      name: 'UserAdd',
      component: UserAdd
    },{
      path: '/userEdit',
      name: 'UserEdit',
      component: UserEdit
    },{
      path: '/role',
      name: 'Role',
      component: Role
    },{
      path: '/currentMonitor',
      name: 'CurrentMonitor',
      component: CurrentMonitor
    }
  ]
})
