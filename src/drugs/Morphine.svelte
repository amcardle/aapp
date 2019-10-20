<script>
  import DrugComponent from "./DrugComponent.svelte";
  import { weight, height } from "../stores";
</script>

<DrugComponent drugClass="opioid">
  <span slot="drugName">Morphine</span>

  <span slot="drugDose">{0.1 * $weight} mg (0.1 mg/kg)</span>

  <span slot="drugPresentation">{(0.1 * $weight) / 10} ml (10 mg/ml)</span>
</DrugComponent>
