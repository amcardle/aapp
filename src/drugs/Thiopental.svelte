<script>
  import DrugComponent from "./DrugComponent.svelte";
  import { weight, height } from "../stores";
</script>

<DrugComponent drugClass="induction">
  <span slot="drugName">Thiopental</span>

  <span slot="drugDose">{3 * $weight}-{5 * $weight} mg (3-5 mg/kg)</span>

  <span slot="drugPresentation">
    {(3 * $weight) / 25} - {(5 * $weight) / 25} ml (25 mg/ml)
  </span>
</DrugComponent>
