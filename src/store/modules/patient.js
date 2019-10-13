import pathify from 'vuex-pathify';
import { make, sync } from 'vuex-pathify';
import * as math from 'mathjs';
import axios from 'axios';
import _ from 'lodash';

var moment = require('moment');

const state = {
    dob: 0,
    height: 0,
    weight: 0,
    sex: 'm',
    asa: 1
};

const getters = {
    ...make.getters(state)
};

const mutations = { ...make.mutations(state) };

export default {
    namespaced: true,
    state,
    getters,
    mutations
};
