<script>
  import Child from "./Child.svelte";
  let show = true;
</script>

<button on:click={() => (show = !show)}>切换子元素</button>
{#if show}
  <Child />
{/if}
