<script>
  import DrugComponent from "./DrugComponent.svelte";
  import { weight, height, lean_body_weight } from "../stores";
</script>

<DrugComponent drugClass="induction">
  <span slot="drugName">Thiopental</span>

  <span slot="drugDose">
    {(3 * $lean_body_weight).toFixed(1)}-{(5 * $lean_body_weight).toFixed(1)} mg
    (3-5 mg/kg)
  </span>

  <span slot="drugPresentation">
    {((3 * $lean_body_weight) / 25).toFixed(1)} - {((5 * $lean_body_weight) / 25).toFixed(1)}
    ml (25 mg/ml)
  </span>
</DrugComponent>
