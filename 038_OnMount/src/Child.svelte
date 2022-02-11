<script>
  import { onMount, onDestroy } from "svelte";

  let text = "挂载前默认值";
  onMount(() => {
    text = "挂载完成";
    // 这里返回的函数和onDestroy的执行时期是一致的，而存在两种途径的原因是保证逻辑的连贯性
    return () => {
      console.log("销毁完成");
    };
  });
  onDestroy(() => {
    console.log("独立的销毁");
  });
  // 对于变量绑定，其初始化的值最终会被onMount生命周期中的操作所覆盖
  /**
   * 同理：初始化时的请求操作也推荐放到onMount中，
   * 关于SSR模式，暂时没用过，但生命周期的主要作用是和SSR相关的，后面再谈
   */
</script>

<p>{text}</p>
