<script>
  import DrugComponent from "./DrugComponent.svelte";
  import { weight, height } from "../stores";
</script>

<DrugComponent drugClass="anticholinergic">
  <span slot="drugName">Atropine</span>

  <span slot="drugDose">{20 * $weight} microg (20 microg/kg)</span>

  <span slot="drugPresentation">{(20 * $weight) / 600} ml (600 microg/ml)</span>
</DrugComponent>
