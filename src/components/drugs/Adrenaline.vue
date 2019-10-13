<script>
import { sync, get } from 'vuex-pathify';
import * as math from 'mathjs';

export default {
    name: 'Adrenaline',
    data: function() {
        return {
            math: math,
            ///// ADJUST THE FOLLOWING PARAMETERS
            name: 'Adrenaline',
            drug_class: 'Vasopressor',

            color: 'background-color:#D6BFDD;'
        };
    },
    computed: {
        weight: get('patient/weight')
    }
};
</script>

<template>
    <div class="drug" :style="color">
        <div class="col-3">{{ name }}</div>

        <div class="col-3">{{ drug_class }}</div>

        <div class="col-3">
            <div>50–100 mcg boluses titrated to effect</div>
        </div>
        <div class="col-3">
            <div>0.5–1 ml of 1:10,000</div>
        </div>
    </div>
</template>
