<script>
  let hovering;

  function enter() {
    hovering = true;
  }

  function leave() {
    hovering = false;
  }
</script>

<div on:mouseenter={enter} on:mouseleave={leave}>
  {#if hovering}
    <slot name="enter" />
  {:else}
    <slot name="leave" />
  {/if}
</div>
