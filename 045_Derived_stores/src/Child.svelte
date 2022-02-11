<script>
  import { onDestroy } from "svelte";

  import { time, duration } from "./time";
  let show = true;
  onDestroy(() => {
    console.log("销毁");
  });
  // 继承的store，或者叫做联动的store，但我感觉这个APi是多余的，明明可以用$:来取代
  // 除非是大多数逻辑都被迁移到js文件中，你可以发现duration和d之间会有几毫秒的时间差
  // 迁移到js中的原因是需要被大量重用，如果只是单一依赖，更应该使用$:书写在组件内部
  let start = new Date();
  $: d = $time - start;
</script>

<button on:click={() => (show = !show)}>切换if</button>
{#if show}
  <!-- 订阅数量是依据子组件来判定的，和if语句无关 -->
  <p>计时器：{$time}</p>
  <p>页面浏览时间：{Math.round(($time - start) / 1000)}秒</p>
  <p>{$duration}</p>
  <p>{d}</p>
{/if}
