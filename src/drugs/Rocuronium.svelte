<script>
  import DrugComponent from "./DrugComponent.svelte";
  import { weight, height } from "../stores";
</script>

<DrugComponent drugClass="paralytic">
  <span slot="drugName">Rocuronium</span>

  <span slot="drugDose">{0.6 * $weight} mg (0.6 mg/kg)</span>

  <span slot="drugPresentation">{(0.6 * $weight) / 10} ml (10 mg/ml)</span>
</DrugComponent>
