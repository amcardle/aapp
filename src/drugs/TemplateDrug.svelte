<script>
  import DrugComponent from "./DrugComponent.svelte";
  import { weight, height } from "../stores";
</script>

<DrugComponent drugClass="induction">
  <span slot="drugName">_</span>

  <span slot="drugDose">{_ * $weight} mg (_ mg/kg)</span>

  <span slot="drugPresentation">{(_ * $weight) / _} ml (_ mg/ml)</span>
</DrugComponent>
