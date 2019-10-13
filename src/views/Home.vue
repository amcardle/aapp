<template>
  <div class="home">
    <PatientInfo></PatientInfo>
    <ReferenceValues></ReferenceValues>
    <DrugDoses></DrugDoses>
    <ul>
      <li v-for="drug in Drugs" v-bind:key="drug.name">
        <component :is="drug"></component>
      </li>
    </ul>
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
