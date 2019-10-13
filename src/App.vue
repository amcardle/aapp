<template lang="pug">
html
  head
  body#app
    header
      b-navbar(toggleable='md', type='dark', variant='dark')
        b-navbar-toggle(target='nav_collapse')
        b-navbar-brand(to='/') MedTool
        b-collapse#nav_collapse(is-nav='')
          b-navbar-nav
            b-nav-item(href='#', to='/quickmaths') Quick Maths
            b-nav-item(href='#', to='/opiatedoseconverter') Opiate Converter
            b-nav-item(href='#', to='/about') About
            b-nav-item-dropdown(text='Links', right='')
              b-dropdown-item(href='https://www.e-lfh.org.uk/e-learning-sessions/rcoa-novice/home.html') RCoA Novice Guides
              b-dropdown-divider
              b-dropdown-item(href='https://www.aagbi.org/sites/default/files/QRH_complete_January_2019.pdf') QRH
              b-dropdown-item(href='https://das.uk.com/files/das2015intubation_guidelines.pdf') DAS Guidelines
              b-dropdown-item(href='https://www.e-lfh.org.uk/e-learning-sessions/rcoa-novice/content/e_library/drugs/ANAESTHETIC_DRUG_CRIB_SHEET-8.pdf') Basic Anaesthetic Drugs
              b-dropdown-divider
              b-dropdown-item(href='http://www.sortsurgery.com/') Surgical Outcome Risk Tool (SORT)
              b-dropdown-item(href='http://www.riskprediction.org.uk/index-pp.php') P-POSSUM
              b-dropdown-item(href='https://riskcalculator.facs.org/RiskCalculator/') NSQIP Surgical Risk Calculator
              b-dropdown-item(href='http://data.nela.org.uk/riskcalculator/') NELA Risk Calculator
              b-dropdown-item(href='https://www.mdcalc.com/ariscat-score-postoperative-pulmonary-complications') ARISCAT Score
            b-nav-item-dropdown(text='QRH', right='')
              b-dropdown-item(href='https://www.aagbi.org/sites/default/files/QRH_1-1_Key_basic_plan_v1.pdf', target='_blank', title='1.1 Key basic plan') 1-1 Key basic plan
              b-dropdown-item(href='https://www.aagbi.org/sites/default/files/QRH_2-1_Cardiac_arrest_Revised_v1.pdf', target='_blank', title='2.1 Cardiac Arrest Revised') 2-1 Cardiac Arrest 
              b-dropdown-item(href='https://www.aagbi.org/sites/default/files/QRH_2-2_Hypoxia-desaturation-cyanosis_v1.pdf', target='_blank', title='2.2 Hypoxia desaturation cyanosis') 2-2 Hypoxia desaturation cyanosis
              b-dropdown-item(href='https://www.aagbi.org/sites/default/files/QRH_2-3_Increased_airway_pressure_v1.pdf', target='_blank', title='2.3 Increased airway') 2-3 Increased Airway Pressure
              b-dropdown-item(href='https://www.aagbi.org/sites/default/files/QRH_2-4_Hypotension_v1.pdf', target='_blank', title='2.4 Hypotension') 2-4 Hypotension
              b-dropdown-item(href='https://www.aagbi.org/sites/default/files/QRH_2-5_Hypertension_v1.pdf', target='_blank', title='2.5 Hypertension') 2-5 Hypertension
              b-dropdown-item(href='https://www.aagbi.org/sites/default/files/QRH_2-6_Bradycardia_v1.pdf', target='_blank', title='2-6 Bradycardia') 2-6 Bradycardia
              b-dropdown-item(href='https://www.aagbi.org/sites/default/files/QRH_2-7_Tachycardia_v1.pdf', target='_parent', title='2-7 Tachycardia') 2-7 Tachycardia
              b-dropdown-item(href='https://www.aagbi.org/sites/default/files/QRH_2-8_Perioperative_hyperthermia_v1.pdf', target='_blank', title='2-8 Perioperative hyperthermia') 2-8 Perioperative hyperthermia
              b-dropdown-item(href='https://www.aagbi.org/sites/default/files/QRH_3-1_Anaphylaxis_v3.pdf', target='_blank') 3-1 Anaphylaxis
              b-dropdown-item(href='https://www.aagbi.org/sites/default/files/QRH_3-2_Massive_blood_loss_v2.pdf', target='_blank', title='3-2 Massive blood loss updated') 3-2 Massive blood loss
              b-dropdown-item(href='https://www.aagbi.org/sites/default/files/QRH_3-3_Cant_intubate_cant_oxygenate_CICO_v1.pdf', target='_blank', title="3-3 Can't intubate, can't oxygenate (CICO)") 3-3 Can't intubate, can't oxygenate (CICO)
              b-dropdown-item(href='https://www.aagbi.org/sites/default/files/QRH_3-4_Bronchospasm_v2.pdf', target='_blank') 3-4 Bronchospasm
              b-dropdown-item(href='https://www.aagbi.org/sites/default/files/QRH_3-5_Circulatory_embolus_v1.pdf', target='_blank', title='3-5 Circulatory embolus') 3-5 Circulatory embolus
              b-dropdown-item(href='https://www.aagbi.org/sites/default/files/QRH_3-6_Laryngospasm_and_stridor_v1.pdf', target='_blank', title='3-6 Laryngospasm and stridor') 3-6 Laryngospasm and stridor
              b-dropdown-item(href='https://www.aagbi.org/sites/default/files/QRH_3-7_Patient_fire_v1.pdf', target='_blank', title='3-7 Patient fire') 3-7 Patient fire
              b-dropdown-item(href='https://www.aagbi.org/sites/default/files/QRH_3-8_Malignant_hyperthermia_crisis_v1.pdf', target='_blank', title='3-8 Malignant hyperthermia crisis') 3-8 Malignant hyperthermia crisis
              b-dropdown-item(href='https://www.aagbi.org/sites/default/files/QRH_3-9_Cardiac_tamponade_v1.pdf', target='_blank', title='3-9 Cardiac tamponade') 3-9 Cardiac tamponade
              b-dropdown-item(href='https://www.aagbi.org/sites/default/files/QRH_3-10_Local_anaesthetic_toxicity_v1.pdf', target='_blank', title='3-10 Local anaesthetic toxicity') 3-10 Local anaesthetic toxicity
              b-dropdown-item(href='https://www.aagbi.org/sites/default/files/QRH_3-11_High_central_neuraxial_block_v1.pdf', target='_blank', title='3-11 High central neuraxial block') 3-11 High central neuraxial block
              b-dropdown-item(href='https://www.aagbi.org/sites/default/files/QRH_3-12_Cardiac_ischaemia_v1.pdf', target='_blank', title='3-12 Cardiac ischaemia') 3-12 Cardiac ischaemia
              b-dropdown-item(href='https://www.aagbi.org/sites/default/files/QRH_3-13_Neuroprotection_cardiac_arrest_v1.pdf', target='_blank', title='3-13 Neuroprotection following cardiac arrest') 3-13 Neuroprotection following cardiac arrest
              b-dropdown-item(href='https://www.aagbi.org/sites/default/files/QRH_3-14_Sepsis_v1.pdf', target='_blank', title='3-14 Sepsis') 3-14 Sepsis
              b-dropdown-item(href='https://www.aagbi.org/sites/default/files/QRH_4-1_Mains_oxygen_failure_v1.pdf', target='_blank', title='4-1 Mains oxygen failure') 4-1 Mains oxygen failure
              b-dropdown-item(href='https://www.aagbi.org/sites/default/files/QRH_4-2_Mains_electricity_failure_v1.pdf', target='_blank', title='4-2 Mains electricity failure') 4-2 Mains electricity failure
              b-dropdown-item(href='https://www.aagbi.org/sites/default/files/QRH_4-3_Emergency_evacuation_v1_0.pdf', target='_blank', title='4-3 Emergency evacuation') 4-3 Emergency evacuation


          b-nav-text.ml-auto
            b-button.btn.btn-secondary.btn-sm.btn-dark(v-on:click='reloadSW') Reset
            small
              a(v-bind:href='github_link') {{$store.getters.githash.slice(0,5)}}
              |             - {{$store.getters.gitbranch}}
    main.container(role='main')
      div
        router-view

</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap.scss";

html {
  position: relative;
  min-height: 100%;
  font-size: 0.85rem;
}

body > .container {
  padding: 0px 0px 0;
}

.card-body {
  padding-left: 2px;
  padding-right: 2px;
}

.table th {
  padding: 0.3rem;
}

.table td {
  padding: 0.3rem;
}

.drug {
  @extend .row;
  @extend .border-bottom;
}
</style>

<script>

export default {
  name: "about",

  computed: {
    github_link: function () {
      return 'https://github.com/amcardle/medtool/tree/' + this.$store.getters.githash.slice(0, 5);
    }
  },

  methods: {
    reloadSW() {
      localStorage.clear();
      navigator.serviceWorker.getRegistration().then(function (reg) {
        if (reg) {
          reg.unregister().then(function () { window.location.reload(true); });
        } else {
          window.location.reload(true);
        }
      });
    }
  }

};
</script>