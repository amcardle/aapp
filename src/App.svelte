<script>
  import "./mystyles.scss";
  import { weight, height } from "./stores.js";
  import DrugDoses from "./DrugDoses.svelte";
  import NavBar from "./NavBar.svelte";
</script>

<style>
  .entire {
    padding-top: 5rem;
  }
</style>

<NavBar />

<main role="main" class="container entire">
  {$weight} kg
  <input on:input={event => weight.setKg(event.target.value)} />
  <br />
  {$height} cm
  <input on:input={event => height.setCm(event.target.value)} />

  <DrugDoses />

</main>
<!-- /.container -->
