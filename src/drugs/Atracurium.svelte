<script>
  import DrugComponent from "./DrugComponent.svelte";
  import { weight, height, lean_body_weight } from "../stores";
</script>

<DrugComponent drugClass="paralytic">
  <span slot="drugName">Atracurium</span>

  <span slot="drugDose">
    {(0.5 * $lean_body_weight).toFixed(1)} mg (0.5 mg/kg)
  </span>

  <span slot="drugPresentation">
    {((0.5 * $lean_body_weight) / 10).toFixed(1)} ml (10 mg/ml)
  </span>
</DrugComponent>
