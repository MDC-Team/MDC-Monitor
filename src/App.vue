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
          @click="pageRouter({name: menu.path})"
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
          path: "HelloWorld"
        },{
          name: "机柜容量",
          path: "Distribution"
        },{
          name: "配电拓扑",
          path: ""
        },{
          name: "空调环境",
          path: ""
        },{
          name: "安全防护",
          path: ""
        },{
          name: "资产明细",
          path: ""
        }],
        fixed: true,
        active: null,
        title: 'MDC-Monitor'
      }
    },
    name: 'App'
  }
</script>
