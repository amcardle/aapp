<script>
  import DrugComponent from "./DrugComponent.svelte";
  import { weight, height } from "../stores";
</script>

<DrugComponent drugClass="induction">
  <span slot="drugName">Thiopental</span>

  <span slot="drugDose">
    {(3 * $weight).toFixed(1)}-{(5 * $weight).toFixed(1)} mg (3-5 mg/kg)
  </span>

  <span slot="drugPresentation">
    {((3 * $weight) / 25).toFixed(1)} - {((5 * $weight) / 25).toFixed(1)} ml (25
    mg/ml)
  </span>
</DrugComponent>
