<script>

import DrugDoseRange from './DrugDoseRange.vue'

export default {
  mixins: [DrugDoseRange],
  name: "Suxamethonium",
  data: function () {
    return {
      ///// ADJUST THE FOLLOWING PARAMETERS
      name: "Suxamethonium",
      drug_class: "Muscle Relaxant",
      lowest_dose: "1 mg/kg",
      highest_dose: "1.5 mg/kg",
      presentation: "50 mg/ml",
      color: "background-color:#FF7276"
    }
  },

};
</script>
