<template>
  <div class="home">
    <b-card title="Drug Doses">
      <small>
        Doses are for an average adult. They are provided as a guide to the usual range of doses for fit ASA1/2
        adult patients only
        <a
          href="https://www.e-lfh.org.uk/e-learning-sessions/rcoa-novice/content/e_library/drugs/ANAESTHETIC_DRUG_CRIB_SHEET-8.pdf"
        >source.</a>Morbidly Obese patients will need
        <a href="https://doi.org/10.1016/j.bjae.2018.09.001">dose adjustments</a>
        <b-alert show="show" variant="danger" v-if="age&lt;18">Adult Doses Only</b-alert>
        <b-alert show="show" variant="danger" v-if="ASA&gt;2">ASA 1-2 only</b-alert>
      </small>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Role</th>
              <th scope="col">Dose</th>
              <th scope="col">Presentation</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="drug in drugs">
              <th scope="row" v-bind:style="drug.colour()">{{drug._name}}</th>
              <td>{{drug._description}}</td>
              <td>
                <span v-html="drug.dose(weight)"></span>
              </td>
              <td>
                <span v-html="drug.presentation(weight)"></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </b-card>
  </div>
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
    age: get("patient/age"),
    ASA: get("patient/asa")
  },
};
</script>