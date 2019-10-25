<script>
  let hide_input = false;
  let general_anaesthetic = false;
  let local_anaesthetic = false;

  let GA_risks = [
    { ticked: true, text: "Nausea and Vomiting" },
    { ticked: false, text: "Dental Damage" },
    { ticked: false, text: "Awareness" },
    { ticked: false, text: "Anaphylaxis" },
    { ticked: false, text: "Death" }
  ];
</script>

<style>

</style>

<div class="container">
  <label>
    <input type="checkbox" bind:checked={hide_input} />
    Hide input
  </label>
  <div class="row">
    <div class="col" hidden={hide_input}>
      <h1>Documentation</h1>
    </div>

    <div class="col">
      <h1>Documentation</h1>
    </div>
  </div>

  <div class="row">
    <div class="col" hidden={hide_input}>
      <h2>
        <input type="checkbox" bind:checked={general_anaesthetic} />
        General Anaesthetic
      </h2>
      <div hidden={!general_anaesthetic}>

        <h3>Consented to the following risks</h3>
        <ul>
          {#each GA_risks as risk}
            <li>
              <label>
                <input type="checkbox" bind:checked={risk.ticked} />
                {risk.text}
              </label>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <div class="col" hidden={!general_anaesthetic}>
      <h2>General Anaesthetic</h2>

      <h3>Consented to the following risks</h3>
      <ul>
        {#each GA_risks as risk}
          {#if risk.ticked}
            <li>{risk.text}</li>
          {/if}
        {/each}
      </ul>

    </div>
  </div>

  <div class="row">
    <div class="col" hidden={hide_input}>...</div>

    <div class="col">...</div>
  </div>

</div>
