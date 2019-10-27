<script>
  import DrugComponent from "./DrugComponent.svelte";
  import { weight, height, lean_body_weight } from "../stores";
</script>

<DrugComponent drugClass="local">
  <span slot="drugName">Lidocaine 1%</span>

  <span slot="drugDose">{(3 * $lean_body_weight).toFixed(1)} mg (3 mg/kg)</span>

  <span slot="drugPresentation">
    {((3 * $lean_body_weight) / 10).toFixed(1)} ml (10 mg/ml)
  </span>
</DrugComponent>

<DrugComponent drugClass="local">
  <span slot="drugName">Lidocaine 1% with Adrenaline</span>

  <span slot="drugDose">{(6 * $lean_body_weight).toFixed(1)} mg (6 mg/kg)</span>

  <span slot="drugPresentation">
    {((6 * $lean_body_weight) / 10).toFixed(1)} ml (10 mg/ml)
  </span>
</DrugComponent>
