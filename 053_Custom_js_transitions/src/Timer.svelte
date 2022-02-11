<script>
  let show = false;
  export let start = 10;
  function timer(node, { start = 10 }) {
    return {
      duration: 1000 * start,
      tick: (t, u) => {
        //   t + u = 1
        // tick频率不能手动控制，只能根据t进行计算
        node.textContent = Math.round(start * u);
      },
    };
  }
</script>

<button on:click={() => (show = !show)}>开关</button>
<p>
  倒计时：
  {#if show}
    <span transition:timer={{ start }}>{start}</span>
  {/if}
</p>
