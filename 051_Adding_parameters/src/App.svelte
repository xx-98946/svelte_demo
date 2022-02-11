<script>
  import { fly, fade } from "svelte/transition";
  // 动画是通过添加内联样式实现的
  // 动画效果都是双向的，如何消失就会反向出现
  let visible = false;
</script>

<label>
  <input type="checkbox" bind:checked={visible} />
  visible
</label>

<!-- 由此可看出if的显示与否并不是立即生效的，存在一个延迟 -->
{#if visible}
  <!-- 不同的动画模式需要不同的策略，比如fly就可以接受参数 -->
  <p transition:fly={{ duration: 4000, y: 200 }}>飞出和飞入</p>
  <p transition:fly>原地</p>
  <p transition:fade>渐进出现和消失</p>
{/if}
<!-- 执行动画 -> 消失 -->
<!-- 出现（出现时的状态可能不太好控制） -> 执行动画 -->
