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
          <v-toolbar-title>操作日志</v-toolbar-title>
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
              <td class="text-xs-center">{{ props.item.type }}</td>
              <td class="text-xs-center">{{ props.item.createTime }}</td>
              <td class="text-xs-center">{{ props.item.entranceNumber }}</td>
              <td class="text-xs-center">{{ props.item.createUser }}</td>
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
        headers: [
          {text: '进出类型', value: 'type'},
          {text: '进出时间', value: 'createTime'},
          {text: '进出门号', value: 'entranceNumber'},
          {text: '进出人员', value: 'createUser'},
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
      this.getEntranceList();
    },
    methods: {
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
      getEntranceList() {
        localStorage.setItem(`entranceLogList`, JSON.stringify([
          {
            id: '1',
            type: '进门',
            createTime: '2018-01-01 15:38:56',
            entranceNumber: '冷通道门',
            createUser: '李白',
          },
          {
            id: '2',
            type: '出门',
            createTime: '2018-01-01 16:30:42',
            entranceNumber: '热通道门',
            createUser: '李白',
          },
        ]));
        this.items = JSON.parse(localStorage.getItem('entranceLogList')) === null ? [] : JSON.parse(localStorage.getItem('entranceLogList'))
      },
      delete() {
        this.delete_dialog = false
      },
    },
    components: {},
    computed: {},
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
