<script>
  import DrugComponent from "./DrugComponent.svelte";
  import { weight, height } from "../stores";
</script>

<DrugComponent drugClass="induction">
  <span slot="drugName">Thiopental</span>

  <span slot="drugDose">
    {(3 * $weight).toPrecision(3)}-{(5 * $weight).toPrecision(3)} mg (3-5 mg/kg)
  </span>

  <span slot="drugPresentation">
    {((3 * $weight) / 25).toPrecision(3)} - {((5 * $weight) / 25).toPrecision(3)}
    ml (25 mg/ml)
  </span>
</DrugComponent>
