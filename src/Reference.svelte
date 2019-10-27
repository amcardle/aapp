<script>
  import "./mystyles.scss";
  import {
    weight,
    height,
    age,
    sex,
    ideal_body_weight,
    adjusted_body_weight
  } from "./stores.js";
  import DrugDoses from "./DrugDoses.svelte";
  import NavBar from "./NavBar.svelte";
  import MACs from "./MACs.svelte";
  import Calc from "./Calc.svelte";
</script>

<ul>
  <h2>Weight</h2>
  <li>Ideal Body Weight (Devine) - {$ideal_body_weight}</li>
  <li>Adjusted Body Weight - {$adjusted_body_weight}</li>

  {#if $age < 18}
    <h2>Paediatric</h2>
    <!-- Source: ALPS Handbook 6th edition-->
    {#if $age < 1 / 12}
      <li>Birth</li>
      <li>Guide Weight: 3.5 kg</li>
      <li>Resp Rate: 25-50</li>
      <li>HR 120-170</li>
      <li>SBP 80-90</li>
    {:else if $age < 2 / 12}
      <li>1 month</li>
      <li>Guide Weight: 4.5 kg</li>
      <li>Resp Rate: 25-50</li>
      <li>HR 120-170</li>
      <li>SBP 80-90</li>
    {:else if $age < 4 / 12}
      <li>3 months</li>
      <li>Guide Weight: 6.5 kg</li>
      <li>Resp Rate: 25-45</li>
      <li>HR 115-160</li>
      <li>SBP 80-90</li>
    {:else if $age < 7 / 12}
      <li>6 months</li>
      <li>Guide Weight: 8 kg</li>
      <li>Resp Rate: 25-40</li>
      <li>HR 110-160</li>
      <li>SBP 80-90</li>
    {:else if $age < 13 / 12}
      <li>12 months</li>
      <li>Guide Weight: 8 kg</li>
      <li>Resp Rate: 25-40</li>
      <li>HR 110-160</li>
      <li>SBP 85-95</li>
    {:else if $age < 19 / 12}
      <li>18 months</li>
      <li>Guide Weight: 11 kg</li>
      <li>Resp Rate: 20-35</li>
      <li>HR 100-155</li>
      <li>SBP 85-95</li>
    {:else if $age < 3}
      <li>2 years</li>
      <li>Guide Weight: 12 kg</li>
      <li>Resp Rate: 20-30</li>
      <li>HR 100-150</li>
      <li>SBP 85-100</li>
    {:else if $age < 4}
      <li>3 years</li>
      <li>Guide Weight: 14 kg</li>
      <li>Resp Rate: 20-30</li>
      <li>HR 90-140</li>
      <li>SBP 85-100</li>
    {:else if $age < 5}
      <li>4 years</li>
      <li>Guide Weight: 16 kg</li>
      <li>Resp Rate: 20-30</li>
      <li>HR 80-135</li>
      <li>SBP 85-100</li>
    {:else if $age < 6}
      <li>5 years</li>
      <li>Guide Weight: 18 kg</li>
      <li>Resp Rate: 20-30</li>
      <li>HR 80-135</li>
      <li>SBP 90-110</li>
    {:else if $age < 7}
      <li>6 years</li>
      <li>Guide Weight: 21 kg</li>
      <li>Resp Rate: 20-30</li>
      <li>HR 80-130</li>
      <li>SBP 90-110</li>
    {:else if $age < 8}
      <li>7 years</li>
      <li>Guide Weight: 23 kg</li>
      <li>Resp Rate: 20-30</li>
      <li>HR 80-130</li>
      <li>SBP 90-110</li>
    {:else if $age < 9}
      <li>8 years</li>
      <li>Guide Weight: 25 kg</li>
      <li>Resp Rate: 15-25</li>
      <li>HR 70-120</li>
      <li>SBP 90-110</li>
    {:else if $age < 10}
      <li>9 years</li>
      <li>Guide Weight: 28 kg</li>
      <li>Resp Rate: 15-25</li>
      <li>HR 70-120</li>
      <li>SBP 90-110</li>
    {:else if $age < 11}
      <li>10 years</li>
      <li>Guide Weight: 31 kg</li>
      <li>Resp Rate: 15-25</li>
      <li>HR 70-120</li>
      <li>SBP 90-110</li>
    {:else if $age < 12}
      <li>11 years</li>
      <li>Guide Weight: 35 kg</li>
      <li>Resp Rate: 15-25</li>
      <li>HR 70-120</li>
      <li>SBP 90-110</li>
    {:else if $age < 13}
      <li>12 years</li>
      <li>Guide Weight: 43 kg</li>
      <li>Resp Rate: 12-24</li>
      <li>HR 65-115</li>
      <li>SBP 100-120</li>
    {:else if $age < 15}
      <li>14 years</li>
      <li>Guide Weight: 50 kg</li>
      <li>Resp Rate: 12-24</li>
      <li>HR 60-110</li>
      <li>SBP 100-120</li>
    {:else}
      <li>Adult</li>
      <li>Resp Rate: 12-24</li>
      <li>HR 60-110</li>
      <li>SBP 100-120</li>
    {/if}
  {/if}
</ul>
