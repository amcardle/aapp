import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import pathify from 'vuex-pathify';
import { make } from 'vuex-pathify';
import patient from './modules/patient';

Vue.use(Vuex);

const state = {};

const mutations = make.mutations(state);

export default new Vuex.Store({
    modules: {
        patient
    },
    getters: {
        githash: () => {
            return GITVERSION;
            //return "undefined"
        },
        gitbranch: () => {
            return GITBRANCH;
        }
    },
    state,
    mutations: {
        ...mutations,
        loadState(state, new_state) {
            this.replaceState(new_state);
        }
    },
    actions: {},
    plugins: [createPersistedState(), pathify.plugin]
});
