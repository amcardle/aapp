<script>
  import DrugComponent from "./DrugComponent.svelte";
  import { weight, height } from "../stores";
</script>

<DrugComponent drugClass="vasopressor">
  <span slot="drugName">Metaraminol</span>

  <span slot="drugDose">0.5 mg</span>

  <span slot="drugPresentation">1 ml (0.5 mg/ml)</span>
</DrugComponent>
