<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm12 md6>
          <case></case>
      </v-flex>
      <v-flex d-flex xs12 sm12 md6>
        <v-card>
          <v-toolbar class="cyan" dark>
            <v-toolbar-title>设备状态</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="items"
              id=""
              hide-actions
              class="elevation-1"
            >
              <template slot="items" slot-scope="props">
                <td class="text-xs-left">{{ props.item.propertyName }}</td>
                <td class="text-xs-left">{{ props.item.state }}</td>
                <td class="text-xs-left">{{ props.item.updateTime }}</td>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  import Case from "@/components/commons/Case.vue"

  export default {
    data() {
      return {
        headers: [
          {text: '属性名', value: 'propertyName'},
          {text: '状态值', value: 'state'},
          {text: '更新时间', value: 'updateTime'},
        ],
        items: [
          {propertyName: '水浸1', state: '正常', updateTime: '15:30:50'},
          {propertyName: '烟感1', state: '正常', updateTime: '15:30:50'},
          {propertyName: '门禁1', state: '正常', updateTime: '15:30:50'},
          {propertyName: '门禁2', state: '正常', updateTime: '15:30:50'},
        ],
      }
    },
    mounted() {
    },
    methods: {
    },
    components: {
      "case": Case
    },
  }
</script>
