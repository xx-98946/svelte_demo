<script>
  import { fade } from "svelte/transition";
  // 动画是通过添加内联样式实现的
  let visible = true;
</script>

<label>
  <input type="checkbox" bind:checked={visible} />
  visible
</label>

<!-- 由此可看出if的显示与否并不是立即生效的，存在一个延迟 -->
{#if visible}
  <p transition:fade>渐进出现和消失</p>
  <p>无过渡</p>
{/if}
<!-- 动画是将原本快速执行完成的动作延迟执行，同时该过程中对元素的样式进行修改，以达成动画的效果，只是一种模仿，元素的消失与否与动画的过程是分离的，一切为了外观 -->
