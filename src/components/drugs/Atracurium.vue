<script>
import DrugDose from './DrugDose.vue'

export default {
  name: 'Atracurium',
  mixins: [DrugDose],
  data: function () {
    return {
      /// // ADJUST THE FOLLOWING PARAMETERS
      name: 'Atracurium',
      drug_class: 'Muscle Relaxant',
      dose: '0.5 mg/kg',
      presentation: '10 mg/ml',
      color: 'background-color:#FF7276'
    }
  }
}
</script>
