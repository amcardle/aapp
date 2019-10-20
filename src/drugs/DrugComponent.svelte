<script>
  export let drugClass = "other";
</script>

<style>
  .drug {
    border-bottom: 1px solid rgba(86, 61, 124, 0.2);
  }
  .col {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }

  /* Colored labels for different drug classes */
  .other {
    background-color: white;
  }
  .induction {
    background-color: yellow;
  }
  .opioid {
    background-color: #71c5e8;
  }
  .vasopressor {
    background-color: #d6bfdd;
  }
  .paralytic {
    background-color: #ff7276;
  }
  .local {
    background-color: #b0a9a0;
  }
  .anticholinergic {
    background-color: #a4d65e;
  }
</style>

<div class="container drug">
  <div class={'row ' + drugClass}>
    <div class="col">
      <strong>
        <slot name="drugName" />
      </strong>
    </div>
    <div class="col">
      <slot name="drugDose" />
    </div>
    <div class="col">
      <slot name="drugPresentation" />
    </div>
  </div>
</div>
