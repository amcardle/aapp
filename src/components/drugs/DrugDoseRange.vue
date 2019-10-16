<script>
import { sync, get } from 'vuex-pathify'
import * as math from 'mathjs'
import MathEval from '@/components/MathEval.vue'

export default {
  name: 'DrugDoseRange',
  data: function () {
    return {
      math: math,
      /// // ADJUST THE FOLLOWING PARAMETERS
      name: 'DrugDoseRange',
      drug_class: 'Induction Agent',
      lowest_dose: '2000 mg/kg',
      highest_dose: '3000 mg/kg',
      presentation: '10000 mg/ml'
    }
  },
  computed: {
    weight: get('patient/weight')
  },
  components: { MathEval }
}
</script>

<template>
    <div class="drug" :style="color">
        <div class="col-3">{{ name }}</div>

        <div class="col-3">{{ drug_class }}</div>

        <div class="col-3">
            <div>
                <MathEval :expression="`${lowest_dose} * ${weight} kg`"></MathEval>
                -
                <MathEval :expression="`${highest_dose} * ${weight} kg`"></MathEval>
            </div>
            <small class="text-muted">{{ lowest_dose }} - {{ highest_dose }}</small>
        </div>
        <div class="col-3">
            <div>
                <MathEval :expression="`(${lowest_dose} * ${weight} kg)/(${presentation})`"></MathEval>
                -
                <MathEval :expression="`${highest_dose} * ${weight} kg/(${presentation})`"></MathEval>
            </div>
            <small class="text-muted">{{ presentation }}</small>
        </div>
    </div>
</template>
