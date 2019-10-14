<template>
<div class="home">
    <b-card title="Opiate Dose Converter">
        <div class="row">
            <div class="col">
                <b-input-group class="mb-2" size="s" prepend="Morphine Oral" append="mg">
                    <b-form-input v-on:input="soral_morphine"></b-form-input>
                </b-input-group>
            </div>
            <div class="col-4">{{roundup(oral_morphine)}} mg</div>
        </div>
        <div class="row">
            <div class="col">
                <b-input-group class="mb-2" size="s" prepend="Morphine IV" append="mg">
                    <b-form-input v-on:input="siv_morphine"></b-form-input>
                </b-input-group>
            </div>
            <div class="col-4">{{roundup(iv_morphine)}} mg</div>
        </div>
        <div class="row">
            <div class="col">
                <b-input-group class="mb-2" size="s" prepend="Codeine" append="mg">
                    <b-form-input v-on:input="scodeine"></b-form-input>
                </b-input-group>
            </div>
            <div class="col-4">{{roundup(codeine)}} mg</div>
        </div>
        <div class="row">
            <div class="col">
                <b-input-group class="mb-2" size="s" prepend="Dihydrocodeine" append="mg">
                    <b-form-input v-on:input="sdihydrocodeine"></b-form-input>
                </b-input-group>
            </div>
            <div class="col-4">{{roundup(dihydrocodeine)}} mg</div>
        </div>
        <div class="row">
            <div class="col">
                <b-input-group class="mb-2" size="s" prepend="Hydromorphone" append="mg">
                    <b-form-input v-on:input="shydromorphone"></b-form-input>
                </b-input-group>
            </div>
            <div class="col-4">{{roundup(hydromorphone)}} mg</div>
        </div>
        <div class="row">
            <div class="col">
                <b-input-group class="mb-2" size="s" prepend="Oxycodone Oral" append="mg">
                    <b-form-input v-on:input="soral_oxycodone"></b-form-input>
                </b-input-group>
            </div>
            <div class="col-4">{{roundup(oral_oxycodone)}} mg</div>
        </div>
        <div class="row">
            <div class="col">
                <b-input-group class="mb-2" size="s" prepend="Oxycodone IV" append="mg">
                    <b-form-input v-on:input="siv_oxycodone"></b-form-input>
                </b-input-group>
            </div>
            <div class="col-4">{{roundup(iv_oxycodone)}} mg</div>
        </div>
        <div class="row">
            <div class="col">
                <b-input-group class="mb-2" size="s" prepend="Tapentadol" append="mg">
                    <b-form-input v-on:input="stapentadol"></b-form-input>
                </b-input-group>
            </div>
            <div class="col-4">{{roundup(tapentadol)}} mg</div>
        </div>
        <div class="row">
            <div class="col">
                <b-input-group class="mb-2" size="s" prepend="Tramadol" append="mg">
                    <b-form-input v-on:input="stramadol"></b-form-input>
                </b-input-group>
            </div>
            <div class="col-4">{{roundup(tramadol)}} mg</div>
        </div>
        <div class="row">
            <div class="col">
                <b-input-group class="mb-2" size="s" prepend="Fentanyl" append="ug">
                    <b-form-input v-on:input="sfentanyl"></b-form-input>
                </b-input-group>
            </div>
            <div class="col-4">{{roundup(fentanyl)}} ug</div>
        </div>
    </b-card>
</div>
</template>

<style lang="scss">
.col-sm {
    padding-bottom: 5px;
}
</style>

<script>
import { get } from 'vuex-pathify'

export default {
  name: 'OpiateDoseConverter',

  data () {
    return {
      MED: '0 mg',
      roundup (num) {
        return +`${Math.round(`${num}e+2`)}e-2`
      }
    }
  },
  computed: {
    weight: get('patient/weight'),
    codeine () {
      return this.MED * 10
    },
    dihydrocodeine () {
      return this.MED * 10
    },
    hydromorphone () {
      return this.MED * 0.13
    },
    oral_morphine () {
      return this.MED * 1
    },
    iv_morphine () {
      return this.MED * 0.3333
    },
    oral_oxycodone () {
      return this.MED * 0.5
    },
    iv_oxycodone () {
      return this.MED * 0.3333
    },
    tapentadol () {
      return this.MED * 2.5
    },
    tramadol () {
      return this.MED * 6.7
    },
    fentanyl () {
      return this.MED * (200 / 30)
    }
  },
  methods: {
    scodeine (value) {
      this.MED = value / 10
    },
    sdihydrocodeine (value) {
      this.MED = value / 10
    },
    shydromorphone (value) {
      this.MED = value / 0.13
    },
    soral_morphine (value) {
      this.MED = value / 1
    },
    siv_morphine (value) {
      this.MED = value / 0.3333
    },
    soral_oxycodone (value) {
      this.MED = value / 0.5
    },
    siv_oxycodone (value) {
      this.MED = value / 0.3333
    },
    stapentadol (value) {
      this.MED = value / 2.5
    },
    stramadol (value) {
      this.MED = value / 6.7
    },
    sfentanyl (value) {
      this.MED = value / (200 / 30)
    }
  }
}
</script>
