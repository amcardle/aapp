<template>
<div class="home">
    <b-card title="Patient Details">
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <b-input-group class="mb-2" size="s" prepend="DOB">
                        <b-form-input v-model="dob" type="date"></b-form-input>
                    </b-input-group>
                </div>
                <div class="col-sm">{{age}} years</div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <b-input-group class="mb-2" size="s" prepend="Height" append="cm">
                        <b-form-input v-model="height" type="number"></b-form-input>
                    </b-input-group>
                </div>
                <div class="col-sm">
                    <b-input-group class="mb-2" size="s" prepend="Weight" append="kg" model="weight">
                        <b-form-input v-model="weight" type="number"></b-form-input>
                    </b-input-group>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <b-button-group>
                        <b-button :pressed="sex == 'm'" v-on:click="sex='m'">Male</b-button>
                        <b-button :pressed="sex == 'f'" v-on:click="sex='f'">Female</b-button>
                    </b-button-group>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <b-button-group>
                        <b-button :pressed="asa == 1" v-on:click="asa=1">ASA 1</b-button>
                        <b-button :pressed="asa == 2" v-on:click="asa=2">ASA 2</b-button>
                        <b-button :pressed="asa == 3" v-on:click="asa=3">ASA 3</b-button>
                        <b-button :pressed="asa == 4" v-on:click="asa=4">ASA 4</b-button>
                        <b-button :pressed="asa == 5" v-on:click="asa=5">ASA 5</b-button>
                        <b-button :pressed="asa == 6" v-on:click="asa=6">ASA 6</b-button>
                        <b-btn v-b-toggle.collapse1="" variant="primary">?</b-btn>
                    </b-button-group>
                    <div>
                        <b-collapse class="mt-2" id="collapse1">
                            <b-card>
                                <div class="card-text">
                                    <b-table responsive="" :items="asa_grades"></b-table>
                                </div>
                            </b-card>
                        </b-collapse>
                    </div>
                </div>
            </div>
        </div>
    </b-card>
</div>
</template>

<script>
import { sync, get } from 'vuex-pathify'
import asa_grades from '../reference/asa_grades'

export default {
  name: 'PatientInfo',

  data () {
    return {
      asa_grades
    }
  },
  computed: {
    dob: sync('patient/dob'),
    height: sync('patient/height'),
    weight: sync('patient/weight'),
    sex: sync('patient/sex'),
    bmi: get('patient/bmi'),
    asa: sync('patient/asa'),
    age: get('patient/age')
  }
}
</script>
