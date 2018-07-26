<template>
  <div>
    <!--弹出删除确认框-->
    <v-layout row justify-center style="position: relative;">
      <v-dialog v-model="delete_dialog" max-width="500px">
        <v-card>
          <v-card-title>
            <div class="headline">确定删除吗？</div>
          </v-card-title>
          <v-card-text>删除后不可恢复。</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" @click="deleteUser()" :loading="deleteLoading">删除</v-btn>
            <v-btn color="error" @click="delete_dialog = false">取消</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>

    <v-container fluid>
    <v-card>
      <!--顶部工具栏-->
      <v-toolbar class="cyan" dark>
        <v-toolbar-title>账户管理</v-toolbar-title>
      </v-toolbar>
      <!--表头工具栏-->
      <v-card-title>
        <v-spacer></v-spacer>
        <v-text-field
          append-icon="search"
          label="输入关键字搜索"
          single-line
          hide-details
          v-model="search"
        ></v-text-field>
        <v-btn icon @click="pagerouter('UserAdd')" title="新增">
          <v-icon>add</v-icon>
        </v-btn>
        <v-btn icon @click="editUser()" :disabled="updateDisabled" title="编辑">
          <v-icon>edit</v-icon>
        </v-btn>
        <v-btn icon @click="delete_dialog = true" :disabled="deleteDisabled" title="删除">
          <v-icon>delete</v-icon>
        </v-btn>
      </v-card-title>

      <!--数据表-->
      <v-data-table
        v-model="selected"
        :headers="headerItems"
        :items="accountItems"
        :search="search"
        select-all
        selected-key="id"
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
              :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
              @click="changeSort(header.value)"
            >
              <v-icon small>arrow_upward</v-icon>
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
            <td class="text-xs-center">{{ props.item.firstName + ' ' + props.item.lastName }}</td>
            <td class="text-xs-center">{{ props.item.email }}</td>
            <td class="text-xs-center">{{ props.item.phone }}</td>
            <td class="text-xs-center">{{ props.item.enabled ? '启用中' : '未启用' }}</td>
            <td class="text-xs-center">{{ props.item.role }}</td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
    </v-container>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        pagination: {
          sortBy: 'name'
        },
        headerItems:[
          {text: '用户名', value: 'name'},
          {text: '全名', value: 'fullname'},
          {text: 'E-mail', value: 'email'},
          {text: '联系方式', value: 'phone'},
          {text: '状态', value: 'enabled'},
          {text: '角色', value: 'role'},
        ],
        search: '',
        selected: [],
        accountItems: JSON.parse(localStorage.getItem('userList')) == null ? []: JSON.parse(localStorage.getItem('userList')),
        deleteDisabled: true,//删除按钮可用状态（值相反）
        delete_dialog: false,//删除窗口显示控制开关,
        deleteLoading: false,//删除Loading标识,
        updateDisabled: true,//编辑按钮可用状态（值相反）
      }
    },
    mounted(){

    },
    methods:{
      toggleAll () {
        if (this.selected.length) this.selected = []
        else this.selected = this.accountItems.slice()
      },
      changeSort (column) {
        if (this.pagination.sortBy === column) {
          this.pagination.descending = !this.pagination.descending
        } else {
          this.pagination.sortBy = column
          this.pagination.descending = false
        }
      },
      editUser(){
        this.pagerouter('UserEdit',{'id':this.selected[0].id})
      },
      deleteUser(){
        this.accountItems.forEach((account, index)=>{
          if(account.id == this.selected[0].id){
            this.accountItems.splice(index, 1);
          }
        })
        localStorage.setItem('userList',JSON.stringify(this.accountItems))
        this.delete_dialog = false
      }
    },
    components:{

    },
    computed:{

    },
    watch: {
      selected: {
        handler: function (newVal) {//多选框内容改变监听
          this.updateDisabled = true;
          this.deleteDisabled = true;
          if (newVal.length == 1) {
            this.updateDisabled = false;
            this.deleteDisabled = false;
          }
        },
        deep: true
      }
    }
  }
</script>
