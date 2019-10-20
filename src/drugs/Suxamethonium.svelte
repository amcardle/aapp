<script>
  import DrugComponent from "./DrugComponent.svelte";
  import { weight, height } from "../stores";
</script>

<DrugComponent drugClass="paralytic">
  <span slot="drugName">Suxamethonium</span>

  <span slot="drugDose">
    {(1 * $weight).toFixed(1)} - {(1.5 * $weight).toFixed(1)} mg (1-1.5 mg/kg)
  </span>

  <span slot="drugPresentation">
    {((1 * $weight) / 50).toFixed(1)} - {((1.5 * $weight) / 50).toFixed(1)} ml
    (50 mg/ml)
  </span>
</DrugComponent>
