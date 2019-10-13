<script>
import { sync, get } from 'vuex-pathify';
import * as math from 'mathjs';

export default {
  name: "Propofol",
  data: function () {
    return {
      math: math,
      ///// ADJUST THE FOLLOWING PARAMETERS
      name: "Propofol",
      drug_class: "Induction Agent",
      lowest_dose: "2 mg/kg",
      highest_dose: "3 mg/kg",
      presentation: "10 mg/ml"
    }
  },
  computed: {
    weight: get("patient/weight")
  },
};
</script>

<template>
  <div class="drug" style="background-color:yellow">
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