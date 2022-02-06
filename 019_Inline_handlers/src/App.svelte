<script>
  let m = { x: 0, y: 0 };
</script>

<!-- {}表示插值，即{}中都是可执行的表达式，不区分变量或者函数-->
<div on:mousemove={(e) => (m = { x: e.clientX, y: e.clientY })}>
  The mouse position is {m.x} x {m.y}
  <button on:click={() => alert(`我可以`)}>点我</button>
</div>

<style>
  div {
    width: 100%;
    height: 100%;
  }
</style>
