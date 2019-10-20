<script>
  import DrugComponent from "./DrugComponent.svelte";
  import { weight, height } from "../stores";
</script>

<DrugComponent drugClass="paralytic">
  <span slot="drugName">Atracurium</span>

  <span slot="drugDose">{(0.5 * $weight).toFixed(1)} mg (0.5 mg/kg)</span>

  <span slot="drugPresentation">
    {((0.5 * $weight) / 10).toFixed(1)} ml (10 mg/ml)
  </span>
</DrugComponent>
