<script>
  import "./mystyles.scss";
  import { weight, height } from "./stores.js";
  import Propofol from "./drugs/Propofol.svelte";
  import Thiopental from "./drugs/Thiopental.svelte";
</script>

{$weight} kg
<input on:input={event => weight.setKg(event.target.value)} />
<br />
{$height} cm
<input on:input={event => height.setCm(event.target.value)} />

<Propofol />
<Thiopental />
