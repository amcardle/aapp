<script>
  import DrugComponent from "./DrugComponent.svelte";
  import { weight, height } from "../stores";
</script>

<DrugComponent drugClass="local">
  <span slot="drugName">Lidocaine 1%</span>

  <span slot="drugDose">{3 * $weight} mg (3 mg/kg)</span>

  <span slot="drugPresentation">{(3 * $weight) / 10} ml (10 mg/ml)</span>
</DrugComponent>

<DrugComponent drugClass="local">
  <span slot="drugName">Lidocaine 1% with Adrenaline</span>

  <span slot="drugDose">{6 * $weight} mg (6 mg/kg)</span>

  <span slot="drugPresentation">{(6 * $weight) / 10} ml (10 mg/ml)</span>
</DrugComponent>
