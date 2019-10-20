<script>
  import DrugComponent from "./DrugComponent.svelte";
  import { weight, height } from "../stores";
</script>

<DrugComponent>
  <span slot="drugName">Propofol</span>
  <span slot="drugDose">{2 * $weight}-{3 * $weight} mg (2-3 mg/kg)</span>
  <span slot="drugPresentation">
    {(2 * $weight) / 10} - {(3 * $weight) / 10} ml (10 mg/ml)
  </span>
</DrugComponent>
