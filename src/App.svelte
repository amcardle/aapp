<script>
  import "./mystyles.scss";
  import { count } from "./stores.js";
</script>

{$count}
<button class="button is-primary" on:click={() => $count++}>increment</button>
