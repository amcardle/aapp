<script>
import DrugDose from './DrugDose.vue'

export default {
  name: 'LidocaineAdrenaline',
  mixins: [DrugDose],
  data: function () {
    return {
      /// // ADJUST THE FOLLOWING PARAMETERS
      name: 'Lidocaine 1% with Adrenaline',
      drug_class: 'Local Anaesthetic',
      dose: '6 mg/kg',
      presentation: '10 mg/ml',
      color: 'background-color:#B0A9A0;'
    }
  }
}
</script>
