<script>
import { sync, get } from 'vuex-pathify';
import * as math from 'mathjs';

export default {
  name: "Ephedrine",
  data: function () {
    return {
      math: math,
      ///// ADJUST THE FOLLOWING PARAMETERS
      name: "Ephedrine",
      drug_class: "Vasopressor",
      presentation: "3 mg/ml",
      color: "background-color:#D6BFDD;"
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
      <div>3 mg</div>
    </div>
    <div class="col-3">
      <div>{{math.format(math.eval(`3 mg/(${presentation})`), 4)}}</div>
      <small class="text-muted">{{presentation}}</small>
    </div>
  </div>
</template>