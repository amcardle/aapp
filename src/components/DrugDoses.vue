<template lang="pug">
.home
  b-card(title='Drug Doses')
    small
      | Doses are for an average adult. They are provided as a guide to the usual range of doses for fit ASA1/2
      | adult patients only 
      a(href='https://www.e-lfh.org.uk/e-learning-sessions/rcoa-novice/content/e_library/drugs/ANAESTHETIC_DRUG_CRIB_SHEET-8.pdf') source.
      | Morbidly Obese patients will need 
      a(href="https://doi.org/10.1016/j.bjae.2018.09.001") dose adjustments
    .table-responsive
      table.table
        thead
          tr
            th(scope='col') Name
            th(scope='col') Role
            th(scope='col') Dose
            th(scope='col') Presentation
        tbody
          tr(v-for='drug in drugs')
            th(scope='row', v-bind:style='drug.colour()') {{drug._name}}
            td {{drug._description}}
            td
              span(v-html='drug.dose(weight)')
            td
              span(v-html='drug.presentation(weight)')

</template>


<style lang="scss">
</style>


<script>
import { mapState } from 'vuex'
import { sync, get } from 'vuex-pathify';
import drugs from '../reference/drugs'
export default {
  name: "DrugDoses",
  data: function () {
    return { drugs: drugs }
  },

  computed: {
    height: get("patient/height"),
    weight: get("patient/weight"),
  },
};
</script>