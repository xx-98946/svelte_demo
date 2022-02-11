<script>
  let hereKitty = false;

  // 这两个事件在window上不存在
  const handleMouseenter = () => (hereKitty = true);
  const handleMouseleave = () => (hereKitty = false);
</script>

<svelte:body
  on:mouseenter={handleMouseenter}
  on:mouseleave={handleMouseleave} />
<p>试着移入鼠标</p>
<!-- creative commons BY-NC http://www.pngall.com/kitten-png/download/7247 -->
<!-- 添加的容器是为了方便看到整个过渡的起始位置 -->
<!-- <div class="container"> -->
<img
  class:curious={hereKitty}
  alt="Kitten wants to know what's going on"
  src="/kitten.png"
/>

<!-- </div> -->
<style>
  /* .container {
    padding: 200px;
    margin: 0 200px;
    position: relative;
    border: 1px solid black;
  } */
  img {
    position: absolute;
    left: 0;
    bottom: -60px;
    transform: translate(-80%, 0) rotate(-30deg);
    transform-origin: 100% 100%;
    transition: transform 0.4s;
  }

  .curious {
    transform: translate(-15%, 0) rotate(0deg);
  }

  /* 这一行代码的作用是将局部作用域放开，即样式生成时不会携带id，是全局样式 */
  :global(body) {
    overflow: hidden;
  }
</style>
