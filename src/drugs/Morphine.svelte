<script>
  import DrugComponent from "./DrugComponent.svelte";
  import { weight, height, lean_body_weight } from "../stores";
</script>

<DrugComponent drugClass="opioid">
  <span slot="drugName">Morphine</span>

  <span slot="drugDose">{(0.1 * $lean_body_weight).toFixed(1)} mg (0.1 mg/kg)</span>

  <span slot="drugPresentation">
    {((0.1 * $lean_body_weight) / 10).toFixed(1)} ml (10 mg/ml)
  </span>
</DrugComponent>
