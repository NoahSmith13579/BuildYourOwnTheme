<script lang="ts">
  import TestElements from "./components/testElements.svelte";
  import {
    changeColor,
    changeHexInput,
    currentTypeButton,
    colorsMain,
    colorsHSL,
  } from "./helpers/colorHelpers";

  let themeColorType = ["Primary", "Secondary", "Accent"];

  let currentThemeColorType = "Primary";

  function setCurrentType(string: string) {
    currentThemeColorType = string;
  }
  let hexInputValue = "";
</script>

<main>
  <h1>Build Your Own Theme:</h1>

  {#each themeColorType as type}
    <button
      class="{currentTypeButton(type)} button-main-color color-button-text"
      on:click={() => setCurrentType(type)}>{type}</button
    >
  {/each}
  <div class="color-picker-container">
    <div class="color-card-container">
      <span>Currently changing: {currentThemeColorType}</span>

      <div class="color-card">
        {#each colorsMain as color, index}
          <button
            class="color-card-item"
            style="background-color: hsl({colorsHSL[index][0]},
            {colorsHSL[index][1] + '%'},
            {colorsHSL[index][2] + '%'});"
            on:click={() =>
              changeColor(
                currentThemeColorType,
                colorsHSL[index][0],
                colorsHSL[index][1],
                colorsHSL[index][2]
              )}
          >
            <span class="color-button-text">
              {color.toUpperCase()}
            </span>
          </button>
        {/each}
      </div>
    </div>
    <div class="custom-color-container">
      <h5>Custom color:</h5>
      <div>
        <label>
          Hex value:
          <input
            placeholder="#RRGGBB"
            bind:value={hexInputValue}
            on:change={() =>
              changeHexInput(currentThemeColorType, hexInputValue)}
          />
        </label>
      </div>
    </div>
    <TestElements />
  </div>
  <h3>
    Use this to find a color palette that is aesthetically pleasing. It is very
    easy to make a garish theme, but following the tips here will help: <a
      href="https://blog.hubspot.com/marketing/color-theory-design"
      target="_blank"
      rel="noopener noreferrer"
      >https://blog.hubspot.com/marketing/color-theory-design</a
    >
  </h3>
</main>

<style>
</style>
