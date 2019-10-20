<script>
  import DrugComponent from "./DrugComponent.svelte";
  import { weight, height } from "../stores";
</script>

<DrugComponent drugClass="vasopressor">
  <span slot="drugName">Ephedrine</span>

  <span slot="drugDose">3 mg</span>

  <span slot="drugPresentation">1 ml (3 mg/ml)</span>
</DrugComponent>
