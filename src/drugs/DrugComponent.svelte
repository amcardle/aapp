<style lang="scss">
  $color: green;
  div {
    color: $color;
  }
</style>

<div class="container">
  Name:
  <slot name="drugName" />
  <br />
  Dose
  <slot name="drugDose" />
  <br />
  Presentation
  <slot name="drugPresentation" />

</div>
