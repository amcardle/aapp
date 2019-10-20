<script>
  import { age } from "./stores.js";

  const MAC_calculator = function(age, MAC1, MAC) {
    return (MAC1 * Math.pow(10, -0.00269 * (age - 40)) * MAC).toPrecision(3);
  };

  const MAC_values = [0.6, 0.8, 1, 1.2, 1.4];
</script>

<style>
  .drug {
    border-bottom: 1px solid rgba(86, 61, 124, 0.2);
  }
  .col {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
</style>

<div>
  <div class="container">
    <div class="row drug">
      <div class="col">
        <strong>Age adjusted MAC</strong>
      </div>
      {#each MAC_values as MAC}
        <div class="col">{MAC}</div>
      {/each}
    </div>
    <div class="row drug">
      <div class="col">
        <strong>Sevoflurane</strong>
      </div>
      {#each MAC_values as MAC}
        <div class="col">{MAC_calculator($age, 1.8, MAC)}%</div>
      {/each}
    </div>
    <div class="row drug">
      <div class="col">
        <strong>Isoflurane</strong>
      </div>
      {#each MAC_values as MAC}
        <div class="col">{MAC_calculator($age, 1.17, MAC)}%</div>
      {/each}
    </div>
    <div class="row drug">
      <div class="col">
        <strong>Nitrous Oxide</strong>
      </div>
      {#each MAC_values as MAC}
        <div class="col">{MAC_calculator($age, 104, MAC)}%</div>
      {/each}
    </div>
  </div>

</div>
