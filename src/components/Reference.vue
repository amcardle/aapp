<template>
    <!-- DRUG LIST -->
    <b-card title="Reference">
        <div class="container">
          <ul>
          <li>Weight</li>
          <ul>
          <!-- https://www.mdcalc.com/ideal-body-weight-adjusted-body-weight#evidence -->
            <li v-show="sex=='m' && age > 16">
              Ideal Body Weight (Devine) : <MathEval :expression="`50 kg + (2.3 kg * ((${height}/2.54) - 60))`"></MathEval>
            </li>
            <li  v-show="sex=='f' && age > 16">
              Ideal Body Weight (Devine) : <MathEval :expression="`45.5 kg + (2.3 kg * ((${height}/2.54) - 60 ))`"></MathEval>
            </li>
            <li  v-show="sex=='m' && age > 16">
              Adjusted Body Weight (Devine) : <MathEval :expression="`(50 kg + (2.3 kg * ((${height}/2.54) - 60))) + 0.4 * (${weight} kg - (50 kg + (2.3 kg * ((${height}/2.54) - 60))))`"></MathEval>
            </li>
            <li v-show="sex=='f' && age > 16">
              Adjusted Body Weight (Devine) : <MathEval :expression="`(45.5 kg + (2.3 kg * ((${height}/2.54) - 60))) + 0.4 * (${weight} kg - (45.5 kg + (2.3 kg * ((${height}/2.54) - 60))))`"></MathEval>
            </li>
            </ul>

            <li>Airway</li>
            <ul>
            <li  v-show="age > 20">
              ETT Tube Length (Chula) : <MathEval :expression="`0.1 cm * ${height} + 4 cm`"></MathEval>
            </li>

            <!--- https://www.mdcalc.com/pediatric-endotracheal-tube-ett-size#evidence --->
            <li  v-show="age<12">
            Paediatric Uncuffed Tube Size : <MathEval :expression="`(${age} / 4) + 4`"></MathEval> mm
            </li>

            <li  v-show="age<12">
            Paediatric Cuffed Tube Size : <MathEval :expression="`(${age} / 4) + 3`"></MathEval> mm
            </li>
            </ul>

            <li>Ventilation</li>
            <ul>
            <li  v-show="age > 20">
              Tidal Volume : <MathEval :expression="`${ideal_body_weight} * 6 ml/kg`"></MathEval> - <MathEval :expression="`${ideal_body_weight} * 8 ml/kg`"></MathEval>
            </li>
            </ul>
</ul>
        </div>
    </b-card>
</template>

<script>
import { get } from 'vuex-pathify'
import MathEval from '@/components/MathEval.vue'
import * as math from 'mathjs'

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
    age: get('patient/age'),
    ideal_body_weight () {
      if (this.sex === 'm') {
        return math.format(math.eval(`50 kg + (2.3 kg * ((${this.height}/2.54) - 60))`), 4)
      } else {
        return math.format(math.eval(`45.5 kg + (2.3 kg * ((${this.height}/2.54) - 60 ))`), 4)
      }
    }
  }
}
</script>
