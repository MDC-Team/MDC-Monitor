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
          <v-toolbar-title>报警日志</v-toolbar-title>
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
          <v-btn icon @click="delete_dialog = true" :disabled="deleteDisabled" title="删除">
            <v-icon>delete</v-icon>
          </v-btn>
        </v-card-title>

        <!--数据表-->
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="items"
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
              <td class="text-xs-center">{{ props.item.deviceProperty }}</td>
              <td class="text-xs-center">{{ props.item.alertName }}</td>
              <td class="text-xs-center">{{ props.item.triggerTime }}</td>
              <td class="text-xs-center">{{ props.item.email }}</td>
              <td class="text-xs-center">{{ props.item.message }}</td>
              <td class="text-xs-center">{{ props.item.content }}</td>
              <td class="text-xs-center">{{ props.item.confirm ? '已确认' : '未确认' }}</td>
              <td class="text-xs-center">
                <v-btn v-if="!props.item.confirm" color="success" @click="confirmAlert(props.item.id)">确认</v-btn>
                <span v-else>无</span>
              </td>
            </tr>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </div>
</template>
<script>
  import {mapState, mapMutations} from 'vuex'
  export default {
    data() {
      return {
        pagination: {
          sortBy: 'name'
        },
        headers: [
          {text: '设备属性', value: 'deviceProperty'},
          {text: '事件名称', value: 'alertName'},
          {text: '触发时间', value: 'triggerTime'},
          {text: '报警发送邮箱', value: 'email'},
          {text: '报警发送短信', value: 'message'},
          {text: '报警内容', value: 'content'},
          {text: '状态', value: 'confirm'},
          {text: '操作', value: ''},
        ],
        items: [],
        search: '',
        selected: [],
        deleteDisabled: true,//删除按钮可用状态（值相反）
        delete_dialog: false,//删除窗口显示控制开关,
        deleteLoading: false,//删除Loading标识,
        updateDisabled: true,//编辑按钮可用状态（值相反）
      }
    },
    mounted() {
      this.getAlertList();
    },
    computed: {
      ...mapState('alertLog', ['logCount','logConfirmFlag']),
    },
    methods: {
      ...mapMutations('alertLog', ['setLogCount','setLogConfirmFlag']),
      toggleAll() {
        if (this.selected.length) this.selected = []
        else this.selected = this.items.slice()
      },
      changeSort(column) {
        if (this.pagination.sortBy === column) {
          this.pagination.descending = !this.pagination.descending
        } else {
          this.pagination.sortBy = column
          this.pagination.descending = false
        }
      },
      getAlertList(){
        this.items = JSON.parse(localStorage.getItem('alertLogList')) === null ? [] : JSON.parse(localStorage.getItem('alertLogList'))
        this.setLogConfirmFlag(true)
        //如果有未确认消息，图标显示黄色
        this.items.forEach(alert => {
          if (!alert.confirm) {
            this.setLogConfirmFlag(false)
          }
        })
      },
      delete() {
        this.delete_dialog = false
      },
      confirmAlert(id) {
        this.items.forEach((alert) => {
          if (alert.id == id) {
            alert.confirm = true
          }
        })
        localStorage.setItem('alertLogList',JSON.stringify(this.items))
        this.getAlertList();
      }
    },
    components: {},
    watch: {
      selected: {
        handler: function (newVal) {//多选框内容改变监听
          this.deleteDisabled = true;
          if (newVal.length == 1) {
            this.deleteDisabled = false;
          }
        },
        deep: true
      }
    }
  }
</script>
