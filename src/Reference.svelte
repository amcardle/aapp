<script>
  import "./mystyles.scss";
  import {
    weight,
    height,
    age,
    sex,
    ideal_body_weight,
    adjusted_body_weight
  } from "./stores.js";
  import DrugDoses from "./DrugDoses.svelte";
  import NavBar from "./NavBar.svelte";
  import MACs from "./MACs.svelte";
  import Calc from "./Calc.svelte";
</script>

<ul>
  <h2>Weight</h2>
  <li>Ideal Body Weight (Devine) - {$ideal_body_weight}</li>
  <li>Adjusted Body Weight - {$adjusted_body_weight}</li>
</ul>
