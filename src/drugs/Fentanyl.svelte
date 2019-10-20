<script>
  import DrugComponent from "./DrugComponent.svelte";
  import { weight, height } from "../stores";
</script>

<DrugComponent drugClass="opioid">
  <span slot="drugName">Fentanyl</span>

  <span slot="drugDose">
    {(1 * $weight).toPrecision(3)} microg (1 microg/kg)
  </span>

  <span slot="drugPresentation">
    {((1 * $weight) / 50).toPrecision(3)} ml (50 microg/ml)
  </span>
</DrugComponent>
