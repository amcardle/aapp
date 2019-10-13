import pathify from 'vuex-pathify';
import { make, sync } from 'vuex-pathify';
import * as math from 'mathjs'
import axios from 'axios';
import _ from 'lodash'

var moment = require('moment');

const state = {
    id: "",
    name: "",
    dob: 0,
    height: 0,
    weight: 0,
    sex: 'm',
    asa: 1,
    surgical_grade: 1,
    comorbidities: [],
    upper_lip_bite: null,
    retrognathic: null,
    thyromental: null,
    hyomental: null,
    interincisor: null,
    mallampati: null,
    sternomental: null,
    anatomical_abnormalities: null,
    cervical: null,
    medications: {},
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

    investigations_indicated: (state, getters) => {
        return [
            {
                investigation: "Full Blood Count", indicated:
                    ((state.surgical_grade == 2 && state.asa > 2 && (state.comorbidities.includes("cardiovascular disease") || state.comorbidities.includes("renal disease"))) ||
                        (state.surgical_grade == 3))
                , hint: " "
            },
            {
                investigation: "Kidney Function", indicated:
                    ((state.surgical_grade == 1 && state.comorbidities.includes("aki risk")) ||
                        (state.surgical_grade == 2 && state.asa > 2) ||
                        (state.surgical_grade == 2 && state.asa == 2 && state.comorbidities.includes("aki risk")) ||
                        (state.surgical_grade == 3 && state.asa == 1 && state.comorbidities.includes("aki risk")) ||
                        (state.surgical_grade == 3 && state.asa > 1))
                , hint: " "
            },
            {
                investigation: "Haemostasis", indicated:
                    ((state.surgical_grade > 1 && state.asa > 2 && state.comorbidities.includes("liver disease")))
                , hint: " "
            },
            { investigation: "HbA1c", indicated: (state.comorbidities.includes("diabetes")), hint: "HbA1c required in the last 3 months" },
            { investigation: "Pregnancy Test", indicated: (state.sex == 'f'), hint: "Carry out a pregnancy test with the woman's consent if there is any doubt about whether she could be pregnant" },
            {
                investigation: "ECG", indicated:
                    ((state.surgical_grade == 1 && state.asa > 2) ||
                        (state.surgical_grade == 2 && state.asa == 2 && (state.comorbidities.includes("cardiovascular disease") || state.comorbidities.includes("renal disease") || state.comorbidities.includes("diabetes"))) ||
                        (state.surgical_grade == 2 && state.asa > 2) ||
                        (state.surgical_grade == 3 && state.asa == 1 && getters.age > 65) ||
                        (state.surgical_grade == 3 && state.asa > 1))
                , hint: " "
            },
            {
                investigation: "Lung function/arterial blood gas", indicated:
                    (state.surgical_grade > 1 && state.asa > 2)
                , hint: "Consider seeking advice from a senior anaesthetist as soon as possible after assessment for people who are ASA grade 3 or 4 due to known or suspected respiratory disease"
            },
            { investigation: "Echocardiography", indicated: (state.comorbidities.includes("heart failure")), hint: "Consider resting echocardiography if the person has signs or symptoms of heart failure" },
        ]
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
    },

    cMAC_size: (state) => {
        if (state.weight < 5) {
            return "cLMA 1 - Cuff <= 4 ml";
        } else if (state.weight < 10) {
            return "cLMA 1.5 - Cuff <= 7 ml";
        } else if (state.weight < 20) {
            return "cLMA 2 - Cuff <= 10 ml";
        } else if (state.weight < 30) {
            return "cLMA 2.5 - Cuff <= 14 ml";
        } else if (state.weight < 50) {
            return "cLMA 3 - Cuff <= 20 ml";
        } else if (state.weight < 70) {
            return "cLMA 4 - Cuff <= 30 ml";
        } else if (state.weight < 100) {
            return "cLMA 5 - Cuff <= 40 ml";
        } else {
            return "cLMA 6 - Cuff <= 50 ml";
        }
    },
};


const actions = {
    addMedication({ state, commit }, payload) {
        var medications = { ...state.medications };
        medications[payload.name] = 123;
        commit("SET_MEDICATIONS", medications);


        axios.get(`https://api.fda.gov/drug/ndc.json?search=generic_name:"${payload.name}"`).then((response) => {
            var medications = state.medications;

            var classes = response.data.results[0].pharm_class.map(x => { return x.substr(0, x.indexOf('[')) });


            medications[payload.name] = { classes: classes }
            commit("SET_MEDICATIONS", medications);
            //result.data.results[0].pharm_class
        });

    }
};


const mutations = { ...make.mutations(state) };

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};