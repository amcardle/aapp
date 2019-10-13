<script>
import DrugDose from './DrugDose.vue';

export default {
  name: "Bupivacaine25",
  mixins: [DrugDose],
    data: function() {
        return {
            ///// ADJUST THE FOLLOWING PARAMETERS
            name: 'Bupivacaine 0.25%',
            drug_class: 'Local Anaesthetic',
            dose: '2 mg/kg',
            presentation: '2.5 mg/ml',
            color: 'background-color:#B0A9A0;'
        };
    }
};
</script>
