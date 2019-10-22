<script>
  import "./mystyles.scss";
  import { weight, height, age } from "./stores.js";
  import DrugDoses from "./DrugDoses.svelte";
  import NavBar from "./NavBar.svelte";
  import MACs from "./MACs.svelte";
  import Calc from "./Calc.svelte";
  import Reference from "./Reference.svelte";
</script>

<NavBar />

<main role="main" class="container entire">
<!--are comments preserved?-->
  <h1>Patient information</h1>
  <form>
    <div class="form-group">
      <label for="ageInput">Age</label>
      <input
        type="number"
        class="form-control"
        id="ageInput"
        bind:value={$age}
        placeholder="Age" />
    </div>

    <div class="form-group">
      <label for="heightInput">Height (cm)</label>
      <input
        type="number"
        class="form-control"
        id="heightInput"
        on:input={event => height.setCm(event.target.value)}
        placeholder="Height" />
    </div>

    <div class="form-group">
      <label for="weightInput">Weight (kg)</label>
      <input
        type="number"
        class="form-control"
        id="weightInput"
        on:input={event => weight.setKg(event.target.value)}
        placeholder="Weight" />
    </div>
  </form>

  <h1>Reference</h1>
  <Reference />
  <h1>Drug Doses</h1>
  <DrugDoses />
  <h1>MACs</h1>
  <MACs />
</main>
