<script>
  import DrugComponent from "./DrugComponent.svelte";
  import { weight, height } from "../stores";
</script>

<DrugComponent drugClass="local">
  <span slot="drugName">Bupivacaine 0.25%</span>

  <span slot="drugDose">{(2 * $weight).toFixed(1)} mg (2 mg/kg)</span>

  <span slot="drugPresentation">
    {((2 * $weight) / 2.5).toFixed(1)} ml (2.5 mg/ml)
  </span>
</DrugComponent>

<DrugComponent drugClass="local">
  <span slot="drugName">Bupivacaine 0.5%</span>

  <span slot="drugDose">{(2 * $weight).toFixed(1)} mg (2 mg/kg)</span>

  <span slot="drugPresentation">
    {((2 * $weight) / 5).toFixed(1)} ml (5 mg/ml)
  </span>
</DrugComponent>
