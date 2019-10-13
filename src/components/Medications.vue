<template lang="pug">
.home
  b-card(title='Medications')
    ul
      li(v-for="(value, name) in medications")
        span(v-html="renderMedName(name)")
        ul
          li(v-for="v in value.classes" v-if="renderMedClass(v)")
            span(v-html="renderMedClass(v)")

    b-form(@submit="addMedication")
      .row
        .col
          b-form-input(v-model="inputBox", v-on:keyup.enter="submit")
        .col-4
          b-button(v-on:click="addMedication", type="submit") Add Medication
</template>

<style lang="scss">
.col-sm {
  padding-bottom: 5px;
}
</style>


<script>
import { mapState } from 'vuex'
import { sync, get } from 'vuex-pathify';
import store from "@/store"
import _ from 'lodash';
import Fuse from 'fuse.js'

var classWarnings = [
  {
    classes: ["Angiotensin Converting Enzyme Inhibitor"],
    medications: [],
    warning: "ACE inhibitors may cause profound hypotension during anaesthesia due to their effect on vascular tone. Because of this they are often omitted preoperatively, even if taken the night before. However, the decision to do this should be balanced against the severity of the patient’s cardiac disease. It may be better to continue them in a patient with markedly impaired ventricular function or heart failure. Direct-acting alpha agonists, such as metaraminol, are better than ephedrine at treating hypotension caused by ACE inhibitors."
  },
  {
    classes: ["Adrenergic alpha-Antagonists"],
    medications: [],
    warning: "Alpha antagonists are frequently prescribed to relieve prostatic symptoms and may also cause profound hypotension. However, they are also used for hypertension and hence their indication should be established prior to omitting them."
  },
  {
    classes: [],
    medications: ["Reserpine", "Alpha methyl dopa", "Verapamil"],
    warning: "Known to decrease MAC"
  },
  {
    classes: ["Monoamine Oxidase Inhibitor"],
    medications: [],
    warning: "The use of ephedrine in patients taking Monoamine Oxidase Inhibitors (MAOI) has been reported to cause convulsions. Although MAOI are rarely used today, they are still prescribed in severe depression which does not respond to newer agents. MAOI should be stopped two weeks prior to elective surgery. Prior psychiatrist consultation should be sought for appropriate substitutes. Avoid indirectly acting inotropes such as ephedrine. Use phenylephrine if required, Avoid use of pethidine in patients on MAOI"
  },
  {
    classes: [],
    medications: ["Alcohol"],
    warning: "Known to increase MAC"
  },
  {
    classes: [],
    medications: ["Gentamicin", "Magnesium", "Furosemide", "cyclosporin", "cyclophosphamide", "Carbamazepine"],
    warning: "Potentiate neuromuscular blockade"
  },
  {
    classes: [],
    medications: ["Phenytoin", "Carbamazepine", "Azathioprine"],
    warning: "Antagonise neuromuscular blockade"
  },
  {
    classes: [],
    medications: ["methyldopa", "reserpine", "guanethidine"],
    warning: "may make indirect acting agents such as ephedrine or metaraminol ineffective for treatment of hypotension, use direct acting agents such as phenylephrine"
  },
  {
    classes: [],
    medications: ["phenylephrine"],
    warning: "Hypertension - Restrict concentration of phenylephrine drops to 2.5 % or less for ophthalmic surgery, risk of arrythmia"
  },
  {
    classes: ["Cardiac Glycoside"],
    //medications: ["Digoxin"],
    warning: "Arrythmias with low potassium due to hyperventilation or other causes intraoperatively"
  },
  {
    classes: ["Platelet Inhibitor"],
    medications: ["Aspirin"],
    warning: "Aspirin should be stopped at least forty eight hours prior to elective surgery, The duration of stoppage will have to be longer if the daily dose is greater than 300 mg, Platelet count should be at least 100 000 mm-3. Patients with coronary stents should have their anti-platelet therapy continued for periods ranging from three months –one year depending upon the type of stent. The relative benefit versus risk of centri-neuraxial blocks in such patients should be carefully evaluated."
  },
  {
    classes: [],
    medications: ["Clopidogrel"],
    warning: "Clopidogrel should be stopped 7 days before elective surgery, Patients with coronary stents should have their anti-platelet therapy continued for periods ranging from three months –one year depending upon the type of stent. The relative benefit versus risk of centri-neuraxial blocks in such patients should be carefully evaluated."
  },
  {
    classes: [],
    medications: ["Warfarin"],
    warning: "Warfarin should be stopped at least 3 days before elective surgery. International normalized ratio (INR) should be within acceptable range. Appropriate short-term substitutes (e.g. heparin) should be maintained for anticoagulation which can be titrated peri-operatively"
  },
  {
    classes: [],
    medications: ["dabigatran", "rivaroxaban", "apixaban", "edoxaban"],
    warning: "Warfarin should be stopped at least 3 days before elective surgery. International normalized ratio (INR) should be within acceptable range. Appropriate short-term substitutes (e.g. heparin) should be maintained for anticoagulation which can be titrated peri-operatively"
  },
  {
    classes: [],
    medications: ["OCP"],
    warning: "Hypercoagulability is also a concern as the risk of deep vein thrombosis increases after 30 min of a general anaesthetic. Oral contraceptive pills especially the oestrogen containing preparations increase the chances of hypercoagulability. Implication: Patients on oral contraceptives should have appropriate precautions against deep vein thrombosis peri-operatively, if they cannot be swapped safely for progesterone containing preparations."
  },
  {
    classes: ["Loop Diuretic"],
    medications: [],
    warning: "Hypokalaemia, Hypocalcaemia, Hyponatremia"
  },
  {
    classes: ["beta-Adrenergic Blocker"],
    medications: [],
    warning: "Intra-Operative Hypotension, more prone to bradyarrhythmias. Hyperkalaemia"
  },
  {
    classes: ["Aldosterone Antagonist"],
    medications: [""],
    warning: "Hyperkalaemia"
  },
  {
    classes: [],
    medications: ["Prilocaine"],
    warning: "Prilocaine in large doses can induce Methaemoglobinaemia"
  },
  {
    classes: [],
    medications: ["Dapsone"],
    warning: "Prilocaine in large doses can induce Methaemoglobinaemia"
  },
  {
    classes: ["Corticosteroid"],
    medications: [],
    warning: "It is recommended that supplemental cortisol to cover the stress response be given perioperatively, if the patient has been on >10 mg prednisolone daily (or equivalent steroids) within the last three months"
  },




  {
    classes: [],
    medications: [],
    warning: ""
  },
]


var renderMedClass = function (c) {
  var options = {
    //tokenize: true,
    //matchAllTokens: true,
    threshold: 0.12,
    location: 0,
    distance: 10,
    maxPatternLength: 100,
    minMatchCharLength: 1,
    keys: [
      "classes"
    ]
  };
  var fuse = new Fuse(classWarnings, options); // "list" is the item array
  var warning = fuse.search(c);

  if (warning.length > 0) {
    return `${c} - <i>${warning[0].classes}<//i> - <b>${warning[0].warning}<//b>`
  } else {
    return c
  }
}

var renderMedName = function (n) {
  var options = {
    threshold: 0.05,
    location: 0,
    distance: 10,
    maxPatternLength: 64,
    minMatchCharLength: 1,
    keys: [
      "medications"
    ]
  };
  var fuse = new Fuse(classWarnings, options); // "list" is the item array
  var warning = fuse.search(n);

  if (warning.length > 0) {
    return `${n} - <b>${warning[0].warning}<//b>`
  } else {
    return n
  }

  if (warning) {
    return `${n} - <b>${warning.warning}<//b>`
  } else {
    return n
  }

}

export default {
  name: "Medications",


  data: function () { return { inputBox: "", renderMedClass: renderMedClass, renderMedName: renderMedName } },
  computed: {
    medications: get('patient/medications')
  },
  methods: {
    addMedication: function (value) {
      value.preventDefault()
      store.dispatch("patient/addMedication", { name: this.inputBox })
      this.inputBox = ""
    }
  }
};
</script>