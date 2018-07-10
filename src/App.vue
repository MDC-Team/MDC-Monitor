<template>
  <v-app>
    <v-toolbar
      app
    >
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-tabs
        v-model="active"
        centered
        slider-color="yellow"
        color="grey lighten-5"
      >
        <v-tab
          v-for="(menu,index) in menus"
          :key="index"
          ripple
          :to="{name : menu.routerName}"
          exact
        >
          {{menu.name}}
        </v-tab>
      </v-tabs>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        menus:[{
          name: "MDC总览",
          routerName: "HelloWorld"
        },{
          name: "机柜容量",
          routerName: "Containers"
        },{
          name: "配电拓扑",
          routerName: "Distribution"
        },{
          name: "空调环境",
          routerName: ""
        },{
          name: "安全防护",
          routerName: ""
        },{
          name: "资产明细",
          routerName: ""
        }],
        fixed: true,
        active: null,
        title: 'MDC-Monitor'
      }
    },
    name: 'App'
  }
</script>
