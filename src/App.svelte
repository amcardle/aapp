<script>
  import "./mystyles.scss";
  import { weight, height, age, sex } from "./stores.js";
  import DrugDoses from "./DrugDoses.svelte";
  import NavBar from "./NavBar.svelte";
  import MACs from "./MACs.svelte";
  import Calc from "./Calc.svelte";
  import Reference from "./Reference.svelte";
  import DocumentationGenerator from "./DocumentationGenerator.svelte";
</script>

<NavBar />

<main role="main" class="container entire">
  <!--are comments preserved?-->
  <h1>Patient information</h1>
  <form>
    <div class="form-group">
      <label for="ageInput">Age - {$age}</label>
      <input
        type="number"
        step="0.1"
        class="form-control"
        id="ageInput"
        bind:value={$age}
        placeholder="Age" />
    </div>

    <div class="form-group">
      <label for="heightInput">Height (cm) - {$height}</label>
      <input
        type="number"
        class="form-control"
        id="heightInput"
        on:input={event => height.setCm(event.target.value)}
        placeholder="Height" />
    </div>

    <div class="form-group">
      <label for="weightInput">Weight (kg) - {$weight}</label>
      <input
        type="number"
        class="form-control"
        id="weightInput"
        on:input={event => weight.setKg(event.target.value)}
        placeholder="Weight" />
    </div>

    <div class="form-check form-check-inline">
      <input
        bind:group={$sex}
        value={'m'}
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="inlineRadio1" />
      <label class="form-check-label" for="inlineRadio1">Male</label>
    </div>

    <div class="form-check form-check-inline">
      <input
        bind:group={$sex}
        value={'f'}
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="inlineRadio2" />
      <label class="form-check-label" for="inlineRadio2">Female</label>
    </div>
  </form>

  <h1>Reference</h1>
  <Reference />
  <h1>Drug Doses</h1>
  <DrugDoses />
  <h1>MACs</h1>

  <DocumentationGenerator />

</main>
