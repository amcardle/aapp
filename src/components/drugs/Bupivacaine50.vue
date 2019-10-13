<script>

import DrugDose from './DrugDose.vue'

export default {
  mixins: [DrugDose],
  name: "Bupivacaine50",
  data: function () {
    return {
      ///// ADJUST THE FOLLOWING PARAMETERS
      name: "Bupivacaine 0.50%",
      drug_class: "Local Anaesthetic",
      dose: "2 mg/kg",
      presentation: "5.0 mg/ml",
      color: "background-color:#B0A9A0;"
    }
  },

};
</script>
