<script>

import DrugDose from './DrugDose.vue'

export default {
  name: "Fentanyl",
  mixins: [DrugDose],

  data: function () {
    return {

      ///// ADJUST THE FOLLOWING PARAMETERS
      name: "Fentanyl",
      drug_class: "Opioid",
      dose: "1 ug/kg",
      presentation: "50 ug/ml",
      color: "background-color:#71C5E8;"
    }
  },

};
</script>
