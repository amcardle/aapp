<script>
import DrugDose from './DrugDose.vue';

export default {
  name: "Morphine",
  mixins: [DrugDose],
    data: function() {
        return {
            ///// ADJUST THE FOLLOWING PARAMETERS
            name: 'Morphine',
            drug_class: 'Opioid',
            dose: '0.1 mg/kg',
            presentation: '10 mg/ml',
            color: 'background-color:#71C5E8;'
        };
    }
};
</script>
