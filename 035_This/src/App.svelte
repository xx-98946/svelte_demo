<script>
  import { onMount } from "svelte";
  let element;
  let canvas;
  // 这就很离谱，打印出的是对象，而不是单纯的标签！！
  $: console.log(element);

  onMount(() => {
    const ctx = canvas.getContext("2d");
    // requestAnimationFrame函数的作用是在CPU空闲时自动执行接受的函数
    let frame = requestAnimationFrame(loop);
    function loop(t) {
      // 注意：该函数因为循环调用，实现了一种不间断执行的效果
      frame = requestAnimationFrame(loop);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      for (let p = 0; p < imageData.data.length; p += 4) {
        const i = p / 4;
        const x = i % canvas.width;
        const y = (i / canvas.width) >>> 0;

        const r = 64 + (128 * x) / canvas.width + 64 * Math.sin(t / 1000);
        const g = 64 + (128 * y) / canvas.height + 64 * Math.cos(t / 1000);
        const b = 128;

        imageData.data[p + 0] = r;
        imageData.data[p + 1] = g;
        imageData.data[p + 2] = b;
        imageData.data[p + 3] = 255;
      }

      ctx.putImageData(imageData, 0, 0);
    }

    // 返回的函数会在组件销毁时调用
    return () => {
      cancelAnimationFrame(frame);
    };
  });
</script>

<!-- bind:this 会返回真实的DOM元素，真实DOM在挂载(onMount)之后才能获取 -->
<p bind:this={element}>我是一只小小鸟！</p>

<canvas bind:this={canvas} width={32} height={32} />

<style>
  canvas {
    width: 50%;
    height: 50%;
    background-color: #666;
    -webkit-mask: url(/svelte-logo-mask.svg) 50% 50% no-repeat;
    mask: url(/svelte-logo-mask.svg) 50% 50% no-repeat;
  }
</style>
