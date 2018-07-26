<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm8 md8>
        <v-card>
          <v-card-text>
            <distribution-topology v-on:changeTableTitle="changeTableTitle"></distribution-topology>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm4 md4>
        <v-card>
          <v-card-text>
            <v-toolbar class="cyan" dark>
              <v-toolbar-title>{{tableTitle}}</v-toolbar-title>
            </v-toolbar>
            <v-data-table
              :headers="headers"
              :items="items"
              :pagination.sync="pagination"
              class="elevation-1"
            >
              <template slot="items" slot-scope="props">
                <td class="text-xs-left">{{ props.item.propertyName }}</td>
                <td class="text-xs-left">{{ props.item.value }}</td>
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
  import DistributionTopology from '@/components/distribution/DistributionTopology'
  export default {
    data() {
      return {
        pagination: {
          descending: false,
          page: 1,
          rowsPerPage: 10,
          sortBy: null,
          totalItems: 0
        },
        headers: [
          {text: '属性名', value: 'propertyName'},
          {text: '状态值', value: 'value'},
          {text: '更新时间', value: 'updateTime'},
        ],
        items: [
          {propertyName:'电压A', value:'220V', updateTime:'15:30:50'},
          {propertyName:'电压B', value:'180V', updateTime:'15:30:50'},
          {propertyName:'电压C', value:'160V', updateTime:'15:30:50'},
          {propertyName:'电压AB', value:'220V', updateTime:'15:30:50'},
          {propertyName:'电压BC', value:'210V', updateTime:'15:30:50'},
          {propertyName:'电压CA', value:'200V', updateTime:'15:30:50'},
          {propertyName:'电流A', value:'5A', updateTime:'15:30:50'},
          {propertyName:'电流B', value:'4.5A', updateTime:'15:30:50'},
          {propertyName:'电流V', value:'4A', updateTime:'15:30:50'},
          {propertyName:'有功功率A', value:'1000kW', updateTime:'15:30:50'},
          {propertyName:'有功功率B', value:'800kW', updateTime:'15:30:50'},
          {propertyName:'有功功率C', value:'600kW', updateTime:'15:30:50'},
          {propertyName:'无功功率A', value:'100kW', updateTime:'15:30:50'},
          {propertyName:'无功功率B', value:'80kW', updateTime:'15:30:50'},
          {propertyName:'无功功率C', value:'60kW', updateTime:'15:30:50'},
          {propertyName:'视在功率A', value:'500kW', updateTime:'15:30:50'},
          {propertyName:'视在功率B', value:'400kW', updateTime:'15:30:50'},
          {propertyName:'视在功率C', value:'300kW', updateTime:'15:30:50'},
          {propertyName:'功率因素A', value:'1', updateTime:'15:30:50'},
          {propertyName:'功率因素B', value:'2', updateTime:'15:30:50'},
          {propertyName:'功率因素C', value:'2.5', updateTime:'15:30:50'},
          {propertyName:'平均相电压', value:'220V', updateTime:'15:30:50'},
          {propertyName:'平均线电压', value:'150V', updateTime:'15:30:50'},
          {propertyName:'总电流', value:'6A', updateTime:'15:30:50'},
          {propertyName:'总有功功率', value:'1000kW', updateTime:'15:30:50'},
          {propertyName:'总无功功率', value:'300kW', updateTime:'15:30:50'},
          {propertyName:'总视在功率', value:'20kW', updateTime:'15:30:50'},
          {propertyName:'平均功率因素', value:'500kW', updateTime:'15:30:50'},
          {propertyName:'频率', value:'0', updateTime:'15:30:50'},
          {propertyName:'有功电量', value:'0', updateTime:'15:30:50'},
          {propertyName:'无功电量', value:'0', updateTime:'15:30:50'},
        ],
        tableTitle:'主路电表',
      }
    },
    components:{
      "distribution-topology": DistributionTopology
    },
    methods:{
      changeTableTitle(tableTitle){
        this.tableTitle = tableTitle + '参数'
      }
    }
  }
</script>
