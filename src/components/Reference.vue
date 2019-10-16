<template>
    <!-- DRUG LIST -->
    <b-card title="Reference">
        <div class="container">

          <!-- https://www.mdcalc.com/ideal-body-weight-adjusted-body-weight#evidence -->
            <div class="row" v-show="sex=='m'">
              Ideal Body Weight (Devine) - <MathEval :expression="`50 kg + (2.3 kg * ((${height}/2.54) - 60))`"></MathEval>
            </div>
            <div class="row" v-show="sex=='f'">
              Ideal Body Weight (Devine) - <MathEval :expression="`45.5 kg + (2.3 kg * ((${height}/2.54) - 60 ))`"></MathEval>
            </div>

        </div>
    </b-card>
</template>

<script>
import { get } from 'vuex-pathify'
import MathEval from '@/components/MathEval.vue'

export default {
  name: 'PatientInfo',

  data () {
    return {
    }
  },
  components: { MathEval },
  computed: {
    dob: get('patient/dob'),
    height: get('patient/height'),
    weight: get('patient/weight'),
    sex: get('patient/sex'),
    bmi: get('patient/bmi'),
    asa: get('patient/asa'),
    age: get('patient/age')
  }
}
</script>
