<script>
import { sync, get } from 'vuex-pathify';
import * as math from 'mathjs';

export default {
    name: 'DrugDose',
    data: function() {
        return {
            math: math,
            ///// ADJUST THE FOLLOWING PARAMETERS
            name: 'DrugDose',
            drug_class: 'DrugDose',
            dose: '100000 ug/kg',
            presentation: '5000000 ug/ml'
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
            <div>
                {{
                    math.format(
                        math.eval(`${dose} * ${weight} kg`),
                        4
                    )
                }}
            </div>
            <small class="text-muted">{{ dose }}</small>
        </div>
        <div class="col-3">
            <div>
                {{
                    math.format(
                        math.eval(
                            `(${dose} * ${weight} kg)/(${presentation})`
                        ),
                        4
                    )
                }}
            </div>
            <small class="text-muted">{{ presentation }}</small>
        </div>
    </div>
</template>
