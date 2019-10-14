import { make } from 'vuex-pathify'
var moment = require('moment')

const state = {
  dob: 0,
  height: 0,
  weight: 0,
  sex: 'm',
  asa: 1
}

const getters = {
  ...make.getters(state),

  age: state => {
    return moment().diff(moment(state.dob), 'years')
  }
}

const mutations = { ...make.mutations(state) }

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
