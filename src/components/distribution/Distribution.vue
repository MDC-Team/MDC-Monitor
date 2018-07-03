<template>
  <v-container fluid>
    <distribution-topology></distribution-topology>
  </v-container>
</template>
<script>
  import DistributionTopology from '@/components/distribution/DistributionTopology'
  export default {
    data() {
      return {
      }
    },
    components:{
      "distribution-topology": DistributionTopology
    }
  }
</script>
