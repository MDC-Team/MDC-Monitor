<template>
  <div style="position: relative;height: 700px">
    <div style="position: absolute;bottom: 500px;left: 20px;" class="temperature_text"><img src="@/assets/img/timg.png" style="height: 25px"/>温度1<br/>0.0℃</div>
    <div style="position: absolute;bottom: 400px;left: 20px;" class="temperature_text"><img src="@/assets/img/timg.png" style="height: 30px"/>温度2<br/>0.0℃</div>
    <div style="position: absolute;bottom: 300px;left: 20px;" class="temperature_text"><img src="@/assets/img/timg.png" style="height: 20px"/>温度3<br/>0.0℃</div>
    <img src="@/assets/img/case.png" style="width:300px; position: absolute;left:0; right:0; top:0; bottom:0;margin:auto;"/>
    <img src="@/assets/img/camera.png" style="cursor:pointer;width: 80px;position: absolute;right: 10px" @click="pagerouter('VideoMonitor')"/>
    <div style="position: absolute;bottom: 35px;left: 10%" class="switch_on"></div>
    <div style="position: absolute;bottom: 10px;left: 15%" class="normal_text">水浸</div>
    <div style="position: absolute;bottom: 35px;left: 30%" class="switch_on"></div>
    <div style="position: absolute;bottom: 10px;left: 35%" class="normal_text">门禁1</div>
    <div style="position: absolute;bottom: 35px;left: 50%" class="switch_on"></div>
    <div style="position: absolute;bottom: 10px;left: 55%" class="normal_text">门禁2</div>
    <div style="position: absolute;bottom: 35px;left: 70%" class="switch_on"></div>
    <div style="position: absolute;bottom: 10px;left: 75%" class="normal_text">烟感</div>
    <div style="position: absolute;bottom: 500px;right: 20px;" class="humidity_text"><img src="@/assets/img/water_drop.png" style="height: 20px"/>湿度1<br/>0.0℃</div>
    <div style="position: absolute;bottom: 400px;right: 20px;" class="humidity_text"><img src="@/assets/img/water_drop.png" style="height: 20px"/>湿度2<br/>0.0℃</div>
    <div style="position: absolute;bottom: 300px;right: 20px;" class="humidity_text"><img src="@/assets/img/water_drop.png" style="height: 20px"/>湿度3<br/>0.0℃</div>
  </div>
</template>
<style>
  .temperature_text {
    color: #00c200;
    font-size: 18px;
    font-weight: bold;
  }
  .humidity_text{
    color: #296aff;
    font-size: 18px;
    font-weight: bold;
  }
  .normal_text{
    color: black;
    font-size: 18px;
    font-weight: bold;
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
</style>
