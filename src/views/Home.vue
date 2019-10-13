// Reference - IntubationDifficulty

<template lang="pug">
.home
  PatientInfo
  ReferenceValues
  DrugDoses
  component(:is="activeComponent")
</template>

<script>
import PatientInfo from "@/components/PatientInfo.vue";
import DrugDoses from "@/components/DrugDoses.vue";
import ReferenceValues from "@/components/ReferenceValues.vue";
import OpiateDoseConverter from "@/components/OpiateDoseConverter.vue"
import Drugs from "@/components/drugs/AllDrugs.js"
import Propofol from "@/components/drugs/Propofol.vue"

console.log(Drugs[0])
export default {
  name: "home",
  data: function () {
    return {
      activeComponent: Drugs[0],
    }
  },
  components: {
    PatientInfo,
    DrugDoses,
    ReferenceValues,
    OpiateDoseConverter,
  }
};
</script>
