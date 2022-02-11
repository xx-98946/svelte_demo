<script>
  import Child from "./Child.svelte";
  let showChild = true;
</script>

<button on:click={() => (showChild = !showChild)}>切换组件</button>

{#if showChild}
  <Child />
{:else}
  <p>不显示子组件</p>
{/if}
