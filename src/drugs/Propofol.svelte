<script>
  import DrugComponent from "./DrugComponent.svelte";
  import { weight, height } from "../stores";
</script>

<DrugComponent drugClass="induction">
  <span slot="drugName">Propofol</span>

  <span slot="drugDose">
    {(2 * $weight).toFixed(1)}-{(3 * $weight).toFixed(1)} mg (2-3 mg/kg)
  </span>

  <span slot="drugPresentation">
    {((2 * $weight) / 10).toFixed(1)} - {((3 * $weight) / 10).toFixed(1)} ml (10
    mg/ml)
  </span>
</DrugComponent>
