<template lang="pug">
.home
  b-card(title='Reference Values')
    b-container.bv-example-row.text-center
      b-row
        b-col(sm='')
          b Weight
        b-col(sm='', v-b-tooltip.hover='', title='Using the Devine formula') Ideal Body Weight {{IBW}}
        b-col(sm='') BMI {{bmi}} - {{bmi_category}}
        b-col(sm='') Lean Body Weight {{LBW}} kg
      b-row
        b-col(sm='', v-b-tooltip.click="'Oliguria is defined as urine output less than 0.5 ml/kg/h'") Minimal UO - {{goal_UO}} ml/h
        b-col(sm='')
        b-col(sm='')
        b-col(sm='')
      b-row
        b-col(sm='')
          b Ventilation
        b-col(sm='', v-b-tooltip.hover='', title='Using the Chula formula') ETT Length {{ETT_length}}
        b-col(sm='') {{cMAC_size}}
        b-col(sm='') Tidal Volumes {{Tidal_volume_target}}
</template>

<style lang="scss">
.col-sm {
  padding-bottom: 5px;
}
</style>


<script>
import { mapState } from 'vuex'
import { sync, get } from 'vuex-pathify';
var roundup = function (num) {
  return +(Math.round(num + "e+2") + "e-2");
}

export default {
  name: "Reference Values",

  data: function () { return {} },
  computed: {
    bmi: get('patient/bmi'),
    bmi_category: get('patient/bmi_category'),
    IBW: get('patient/IBW'),
    ETT_length: get('patient/ETT_length'),
    Tidal_volume_target: get('patient/Tidal_volume_target'),
    cMAC_size: get('patient/cMAC_size'),
    weight: get("patient/weight"),
    sex: get('patient/sex'),

    goal_UO: function () {
      return this.weight * 0.5
    },

    LBW: function () {
      if (this.sex == 'm') {
        return roundup((1.1 * this.weight) - (0.0128 * this.bmi * this.weight))
      } else {
        return roundup((1.07 * this.weight) - (0.0148 * this.bmi * this.weight))
      }
    }


  },
  watch: {}
};
</script>