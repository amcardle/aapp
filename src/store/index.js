/* eslint-disable camelcase */
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import pathify, { make } from 'vuex-pathify'

import patient_module from './modules/patient.js'

Vue.use(Vuex)

const state = {}

const mutations = make.mutations(state)

export default new Vuex.Store({
  modules: {
    patient: patient_module
  },
  getters: {
    githash: () => {
      // return GITVERSION;
      return 'undefined'
    },
    gitbranch: () => {
      // return GITBRANCH
      return 'undefined'
    }
  },
  state,
  mutations: {
    ...mutations,
    loadState (state, new_state) {
      this.replaceState(new_state)
    }
  },
  actions: {},
  plugins: [createPersistedState(), pathify.plugin]
})
