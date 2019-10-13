<script>

import DrugDose from './DrugDose.vue'

export default {
  mixins: [DrugDose],
  name: "Lidocaine",
  data: function () {
    return {
      ///// ADJUST THE FOLLOWING PARAMETERS
      name: "Lidocaine 1%",
      drug_class: "Local Anaesthetic",
      dose: "3 mg/kg",
      presentation: "10 mg/ml",
      color: "background-color:#B0A9A0;"
    }
  },

};
</script>
