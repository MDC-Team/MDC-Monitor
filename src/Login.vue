<template>
  <v-app id="login">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Welcome!</v-toolbar-title>
              <v-spacer/>
              <v-tooltip bottom>
                <v-btn icon target="_blank" slot="activator">
                  <v-icon large>add_circle</v-icon>
                </v-btn>
                <span>注册</span>
              </v-tooltip>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-select v-model="role" :items="roleItems" item-text="text" item-value="value" label="登录角色"
                          prepend-icon="assignment_ind"/>
                <v-text-field prepend-icon="person" name="login" label="用户名" type="text" v-if="!isTourist"/>
                <v-text-field prepend-icon="lock" name="password" label="密码" id="password" type="password"
                              v-if="!isTourist"/>
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
        role: 0,
        roleItems: [{text: '系统管理员', value: 0}, {text: '代理商', value: 1}, {text: '游客', value: 2}],
        isTourist: false,
      }
    },
    mounted() {
    },
    methods:{
      login(){
        localStorage.clear();

        localStorage.setItem(`userList`, JSON.stringify([
          {id:"1",name:"张三",pwd:"123456",ensurePwd:"123456",lastName:"张",firstName:"三",email:"123456@qq.com",phone:"12345678",enabled:true,role:1},
          {id:"2",name:"李四",pwd:"123456",ensurePwd:"123456",lastName:"李",firstName:"四",email:"123456",phone:"12345678",enabled:true,role:2},
          {id:"3",name:"王五",pwd:"123456",ensurePwd:"123456",lastName:"王",firstName:"五",email:"123456@qq.com ",phone:"12345678",enabled:true,role:2}
          ]));
        localStorage.setItem(`role`, this.role);
        router.push({
          path:'/containers'
        });
      }
    },
    components: {},
    watch: {
      role: {
        handler: function (newVal) {
          if (newVal) {
            if (newVal === '2') {
              this.isTourist = true;
            } else {
              this.isTourist = false;
            }
          }
        },
        deep: true
      }
    }
  }
</script>
<style>
  #login {
    position: fixed;
    width: 100%;
    height: 100%;
    background: url('~@/assets/img/login_bg.jpg') center center no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }
</style>
