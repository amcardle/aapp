<script>

import DrugDose from './DrugDose.vue'

export default {
  mixins: [DrugDose],
  name: "Vecuronium",
  data: function () {
    return {
      ///// ADJUST THE FOLLOWING PARAMETERS
      name: "Vecuronium",
      drug_class: "Muscle Relaxant",
      dose: "0.1 mg/kg",
      presentation: "2 mg/ml",
      color: "background-color:#FF7276"
    }
  },

};
</script>
