<script>
import { sync, get } from 'vuex-pathify';
import * as math from 'mathjs';

export default {
  name: "Fentanyl",
  data: function () {
    return {
      math: math,
      ///// ADJUST THE FOLLOWING PARAMETERS
      name: "Fentanyl",
      drug_class: "Opioid",
      dose: "1 microg/kg",
      presentation: "50 microg/ml"
    }
  },
  computed: {
    weight: get("patient/weight")
  },
};
</script>

<template>
  <div class="drug" style="background-color:#71C5E8;">
    <div class="col-3">{{name}}</div>

    <div class="col-3">{{drug_class}}</div>

    <div class="col-3">
      <div>{{math.format(math.eval(`${dose} * ${weight} kg`), 4)}}</div>
      <small class="text-muted">{{dose}}</small>
    </div>
    <div class="col-3">
      <div>{{math.format(math.eval(`(${dose} * ${weight} kg)/(${presentation})`), 4)}}</div>
      <small class="text-muted">{{presentation}}</small>
    </div>
  </div>
</template>