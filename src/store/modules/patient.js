import pathify from 'vuex-pathify';
import { make, sync } from 'vuex-pathify';
import * as math from 'mathjs'
import axios from 'axios';
import _ from 'lodash'

var moment = require('moment');

const state = {
    dob: 0,
    height: 0,
    weight: 0,
    sex: 'm',
    asa: 1,

};

const getters = {
    ...make.getters(state),

    bmi: state => {
        return parseInt(
            state.weight / (((state.height / 100) * state.height) / 100)
        );
    },

    bmi_category: (state, getters) => {
        var category = "undefined";
        if (getters.bmi < 15) category = "Very severely underweight";
        if (getters.bmi >= 15 && getters.bmi <= 16)
            category = "Severely underweight";
        if (getters.bmi >= 16 && getters.bmi <= 18.5) category = "Underweight";
        if (getters.bmi >= 18.5 && getters.bmi <= 25) category = "Healthy weight";
        if (getters.bmi >= 25 && getters.bmi <= 30) category = "Overweight";
        if (getters.bmi >= 30 && getters.bmi <= 35)
            category = "Obese Class I (Moderately obese)";
        if (getters.bmi >= 35 && getters.bmi <= 40)
            category = "Obese Class II (Severely obese)";
        if (getters.bmi >= 40 && getters.bmi <= 45)
            category = "Obese Class III (Very severely obese)";
        if (getters.bmi >= 45 && getters.bmi <= 50)
            category = "Obese Class IV (Morbidly Obese)";
        if (getters.bmi >= 50 && getters.bmi <= 60)
            category = "Obese Class V (Super Obese)";
        if (getters.bmi >= 60) category = "Obese Class VI (Hyper Obese)";

        return category;
    },

    age: (state) => {
        return moment().diff(moment(state.dob), 'years');
    },


    IBW: (state) => {
        /*
        Ideal body weight (IBW) (men) = 50 kg + 2.3 kg x (height, in - 60)
        Ideal body weight (IBW) (women) = 45.5 kg + 2.3 kg x  (height, in - 60) */
        var height = state.height * 0.393701;
        var IBW = 0;

        if (state.sex == "m") {
            IBW = 50 + (2.3 * (height - 60));
        } else {
            IBW = 45.5 + (2.3 * (height - 60));
        }

        return math.format(math.eval(IBW + "kg"), 3);
    },

    ETT_length: (state) => {
        // Chula formula: ETT depth = 0.1 * [height (cm)] + 4
        return math.format(math.eval(4 + (state.height * 0.1) + " cm"), 2);
    },

    Tidal_volume_target: (state) => { //tidal volume target = 6-8 mL/kg IBW
        return math.format(math.eval(6 * state.weight + " ml"), 2) + " - " + math.format(math.eval(8 * state.weight + " ml"), 2);
    }
};





const mutations = { ...make.mutations(state) };

export default {
    namespaced: true,
    state,
    getters,

    mutations
};