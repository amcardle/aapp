<script>
  import DrugComponent from "./DrugComponent.svelte";
  import { weight, height } from "../stores";
</script>

<DrugComponent drugClass="paralytic">
  <span slot="drugName">Vecuronium</span>

  <span slot="drugDose">{0.1 * $weight} mg (0.1 mg/kg)</span>

  <span slot="drugPresentation">{(0.1 * $weight) / 2} ml (2 mg/ml)</span>
</DrugComponent>
