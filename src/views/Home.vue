<template>
    <div class="home">
        <PatientInfo></PatientInfo>

        <Drugs></Drugs>
    </div>
</template>

<script>
import PatientInfo from '@/components/PatientInfo.vue'
import Drugs from '@/components/Drugs.vue'

export default {
  name: 'Home',
  components: {
    PatientInfo,
    Drugs
  }
}
</script>
