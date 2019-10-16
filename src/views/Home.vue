<template>
    <div class="home">
        <PatientInfo></PatientInfo>

        <Drugs></Drugs>
        <MACs></MACs>
        <MathEval expression="1+1"></MathEval>
    </div>
</template>

<script>
import PatientInfo from '@/components/PatientInfo.vue'
import Drugs from '@/components/Drugs.vue'
import MACs from '@/components/MACs.vue'
import MathEval from '@/components/MathEval.vue'

export default {
  name: 'Home',
  components: {
    PatientInfo,
    Drugs,
    MACs,
    MathEval
  }
}
</script>
