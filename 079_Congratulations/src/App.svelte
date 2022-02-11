<script>
  import { onMount } from "svelte";

  /**
   * svelte就到此为止了，恭喜你完成了所有的教程！
   * 如果需要服务端渲染，以及路由控制，请查看该网址：https://kit.svelte.dev/
   * 仍然还有更多的内容要学！
   */
  let characters = "❄❅❆";
  function randomCharacter(i) {
    return characters[i % characters.length];
  }

  const gapY = 10; // 隐藏雪花的高度
  let stars = new Array(100)
    .fill()
    .map((_, i) => {
      return {
        character: randomCharacter(i),
        x: -100 + Math.random() * 180, // 横向 [0,90],是百分比
        y: -gapY - Math.random() * 100, // 纵向 [-120,-20]
        r: 0.1 + Math.random() * 1, // 大小 [0.1,1.1]
        step: i % 2 ? Math.random() / 2 + 0.1 : -Math.random() / 2 - 0.1,
      };
    })
    .sort((a, b) => a.r - b.r);
  onMount(() => {
    let frame;
    // 这种逐帧动画很难还原雪花的那种飘飘的感觉
    function loop() {
      frame = requestAnimationFrame(loop);
      stars = stars.map((emoji) => {
        emoji.y += 0.2;
        emoji.x += 0.1 * emoji.step;
        if (emoji.y > 100 + gapY) {
          emoji.y = -gapY;
          // emoji.character = randomCharacter();
        }
        return emoji;
      });
      return () => cancelAnimationFrame(frame);
    }
    loop();
  });
</script>

{#each stars as star}
  <span style="left: {star.x}%; top: {star.y}%; transform: scale({star.r})"
    >{star.character}</span
  >
{/each}

<style>
  :global(body) {
    overflow: hidden;
    background-image: linear-gradient(
      45deg,
      rgba(255, 192, 203, 0.541),
      rgba(226, 132, 226, 0.37),
      rgba(226, 132, 226, 0.63),
      rgba(0, 204, 255, 0.911),
      rgba(30, 42, 216, 0.637)
    );
    /* background-color: rgb(30deg,246, 218, 223); */
  }
  span {
    position: absolute;
    font-size: 5vw;
    user-select: none;
    color: white;
  }
</style>
