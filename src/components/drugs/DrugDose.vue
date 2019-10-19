<script>
import { get } from 'vuex-pathify'
import * as math from 'mathjs'
import MathEval from '@/components/MathEval.vue'

export default {
  name: 'DrugDose',
  data: function () {
    return {
      math: math,
      /// // ADJUST THE FOLLOWING PARAMETERS
      name: 'DrugDose',
      drug_class: 'DrugDose',
      dose: '100000 ug/kg',
      presentation: '5000000 ug/ml',
      tags: []
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
                <MathEval :expression="`${dose} * ${weight} kg`"></MathEval>
            </div>
            <small class="text-muted">{{ dose }}</small>
        </div>
        <div class="col-3">
            <div>
                <MathEval :expression="`(${dose} * ${weight} kg)/(${presentation})`"></MathEval>
            </div>
            <small class="text-muted">{{ presentation }}</small>
        </div>
    </div>
</template>
