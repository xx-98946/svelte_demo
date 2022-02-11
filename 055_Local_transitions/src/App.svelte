<script>
  import { slide, fade } from "svelte/transition";

  let showItems = true;
  let i = 5;
  let items = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];
</script>

<label>
  <input type="checkbox" bind:checked={showItems} />
  show list
</label>

<label>
  <input type="range" bind:value={i} max="10" />
</label>

{#if showItems}
  <section transition:fade>
    {#each items.slice(0, i) as item}
      <!-- local的作用是只有当前元素的移除新增才会触发自身的动画，如果是父组件则忽略
      过渡效果-->
      <div transition:slide|local>
        {item}
      </div>
    {/each}
  </section>
{/if}

<style>
  div {
    padding: 0.5em 0;
    border-top: 1px solid #eee;
  }
</style>
