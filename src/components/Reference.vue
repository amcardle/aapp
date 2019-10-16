<template>
    <!-- DRUG LIST -->
    <b-card title="Reference">
        <div class="container">
            <div class="row">
            </div>
        </div>
    </b-card>
</template>

<script>
import { get } from 'vuex-pathify'

export default {
  name: 'PatientInfo',

  data () {
    return {
    }
  },
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
