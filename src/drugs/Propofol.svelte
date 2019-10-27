<script>
  import DrugComponent from "./DrugComponent.svelte";
  import { weight, height, lean_body_weight } from "../stores";
</script>

<DrugComponent drugClass="induction">
  <span slot="drugName">Propofol</span>

  <span slot="drugDose">
    {(2 * $lean_body_weight).toFixed(1)}-{(3 * $lean_body_weight).toFixed(1)} mg
    (2-3 mg/kg)
  </span>

  <span slot="drugPresentation">
    {((2 * $lean_body_weight) / 10).toFixed(1)} - {((3 * $lean_body_weight) / 10).toFixed(1)}
    ml (10 mg/ml)
  </span>
</DrugComponent>
