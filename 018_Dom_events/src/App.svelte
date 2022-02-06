<script>
  let m = { x: 0, y: 0 };

  /**
   * 和原生HTML一样，事件绑定的默认参数是event
   * @param event
   */
  function handleMousemove(event) {
    m.x = event.clientX;
    m.y = event.clientY;
  }
</script>

<!-- 事件绑定是可以添加引号的 -->
<!-- 下面两行代码是一致的 -->
<!-- <div on:mousemove="{handleMousemove}"> -->
<div on:mousemove={handleMousemove}>
  The mouse position is {m.x} x {m.y}
</div>

<style>
  div {
    width: 100%;
    height: 100%;
    border: 1px solid pink;
  }
</style>
