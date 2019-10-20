<script>
  import "./mystyles.scss";
  import { weight, height } from "./stores.js";
  import Propofol from "./drugs/Propofol.svelte";
  import Thiopental from "./drugs/Thiopental.svelte";
  import Adrenaline from "./drugs/Adrenaline.svelte";
  import Alfentanil from "./drugs/Alfentanil.svelte";
  import Atracurium from "./drugs/Atracurium.svelte";
</script>

{$weight} kg
<input on:input={event => weight.setKg(event.target.value)} />
<br />
{$height} cm
<input on:input={event => height.setCm(event.target.value)} />

<Propofol />
<Thiopental />
<Adrenaline />
<Alfentanil />
<Atracurium />
