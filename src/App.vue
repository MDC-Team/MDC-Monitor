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

    >
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <img src="./assets/img/logo.png" style="width: 100px"/>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer/>
      <span>当前用户：{{userName}}</span>
      <div id="newsShack">
      <v-badge v-model="newsShow" color="red" overlap v-if="newsCount > 0">
        <span slot="badge">{{newsCount}}</span>
        <v-btn icon title="系统消息" @click="pagerouter('AlertLog')">
          <v-icon :color="badgeColor" large>notification_important</v-icon>
        </v-btn>
      </v-badge>
        <v-btn icon title="系统消息" @click="pagerouter('AlertLog')" v-if="newsCount === 0">
          <v-icon large>notification_important</v-icon>
        </v-btn>
      </div>

      <v-btn icon @click="makeSureExitDialog = true" title="退出登录">
        <v-icon>power_settings_new</v-icon>
      </v-btn>
    </v-toolbar>
    <div @mousemove='checkXY'>
      <v-content>
        <router-view :changeAlert="changeAlert"/>
      </v-content>
    </div>

    <v-navigation-drawer
      temporary
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <template v-for="(menu) in menuItems">
          <v-list-tile @click="pagerouter(menu.url)" v-if="!menu.parent">
            <v-list-tile-action>
              <v-icon>{{menu.icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>{{menu.name}}</v-list-tile-title>
          </v-list-tile>
          <template v-else>
            <v-list-group
              no-action
              :prepend-icon="menu.icon"
              value="true"
            >
              <v-list-tile slot="activator">
                <v-list-tile-title>{{menu.name}}</v-list-tile-title>
              </v-list-tile>

              <v-list-tile
                v-for="(childMenu, i) in menu.childMenuItems"
                :key="i"
                @click="pagerouter(childMenu.url)"
              >
                <v-list-tile-title v-text="childMenu.name"></v-list-tile-title>
                <v-list-tile-action>
                  <v-icon v-text="childMenu.icon"></v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </v-list-group>
          </template>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
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
        title: '数据中心管理系统',
        makeSureExitDialog: false,
        newsCount: 0,
        newsShow: false,
        right: true,
        drawer: false,
        menuItems:[],
        role:{},
        roleList:[],
        alertItems:[],
        x:0,
        y:0,
        userName:'',
        badgeColor:'',
      }
    },
    name: 'App',
    created(){
    },
    mounted() {
      this.checkNews();
      this.checkMenus();
      this.checkAlerts();
      var user = JSON.parse(localStorage.getItem('user'))
      this.userName = user.firstName+user.lastName
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
      checkMenus(){
        this.roleList = JSON.parse(localStorage.getItem('roleList'))
        this.roleList.forEach(role=>{
          if(role.id === parseInt(localStorage.getItem(`role`))){
            this.role = role;
          }
        })
        JSON.parse(localStorage.getItem('menuList')).forEach(menu=>{
          this.role.roleMenus.forEach(roleMenu=>{
            if(menu.id === roleMenu){
              this.menuItems.push(menu)
            }
          })
        })
      },
      checkAlerts(){
        this.alertItems = JSON.parse(localStorage.getItem('alertLogList')) === null ? [] : JSON.parse(localStorage.getItem('alertLogList'))
        //如果有未确认消息，图标显示黄色
        this.alertItems.forEach(alert=>{
          if(!alert.confirm){
            this.badgeColor = 'yellow'
          }
        })
        this.newsCount = this.alertItems.length
      },
      checkXY(event){
        if(event.clientX <= 0){
          this.drawer = true
        }
      },
      changeAlert(val){
        console.log(val)
        console.log('changeAlert')
      }
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
  #canvas{
    width: 500px;
    height: 500px;
    text-align: center;
    line-height: 500px;
    border: 1px solid #E5E5E5;
    margin: 0 auto;
    margin-top: 100px;
  }
</style>
