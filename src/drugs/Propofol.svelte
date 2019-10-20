<script>
  import DrugComponent from "./DrugComponent.svelte";
  import { weight, height } from "../stores";
</script>

<DrugComponent drugClass="induction">
  <span slot="drugName">Propofol</span>

  <span slot="drugDose">
    {(2 * $weight).toPrecision(3)}-{(3 * $weight).toPrecision(3)} mg (2-3 mg/kg)
  </span>

  <span slot="drugPresentation">
    {((2 * $weight) / 10).toPrecision(3)} - {((3 * $weight) / 10).toPrecision(3)}
    ml (10 mg/ml)
  </span>
</DrugComponent>
