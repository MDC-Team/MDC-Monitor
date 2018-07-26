<template>
  <v-card>
    <chart :options="option" auto-resize style="height:678px;width: 100%"></chart>
  </v-card>
</template>
<script>
  export default {
    props: ['pue', 'available'],
    computed: {
      option() {
        return {
          tooltip: {},
          radar: {
            center: ['50%', '50%'],    // 默认全局居中
            radius: '50%',
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
              {name: '电力', max: 10},
              {name: '制冷', max: 10},
              {name: 'u空间', max: 10}
            ]
          },
          graphic: [{
            type:'line',
            left: 0,
            top: "33%",
            cursor: null,
            shape:{
              x1:10,
              y1:10,
              x2:1000,
              y2:10
            },
            style:{
              stroke: "#cdcdcd",
              lineWidth:2
            }
          },{
            type:'line',
            left: 0,
            top: "66%",
            cursor: null,
            shape:{
              x1:10,
              y1:10,
              x2:1000,
              y2:10
            },
            style:{
              stroke: "#cdcdcd",
              lineWidth:2
            }
          }],
          series: [
            {
              name: 'pue',
              type: 'gauge',
              startAngle: 180,
              endAngle: 0,
              center: ['50%', '20%'],    // 默认全局居中
              data: [{value: 1.3, name: 'PUE'}],
              min:0,
              max:3,
              splitNumber:3,
              splitLine: {
                show: false
              },
              tooltip: {
                formatter: "{a} <br/>{b} : {c}%"
              },
            },
            {
              name: '可用性',
              type: 'gauge',
              startAngle: 180,
              endAngle: 0,
              min: 0,
              max: 2,
              center: ['50%', '85%'],    // 默认全局居中
              detail: {formatter: '{value}%'},
              data: [{value: this.available, name: '可用性'}],
              axisLine: {
                lineStyle: {
                  color: [[0.333, '#c23531'], [0.666, '#63869e'], [1, '#91c7ae']]
                }
              },
              splitLine: {
                show: false
              },
              tooltip: {
                formatter: (v) => {
                  let range = [{value: 0.66, range: 'C'}, {value: 1.33, range: 'B'}, {value: 2, range: 'A'}]
                  for (const r of range) {
                    if (v.value <= r.value) {
                      return r.range
                    }
                  }
                }
              },
              detail: {
                formatter: (v) => {
                  let range = [{value: 0.66, range: 'C'}, {value: 1.33, range: 'B'}, {value: 2, range: 'A'}]
                  for (const r of range) {
                    if (v <= r.value) {
                      return `可用性${r.range}级`
                    }
                  }
                }
              },
              axisLabel: {
                formatter: function (v) {
                  switch (v + '') {
                    case '0' :
                      return 'C';
                    case '1' :
                      return 'B';
                    case '2' :
                      return 'A';
                  }
                }
              },
            },{
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
                  value: [2,8,6,5,7],
                  name: '剩余数值'
                }
              ]
            }
          ]
        }
      }
    }
  }
</script>
