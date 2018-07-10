<template>
  <div>
    <!--<chart :options="polar"></chart>-->
    <v-container fluid grid-list-md wrap>
      <v-layout row wrap>
        <v-flex xs12 sm8 md8 lg8 offset-xs1>
          <v-data-iterator
            :items="containersObj"
            :rows-per-page-items="rowsPerPageItems"
            :pagination.sync="pagination"
            content-tag="v-layout"
            row
            wrap
          >
            <v-flex
              slot="item"
              slot-scope="props"
              xs12
              sm6
              md4
              lg3
            >
              <v-card>
                <v-card-title><h4>{{ props.item.name }}</h4></v-card-title>
                <v-divider></v-divider>
                <div>
                  <chart :options="props.item.option" auto-resize style="height: 280px;width: 100%"></chart>
                </div>
              </v-card>
            </v-flex>
          </v-data-iterator>
        </v-flex>
        <v-flex xs12 sm4 md2 lg2 class="pl-5">
          <chart-card :pue="pue" :available="available"></chart-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
  import ChartCard from "@/components/commons/ChartCard.vue"

  export default {
    data: function () {
      return {
        rowsPerPageItems: [8, 16, 24],
        pagination: {
          rowsPerPage: 8
        },
        pue: 80,
        available: 1.8,
        containers: []
      }
    },
    components: {
      "chart-card": ChartCard
    },
    mounted() {
      setInterval((() => {
        this.randomData();
        return this.randomData;
      })(), 10000)

    },
    computed: {
      containersObj() {
        return this.containers.map((container) => {
          return {
            name: container.name,
            option: {
              tooltip: {},
              legend: {
                data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
              },
              radar: {
                // shape: 'circle',
                startAngle: 150,
                name: {
                  textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
                  }
                },
                indicator: [
                  {name: '光网口', max: 10},
                  {name: '电网口', max: 10},
                  {name: '电力口', max: 10},
                  {name: '电力', max: 10},
                  {name: '承重', max: 10},
                  {name: 'u空间', max: 10}
                ]
              },
              series: [{
                type: 'radar',
                itemStyle: {
                  borderWidth: 0.5
                },
                areaStyle: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                      offset: 0, color: 'white' // 0% 处的颜色
                    }, {
                      offset: 1, color: 'orange' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                  }
                },
                lineStyle: {
                  width: 0.5
                },
                data: [
                  {
                    value: container.values,
                    name: '数值'
                  }
                ]
              }]
            }
          }
        })
      }
    },
    methods: {
      randomData() {
        this.containers = [];
        for (let i = 0; i < 20; i++) {
          this.containers.push({
            name: 'R01',
            values: Array.from({length: 6}, () => Math.floor(Math.random() * Math.floor(10)))
          })
        }
        this.pue = Math.floor(Math.random() * Math.floor(100))
        this.available = Math.floor(Math.random() * Math.floor(200))/100
      }
    }
  }
</script>
