<script>
  import DrugComponent from "./DrugComponent.svelte";
  import { weight, height } from "../stores";
</script>

<DrugComponent drugClass="opioid">
  <span slot="drugName">Fentanyl</span>

  <span slot="drugDose">{1 * $weight} microg (1 microg/kg)</span>

  <span slot="drugPresentation">{(1 * $weight) / 50} ml (50 microg/ml)</span>
</DrugComponent>
