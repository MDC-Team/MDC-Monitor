<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm12 md6>
        <case></case>
      </v-flex>
      <v-flex d-flex xs12 sm6 md6>

        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex d-flex xs12 sm12 md6>
              <div id="jigui" @click="pagerouter('CabinetCapacity')">
                <chart :options="jiguiOption" auto-resize style="width: 100%;height: 200px"></chart>
              </div>
            </v-flex>
            <v-flex d-flex xs12 sm12 md6>
              <div id="peidian">
                <chart :options="peidianOption" auto-resize style="width: 100%;height: 200px"></chart>
              </div>
            </v-flex>
            <v-flex d-flex xs12 sm12 md6>
              <div id="zhileng">
                <chart :options="zhilengOption" auto-resize style="width: 100%;height: 200px"></chart>
              </div>
            </v-flex>
            <v-flex d-flex xs12 sm12 md6>
              <div id="dianwang">
                <chart :options="dianwangOption" auto-resize style="width: 100%;height: 200px"></chart>
              </div>
            </v-flex>
            <v-flex d-flex xs12 sm12 md6>
              <div id="guangwang">
                <chart :options="guangwangOption" auto-resize style="width: 100%;height: 200px"></chart>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  import Case from "@/components/commons/Case.vue"

  export default {
    data() {
      return {
        jiguiOption: {},
        peidianOption: {},
        zhilengOption: {},
        dianwangOption: {},
        guangwangOption: {},
      }
    },
    mounted() {
      this.jiguiOption = this.optionInit('机柜');
      this.peidianOption = this.optionInit('配电');
      this.zhilengOption = this.optionInit('制冷');
      this.dianwangOption = this.optionInit('电网口');
      this.guangwangOption = this.optionInit('光网口');
    },
    methods: {

      optionInit(name) {
        var randomValue = 0 + Math.round(Math.random() * (100 - 0));
        console.log(randomValue)
        return {
          title : {
            text: name+'容量',
            x:'center'
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
          },
          series : [
            {
              name: '容量占比',
              type: 'pie',
              radius : '40%',
              center: ['50%', '60%'],
              data:[
                {value:randomValue, name:'已使用'},
                {value:100-randomValue, name:'总容量'},
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ],
          color: ['#2733ff','#5cb7ff']
        }
      }
    },
    components: {
      "case": Case
    },
  }
</script>
