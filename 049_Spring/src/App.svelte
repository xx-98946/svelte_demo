<script>
  // 除了上述的补间动画，还有另一个工具，叫做spring
  // 翻译是弹性，作者的原意可能是弹性动画吧
  // 看实际效果是：以某种衰减频率执行的减震动画，确实和弹簧很像
  import { spring } from "svelte/motion";
  let coords = spring({ x: 50, y: 50 });
  let size = spring(10);
  $: console.log($coords)
</script>

<div style="position: absolute; right: 1em;">
  <label>
    <h3>僵硬： ({coords.stiffness})</h3>
    <input
      bind:value={coords.stiffness}
      type="range"
      min="0"
      max="1"
      step="0.01"
    />
  </label>

  <label>
    <h3>衰减： ({coords.damping})</h3>
    <input
      bind:value={coords.damping}
      type="range"
      min="0"
      max="1"
      step="0.01"
    />
  </label>
</div>

<svg
  on:mousemove={(e) => coords.set({ x: e.clientX, y: e.clientY })}
  on:mousedown={() => size.set(30)}
  on:mouseup={() => size.set(10)}
>
  <circle cx={$coords.x} cy={$coords.y} r={$size} />
</svg>

<style>
  svg {
    width: 100%;
    height: 100%;
    margin: -8px;
  }
  circle {
    fill: #ff3e00;
  }
</style>
