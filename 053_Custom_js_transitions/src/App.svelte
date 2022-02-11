<script>
  import Timer from "./Timer.svelte";
  let visible = false;

  // js执行需要对数据进行处理的场景
  function typewriter(node, { speed = 1 }) {
    const valid =
      node.childNodes.length === 1 &&
      node.childNodes[0].nodeType === Node.TEXT_NODE;

    if (!valid) {
      throw new Error(
        `This transition only works on elements with a single text node child`
      );
    }

    const text = node.textContent;
    const duration = text.length / (speed * 0.01);

    return {
      duration,
      tick: (t) => {
        const i = Math.trunc(text.length * t);
        node.textContent = text.slice(0, i);
      },
      css: (t) => "color:pink",
    };
  }
</script>

<label>
  <input type="checkbox" bind:checked={visible} />
  切换
</label>

{#if visible}
  <p transition:typewriter={{ speed: 3 }}>实现打印机效果</p>
{/if}

<Timer />
<Timer start={20} />
