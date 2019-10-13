<template>
  <div>
    Thiopental
    <p />Role: Anaesthetic
    <p />Dose: 3-5 mg / kg
    <p />
    {{3*weight}} - {{5*weight}} mg
    <p />
  </div>
</template>


<script>
import { sync, get } from 'vuex-pathify';

export default {
  name: "Thiopental",
  computed: {
    weight: get("patient/weight")
  },
};
</script>