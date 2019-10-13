<script>

import DrugDose from './DrugDose.vue'

export default {
  mixins: [DrugDose],
  name: "Rocuronium",
  data: function () {
    return {
      ///// ADJUST THE FOLLOWING PARAMETERS
      name: "Rocuronium",
      drug_class: "Muscle Relaxant",
      dose: "0.6 mg/kg",
      presentation: "10 mg/ml",
      color: "background-color:#FF7276"
    }
  },

};
</script>
