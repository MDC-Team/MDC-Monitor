<template>
  <v-container fluid>

    <!--顶部工具栏-->
    <v-toolbar class="cyan" dark>
      <v-toolbar-title>权限管理</v-toolbar-title>
    </v-toolbar>
    <!--数据表-->
    <v-data-table
      :headers="headerItems"
      :items="roleItems"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <tr>
          <td class="text-xs-left">{{ props.item.id }}</td>
          <td class="text-xs-left">{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.description }}</td>
          <td class="text-xs-left">
            <v-btn color="success" @click="editRole(props.item.id)">配置</v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-container>
</template>
<script>
  export default {
    data() {
      return {
        roleItems: [],
        headerItems: [
          {text: 'ID', value: 'id'},
          {text: '角色名称', value: 'name'},
          {text: '角色描述', value: 'description'},
          {text: '操作', value: 'action'},
        ],
      }
    },
    mounted() {
      var allRoles = JSON.parse(localStorage.getItem('roleList'))
        if(1 === parseInt(localStorage.getItem(`role`))){
          this.roleItems = [
            {id: 1, name: "ADMIN", description: "超级管理员", roleMenus: [1, 2, 3, 4, 5, 6, 7]},
            {id: 2, name: "USER_ADMIN", description: "系统管理员", roleMenus: [1, 2, 3, 4, 5, 6, 7]},
            {id: 3, name: "USER", description: "普通用户", roleMenus: [3, 4,]},
            {id: 4, name: "GUEST", description: "访客", roleMenus: [3]}
          ]
        }else if(2 === parseInt(localStorage.getItem(`role`))){
          this.roleItems = [
            {id: 2, name: "USER_ADMIN", description: "系统管理员", roleMenus: [1, 2, 3, 4, 5, 6, 7]},
            {id: 3, name: "USER", description: "普通用户", roleMenus: [3, 4,]},
            {id: 4, name: "GUEST", description: "访客", roleMenus: [3]}
          ]
        }else if(3 === parseInt(localStorage.getItem(`role`))){
          this.roleItems = [
            {id: 3, name: "USER", description: "普通用户", roleMenus: [3, 4,]},
            {id: 4, name: "GUEST", description: "访客", roleMenus: [3]}
          ]
        }else if(4 === parseInt(localStorage.getItem(`role`))){
          this.roleItems = [
            {id: 4, name: "GUEST", description: "访客", roleMenus: [3]}
          ]
        }
    },
    methods: {
      editRole(id){
        this.pagerouter('RoleEdit',{'id':id})
      }
    },
    components: {}
  }
</script>
