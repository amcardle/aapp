<template>
    <div class="home">
        <PatientInfo></PatientInfo>

        <Drugs></Drugs>
        <MACs></MACs>
    </div>
</template>

<script>
import PatientInfo from '@/components/PatientInfo.vue'
import Drugs from '@/components/Drugs.vue'
import MACs from '@/components/MACs.vue'

export default {
  name: 'Home',
  components: {
    PatientInfo,
    Drugs,
    MACs
  }
}
</script>
