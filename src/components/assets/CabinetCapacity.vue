<template>
  <div>

    <v-container fluid>
      <v-card>
        <!--顶部工具栏-->
        <v-toolbar class="cyan" dark>
          <v-toolbar-title>机柜容量</v-toolbar-title>
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
        </v-card-title>

        <!--数据表-->
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="items"
          :search="search"
          class="elevation-1"
        >
          <template slot="headers" slot-scope="props">
            <tr>
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
            <tr>
              <td class="text-xs-center">{{ props.item.name }}</td>
              <td class="text-xs-center">{{ props.item.ip }}</td>
              <td class="text-xs-center">{{ props.item.brand }}</td>
              <td class="text-xs-center">{{ props.item.serialNumber }}</td>
              <td class="text-xs-center">{{ props.item.CPUMemory }}</td>
              <td class="text-xs-center">{{ props.item.CPUTemperature }}</td>
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
          {text: '名称', value: 'name'},
          {text: 'IP', value: 'ip'},
          {text: '设备品牌', value: 'brand'},
          {text: '序列号', value: 'serialNumber'},
          {text: 'CPU内存', value: 'CPUMemory'},
          {text: 'CPU温度', value: 'CPUTemperature'},
        ],
        items: [],
        search: '',
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
            name: '设备01',
            ip: '192.168.0.1',
            brand: '厂家A',
            serialNumber: '123456789',
            CPUMemory: '1024G',
            CPUTemperature: '38℃',
          },
          {
            id: '2',
            name: '设备02',
            ip: '192.168.0.2',
            brand: '厂家B',
            serialNumber: '123456789',
            CPUMemory: '1024G',
            CPUTemperature: '38℃',
          },
          {
            id: '3',
            name: '设备03',
            ip: '192.168.0.3',
            brand: '厂家C',
            serialNumber: '123456789',
            CPUMemory: '1024G',
            CPUTemperature: '38℃',
          },
        ]));
        this.items = JSON.parse(localStorage.getItem('entranceLogList')) === null ? [] : JSON.parse(localStorage.getItem('entranceLogList'))
      },
    },
    components: {},
    computed: {},
    watch: {

    }
  }
</script>
