<template>
  <div>
    <v-container fluid grid-list-lg>
      <v-layout wrap>
        <v-flex row md12>
          <v-toolbar class="cyan" dark dense>
            <v-btn icon @click="pagerouter('Role')" dark>
              <v-icon>arrow_back</v-icon>
            </v-btn>
            <v-toolbar-title class="white--text">编辑角色</v-toolbar-title>
          </v-toolbar>
          <v-card>
            <v-card-title>
              <span class="cyan--text subheading">基本信息</span><br>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-layout wrap>
                  <v-flex md6>
                    <v-text-field v-model="role.name" label="角色名称" disabled/>
                  </v-flex>
                  <v-flex md6>
                    <v-text-field v-model="role.description" label="角色描述" disabled/>
                  </v-flex>
                  <v-flex md12>

                    <!--数据表-->
                    <v-data-table
                      v-model="selected"
                      :headers="headerItems"
                      :items="menuItems"
                      :search="search"
                      select-all
                      selected-key="id"
                      hide-actions
                      class="elevation-1"
                    >
                      <template slot="headers" slot-scope="props">
                        <tr>
                          <th>
                            <v-checkbox
                              :input-value="props.all"
                              :indeterminate="props.indeterminate"
                              primary
                              hide-details
                              @click.native="toggleAll"
                            ></v-checkbox>
                          </th>
                          <th
                            v-for="header in props.headers"
                            :key="header.text"
                          >
                            {{ header.text }}
                          </th>
                        </tr>
                      </template>
                      <template slot="items" slot-scope="props">
                        <tr :active="props.selected" @click="props.selected = !props.selected">
                          <td class="text-xs-center" :active="props.selected" @click="props.selected = !props.selected">
                            <v-checkbox
                              primary
                              hide-details
                              :input-value="props.selected"
                            ></v-checkbox>
                          </td>
                          <td class="text-xs-center">{{ props.item.name }}</td>
                        </tr>
                      </template>
                    </v-data-table>
                  </v-flex>
                  <v-flex>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="success" @click="updateRole">保存</v-btn>
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
        role:{},
        pagination: {
          sortBy: 'name'
        },
        headerItems:[
          {text: '菜单名称', value: 'name'},
        ],
        search: '',
        selected: [],
        menuItems:[],
        roleMenus:[]
      }
    },
    mounted(){

      JSON.parse(localStorage.getItem('roleList')).forEach(role=>{
        if(role.id === this.$route.query.id){
          this.role = role;
        }
      })
      this.menuItems = JSON.parse(localStorage.getItem('menuList'))
      this.menuItems.forEach(menu=>{
        this.role.roleMenus.forEach(roleMenu=>{
          if(menu.id === roleMenu){
            this.selected.push(menu)
          }
        })
      })
    },
    methods:{
      toggleAll () {
        if (this.selected.length) this.selected = []
        else this.selected = this.menuItems.slice()
      },
      updateRole(){
        this.roleMenus = [];
        this.selected.forEach(roleMenu=>{
          this.roleMenus.push(roleMenu.id)
        })
        var roleList = JSON.parse(localStorage.getItem('roleList'))
        roleList.forEach(role=>{
          if(role.id === this.$route.query.id){
            role.roleMenus = this.roleMenus
          }
        })
        localStorage.setItem('roleList',JSON.stringify(roleList))
        this.pagerouter('Role')
      }
    },
    components:{

    }
  }
</script>
