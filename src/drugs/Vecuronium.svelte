<script>
  import DrugComponent from "./DrugComponent.svelte";
  import { weight, height } from "../stores";
</script>

<DrugComponent drugClass="paralytic">
  <span slot="drugName">Vecuronium</span>

  <span slot="drugDose">{(0.1 * $weight).toPrecision(3)} mg (0.1 mg/kg)</span>

  <span slot="drugPresentation">
    {((0.1 * $weight) / 2).toPrecision(3)} ml (2 mg/ml)
  </span>
</DrugComponent>
