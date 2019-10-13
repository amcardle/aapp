<script>
import { sync, get } from 'vuex-pathify';
import * as math from 'mathjs';

export default {
  name: "Glycopyrronium",
  data: function () {
    return {
      math: math,
      ///// ADJUST THE FOLLOWING PARAMETERS
      name: "Glycopyrronium",
      drug_class: "Anticholinergic",
      presentation: "200 microg/ml",
      color: "background-color:#A4D65E;"
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
      <div>200 microg</div>
    </div>
    <div class="col-3">
      <div>{{math.format(math.eval(`200 microg/(${presentation})`), 4)}}</div>
      <small class="text-muted">{{presentation}}</small>
    </div>
  </div>
</template>