<template>
  <v-container fluid >
    <div id="drawing" style=" overflow-y:auto; overflow-x:auto; width:1000px; height:650px;">
      <div id="start_point_1"></div>
      <div id="start_point_2"></div>
      <div id="middle_point_1"></div>
      <div id="TP1_TEXT">TP1</div>
      <div id="TP2_TEXT">TP2</div>
      <div id="QA1_TEXT">QA1</div>
      <div id="QA2_TEXT">QA2</div>
      <div id="QA3_TEXT">QA3</div>
      <div id="QB2_TEXT">QB1</div>
      <div id="QC1_TEXT">QC1</div>
      <div id="QC2_TEXT">QC2</div>
      <div id="QC3_TEXT">QC3</div>
      <div id="QC4_TEXT">QC4</div>
      <div id="QC5_TEXT">QC5</div>
      <div id="QC6_TEXT">QC6</div>
      <div id="QC7_TEXT">QC7</div>
      <div id="QC8_TEXT">QC8</div>
      <div id="QF1_TEXT">QF1</div>
      <div id="QF2_TEXT">QF2</div>
      <div id="QF3_TEXT">QF3</div>
      <div id="QF4_TEXT">QF4</div>
      <div id="QF5_TEXT">QF5</div>
      <div id="QF6_TEXT">QF6</div>
      <div id="QF7_TEXT">QF7</div>
      <div id="QF8_TEXT">QF8</div>
      <div id="QF11_TEXT">QF11</div>
      <div id="QF12_TEXT">QF12</div>
      <div id="QC50_TEXT">QC50</div>
      <div id="QF01_TEXT">QF01</div>
      <div id="QPR1_TEXT">QPR1</div>
      <div id="QPR2_TEXT">QPR2</div>
      <div id="QPR3_TEXT">QPR3</div>
      <div id="QA1" class="switchParent">
        <div class="switch_horizontal"></div>
      </div>
      <div id="QA2" class="switchParent">
        <div class="switch_horizontal"></div>
      </div>
      <div id="QA3" class="switchParent">
        <div class="switch_horizontal"></div>
      </div>
      <div id="QB1" class="switchParent">
        <div class="switch_horizontal"></div>
      </div>
      <div id="QC1" class="switchParent">
        <div class="switch_vertical"></div>
      </div>
      <div id="QC2" class="switchParent">
        <div class="switch_vertical"></div>
      </div>
      <div id="QC3" class="switchParent">
        <div class="switch_vertical"></div>
      </div>
      <div id="QC4" class="switchParent">
        <div class="switch_vertical"></div>
      </div>
      <div id="QC5" class="switchParent">
        <div class="switch_vertical"></div>
      </div>
      <div id="QC6" class="switchParent">
        <div class="switch_vertical"></div>
      </div>
      <div id="QC7" class="switchParent">
        <div class="switch_vertical"></div>
      </div>
      <div id="QC8" class="switchParent">
        <div class="switch_vertical"></div>
      </div>
      <div id="QC50" class="switchParent">
        <div class="switch_vertical"></div>
      </div>
      <div id="QF01" class="switchParent">
        <div class="switch_horizontal"></div>
      </div>
      <div id="QF1" class="switchParent">
        <div class="switch_vertical"></div>
      </div>
      <div id="QF2" class="switchParent">
        <div class="switch_vertical"></div>
      </div>
      <div id="QF3" class="switchParent">
        <div class="switch_vertical"></div>
      </div>
      <div id="QF4" class="switchParent">
        <div class="switch_vertical"></div>
      </div>
      <div id="QF5" class="switchParent">
        <div class="switch_vertical"></div>
      </div>
      <div id="QF6" class="switchParent">
        <div class="switch_vertical"></div>
      </div>
      <div id="QF7" class="switchParent">
        <div class="switch_vertical"></div>
      </div>
      <div id="QF8" class="switchParent">
        <div class="switch_vertical"></div>
      </div>
      <div id="QF11" class="switchParent">
        <div class="switch_horizontal"></div>
      </div>
      <div id="QF12" class="switchParent">
        <div class="switch_horizontal"></div>
      </div>
      <div id="QPR1" class="switchParent">
        <div class="switch_horizontal"></div>
      </div>
      <div id="QPR2" class="switchParent">
        <div class="switch_horizontal"></div>
      </div>
      <div id="QPR3" class="switchParent">
        <div class="switch_horizontal"></div>
      </div>
      <div id="TP1">●</div>
      <div id="TP2">●</div>
      <div id="ATS">A<br/>T<br/>S</div>
      <div id="yuedengyu1">～/=</div>
      <div id="yuedengyu2">～/=</div>
      <div id="yuedengyu3">～/=</div>
      <div id="yuedengyu4">=/～</div>
      <div id="dianchizu">电池组</div>
      <div id="jiankong">监控系统</div>
      <div id="table_1">
        <table border="1" cellspacing="0">
          <tr>
            <td colspan="2">机柜编号</td>
          </tr>
          <tr>
            <td colspan="2">直流（A）</td>
          </tr>
          <tr>
            <td colspan="2">总功率（Kw）</td>
          </tr>
          <tr>
            <td rowspan="4">交流电（A）</td>
          </tr>
          <tr>
            <td>IA</td>
          </tr>
          <tr>
            <td>IB</td>
          </tr>
          <tr>
            <td>IC</td>
          </tr>
        </table>
      </div>
      <div id="table_2">
        <table border="1" cellspacing="0">
          <tr>
            <td>V</td>
            <td>I</td>
            <td>I1</td>
            <td>I2</td>
            <td>I3</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div id="table_3">
        <table border="1" cellspacing="0">
          <tr>
            <td>V</td>
            <td>±I</td>
            <td>剩余时间</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div id="table_4">
        <table border="1" cellspacing="0">
          <tr>
            <td rowspan="4">空调1</td>
            <td>I</td>
            <td>P</td>
            <td>Q</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div id="table_5">
        <table border="1" cellspacing="0">
          <tr>
            <td rowspan="4">空调2</td>
            <td>I</td>
            <td>P</td>
            <td>Q</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div id="table_6">
        <table border="1" cellspacing="0">
          <tr>
            <td>pPUE</td>
            <td>PIT</td>
            <td>PC</td>
            <td>PP</td>
            <td>电量总计</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div id="R01">
        <table border="1" cellspacing="0">
          <tr>
            <td>R01</td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
        </table>
      </div>
      <div id="R02">
        <table border="1" cellspacing="0">
          <tr>
            <td>R02</td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
        </table>
      </div>
      <div id="R03">
        <table border="1" cellspacing="0">
          <tr>
            <td>R03</td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
        </table>
      </div>
      <div id="R04">
        <table border="1" cellspacing="0">
          <tr>
            <td>R04</td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
        </table>
      </div>
      <div id="R05">
        <table border="1" cellspacing="0">
          <tr>
            <td>R05</td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
        </table>
      </div>
      <div id="R06">
        <table border="1" cellspacing="0">
          <tr>
            <td>R06</td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
        </table>
      </div>
      <div id="R07">
        <table border="1" cellspacing="0">
          <tr>
            <td>R07</td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
        </table>
      </div>
      <div id="R08">
        <table border="1" cellspacing="0">
          <tr>
            <td>R08</td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
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
        _jsPlumb : null,
        firstInstance : null,
      }
    },
    methods: {
      jsPlumbInit(){
        this._jsPlumb = jsPlumb.jsPlumb;
        this.firstInstance = this._jsPlumb.getInstance({
          ConnectionsDetachable: false,
          Connector: ["Straight"],
          Endpoint: ["Dot", {radius: 1}],
          PaintStyle: {strokeWidth: 2, stroke: "#779966"}
        });
      },
      addEndpoints(toId, sourceAnchors, targetAnchors){
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
      endPointsInit(){
        this.addEndpoints("start_point_1", ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"]);
        this.addEndpoints("start_point_2", ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"]);
        this.addEndpoints("middle_point_1", ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"]);
        this.addEndpoints("yuedengyu1", ["LeftMiddle", "RightMiddle"], ["LeftMiddle", "RightMiddle"]);
        this.addEndpoints("yuedengyu2", ["LeftMiddle", "RightMiddle"], ["LeftMiddle", "RightMiddle"]);
        this.addEndpoints("yuedengyu3", ["LeftMiddle", "RightMiddle"], ["LeftMiddle", "RightMiddle"]);
        this.addEndpoints("yuedengyu4", ["LeftMiddle", "RightMiddle"], ["LeftMiddle", "RightMiddle"]);
        this.addEndpoints("dianchizu", ["LeftMiddle", "RightMiddle"], ["LeftMiddle", "RightMiddle"]);
        this.addEndpoints("jiankong", ["LeftMiddle", "RightMiddle"], ["LeftMiddle", "RightMiddle"]);
        this.addEndpoints("ATS", ["LeftMiddle", "RightMiddle"], ["LeftMiddle", "RightMiddle"]);
        this.addEndpoints("TP1", ["LeftMiddle", "RightMiddle"], ["LeftMiddle", "RightMiddle"]);
        this.addEndpoints("TP2", ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"]);
        this.addEndpoints("QA1", ["LeftMiddle", "RightMiddle"], ["LeftMiddle", "RightMiddle"]);
        this.addEndpoints("QA2", ["LeftMiddle", "RightMiddle"], ["LeftMiddle", "RightMiddle"]);
        this.addEndpoints("QA3", ["LeftMiddle", "RightMiddle"], ["LeftMiddle", "RightMiddle"]);
        this.addEndpoints("QB1", ["LeftMiddle", "RightMiddle"], ["LeftMiddle", "RightMiddle"]);
        this.addEndpoints("QC50", ["TopCenter", "BottomCenter"], ["TopCenter", "BottomCenter"]);
        this.addEndpoints("QF01", ["LeftMiddle", "RightMiddle"], ["LeftMiddle", "RightMiddle"]);
        this.addEndpoints("QF11", ["LeftMiddle", "RightMiddle"], ["LeftMiddle", "RightMiddle"]);
        this.addEndpoints("QF12", ["LeftMiddle", "RightMiddle"], ["LeftMiddle", "RightMiddle"]);
        this.addEndpoints("QPR1", ["LeftMiddle", "RightMiddle"], ["LeftMiddle", "RightMiddle"]);
        this.addEndpoints("QPR2", ["LeftMiddle", "RightMiddle"], ["LeftMiddle", "RightMiddle"]);
        this.addEndpoints("QPR3", ["LeftMiddle", "RightMiddle"], ["LeftMiddle", "RightMiddle"]);
        this.addEndpoints("table_4", ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"]);
        this.addEndpoints("table_5", ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"]);
        for (var i = 1; i < 9; i++) {
          this.addEndpoints("QF"+i, ["TopCenter", "BottomCenter"], ["TopCenter", "BottomCenter"]);
          this.addEndpoints("QC"+i, ["TopCenter", "BottomCenter"], ["TopCenter", "BottomCenter"]);
          this.addEndpoints("R0"+i, ["TopCenter", "BottomCenter"], ["TopCenter", "BottomCenter"]);
        }
      },
      connectionsInit(){
        this.firstInstance.connect({uuids: ["start_point_1RightMiddle", "QA1LeftMiddle"], connector: ["Straight"]})
        this.firstInstance.connect({uuids: ["QA1RightMiddle", "TP1LeftMiddle"], connector: ["Straight"]})
        this.firstInstance.connect({uuids: ["TP1RightMiddle", "ATSLeftMiddle"], connector: ["Flowchart", {stub: [0, 0]}]})
        this.firstInstance.connect({uuids: ["QA3RightMiddle", "ATSLeftMiddle"], connector: ["Flowchart", {stub: [0, 0]}]})
        this.firstInstance.connect({uuids: ["ATSRightMiddle", "QPR1LeftMiddle"], connector: ["Flowchart", {stub: [0, 0]}]})
        this.firstInstance.connect({uuids: ["ATSRightMiddle", "QPR2LeftMiddle"], connector: ["Flowchart", {stub: [0, 0]}]})
        this.firstInstance.connect({uuids: ["ATSRightMiddle", "QPR3LeftMiddle"], connector: ["Flowchart", {stub: [0, 0]}]})
        this.firstInstance.connect({uuids: ["QPR1RightMiddle", "yuedengyu1LeftMiddle"], connector: ["Straight"]})
        this.firstInstance.connect({uuids: ["QPR2RightMiddle", "yuedengyu2LeftMiddle"], connector: ["Straight"]})
        this.firstInstance.connect({uuids: ["QPR3RightMiddle", "yuedengyu3LeftMiddle"], connector: ["Straight"]})
        this.firstInstance.connect({uuids: ["yuedengyu1RightMiddle", "middle_point_1LeftMiddle"], connector: ["Flowchart", {stub: [0, 0]}]})
        this.firstInstance.connect({uuids: ["yuedengyu2RightMiddle", "middle_point_1LeftMiddle"], connector: ["Flowchart", {stub: [0, 0]}]})
        this.firstInstance.connect({uuids: ["yuedengyu3RightMiddle", "middle_point_1LeftMiddle"], connector: ["Flowchart", {stub: [0, 0]}]})
        this.firstInstance.connect({uuids: ["TP2BottomCenter", "QF11LeftMiddle"], connector: ["Flowchart", {stub: [0, 0]}]})
        this.firstInstance.connect({uuids: ["TP2BottomCenter", "QF12LeftMiddle"], connector: ["Flowchart"]})
        this.firstInstance.connect({uuids: ["middle_point_1BottomCenter", "QC50TopCenter"], connector: ["Straight"]})
        this.firstInstance.connect({uuids: ["QA3LeftMiddle", "TP2TopCenter"], connector: ["Flowchart", {stub: [0, 0]}]})
        this.firstInstance.connect({uuids: ["QF11RightMiddle", "table_4LeftMiddle"], connector: ["Straight"]})
        this.firstInstance.connect({uuids: ["QF12RightMiddle", "table_5LeftMiddle"], connector: ["Straight"]})
        this.firstInstance.connect({uuids: ["start_point_2RightMiddle", "QA2LeftMiddle"], connector: ["Straight"]})
        this.firstInstance.connect({uuids: ["QA2RightMiddle", "TP2LeftMiddle"], connector: ["Straight"]})
        this.firstInstance.connect({uuids: ["middle_point_1RightMiddle", "QB1LeftMiddle"], connector: ["Straight"]})
        this.firstInstance.connect({uuids: ["QB1RightMiddle", "dianchizuLeftMiddle"], connector: ["Straight"]})
        this.firstInstance.connect({uuids: ["QB1RightMiddle", "QF01LeftMiddle"], connector: ["Flowchart", {stub: [0, 0]}]})
        this.firstInstance.connect({uuids: ["QF01RightMiddle", "yuedengyu4LeftMiddle"], connector: ["Flowchart", {stub: [0, 0]}]})
        this.firstInstance.connect({uuids: ["yuedengyu4RightMiddle", "jiankongLeftMiddle"], connector: ["Flowchart", {stub: [0, 0]}]})
        for (var i = 1; i < 9; i++) {
          this.firstInstance.connect({uuids: ["QC50BottomCenter", "QC" + i+"TopCenter"], connector: ["Flowchart"]})
          this.firstInstance.connect({uuids: ["QC"+i+"BottomCenter", "R0" + i+"TopCenter"], connector: ["Flowchart"]})
          this.firstInstance.connect({uuids: ["R0"+i+"BottomCenter", "QF" + i+"TopCenter"], connector: ["Straight"]})
          this.firstInstance.connect({uuids: ["TP2RightMiddle", "QF"+i+"BottomCenter"], connector: ["Flowchart", {stub: [0, 0]}]})
        }
      }

    },
    mounted() {
      this.jsPlumbInit();
      this.endPointsInit();
      this.connectionsInit();
    },
    beforeDestroy () {
      this.firstInstance.deleteEveryConnection()
    }
  }
</script>
<style>
  #start_point_1 {
    position: absolute;
    left: 20px;
    top: 192px;
  }

  #start_point_2 {
    position: absolute;
    left: 20px;
    top: 622px;
  }

  #middle_point_1 {
    position: absolute;
    left: 478px;
    top: 211px;
  }

  #TP1 {
    position: absolute;
    left: 110px;
    top: 170px;
    color: darkcyan;
    font-size: 30px;
  }

  #TP2 {
    position: absolute;
    left: 60px;
    top: 600px;
    color: darkcyan;
    font-size: 30px;
  }

  #QA1 {
    position: absolute;
    left: 84px;
    top: 182px;
  }

  #QA2 {
    position: absolute;
    left: 30px;
    top: 612px;
  }

  #QA3 {
    position: absolute;
    left: 85px;
    top: 218px;
  }

  #QB1 {
    position: absolute;
    left: 650px;
    top: 200px;
  }

  #QC1 {
    position: absolute;
    left: 220px;
    top: 350px;
  }

  #QC2 {
    position: absolute;
    left: 300px;
    top: 350px;
  }

  #QC3 {
    position: absolute;
    left: 380px;
    top: 350px;
  }

  #QC4 {
    position: absolute;
    left: 460px;
    top: 350px;
  }

  #QC5 {
    position: absolute;
    left: 540px;
    top: 350px;
  }

  #QC6 {
    position: absolute;
    left: 620px;
    top: 350px;
  }

  #QC7 {
    position: absolute;
    left: 700px;
    top: 350px;
  }

  #QC8 {
    position: absolute;
    left: 780px;
    top: 350px;
  }

  #table_1 {
    position: absolute;
    left: 100px;
    top: 390px;
    width: 80px !important;
  }

  #table_2 {
    position: absolute;
    left: 430px;
    top: 130px;
    width: 250px;
    height: 200px !important;
  }

  #table_3 {
    position: absolute;
    left: 700px;
    top: 230px;
    width: 250px;
    height: 200px !important;
  }

  #table_4 {
    position: absolute;
    left: 200px;
    top: 640px;
    width: 250px !important;
  }

  #table_5 {
    position: absolute;
    left: 200px;
    top: 720px;
    width: 250px !important;
  }

  #table_6 {
    position: absolute;
    left: 500px;
    top: 680px;
  }

  #R01 {
    position: absolute;
    left: 200px;
    top: 390px;
    width: 60px !important;
  }

  #R02 {
    position: absolute;
    left: 280px;
    top: 390px;
    width: 60px !important;
  }

  #R03 {
    position: absolute;
    left: 360px;
    top: 390px;
    width: 60px !important;
  }

  #R04 {
    position: absolute;
    left: 440px;
    top: 390px;
    width: 60px !important;
  }

  #R05 {
    position: absolute;
    left: 520px;
    top: 390px;
    width: 60px !important;
  }

  #R06 {
    position: absolute;
    left: 600px;
    top: 390px;
    width: 60px !important;
  }

  #R07 {
    position: absolute;
    left: 680px;
    top: 390px;
    width: 60px !important;
  }

  #R08 {
    position: absolute;
    left: 760px;
    top: 390px;
    width: 60px !important;
  }

  #QC50 {
    position: absolute;
    left: 470px;
    top: 240px;
  }

  #QF01 {
    position: absolute;
    left: 720px;
    top: 155px;
  }

  #QF1 {
    position: absolute;
    left: 220px;
    top: 590px;
  }

  #QF2 {
    position: absolute;
    left: 300px;
    top: 590px;
  }

  #QF3 {
    position: absolute;
    left: 380px;
    top: 590px;
  }

  #QF4 {
    position: absolute;
    left: 460px;
    top: 590px;
  }

  #QF5 {
    position: absolute;
    left: 540px;
    top: 590px;
  }

  #QF6 {
    position: absolute;
    left: 620px;
    top: 590px;
  }

  #QF7 {
    position: absolute;
    left: 700px;
    top: 590px;
  }

  #QF8 {
    position: absolute;
    left: 780px;
    top: 590px;
  }

  #QF11 {
    position: absolute;
    left: 120px;
    top: 660px;
  }

  #QF12 {
    position: absolute;
    left: 120px;
    top: 740px;
  }

  #QPR1 {
    position: absolute;
    left: 250px;
    top: 150px;
  }

  #QPR2 {
    position: absolute;
    left: 250px;
    top: 200px;
  }

  #QPR3 {
    position: absolute;
    left: 250px;
    top: 245px;
  }

  #yuedengyu1 {
    position: absolute;
    left: 290px;
    top: 146px;
    width: 60px;
    height: 30px;
    background: darkcyan;
    color: white;
    line-height: 30px;
    text-align: center;
  }

  #yuedengyu2 {
    position: absolute;
    left: 290px;
    top: 196px;
    width: 60px;
    height: 30px;
    background: darkcyan;
    color: white;
    line-height: 30px;
    text-align: center;
  }

  #yuedengyu3 {
    position: absolute;
    left: 290px;
    top: 241px;
    width: 60px;
    height: 30px;
    background: darkcyan;
    color: white;
    line-height: 30px;
    text-align: center;
  }

  #yuedengyu4 {
    position: absolute;
    left: 770px;
    top: 150px;
    width: 60px;
    height: 30px;
    background: darkcyan;
    color: white;
    line-height: 30px;
    text-align: center;
  }

  #dianchizu {
    position: absolute;
    left: 770px;
    top: 195px;
    width: 60px;
    height: 30px;
    background: darkcyan;
    color: white;
    line-height: 30px;
    text-align: center;
  }

  #jiankong {
    position: absolute;
    left: 870px;
    top: 150px;
    width: 60px;
    height: 30px;
    background: darkcyan;
    color: white;
    line-height: 30px;
    text-align: center;
  }

  #ATS {
    position: absolute;
    left: 140px;
    top: 180px;
    width: 30px;
    height: 60px;
    background: darkcyan;
    color: white;
    line-height: 20px;
    text-align: center;
  }

  #TP1_TEXT {
    position: absolute;
    left: 110px;
    top: 170px;
    font-size: 10px;
  }

  #TP2_TEXT {
    position: absolute;
    left: 80px;
    top: 600px;
    font-size: 10px;
  }

  #QA1_TEXT {
    position: absolute;
    left: 80px;
    top: 170px;
    font-size: 10px;
  }

  #QA2_TEXT {
    position: absolute;
    left: 30px;
    top: 600px;
    font-size: 10px;
  }

  #QA3_TEXT {
    position: absolute;
    left: 80px;
    top: 235px;
    font-size: 10px;
  }

  #QB2_TEXT {
    position: absolute;
    left: 650px;
    top: 220px;
    font-size: 10px;
  }

  #QC1_TEXT {
    position: absolute;
    left: 190px;
    top: 355px;
    font-size: 10px;
  }

  #QC2_TEXT {
    position: absolute;
    left: 270px;
    top: 355px;
    font-size: 10px;
  }

  #QC3_TEXT {
    position: absolute;
    left: 350px;
    top: 355px;
    font-size: 10px;
  }

  #QC4_TEXT {
    position: absolute;
    left: 430px;
    top: 355px;
    font-size: 10px;
  }

  #QC5_TEXT {
    position: absolute;
    left: 510px;
    top: 355px;
    font-size: 10px;
  }

  #QC6_TEXT {
    position: absolute;
    left: 590px;
    top: 355px;
    font-size: 10px;
  }

  #QC7_TEXT {
    position: absolute;
    left: 670px;
    top: 355px;
    font-size: 10px;
  }

  #QC8_TEXT {
    position: absolute;
    left: 750px;
    top: 355px;
    font-size: 10px;
  }

  #QC50_TEXT {
    position: absolute;
    left: 490px;
    top: 240px;
    font-size: 10px;
  }

  #QF01_TEXT {
    position: absolute;
    left: 715px;
    top: 170px;
    font-size: 10px;
  }

  #QF1_TEXT {
    position: absolute;
    left: 190px;
    top: 590px;
    font-size: 10px;
  }

  #QF2_TEXT {
    position: absolute;
    left: 270px;
    top: 590px;
    font-size: 10px;
  }

  #QF3_TEXT {
    position: absolute;
    left: 350px;
    top: 590px;
    font-size: 10px;
  }

  #QF4_TEXT {
    position: absolute;
    left: 430px;
    top: 590px;
    font-size: 10px;
  }

  #QF5_TEXT {
    position: absolute;
    left: 510px;
    top: 590px;
    font-size: 10px;
  }

  #QF6_TEXT {
    position: absolute;
    left: 590px;
    top: 590px;
    font-size: 10px;
  }

  #QF7_TEXT {
    position: absolute;
    left: 670px;
    top: 590px;
    font-size: 10px;
  }

  #QF8_TEXT {
    position: absolute;
    left: 750px;
    top: 590px;
    font-size: 10px;
  }

  #QF11_TEXT {
    position: absolute;
    left: 115px;
    top: 680px;
    font-size: 10px;
  }

  #QF12_TEXT {
    position: absolute;
    left: 115px;
    top: 760px;
    font-size: 10px;
  }

  #QPR1_TEXT {
    position: absolute;
    left: 215px;
    top: 165px;
    font-size: 10px;
  }

  #QPR2_TEXT {
    position: absolute;
    left: 215px;
    top: 215px;
    font-size: 10px;
  }

  #QPR3_TEXT {
    position: absolute;
    left: 215px;
    top: 260px;
    font-size: 10px;
  }

  td {
    width: 80px;
    height: 30px;
    text-align: center;
  }

  .switchParent {
    height: 20px;
    width: 20px;
  }

  .switch_horizontal {
    height: 0px;
    border: 1px solid #796;
    width: 20px;
    transform: rotate(10deg);
    -o-transform: rotate(10deg);
    -moz-transform: rotate(10deg);
    -webkit-transform: rotate(10deg);
    position: absolute;
    top: 35%;
    left: 0%;
  }

  .switch_vertical {
    height: 20px;
    border: 1px solid #796;
    width: 0px;
    transform: rotate(-10deg);
    -o-transform: rotate(-10deg);
    -moz-transform: rotate(-10deg);
    -webkit-transform: rotate(-10deg);
    position: absolute;
    top: 0%;
    left: 35%;
  }
</style>
