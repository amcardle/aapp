<script>
  import DrugComponent from "./DrugComponent.svelte";
  import { weight, height, lean_body_weight } from "../stores";
</script>

<DrugComponent drugClass="local">
  <span slot="drugName">Bupivacaine 0.25%</span>

  <span slot="drugDose">{(2 * $lean_body_weight).toFixed(1)} mg (2 mg/kg)</span>

  <span slot="drugPresentation">
    {((2 * $lean_body_weight) / 2.5).toFixed(1)} ml (2.5 mg/ml)
  </span>
</DrugComponent>

<DrugComponent drugClass="local">
  <span slot="drugName">Bupivacaine 0.5%</span>

  <span slot="drugDose">{(2 * $lean_body_weight).toFixed(1)} mg (2 mg/kg)</span>

  <span slot="drugPresentation">
    {((2 * $lean_body_weight) / 5).toFixed(1)} ml (5 mg/ml)
  </span>
</DrugComponent>
