import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/Login'
import App from '@/App'
import AlertLog from '@/components/log/AlertLog'
import OperationLog from '@/components/log/OperationLog'
import EntranceLog from '@/components/log/EntranceLog'
import ReportForm from '@/components/log/ReportForm'
import Assets from '@/components/assets/Assets'
import CabinetCapacity from '@/components/assets/CabinetCapacity'
import Distribution from '@/components/distribution/Distribution'
import User from '@/components/user/User'
import UserAdd from '@/components/user/UserAdd'
import UserEdit from '@/components/user/UserEdit'
import Role from '@/components/user/Role'
import RoleEdit from '@/components/user/RoleEdit'
import CurrentMonitor from '@/components/deviceMonitor/CurrentMonitor'
import RefrigerationMonitor from '@/components/refrigerationMonitor/RefrigerationMonitor'
import SecurityMonitor from '@/components/security/SecurityMonitor'
import Containers from '@/components/containers/Containers'
import VideoMonitor from '@/components/videoMonitor/VideoMonitor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      component: App,
      meta: {
        breadcrumb: '主页'
      },
      children: [
        {
          path: '',
          name: 'portal',
          component: CurrentMonitor,
        },
        {
          path: '/alertLog',
          name: 'AlertLog',
          component: AlertLog
        },
        {
          path: '/operationLog',
          name: 'OperationLog',
          component: OperationLog
        },
        {
          path: '/entranceLog',
          name: 'EntranceLog',
          component: EntranceLog
        },
        {
          path: '/reportForm',
          name: 'ReportForm',
          component: ReportForm
        },
        {
          path: '/assets',
          name: 'Assets',
          component: Assets
        },
        {
          path: '/cabinetCapacity',
          name: 'CabinetCapacity',
          component: CabinetCapacity
        },
        {
          path: '/distribution',
          name: 'Distribution',
          component: Distribution
        }, {
          path: '/containers',
          name: 'Containers',
          component: Containers
        }, {
          path: '/user',
          name: 'User',
          component: User
        }, {
          path: '/userAdd',
          name: 'UserAdd',
          component: UserAdd
        }, {
          path: '/userEdit',
          name: 'UserEdit',
          component: UserEdit
        }, {
          path: '/role',
          name: 'Role',
          component: Role
        }, {
          path: '/roleEdit',
          name: 'RoleEdit',
          component: RoleEdit
        }, {
          path: '/currentMonitor',
          name: 'CurrentMonitor',
          component: CurrentMonitor
        }, {
          path: '/refrigerationMonitor',
          name: 'RefrigerationMonitor',
          component: RefrigerationMonitor
        }, {
          path: '/securityMonitor',
          name: 'SecurityMonitor',
          component: SecurityMonitor
        }, {
          path: '/videoMonitor',
          name: 'VideoMonitor',
          component: VideoMonitor
        }
      ]
    }
  ]
})
