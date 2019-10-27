<script>
  import DrugComponent from "./DrugComponent.svelte";
  import { weight, height, lean_body_weight } from "../stores";
</script>

<DrugComponent drugClass="opioid">
  <span slot="drugName">Fentanyl</span>

  <span slot="drugDose">
    {(1 * $lean_body_weight).toFixed(1)} microg (1 microg/kg)
  </span>

  <span slot="drugPresentation">
    {((1 * $lean_body_weight) / 50).toFixed(1)} ml (50 microg/ml)
  </span>
</DrugComponent>
