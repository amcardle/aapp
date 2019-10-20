<script>
  import DrugComponent from "./DrugComponent.svelte";
  import { weight, height } from "../stores";
</script>

<DrugComponent drugClass="opioid">
  <span slot="drugName">Alfentanil</span>

  <span slot="drugDose">{10 * $weight} microg (10 microg/kg)</span>

  <span slot="drugPresentation">{(10 * $weight) / 500} ml (500 microg/ml)</span>
</DrugComponent>
