<template>
  <div>
    <v-container fluid grid-list-lg>
      <v-layout wrap>
        <v-flex row md12>
          <v-toolbar class="cyan" dark dense>
            <v-btn icon @click="pagerouter('User')" dark>
              <v-icon>arrow_back</v-icon>
            </v-btn>
            <v-toolbar-title class="white--text">编辑用户</v-toolbar-title>
          </v-toolbar>
          <v-card>
            <v-card-title>
              <span class="cyan--text subheading">基本信息</span><br>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-layout wrap>
                  <v-flex md12>
                    <v-text-field v-model="newUser.name" label="用户名（登录名）" prepend-icon="person"/>
                  </v-flex>
                  <v-flex md6>
                    <v-text-field v-model="newUser.pwd" label="密码" type="password" prepend-icon="lock"/>
                  </v-flex>
                  <v-flex md6>
                    <v-text-field v-model="newUser.ensurePwd" label="确认密码" type="password" prepend-icon="lock"/>
                  </v-flex>
                  <v-flex md6>
                    <v-text-field v-model="newUser.lastName" label="姓" prepend-icon="person"/>
                  </v-flex>
                  <v-flex md6>
                    <v-text-field v-model="newUser.firstName" label="名" prepend-icon="person"/>
                  </v-flex>
                  <v-flex md12>
                    <v-text-field v-model="newUser.email" label="E-mail" prepend-icon="mail"/>
                  </v-flex>
                  <v-flex md12>
                    <v-text-field v-model="newUser.phone" label="联系方式" prepend-icon="phone"/>
                  </v-flex>
                  <v-flex md12>
                    <v-checkbox v-model="newUser.enabled" label="是否启用"></v-checkbox>
                  </v-flex>
                  <v-flex md12>
                    <v-select v-model="newUser.role" :items="roleItems" item-text="text" item-value="value" label="分配角色"
                              prepend-icon="assignment_ind"/>
                  </v-flex>
                  <v-flex>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="success" @click="updateUser">保存</v-btn>
                    </v-card-actions>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        roleItems: [{text: '系统管理员', value: 0}, {text: '代理商', value: 1}, {text: '游客', value: 2}],
        newUser: {},
        accountItems: JSON.parse(localStorage.getItem('userList')) == null ? []: JSON.parse(localStorage.getItem('userList')),
      }
    },
    mounted(){
      this.getUserById();
    },
    methods:{
      getUserById(){
        this.accountItems.forEach((account, index)=>{
          if(account.id == this.$route.query.id){
            this.newUser = account;
          }
        })
      },
      updateUser(){
        this.accountItems.forEach((account, index)=>{
          if(account.id == this.$route.query.id){
            this.accountItems.splice(index, 1);
          }
        })
        this.accountItems.push(this.newUser)
        localStorage.setItem('userList',JSON.stringify(this.accountItems))
        this.pagerouter('User')
      }
    },
    components:{

    }
  }
</script>
