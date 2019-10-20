<script>
  import DrugComponent from "./DrugComponent.svelte";
  import { weight, height } from "../stores";
</script>

<DrugComponent drugClass="induction">
  <span slot="drugName">_</span>

  <span slot="drugDose">{_ * $weight}-{_ * $weight} mg (_-_ mg/kg)</span>

  <span slot="drugPresentation">
    {(_ * $weight) / _} - {(_ * $weight) / _} ml (_ mg/ml)
  </span>
</DrugComponent>
