<script>
  import DrugComponent from "./DrugComponent.svelte";
  import { weight, height } from "../stores";
</script>

<DrugComponent drugClass="paralytic">
  <span slot="drugName">Suxamethonium</span>

  <span slot="drugDose">
    {(1 * $weight).toPrecision(3)} - {(1.5 * $weight).toPrecision(3)} mg (1-1.5
    mg/kg)
  </span>

  <span slot="drugPresentation">
    {((1 * $weight) / 50).toPrecision(3)} - {((1.5 * $weight) / 50).toPrecision(3)}
    ml (50 mg/ml)
  </span>
</DrugComponent>
