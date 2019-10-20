<script>
  import DrugComponent from "./DrugComponent.svelte";
  import { weight, height } from "../stores";
</script>

<DrugComponent drugClass="vasopressor">
  <span slot="drugName">Adrenaline</span>

  <span slot="drugDose">50 - 100 microg boluses titrated to effect</span>

  <span slot="drugPresentation">0.5–1 ml of 1:10,000 (10 microg/ml)</span>
</DrugComponent>
