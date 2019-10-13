<template>
  <div class="home">
    <PatientInfo></PatientInfo>

    <Drugs></Drugs>
  </div>
</template>

<script>
import PatientInfo from "@/components/PatientInfo.vue";
import DrugDoses from "@/components/DrugDoses.vue";
import ReferenceValues from "@/components/ReferenceValues.vue";
import OpiateDoseConverter from "@/components/OpiateDoseConverter.vue"
import Drugs from "@/components/Drugs.vue"

export default {
  name: "home",
  data: function () {
    return {
      Drugs: Drugs
    }
  },
  components: {
    PatientInfo,
    Drugs
  }
};
</script>
