// Reference - IntubationDifficulty

<template lang="pug">
.home
  PatientInfo
  Medications
  IntubationDifficulty
  Investigations
  ReferenceValues
  DrugDoses
  ChecklistWHO
</template>

<script>
import PatientInfo from "@/components/PatientInfo.vue";
import DrugDoses from "@/components/DrugDoses.vue";
import Investigations from "@/components/Investigations.vue";
import ReferenceValues from "@/components/ReferenceValues.vue";
import IntubationDifficulty from "@/components/IntubationDifficulty.vue"
import OpiateDoseConverter from "@/components/OpiateDoseConverter.vue"
import Medications from "@/components/Medications.vue"
import ChecklistWHO from "@/components/ChecklistWHO.vue"


export default {
  name: "home",
  components: {
    PatientInfo,
    DrugDoses,
    Investigations,
    ReferenceValues,
    IntubationDifficulty,
    OpiateDoseConverter,
    Medications,
    ChecklistWHO
  }
};
</script>
