<script>
  // 补间动画
  // 
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  const progress = tweened(0, {
    duration: 500,
    easing: cubicOut,
  });
  // 补间动画的效果竟然是通过重复调用update方法实现的，惊了
  // 但这确实解决问题的一种方案啊，作者很牛逼，神来之笔
  // 通过给定的参数就可以设置动画效果
  // 这里的内容都是store!!!，不是基本状态
  $: console.log($progress)

  function setProcess(v) {
    return () => {
      progress.set(v);
    };
  }
</script>

<progress value={$progress} />

<button on:click={setProcess(0)}> 0% </button>

<button on:click={setProcess(0.25)}> 25% </button>

<button on:click={setProcess(0.5)}> 50% </button>

<button on:click={setProcess(0.75)}> 75% </button>

<button on:click={setProcess(1)}> 100% </button>

<style>
  progress {
    display: block;
    width: 100%;
  }
</style>
