<template>
  <v-container fluid>
    <div id="QA3">==</div>
    <div id="QB1">==</div>
    <div id="point1"></div>
    <div id="QPR1">==</div>
    <div id="QPR2">==</div>
    <div id="QPR3">==</div>
    <div id="TP1">●</div>
    <div id="TP2">●</div>
    <div id="line1"></div>
    <div id="ATS">A<br/>T<br/>S</div>
    <div id="yuedengyu1">～/=</div>
    <div id="yuedengyu2">～/=</div>
    <div id="yuedengyu3">～/=</div>
    <div id="dianchizu">电池组</div>
  </v-container>
</template>
<script>
  import jsPlumb from 'jsplumb'

  export default {
    data() {
      return {

      }
    },
    mounted() {
      var _jsPlumb = jsPlumb.jsPlumb;
      var firstInstance = _jsPlumb.getInstance({
        ConnectionsDetachable:false,
        Connector: [ "Straight",{gap:1} ],
        Endpoint:[ "Dot", { radius:1 } ]
      });
      firstInstance.addEndpoint("ATS",{
        uuid:1,
        anchor:[0,0.2,0,0,0,0],
      });
      firstInstance.addEndpoint("TP1",{
        uuid:2,
        anchor:[0.8,0.5,0,0,0,0]
      });
      firstInstance.addEndpoint("QA3",{
        uuid:3,
        anchor:[0.8,0.5,0,0,0,0]
      });
      firstInstance.connect({
        source:'TP1',
        target:'ATS',
        anchors:[[0.8,0.5,0,0,0,0], [0,0.2,0,0,0,0]],
      });
      firstInstance.connect({
        source:'QA3',
        target:'ATS',
        anchors:[[0.8,0.5,0,0,0,0], [0,0.8,0,0,0,0]],
      });
      firstInstance.connect({
        source:'QA3',
        target:'TP2',
        anchors:[[0.5,1,0,0,0,0], [0.5,0,0,0,0,0]],
      });
      firstInstance.connect({
        source:'TP2',
        target:'line1',
        anchors:[[1,0.5,0,0,0,0], [0,0.5,0,0,0,0]],
      });
      firstInstance.connect({
        source:'yuedengyu2',
        target:'point1',
        anchors:[[1,0.5,0,0,0,0], [0.5,0.5,0,0,0,0]],
      });
      firstInstance.connect({
        source:'point1',
        target:'QB1',
        anchors:[[1,0.5,0,0,0,0], [0,0.5,0,0,0,0]],
      });
      // firstInstance.connect({
      //   uuids:[1, 2]
      // });
    }
  }
</script>
<style>
  #TP1 {
    position: absolute;
    left: 100px;
    top: 170px;
    color: darkcyan;
    font-size: 30px;
  }
  #TP2 {
    position: absolute;
    left: 80px;
    top: 500px;
    color: darkcyan;
    font-size: 30px;
  }
  #QA3 {
    position: absolute;
    left: 100px;
    top: 217px;
  }
  #QB1 {
    position: absolute;
    left: 700px;
    top: 200px;
  }
  #point1 {
    position: absolute;
    left: 500px;
    top: 210px;
    height: 1px;
  }
  #QPR1 {
    position: absolute;
    left: 220px;
    top: 200px;
  }
  #QPR2 {
    position: absolute;
    left: 220px;
    top: 250px;
  }
  #QPR3 {
    position: absolute;
    left: 220px;
    top: 150px;
  }
  #yuedengyu1 {
    position: absolute;
    left: 250px;
    top: 150px;
    width: 60px;
    height: 30px;
    background: darkcyan;
    color: white;
    line-height:30px;
    text-align: center;
  }
  #yuedengyu2 {
    position: absolute;
    left: 250px;
    top: 200px;
    width: 60px;
    height: 30px;
    background: darkcyan;
    color: white;
    line-height:30px;
    text-align: center;
  }
  #yuedengyu3 {
    position: absolute;
    left: 250px;
    top: 250px;
    width: 60px;
    height: 30px;
    background: darkcyan;
    color: white;
    line-height:30px;
    text-align: center;
  }
  #dianchizu {
    position: absolute;
    left: 750px;
    top: 200px;
    width: 60px;
    height: 30px;
    background: darkcyan;
    color: white;
    line-height:30px;
    text-align: center;
  }
  #line1 {
    position: absolute;
    left: 200px;
    top: 522px;
    width: 400px;
    height: 1px;
    background: darkcyan;
  }
  #ATS {
    position: absolute;
    left: 160px;
    top: 180px;
    width: 30px;
    height: 60px;
    background: darkcyan;
    color: white;
    line-height:20px;
    text-align: center;
  }
</style>
