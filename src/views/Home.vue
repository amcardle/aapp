<template>
  <div class="home">
    <PatientInfo></PatientInfo>

    <div>
      <div class="row">
        <div class="col-3">Name</div>
        <div class="col-3">Class</div>
        <div class="col-3">Dose</div>
        <div class="col-3">Presentation</div>
      </div>
      <div v-for="drug in Drugs" v-bind:key="drug.name">
        <component :is="drug"></component>
      </div>
    </div>
  </div>
</template>

<script>
import PatientInfo from "@/components/PatientInfo.vue";
import DrugDoses from "@/components/DrugDoses.vue";
import ReferenceValues from "@/components/ReferenceValues.vue";
import OpiateDoseConverter from "@/components/OpiateDoseConverter.vue"
import Drugs from "@/components/drugs/AllDrugs.js"

console.log(Drugs[0])
export default {
  name: "home",
  data: function () {
    return {
      Drugs: Drugs
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
