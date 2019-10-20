<script>
  export let drugClass = "other";
</script>

<style>
  .container {
    border-bottom-width: 2px;
    border-color: black;
  }
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
</style>

<div class="container">
  <div class={'columns is-desktop ' + drugClass}>
    <div class="column has-text-centered">
      <strong>
        <slot name="drugName" />
      </strong>
    </div>
    <div class="column has-text-centered">
      <slot name="drugDose" />
    </div>
    <div class="column has-text-centered">
      <slot name="drugPresentation" />
    </div>
  </div>
</div>
