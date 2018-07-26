<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm12 md4>
        <v-card>
          <v-card-text>
            <v-toolbar class="cyan" dark>
              <v-toolbar-title>设备列表</v-toolbar-title>
            </v-toolbar>
            <v-data-table
              :headers="headers"
              :items="items"
              :pagination.sync="pagination"
              class="elevation-1"
            >
              <template slot="items" slot-scope="props">
                <td class="text-xs-left">{{ props.item.name }}</td>
                <td class="text-xs-left">{{ props.item.state }}</td>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm12 md8>
        <video src="@/assets/video/nanjing.mp4" style="height: 400px" autoplay loop>
          您的浏览器不支持 video 标签。
        </video>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    data() {
      return {
        headers:[
          {text: '设备名称', value: 'name'},
          {text: '状态值', value: 'state'},
        ],
        items:[],
        pagination:{}
      }
    },
    mounted() {
      this.getCameras();
    },
    methods: {
      getCameras(){
        this.items = [
          {id:'1',name:'摄像头1',state:0}
        ]
      }
    },
    components: {
    },
  }
</script>
