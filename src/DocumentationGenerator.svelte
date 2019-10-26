<script>
  let GA = false;
  let GA_ETT = false;
  let GA_SAD = false;
  let GA_RSI = false;

  let RA1 = false;

  let RA2 = false;

  let spinal = false;

  let epidural = false;
</script>

<style>
  h3 {
    color: #6c757d !important;
  }
</style>

<div class="row">

  <div class="col">
    <ul>
      <li>
        <label>
          <input type="checkbox" bind:checked={GA} />
          General Anaesthetic
        </label>
      </li>
      <ul>
        {#if GA}
          <li>
            <label>
              <input type="checkbox" bind:checked={GA_ETT} />
              ETT
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" bind:checked={GA_SAD} />
              SAD
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" bind:checked={GA_RSI} />
              RSI
            </label>
          </li>
        {/if}
      </ul>
      <li>
        <label>
          <input type="checkbox" bind:checked={RA1} />
          Regional Anaesthetic 1
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" bind:checked={RA2} />
          Regional Anaesthetic 2
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" bind:checked={spinal} />
          Spinal
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" bind:checked={epidural} />
          Epidural
        </label>
      </li>
    </ul>
  </div>
  <div class="col">
    <!-- GENERAL ANAESTHETIC -->
    <div hidden={!GA}>
      <h2>General Anaesthetic</h2>
      <span contenteditable="true" class="border border-secondary">
        editable
      </span>
      <div hidden={!GA_ETT}>
        <h3>Endotracheal Intubation</h3>
      </div>
      <div hidden={!GA_RSI}>
        <h3>Rapid Sequence Induction</h3>
      </div>
      <div hidden={!GA_SAD}>
        <h3>Supraglottic Airway Device</h3>
      </div>
    </div>

    <!-- Regional Anaesthesia 1-->
    <div hidden={!RA1}>
      <h2>Regional Anaesthetic</h2>
    </div>

    <!-- Regional Anaesthesia 2-->
    <div hidden={!RA2}>
      <h2>Regional Anaesthetic</h2>
    </div>

    <!-- Spinal Anaesthesia-->
    <div hidden={!spinal}>
      <h2>Spinal Anaesthetic</h2>
    </div>

    <!-- Spinal Anaesthesia-->
    <div hidden={!epidural}>
      <h2>Epidural Anaesthetic</h2>
    </div>

  </div>
</div>
