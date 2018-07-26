<template>
  <v-container fluid>
    <v-card>
      <!--顶部工具栏-->
      <v-toolbar class="cyan" dark>
        <v-toolbar-title>报表管理</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-select
          :items="items"
          item-text="text"
          item-value="value"
          label="报表类型"
        ></v-select>
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn color="success">导出</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {text: 'ALL', value: 0},
          {text: 'UPS', value: 1},
          {text: '主路电表', value: 2},
          {text: '空调', value: 3},
          {text: '温湿度', value: 4},
          {text: '水浸', value: 5},
          {text: '烟感', value: 6},
          {text: '门禁', value: 7},
        ]
      }
    }
  }
</script>

<style scoped>

</style>
