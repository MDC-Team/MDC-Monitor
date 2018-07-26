<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm5 md5>
        <case></case>
      </v-flex>
      <v-flex d-flex xs12 sm7 md7>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex d-flex xs12 sm12 md12>
              <div>
                <chart :options="option" auto-resize></chart>
              </div>
            </v-flex>
            <v-flex d-flex xs12 sm12 md12>
              <v-data-table
                :headers="headers"
                :items="devices"
                :pagination.sync="pagination"
                class="elevation-1"
              >
                <template slot="items" slot-scope="props">
                  <td class="text-xs-left">{{ props.item.devicePropertyName }}</td>
                  <td class="text-xs-left">{{ props.item.state }}</td>
                  <td class="text-xs-left">{{ props.item.number }}</td>
                  <td class="text-xs-left">{{ props.item.updateTime }}</td>
                </template>
              </v-data-table>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  import ChartCard from "@/components/commons/ChartCard.vue"
  import Case from "@/components/commons/Case.vue"

  export default {
    data() {
      return {
        option: {},
        pagination: {
          descending: false,
          page: 1,
          rowsPerPage: 5,
          sortBy: null,
          totalItems: 0
        },
        headers: [
          {text: '设备属性名', value: 'devicePropertyName'},
          {text: '状态', value: 'state'},
          {text: '数值', value: 'number'},
          {text: '更新时间', value: 'updateTime'},
        ],
        devices: [
          {devicePropertyName: '待机运行', state: '正常', number: '30', updateTime: '15:30:50'},
          {devicePropertyName: '制冷运行', state: '正常', number: '30', updateTime: '15:30:50'},
          {devicePropertyName: '加热运行', state: '正常', number: '20', updateTime: '15:30:50'},
          {devicePropertyName: '加湿运行', state: '正常', number: '18', updateTime: '15:30:50'},
          {devicePropertyName: '除湿运行', state: '正常', number: '30', updateTime: '15:30:50'},
          {devicePropertyName: '压缩机状态', state: '正常', number: '0.0', updateTime: '15:30:50'},
          {devicePropertyName: '外风机状态', state: '正常', number: '0.0', updateTime: '15:30:50'},
          {devicePropertyName: '加热器状态', state: '正常', number: '0.0', updateTime: '15:30:50'},
          {devicePropertyName: '加湿器状态', state: '正常', number: '0.0', updateTime: '15:30:50'},
          {devicePropertyName: '回风温度过高告警', state: '正常', number: '0.0', updateTime: '15:30:50'},
          {devicePropertyName: '回风温度过低告警', state: '正常', number: '0.0', updateTime: '15:30:50'},
          {devicePropertyName: '回风湿度过高告警', state: '正常', number: '0.0', updateTime: '15:30:50'},
          {devicePropertyName: '回风湿度过低告警', state: '正常', number: '0.0', updateTime: '15:30:50'},
          {devicePropertyName: '回风温度传感器告警', state: '正常', number: '0.0', updateTime: '15:30:50'},
          {devicePropertyName: '回风湿度传感器告警', state: '正常', number: '0.0', updateTime: '15:30:50'},
          {devicePropertyName: '送风温度传感器告警', state: '正常', number: '0.0', updateTime: '15:30:50'},
          {devicePropertyName: '压缩机告警', state: '正常', number: '0.0', updateTime: '15:30:50'},
          {devicePropertyName: '内风机告警', state: '正常', number: '0.0', updateTime: '15:30:50'},
          {devicePropertyName: '系统低压告警', state: '正常', number: '0.0', updateTime: '15:30:50'},
          {devicePropertyName: '系统高压告警', state: '正常', number: '0.0', updateTime: '15:30:50'},
          {devicePropertyName: '漏水告警', state: '正常', number: '0.0', updateTime: '15:30:50'},
          {devicePropertyName: '送风温度(16-25℃)', state: '正常', number: '0.0', updateTime: '15:30:50'},
          {devicePropertyName: '回风温度(20-30℃)', state: '正常', number: '0.0', updateTime: '15:30:50'},
          {devicePropertyName: '回风湿度(30%-70%RH)', state: '正常', number: '0.0', updateTime: '15:30:50'},
          {devicePropertyName: '内风机转速(10-20m/s)', state: '正常', number: '0.0', updateTime: '15:30:50'},
        ],
        now: new Date(),
        xdata: [],
        ydata1: [],
        ydata2: [],
        ydata3: [],
        myChart: {}
      }
    },
    mounted() {
      this.chartInit()
      setInterval(() => {
        this.randomData()
      }, 5000);
    },
    methods: {
      chartInit() {
        this.option = {
          title: {
            text: '热通道温度实时数据'
          },
          xAxis: {
            type: 'category',
            data: this.xdata,
          },
          yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
            splitLine: {
              show: false
            }
          },
          series: [{
            data: this.ydata1,
            type: 'line'
          },
            {
              data: this.ydata2,
              type: 'line'
            },
            {
              data: this.ydata3,
              type: 'line'
            }
          ]
        };
        for (var i = 0; i < 30; i++) {
          var now = new Date();
          this.xdata.push([now.getHours(), now.getMinutes(), now.getSeconds()].join(':'))
          this.ydata1.push(28 + Math.round(Math.random() * (33 - 28)))
          this.ydata2.push(17 + Math.round(Math.random() * (24 - 17)))
          this.ydata3.push(12 + Math.round(Math.random() * (21 - 12)))
        }
      },
      randomData() {
        var now = new Date();
        // console.log([now.getHours(), now.getMinutes(), now.getSeconds()].join(':'))
        this.xdata.splice(0, 1);
        this.ydata1.splice(0, 1);
        this.ydata2.splice(0, 1);
        this.ydata3.splice(0, 1);
        this.xdata.push([now.getHours(), now.getMinutes(), now.getSeconds()].join(':'))
        this.ydata1.push(28 + Math.round(Math.random() * (33 - 28)))
        this.ydata2.push(17 + Math.round(Math.random() * (24 - 17)))
        this.ydata3.push(12 + Math.round(Math.random() * (21 - 12)))
      }
    },
    components: {
      "chart-card": ChartCard,
      "case": Case
    },
  }
</script>
