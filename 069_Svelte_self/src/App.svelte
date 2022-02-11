<script>
  let i = 10 * Math.random();
</script>

<div>
  随机数：{i}
  {#if i > 2}
    <!-- svelte:self 表示自身，用于递归调用
    常见场景：文件夹的目录结构或者类似的树结构
  -->
    <svelte:self />
  {/if}
</div>
