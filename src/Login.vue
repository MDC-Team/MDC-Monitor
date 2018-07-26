<template>
  <v-app id="login">
    <!--弹出删除确认框-->
    <v-layout row justify-center style="position: relative;">
      <v-dialog v-model="login_dialog" max-width="500px">
        <v-card>
          <v-card-title>
            <div class="headline">{{login_dialog_text}}</div>
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" @click="login_dialog = false">取消</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>

    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Welcome!</v-toolbar-title>
              <v-spacer/>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-select v-model="role" :items="roleItems" item-text="description" item-value="id" label="登录角色"
                          prepend-icon="assignment_ind"/>
                <v-text-field v-model="username" prepend-icon="person" name="login" label="用户名" type="text"/>
                <v-text-field v-model="userpwd" prepend-icon="lock" name="password" label="密码" id="password"
                              type="password" @keyup.enter="login"/>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer/>
              <v-btn color="primary" @click="login">登录</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
  import router from '@/router'

  export default {
    data() {
      return {
        role: 2,
        roleItems: [],
        username: '',
        userpwd: '',
        login_dialog: false,
        login_dialog_text: ''
      }
    },
    mounted() {
      this.dataInit()
    },
    methods: {
      dataInit() {
        localStorage.clear();
        localStorage.setItem(`roleList`, JSON.stringify([
          {id: 1, name: "ADMIN", description: "超级管理员", roleMenus: ['1', '2', '3', '4', '5', '6', '7', '8']},
          {id: 2, name: "USER_ADMIN", description: "系统管理员", roleMenus: ['1', '2', '3', '4', '5', '6', '7', '8']},
          {id: 3, name: "USER", description: "普通用户", roleMenus: ['1', '2', '3', '4', '5', '8']},
          {id: 4, name: "GUEST", description: "访客", roleMenus: ['1', '2', '3', '4', '5', '8']},
        ]));
        localStorage.setItem(`menuList`, JSON.stringify([
          {id: '1', name: '监控主页', url: 'CurrentMonitor', icon: 'devices', parent: false, childMenuItems: []},
          {id: '2', name: '配电拓扑', url: 'Distribution', icon: 'flash_on', parent: false, childMenuItems: []},
          {id: '3', name: '制冷监控', url: 'RefrigerationMonitor', icon: 'invert_colors', parent: false, childMenuItems: []},
          {
            id: '4',
            name: '安防监控',
            url: 'SecurityMonitor',
            icon: 'notification_important',
            parent: false,
            childMenuItems: []
          },
          {id: '5', name: '资产管理', url: 'Assets', icon: 'attach_money', parent: false, childMenuItems: []},
          {id: '6', name: '账户管理', url: 'User', icon: 'account_box', parent: false, childMenuItems: []},
          {id: '7', name: '权限管理', url: 'Role', icon: 'how_to_reg', parent: false, childMenuItems: []},
          {id: '8', name: '日志管理', url: '', icon: 'info', parent: true, childMenuItems: [
              {id: '8_1', name: '操作日志', url: 'OperationLog', icon: 'info'},
              {id: '8_2', name: '门禁日志', url: 'EntranceLog', icon: 'info'},
              {id: '8_3', name: '报警日志', url: 'AlertLog', icon: 'info'},
              {id: '8_4', name: '报表管理', url: 'ReportForm', icon: 'info'}
            ]},
        ]));
        localStorage.setItem(`userList`, JSON.stringify([
          {
            id: "1",
            name: "su-admin",
            pwd: "ryl",
            ensurePwd: "ryl",
            lastName: "甫",
            firstName: "杜",
            email: "123456@qq.com",
            phone: "12345678",
            enabled: true,
            role: 1
          },
          {
            id: "2",
            name: "admin",
            pwd: "123456",
            ensurePwd: "123456",
            lastName: "白",
            firstName: "李",
            email: "123456@qq.com",
            phone: "12345678",
            enabled: true,
            role: 2
          }
        ]));
        localStorage.setItem(`alertLogList`, JSON.stringify([{
          id:'1',
          deviceProperty: '出风温度',
          alertName: '低温报警',
          triggerTime: '2018-01-01 15:38:56',
          email: '123456@qq.com',
          message: '18888888888',
          content: '出风温度过低！',
          confirm: false
        }]));
        this.roleItems = JSON.parse(localStorage.getItem('roleList'))
      },
      login() {
        localStorage.setItem(`role`, this.role);
        if (this.username && this.userpwd) {
          var userList = JSON.parse(localStorage.getItem('userList'))
          userList.forEach(user => {
            if (user.name === this.username && user.role === this.role) {
              if (user.pwd === this.userpwd) {
                localStorage.setItem('user', JSON.stringify(user))
                router.push({
                  path: '/main'
                });
                return;
              }
            }
          })
        }
        this.login_dialog = true
        this.login_dialog_text = '登陆失败！'
      }
    },
    components: {},
    watch: {}
  }
</script>
<style>
  #login {
    position: fixed;
    width: 100%;
    height: 100%;
    background: url('./assets/img/login_bg.jpg') center center no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }
</style>
