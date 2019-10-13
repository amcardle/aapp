<script>

import DrugDose from './DrugDose.vue'

export default {
  mixins: [DrugDose],
  name: "Alfentanil",
  data: function () {
    return {
      ///// ADJUST THE FOLLOWING PARAMETERS
      name: "Alfentanil",
      drug_class: "Opioid",
      dose: "10 microg/kg",
      presentation: "500 microg/ml",
      color: "background-color:#71C5E8;"
    }
  },

};
</script>
