<script>
import { sync, get } from 'vuex-pathify';
import * as math from 'mathjs';

export default {
  name: "Metaraminol",
  data: function () {
    return {
      math: math,
      ///// ADJUST THE FOLLOWING PARAMETERS
      name: "Metaraminol",
      drug_class: "Vasopressor",
      presentation: "0.5 mg/ml",
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
      <div>0.5 mg</div>
    </div>
    <div class="col-3">
      <div>{{math.format(math.eval(`0.5 mg/(${presentation})`), 4)}}</div>
      <small class="text-muted">{{presentation}}</small>
    </div>
  </div>
</template>