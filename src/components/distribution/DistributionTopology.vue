<template>
  <v-container fluid>
    <div id="drawing" style=" overflow-y:auto; overflow-x:auto; width:1000px; height:650px;">
      <div id="shidian_text">市电电源</div>
      <div id="beidian_text">备用电源</div>
      <div id="start_point_1"></div>
      <div id="start_point_2"></div>
      <div id="shidian" class="switchParent">
        <div class="switch_on"></div>
      </div>
      <div id="beidian" class="switchParent">
        <div class="switch_off"></div>
      </div>
      <div id="ATS">
        <v-card dark color="primary">
          <v-card-text>A<br/>T<br/>S</v-card-text>
        </v-card>
      </div>
      <div id="zhulu" style="cursor:pointer;" @click="changeDiv('主路电表')">
        <v-card dark color="primary">
          <v-card-text>主路电表</v-card-text>
        </v-card>
      </div>
      <div id="switch01" class="switchParent">
        <div class="switch_on"></div>
      </div>
      <div id="switch02" class="switchParent">
        <div class="switch_on"></div>
      </div>
      <div id="switch03" class="switchParent">
        <div class="switch_off"></div>
      </div>
      <div id="switch04" class="switchParent">
        <div class="switch_off"></div>
      </div>
      <div id="switch05" class="switchParent">
        <div class="switch_off"></div>
      </div>
      <div id="switch06" class="switchParent">
        <div class="switch_on"></div>
      </div>
      <div id="kongtiao1" class="rectangle">
        <v-card dark color="primary">
          <v-card-text>空调1</v-card-text>
        </v-card>
      </div>
      <div id="kongtiao2" class="rectangle">
        <v-card dark color="primary">
          <v-card-text>空调2</v-card-text>
        </v-card>
      </div>
      <div id="beiyong1" class="rectangle">
        <v-card dark color="primary">
          <v-card-text>备用1</v-card-text>
        </v-card>
      </div>
      <div id="beiyong2" class="rectangle">
        <v-card dark color="primary">
          <v-card-text>备用2</v-card-text>
        </v-card>
      </div>
      <div id="UPS" class="rectangle" style="cursor:pointer;" @click="changeDiv('UPS')">
        <v-card dark color="primary">
          <v-card-text>UPS</v-card-text>
        </v-card>
      </div>
      <div id="switch06_00" class="switchParent">
        <div class="switch_on"></div>
      </div>
      <div id="switch06_01" class="switchParent">
        <div class="switch_on"></div>
      </div>
      <div id="switch06_02" class="switchParent">
        <div class="switch_on"></div>
      </div>
      <div id="switch06_03" class="switchParent">
        <div class="switch_on"></div>
      </div>
      <div id="PDU1" class="rectangle">
        <v-card dark color="primary">
          <v-card-text>PDU1</v-card-text>
        </v-card>
      </div>
      <div id="PDU2" class="rectangle">
        <v-card dark color="primary">
          <v-card-text>PDU2</v-card-text>
        </v-card>
      </div>
      <div id="jiankong" class="rectangle">
        <v-card dark color="primary">
          <v-card-text>备用2</v-card-text>
        </v-card>
      </div>
    </div>
  </v-container>
</template>
<script>
  import jsPlumb from 'jsplumb'


  export default {
    data() {
      return {
        _jsPlumb: null,
        firstInstance: null,
      }
    },
    components: {
    },
    methods: {
      changeDiv(divName){
        this.$emit('changeTableTitle', divName)
      },
      randomData() {
        this.pue = Math.floor(Math.random() * Math.floor(100))
        this.available = Math.floor(Math.random() * Math.floor(200))/100
      },
      jsPlumbInit() {
        this._jsPlumb = jsPlumb.jsPlumb;
        this.firstInstance = this._jsPlumb.getInstance({
          ConnectionsDetachable: false,
          Connector: ["Straight"],
          Endpoint: ["Dot", {radius: 0.1}],
          PaintStyle: {strokeWidth: 3, stroke: "#0f0"}
        });
      },
      addEndpoints(toId, sourceAnchors, targetAnchors) {
        for (var i = 0; i < sourceAnchors.length; i++) {
          var sourceUUID = toId + sourceAnchors[i];
          this.firstInstance.addEndpoint(toId, {
            anchor: sourceAnchors[i], uuid: sourceUUID, maxConnections: 10
          });
        }
        for (var j = 0; j < targetAnchors.length; j++) {
          var targetUUID = toId + targetAnchors[j];
          this.firstInstance.addEndpoint(toId, {
            anchor: targetAnchors[j], uuid: targetUUID, maxConnections: 10
          });
        }
      },
      endPointsInit() {
        this.addEndpoints("start_point_1", ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"]);
        this.addEndpoints("start_point_2", ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"]);
        this.addEndpoints("shidian", ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"]);
        this.addEndpoints("beidian", ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"]);
        this.addEndpoints("ATS", ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"]);
        this.addEndpoints("zhulu", ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"]);
        this.addEndpoints("kongtiao1", ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"]);
        this.addEndpoints("kongtiao2", ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"]);
        this.addEndpoints("beiyong1", ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"]);
        this.addEndpoints("beiyong2", ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"]);
        this.addEndpoints("UPS", ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"]);
        this.addEndpoints("switch06_00", ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"]);
        this.addEndpoints("switch06_01", ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"]);
        this.addEndpoints("switch06_02", ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"]);
        this.addEndpoints("switch06_03", ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"]);
        this.addEndpoints("PDU1", ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"]);
        this.addEndpoints("PDU2", ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"]);
        this.addEndpoints("jiankong", ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"]);
        for (var i = 1; i < 7; i++) {
          this.addEndpoints("switch0" + i, ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"]);
        }
      },
      connectionsInit() {
        this.firstInstance.connect({uuids: ["start_point_1RightMiddle", "shidianLeftMiddle"], connector: ["Straight"]})
        this.firstInstance.connect({uuids: ["start_point_2RightMiddle", "beidianLeftMiddle"], connector: ["Straight"]})
        this.firstInstance.connect({
          uuids: ["shidianRightMiddle", "ATSLeftMiddle"],
          connector: ["Flowchart", {stub: [0, 0]}]
        })
        this.firstInstance.connect({
          uuids: ["beidianRightMiddle", "ATSLeftMiddle"],
          connector: ["Flowchart", {stub: [0, 0]}]
        })
        this.firstInstance.connect({
          uuids: ["ATSRightMiddle", "zhuluLeftMiddle"],
          connector: ["Straight"]
        })
        this.firstInstance.connect({uuids: ["switch01RightMiddle", "kongtiao1LeftMiddle"], connector: ["Straight"]})
        this.firstInstance.connect({uuids: ["switch02RightMiddle", "kongtiao2LeftMiddle"], connector: ["Straight"]})
        this.firstInstance.connect({uuids: ["switch03RightMiddle", "beiyong1LeftMiddle"], connector: ["Straight"]})
        this.firstInstance.connect({uuids: ["switch04RightMiddle", "beiyong2LeftMiddle"], connector: ["Straight"]})
        this.firstInstance.connect({uuids: ["switch05RightMiddle", "switch06_01LeftMiddle"], connector: ["Straight"]})
        this.firstInstance.connect({uuids: ["switch06RightMiddle", "UPSLeftMiddle"], connector: ["Straight"]})
        this.firstInstance.connect({uuids: ["UPSRightMiddle", "switch06_00LeftMiddle"], connector: ["Straight"]})
        this.firstInstance.connect({
          uuids: ["switch06_00RightMiddle", "switch06_01LeftMiddle"],
          connector: ["Flowchart", {stub: [0, 0]}]
        })
        this.firstInstance.connect({
          uuids: ["switch06_00RightMiddle", "switch06_02LeftMiddle"],
          connector: ["Flowchart", {stub: [0, 0]}]
        })
        this.firstInstance.connect({
          uuids: ["switch06_00RightMiddle", "switch06_03LeftMiddle"],
          connector: ["Flowchart", {stub: [0, 0]}]
        })
        this.firstInstance.connect({
          uuids: ["switch06_01RightMiddle", "PDU1LeftMiddle"],
          connector: ["Straight"]
        })
        this.firstInstance.connect({
          uuids: ["switch06_02RightMiddle", "PDU2LeftMiddle"],
          connector: ["Straight"]
        })
        this.firstInstance.connect({
          uuids: ["switch06_03RightMiddle", "jiankongLeftMiddle"],
          connector: ["Straight"]
        })
        for (var i = 1; i < 7; i++) {
          this.addEndpoints("switch0" + i, ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"]);
          this.firstInstance.connect({
            uuids: ["zhuluRightMiddle", "switch0" + i + "LeftMiddle"],
            connector: ["Flowchart", {stub: [0, 0]}]
          })
        }

      }
    },
    mounted() {
      this.jsPlumbInit();
      this.endPointsInit();
      this.connectionsInit();
    },
    beforeDestroy() {
      this.firstInstance.deleteEveryConnection()
    }
  }
</script>
<style>
  #shidian_text {
    position: absolute;
    left: 20px;
    top: 100px;
  }
  #beidian_text {
    position: absolute;
    left: 20px;
    top: 180px;
  }
  #start_point_1 {
    position: absolute;
    left: 20px;
    top: 130px;
  }

  #start_point_2 {
    position: absolute;
    left: 20px;
    top: 210px;
  }

  #shidian {
    position: absolute;
    left: 80px;
    top: 120px;
  }

  #beidian {
    position: absolute;
    left: 80px;
    top: 200px;
  }

  #ATS {
    position: absolute;
    left: 160px;
    top: 115px;
    width: 60px;
    height: 120px;
    background: white;
    color: black;
    font-size: 30px;
    font-weight: bold;
    line-height: 40px;
    text-align: center;
  }

  #zhulu {
    position: absolute;
    left: 250px;
    top: 150px;
  }

  #switch01 {
    position: absolute;
    left: 380px;
    top: 120px;
  }

  #switch02 {
    position: absolute;
    left: 380px;
    top: 200px;
  }

  #switch03 {
    position: absolute;
    left: 380px;
    top: 280px;
  }

  #switch04 {
    position: absolute;
    left: 380px;
    top: 360px;
  }

  #switch05 {
    position: absolute;
    left: 380px;
    top: 440px;
  }

  #switch06 {
    position: absolute;
    left: 380px;
    top: 520px;
  }

  #kongtiao1 {
    position: absolute;
    left: 500px;
    top: 115px;
  }

  #kongtiao2 {
    position: absolute;
    left: 500px;
    top: 195px;
  }

  #beiyong1 {
    position: absolute;
    left: 500px;
    top: 275px;
  }

  #beiyong2 {
    position: absolute;
    left: 500px;
    top: 355px;
  }

  #UPS {
    position: absolute;
    left: 500px;
    top: 515px;
  }

  #switch06_00 {
    position: absolute;
    left: 620px;
    top: 520px;
  }

  #switch06_01 {
    position: absolute;
    left: 700px;
    top: 440px;
  }

  #switch06_02 {
    position: absolute;
    left: 700px;
    top: 520px;
  }

  #switch06_03 {
    position: absolute;
    left: 700px;
    top: 600px;
  }

  #PDU1 {
    position: absolute;
    left: 780px;
    top: 435px;
  }

  #PDU2 {
    position: absolute;
    left: 780px;
    top: 515px;
  }

  #jiankong {
    position: absolute;
    left: 780px;
    top: 595px;
  }

  .rectangle {
    width: 80px;
    height: 30px;
    background: white;
    color: black;
    line-height: 30px;
    text-align: center;
    font-weight: bold;
  }

  .switchParent {
    height: 20px;
    width: 20px;
  }

  .switch_on {
  }

  .switch_on:before{
    content:' ';
    position: absolute;
    z-index:2;
    left:0;
    top:0;
    width:20px;
    height:20px;
    background-color: #0f0;
    border-radius: 50%;
  }

  .switch_on:after {
    content:' ';
    position: absolute;
    z-index:1;
    width:20px;
    height:20px;
    background-color: #0f0;
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(0,0,0,.3) inset;
    -webkit-animation-name:'ripple';/*动画属性名，也就是我们前面keyframes定义的动画名*/
    -webkit-animation-duration: 1s;/*动画持续时间*/
    -webkit-animation-timing-function: ease; /*动画频率，和transition-timing-function是一样的*/
    -webkit-animation-delay: 0s;/*动画延迟时间*/
    -webkit-animation-iteration-count: infinite;/*定义循环资料，infinite为无限次*/
    -webkit-animation-direction: normal;/*定义动画方式*/
  }

  @keyframes ripple {
    0% {
      left:10px;
      top:10px;
      opcity:75;
      width:0;
      height:0;
    }
    100% {
      left:-15px;
      top:-15px;
      opacity: 0;
      width:50px;
      height:50px;
    }
  }

  .switch_off {
    width: 20px;
    height: 20px;
    background-color: #f00;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
  }
</style>
