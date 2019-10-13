<script>
import { sync, get } from 'vuex-pathify';
import * as math from 'mathjs';

export default {
  name: "DrugDoseRange",
  data: function () {
    return {
      math: math,
      ///// ADJUST THE FOLLOWING PARAMETERS
      name: "DrugDoseRange",
      drug_class: "Induction Agent",
      lowest_dose: "2000 mg/kg",
      highest_dose: "3000 mg/kg",
      presentation: "10000 mg/ml"
    }
  },
  computed: {
    weight: get("patient/weight")
  },
};
</script>

<template>
  <div class="drug" v-bind:style="color">
    <div class="col-3">{{name}}</div>

    <div class="col-3">{{drug_class}}</div>

    <div class="col-3">
      <div>{{math.format(math.eval(`${lowest_dose} * ${weight} kg`), 4)}} - {{math.format(math.eval(`${highest_dose} * ${weight} kg`), 4)}}</div>
      <small class="text-muted">{{lowest_dose}} - {{highest_dose}}</small>
    </div>
    <div class="col-3">
      <div>{{math.format(math.eval(`(${lowest_dose} * ${weight} kg)/(${presentation})`), 4)}} - {{math.format(math.eval(`${highest_dose} * ${weight} kg/(${presentation})`), 4)}}</div>
      <small class="text-muted">{{presentation}}</small>
    </div>
  </div>
</template>