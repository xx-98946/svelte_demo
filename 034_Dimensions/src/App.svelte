<script>
  // 块级元素可以动态计算出元素的宽高和偏移
  // 对于行内元素或者类似于canvas之类的，本身大小不可以计算，如有需要，可以计算父元素的大小
  let w;
  let h;
  let size = 42;
  let text = "可调整大小文字";
</script>

<span>dimension | 规模</span>
<input type="range" bind:value={size} />
<input bind:value={text} />

<p>大小: {w}px * {h}px</p>

<!-- 这里可以看出一个新的特征：bind 一般来说的是双向的， 但这里修改绑定的值是没有作用的 -->
<div bind:clientHeight={h} bind:clientWidth={w}>
  <span style="font-size: {size}px">{text}</span>
</div>

<style>
  input {
    display: block;
  }
  div {
    display: inline-block;
  }
  span {
    word-break: break-all;
  }
</style>
