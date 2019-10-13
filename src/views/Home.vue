// Reference - IntubationDifficulty

<template lang="pug">
.home
  PatientInfo
  
  
  
  ReferenceValues
  DrugDoses
</template>

<script>
import PatientInfo from "@/components/PatientInfo.vue";
import DrugDoses from "@/components/DrugDoses.vue";
import ReferenceValues from "@/components/ReferenceValues.vue";
import OpiateDoseConverter from "@/components/OpiateDoseConverter.vue"


export default {
  name: "home",
  components: {
    PatientInfo,
    DrugDoses,
    ReferenceValues,
    OpiateDoseConverter,
  }
};
</script>
