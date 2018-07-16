<template>
  <v-app>

    <!--退出登录确认框-->
    <v-dialog v-model="makeSureExitDialog" max-width="290px">
      <v-card>
        <v-card-text>确定退出登录吗？</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat
                 @click.native.stop="logout()">
            <v-icon>done</v-icon>
            确定
          </v-btn>
          <v-btn color="error" flat @click.native.stop="makeSureExitDialog = false">
            <v-icon>cancel</v-icon>
            取消
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!--顶部工具栏-->
    <v-toolbar
      app
      dark
      color="primary"
      v-if="$router.app._route.name !== 'Login'"
    >
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer/>
      <div id="newsShack">
      <v-badge v-model="newsShow" color="red" overlap>
        <span slot="badge">{{newsCount}}</span>
        <v-btn icon title="系统消息">
          <v-icon large>notification_important</v-icon>
        </v-btn>
      </v-badge>
      </div>

      <v-btn icon @click="makeSureExitDialog = true" title="退出登录">
        <v-icon>power_settings_new</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>

    <v-navigation-drawer
      temporary
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <template v-for="(menu, i) in menuItems">
          <v-list-group v-if="menu.parent"
                        :prepend-icon="menu.icon ? menu.icon : ''"n>
            <v-list-tile slot="activator">
              <v-list-tile-title>{{menu.name}}</v-list-tile-title>
            </v-list-tile>
            <v-list-tile
              v-for="(childMenu, i) in menu.childMenuItems"
              :key="i"
              @click="pagerouter(childMenu.url)"
            >
              <v-list-tile-action>
                <v-icon>{{childMenu.icon}}</v-icon>
              </v-list-tile-action>
              <v-list-tile-title>{{childMenu.name}}</v-list-tile-title>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else @click="pagerouter(menu.url)">
            <v-list-tile-action>
              <v-icon>{{menu.icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>{{menu.name}}</v-list-tile-title>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-footer :fixed="fixed" app v-if="$router.app._route.name !== 'Login'">
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
  import router from '@/router'

  export default {
    data() {
      return {
        fixed: true,
        active: null,
        title: 'MDC-Monitor',
        makeSureExitDialog: false,
        newsCount: 0,
        newsShow: false,
        right: true,
        drawer: false,
        menuItems:[
          {name:'用户管理',url:'',icon:'account_circle',parent:true,childMenuItems:[
              {name:'账户管理',url:'User',icon:'account_box'},
              {name:'权限管理',url:'Role',icon:'how_to_reg'},
            ]},
          {name:'设备监控',url:'CurrentMonitor',icon:'devices',parent:false,childMenuItems:[]},
          {name:'机柜容量',url:'Containers',icon:'devices',parent:false,childMenuItems:[]},
          {name:'配电拓扑',url:'Distribution',icon:'devices',parent:false,childMenuItems:[]},

        ]
      }
    },
    name: 'App',
    mounted() {
      this.checkNews();
    },
    methods: {
      logout() {
        this.makeSureExitDialog = false;
        router.push('/');
      },
      checkNews() {
        //假装发现有一条未读消息
        this.newsCount = 1;
        if (this.newsCount !== 0) {
          this.newsShow = true;
        }
      },
    },
  }
</script>
<style>
  #newsShack:hover {
    animation: shake 1s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  }
</style>
