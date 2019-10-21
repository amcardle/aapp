<script>
  export let drugClass = "other";
</script>

<style lang="scss">
  .drug {
    border-bottom: 1px solid rgba(86, 61, 124, 0.2);
  }
  .drug_col {
    padding-top: 0.4 rem;
    padding-bottom: 0.4 rem;
    padding-right: 0;
    padding-left: 0;
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
    <div class="col py-sm-2 py-1 px-sm-2 px-0">
      <strong>
        <slot name="drugName" />
      </strong>
    </div>
    <div class="col py-sm-2 py-1 py-1 px-sm-2 px-0">
      <slot name="drugDose" />
    </div>
    <div class="col py-sm-2 py-1 px-sm-2 px-0">
      <slot name="drugPresentation" />
    </div>
  </div>
</div>
