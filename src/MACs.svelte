<script>
  import { age } from "./stores.js";

  const MAC_calculator = function(age, MAC1, MAC) {
    return (MAC1 * Math.pow(10, -0.00269 * (age - 40)) * MAC).toFixed(2);
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
    padding-left: 0;
    padding-right: 0;
  }
</style>

<!-- Source
Br J Anaesth. 2003 Aug;91(2):170-4.
Age-related iso-MAC charts for isoflurane, sevoflurane and desflurane in man. -->

<div>
  <div class="container">
    <div class="row drug">
      <div class="col py-sm-2 py-1 py-1 px-sm-2 px-0">
        <strong>Age adjusted MAC</strong>
      </div>
      {#each MAC_values as MAC}
        <div class="col py-sm-2 py-1 py-1 px-sm-2 px-0">{MAC}</div>
      {/each}
    </div>
    <div class="row drug">
      <div class="col py-sm-2 py-1 py-1 px-sm-2 px-0">
        <strong>Sevoflurane</strong>
      </div>
      {#each MAC_values as MAC}
        <div class="col py-sm-2 py-1 py-1 px-sm-2 px-0">
          {MAC_calculator($age, 1.8, MAC)}%
        </div>
      {/each}
    </div>
    <div class="row drug">
      <div class="col py-sm-2 py-1 py-1 px-sm-2 px-0">
        <strong>Isoflurane</strong>
      </div>
      {#each MAC_values as MAC}
        <div class="col py-sm-2 py-1 py-1 px-sm-2 px-0">
          {MAC_calculator($age, 1.17, MAC)}%
        </div>
      {/each}
    </div>
    <div class="row drug">
      <div class="col py-sm-2 py-1 py-1 px-sm-2 px-0">
        <strong>Nitrous Oxide</strong>
      </div>
      {#each MAC_values as MAC}
        <div class="col py-sm-2 py-1 py-1 px-sm-2 px-0">
          {MAC_calculator($age, 104, MAC)}%
        </div>
      {/each}
    </div>
    <div class="row drug">
      <div class="col py-sm-2 py-1 py-1 px-sm-2 px-0">
        <strong>Desflurane</strong>
      </div>
      {#each MAC_values as MAC}
        <div class="col py-sm-2 py-1 py-1 px-sm-2 px-0">
          {MAC_calculator($age, 6.6, MAC)}%
        </div>
      {/each}
    </div>
  </div>

</div>
