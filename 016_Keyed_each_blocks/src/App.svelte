<script>
  import Thing from "./Thing.svelte";

  let things = [
    { id: 1, color: "darkblue", title: "深蓝色" },
    { id: 2, color: "indigo", title: "靛蓝色" },
    { id: 3, color: "deeppink", title: "深粉色" },
    { id: 4, color: "salmon", title: "亮橙色" },
    { id: 5, color: "gold", title: "金黄色" },
  ];

  function handleClick() {
    things = things.slice(1);
  }
</script>

<button on:click={handleClick}> 移除第一个元素 </button>

<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; grid-gap: 1em">
  <div>
    <h2>设置key</h2>
    {#each things as thing (thing.id)}
      <Thing {...thing} />
    {/each}
  </div>

  <div>
    <h2>不设置key</h2>
    {#each things as thing}
      <Thing {...thing} />
    {/each}
  </div>

  <div>
    <h2>用下标作为key</h2>
    {#each things as thing, i (i)}
      <Thing {...thing} />
    {/each}
  </div>
</div>

<p>
  为了更高效的元素复用，同样的组件不会重复渲染，这就导致数据变动时，如果不设置key，组件就会自动复用之前的组件，从而导致问题。同理使用数组下标作为key会出现同样的问题！！
</p>

<p>
  <b>强调：key相同就表示是同一个组件！！</b>
</p>
