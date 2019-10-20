<script>
  import DrugComponent from "./DrugComponent.svelte";
  import { weight, height } from "../stores";
</script>

<DrugComponent drugClass="anticholinergic">
  <span slot="drugName">Glycopyrronium</span>

  <span slot="drugDose">200 microg</span>

  <span slot="drugPresentation">1 ml (200 microg/ml)</span>
</DrugComponent>
