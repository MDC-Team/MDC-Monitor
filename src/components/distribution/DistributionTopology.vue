<template>
  <v-container fluid style="background: dimgray">
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
      <div id="ATS">A<br/>T<br/>S</div>
      <div id="switch00" class="switchParent">
        <div class="switch_on"></div>
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
      <div id="kongtiao1" class="rectangle">空调1</div>
      <div id="kongtiao2" class="rectangle">空调2</div>
      <div id="beiyong1" class="rectangle">备用1</div>
      <div id="beiyong2" class="rectangle">备用2</div>
      <div id="UPS" class="rectangle">UPS</div>
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
      <div id="table01">
        <table border="1" cellspacing="0" class="gridtable">
          <tr>
            <td>0.0V</td>
          </tr>
          <tr>
            <td>0.0kW</td>
          </tr>
        </table>
      </div>
      <div id="PDU1">
        <table border="1" cellspacing="0" class="gridtable">
          <tr>
            <td>PDU1</td>
          </tr>
          <tr>
            <td>0.0V</td>
          </tr>
          <tr>
            <td>0.0kW</td>
          </tr>
        </table>
      </div>
      <div id="PDU2">
        <table border="1" cellspacing="0" class="gridtable">
          <tr>
            <td>PDU1</td>
          </tr>
          <tr>
            <td>0.0V</td>
          </tr>
          <tr>
            <td>0.0kW</td>
          </tr>
        </table>
      </div>
      <div id="jiankong">
        <table border="1" cellspacing="0" class="gridtable">
          <tr>
            <td>PDU1</td>
          </tr>
          <tr>
            <td>0.0V</td>
          </tr>
          <tr>
            <td>0.0kW</td>
          </tr>
        </table>
      </div>
      <div id="zhulu">
        <table border="1" cellspacing="0" class="gridtable">
          <tr>
            <td colspan="2">主路电表参数</td>
          </tr>
          <tr>
            <td>电压</td>
            <td>0.0V</td>
          </tr>
          <tr>
            <td>电流</td>
            <td>0.0A</td>
          </tr>
          <tr>
            <td>有功功率</td>
            <td>0.0kW</td>
          </tr>
          <tr>
            <td>无功功率</td>
            <td>0.0kWA</td>
          </tr>
          <tr>
            <td>视在功率</td>
            <td>0.0kWA</td>
          </tr>
          <tr>
            <td>频率</td>
            <td>0.0Hz</td>
          </tr>
          <tr>
            <td>功率因数</td>
            <td>0.0</td>
          </tr>
        </table>
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
    methods: {
      jsPlumbInit() {
        this._jsPlumb = jsPlumb.jsPlumb;
        this.firstInstance = this._jsPlumb.getInstance({
          ConnectionsDetachable: false,
          Connector: ["Straight"],
          Endpoint: ["Dot", {radius: 0.1}],
          PaintStyle: {strokeWidth: 3, stroke: "#fff"}
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
        this.addEndpoints("switch00", ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"]);
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
          uuids: ["ATSRightMiddle", "switch00LeftMiddle"],
          connector: ["Flowchart", {stub: [0, 0]}]
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
            uuids: ["switch00RightMiddle", "switch0" + i + "LeftMiddle"],
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
    color: white;
  }
  #beidian_text {
    position: absolute;
    left: 20px;
    top: 180px;
    color: white;
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

  #table01 {
    position: absolute;
    left: 270px;
    top: 100px;
  }

  #switch00 {
    position: absolute;
    left: 280px;
    top: 165px;
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
    top: 415px;
  }

  #PDU2 {
    position: absolute;
    left: 780px;
    top: 495px;
  }

  #jiankong {
    position: absolute;
    left: 780px;
    top: 575px;
  }

  #zhulu {
    position: absolute;
    left: 120px;
    top: 400px;
  }

  .rectangle {
    width: 60px;
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
    width: 20px;
    height: 20px;
    background-color: deepskyblue;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
  }

  .switch_off {
    width: 20px;
    height: 20px;
    background-color: black;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
  }

  .gridtable {
    background: white;
    color: #000;
    font-weight: bold;
    border-width: 1px;
  }
</style>
