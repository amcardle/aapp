<script>

import DrugDose from './DrugDose.vue'

export default {
  mixins: [DrugDose],
  name: "Atropine",
  data: function () {
    return {
      ///// ADJUST THE FOLLOWING PARAMETERS
      name: "Atropine",
      drug_class: "Anticholinergic",
      dose: "20 ug/kg",
      presentation: "1 mg/ml",
      color: "background-color:#A4D65E;"
    }
  },

};
</script>
