<script>
import DrugDoseRange from './DrugDoseRange.vue'

export default {
  name: 'Propofol',
  mixins: [DrugDoseRange],

  data: function () {
    return {
      /// // ADJUST THE FOLLOWING PARAMETERS
      name: 'Propofol',
      drug_class: 'Induction Agent',
      lowest_dose: '2 mg/kg',
      highest_dose: '3 mg/kg',
      presentation: '10 mg/ml',
      color: 'background-color:Yellow;'
    }
  }
}
</script>
