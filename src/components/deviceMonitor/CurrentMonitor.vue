<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm12 md6>
            <case></case>
      </v-flex>
      <v-flex d-flex xs12 sm12 md3>
        <div id="chartDiv">
          <chart-card :pue="pue" :available="available"></chart-card>
        </div>
      </v-flex>
      <v-flex d-flex xs12 sm12 md3>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  import ChartCard from "@/components/commons/ChartCard.vue"
  import Case from "@/components/commons/Case.vue"

  export default {
    data() {
      return {
        option: {},
        pue: 1,
        available: 1,
      }
    },
    mounted() {
      setInterval(() => {
        this.randomData()
      }, 5000);
    },
    methods: {
      randomData() {
        this.pue = Math.floor(Math.random() * Math.floor(100))
        this.available = Math.floor(Math.random() * Math.floor(200))/100
      },
    },
    components: {
      "chart-card": ChartCard,
      "case": Case
    },
  }
</script>
