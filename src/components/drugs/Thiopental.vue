<script>
import DrugDoseRange from './DrugDoseRange.vue';

export default {
    name: 'Thiopental',
    mixins: [DrugDoseRange],

    data: function() {
        return {
            ///// ADJUST THE FOLLOWING PARAMETERS
            name: 'Thiopental',
            drug_class: 'Induction Agent',
            lowest_dose: '3 mg/kg',
            highest_dose: '5 mg/kg',
            presentation: '25 mg/ml',
            color: 'background-color:Yellow;'
        };
    }
};
</script>
