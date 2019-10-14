<template>
    <!-- DRUG LIST -->
    <b-card title="Drugs">
        <div class="container">
            <div class="row">
                <div class="col-3">Name</div>
                <div class="col-3">Class</div>
                <div class="col-3">Dose</div>
                <div class="col-3">Presentation</div>
            </div>
            <div v-for="drug in Drugs" :key="drug.name">
                <component :is="drug"></component>
            </div>
        </div>
    </b-card>
</template>

<script>
import Drugs from '@/components/drugs/AllDrugs.js'

export default {
  name: 'Drugs',
  data: function () {
    return {
      Drugs: Drugs
    }
  }
}
</script>
