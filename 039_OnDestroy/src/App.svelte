<script>
  import Timer from "./Timer.svelte";
  let showTimer = true;
</script>

<button on:click={() => (showTimer = !showTimer)}>切换组件</button>

{#if showTimer}
  <Timer />
{:else}
  <p>不显示子组件</p>
{/if}
