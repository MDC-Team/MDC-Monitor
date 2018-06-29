<template>
  <v-container fluid>
    <div>{{text}}</div>
    <distribution-topology></distribution-topology>
  </v-container>
</template>
<script>
  import DistributionTopology from '@/components/distribution/DistributionTopology'
  export default {
    data() {
      return {
        text:'hello'
      }
    },
    components:{
      "distribution-topology": DistributionTopology
    }
  }
</script>
