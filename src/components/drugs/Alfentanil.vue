<script>
import DrugDose from './DrugDose.vue';

export default {
  name: "Alfentanil",
  mixins: [DrugDose],
    data: function() {
        return {
            ///// ADJUST THE FOLLOWING PARAMETERS
            name: 'Alfentanil',
            drug_class: 'Opioid',
            dose: '10 ug/kg',
            presentation: '500 ug/ml',
            color: 'background-color:#71C5E8;'
        };
    }
};
</script>
