<template lang="pug">
.home
  b-card(title='Patient Details')
    .container
      .row
        .col-sm
          b-input-group.mb-2(size='s', prepend='DOB')
            b-form-input(v-model='dob', type='date')
      .row
        .col-sm
          b-input-group.mb-2(size='s', prepend='Height', append='cm')
            b-form-input(v-model='height', type='number')
        .col-sm
          b-input-group.mb-2(size='s', prepend='Weight', append='kg', model='weight')
            b-form-input(v-model='weight', type='number')
        .col-sm
      .row
        .col-sm
          b-button-group
            b-button(:pressed="sex == 'm'", v-on:click="sex='m'") Male
            b-button(:pressed="sex == 'f'", v-on:click="sex='f'") Female
      .row
        .col-sm
          b-button-group
            b-button(:pressed='asa == 1', v-on:click='asa=1') ASA 1
            b-button(:pressed='asa == 2', v-on:click='asa=2') ASA 2
            b-button(:pressed='asa == 3', v-on:click='asa=3') ASA 3
            b-button(:pressed='asa == 4', v-on:click='asa=4') ASA 4
            b-button(:pressed='asa == 5', v-on:click='asa=5') ASA 5
            b-button(:pressed='asa == 6', v-on:click='asa=6') ASA 6
            b-btn(v-b-toggle.collapse1='', variant='primary') ?
          div
            b-collapse#collapse1.mt-2
              b-card
                .card-text
                  b-table(responsive='', :items='asa_grades')

</template>

<script>
import { mapState } from 'vuex'
import { sync, get } from 'vuex-pathify';
import asa_grades from '../reference/asa_grades'

export default {
  name: "PatientInfo",

  data: function () {
    return {      asa_grades: asa_grades,

    }
  },
  computed: {

    dob: sync('patient/dob'),
    height: sync("patient/height"),
    weight: sync("patient/weight"),
    sex: sync("patient/sex"),
    bmi: get('patient/bmi'),
    bmi_category: get('patient/bmi_category'),
    asa: sync('patient/asa'),
    IBW: get('patient/IBW')
  },
};
</script>