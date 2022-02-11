<script>
  import { onDestroy } from "svelte";

  import { time } from "./time";
  let show = true;
  onDestroy(() => {
    console.log("销毁");
  });
</script>

<button on:click={() => (show = !show)}>切换if</button>
{#if show}
  <!-- 订阅数量是依据子组件来判定的，和if语句无关 -->
  <p>计时器：{$time}</p>
  <p>计时器：{$time}</p>
{/if}
