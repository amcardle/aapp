<template lang="pug">
.home
  b-card(title='Intubation Difficulty')
    .container
      .row(class="text-center")
        .col-sm
          //Lip Bite
          b-button-group(vertical="")
            b-btn(variant='primary') Lip Bite Test
            b-button(:pressed='upper_lip_bite == 1', v-on:click='upper_lip_bite=1') Lower incisors cross vermillion border
            b-button(:pressed='upper_lip_bite == 2', v-on:click='upper_lip_bite=2') Lower incisors bite lip
            b-button(:pressed='upper_lip_bite == 3', v-on:click='upper_lip_bite=3') Can't bite lip
        .col-sm
          //Retrognathia
          b-button-group(vertical="")
            b-btn(variant='primary', v-b-tooltip.click="'mandible measuring less than 9 cm from the angle of the jaw to the tip of the chin'") Retrognathia
            b-button(:pressed='retrognathic == 0', v-on:click='retrognathic=0') Not retrognathic
            b-button(:pressed='retrognathic == 1', v-on:click='retrognathic=1') Retrognathic
        .col-sm
          //Mallampati
          b-button-group(vertical="")
            b-btn(variant='primary') Mallampati
            b-button(:pressed='mallampati == 0', v-on:click='mallampati=0') 0: soft palate, fauces, uvula, pillars, epiglottis
            b-button(:pressed='mallampati == 1', v-on:click='mallampati=1') 1: soft palate, fauces, uvula, pillars
            b-button(:pressed='mallampati == 2', v-on:click='mallampati=2') 2: soft palate, fauces, uvula
            b-button(:pressed='mallampati == 3', v-on:click='mallampati=3') 3: soft palate, base of uvula
            b-button(:pressed='mallampati == 4', v-on:click='mallampati=4') 4: soft palate not visible at all
        .col-sm
          //Anatomical Abnormalities
          b-button-group(vertical="")
            b-btn(variant='primary') Anatomical Abnormalities
            b-button(:pressed='anatomical_abnormalities == 0', v-on:click='anatomical_abnormalities=0') 0: No Abnormalities
            b-button(:pressed='anatomical_abnormalities == 1', v-on:click='anatomical_abnormalities=1') 1: protruding upper incisors or macroglossia or high arched palate
            b-button(:pressed='anatomical_abnormalities == 2', v-on:click='anatomical_abnormalities=2') 2: micrognathia or inability to align lower incisor with upper incisors
      
      .row(class="text-center")
        .col-sm
          b-input-group.mb-2(size='s', prepend='Thyromental', append='cm')
            b-form-input(v-model='thyromental', type='number')

        .col-sm
          b-input-group.mb-2(size='s', prepend='Hyomental', append='cm')
            b-form-input(v-model='hyomental', type='number')

        .col-sm
          b-input-group.mb-2(size='s', prepend='Interincisor', append='cm')
            b-form-input(v-model='interincisor', type='number')

        .col-sm
          b-input-group.mb-2(size='s', prepend='Sternomental', append='cm')
            b-form-input(v-model='sternomental', type='number')

        .col-sm
          b-input-group.mb-2(size='s', prepend='Cervical', append='d')
            b-form-input(v-model='cervical', type='number')
      b Likelyhood Ratios
      .row(class="text-center")
        .col-sm
          |Lip Bite: {{upper_lip_bite_LR}}
        .col-sm
          |Retrognathia: {{retrognathic_LR}}
        .col-sm
          |Thyromental: {{thyromental_LR}}
        .col-sm
          |Thyromental Height Ratio: {{thyromental_height_ratio_LR}}
        .col-sm
          |Hyomental: {{hyomental_LR}}
      .row(class="text-center")
        .col-sm
          |Interincisor: {{interincisor_LR}}
        .col-sm
          |Mallampati: {{mallampati_LR}}
        .col-sm
          |Sternomental: {{sternomental_LR}}
        .col-sm
          | M-TAC {{M_TAC}}
        .col-sm
          | M-TAC LR {{M_TAC_LR}}
</template>


<script>
import { mapState } from 'vuex'
import { sync, get } from 'vuex-pathify';



export default {
  name: "Intubation-Difficulty",

  data: function () { return {} },
  computed: {
    upper_lip_bite: sync('patient/upper_lip_bite'),

    upper_lip_bite_LR: function () {
      if (this.upper_lip_bite == 3) {
        return 14;
      } else {
        return 0.42;
      }
    },

    retrognathic: sync('patient/retrognathic'),
    retrognathic_LR: function () {
      switch (this.retrognathic) {
        case 1:
          return 6;
        case 0:
          return 0.85;
      }
    },

    thyromental: sync('patient/thyromental'),
    thyromental_LR: function () {
      if (this.thyromental < 5) {
        return 3.3
      } else {
        return 0.63
      }
    },

    thyromental_height_ratio: function () {
      return this.height / this.thyromental;
    },

    thyromental_height_ratio_LR: function () {
      if (this.thyromental_height_ratio > 20) {
        return 5.2;
      } else {
        return 0.36;
      }
    },

    hyomental: sync('patient/hyomental'),
    hyomental_LR: function () {
      if (this.hyomental < 4) {
        return 6.4;
      } else {
        return 0.84;
      }
    },

    hyomental_height_ratio: function () {
      return this.height / this.hyomental;
    },

    interincisor: sync('patient/interincisor'),
    interincisor_LR: function () { return (this.interincisor < 5) ? 3.6 : 0.71 },

    mallampati: sync('patient/mallampati'),
    mallampati_LR: function () { return (this.mallampati > 2) ? 4.1 : 0.52 },

    sternomental: sync('patient/sternomental'),
    sternomental_LR: function () { return (this.sternomental < 15) ? 4.1 : 0.65 },

    anatomical_abnormalities: sync('patient/anatomical_abnormalities'),
    cervical: sync('patient/cervical'),

    M_TAC: function () {
      //Acta Anaesthesiologica Taiwanica 51 (2013) 58e62
      var mallampati_score = this.mallampati;

      var thyromental_score = 0;
      if (this.thyromental < 6.4) {
        thyromental_score = 1
      }
      if (this.thyromental < 5.5) {
        thyromental_score = 2
      }

      var anatomical_score = this.anatomical_abnormalities;

      var cervical_score = 0;
      if (this.cervical < 80) {
        cervical_score = 1
      }

      if (this.cervical < 60) {
        cervical_score = 2
      }

      return mallampati_score + thyromental_score + anatomical_score + cervical_score
    },

    M_TAC_LR: function () {
      if (this.M_TAC >= 4) {
        return 6.7
      } else {
        return 0.04
      }
    }
  },
  watch: {}
};
</script>