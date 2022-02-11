<script>
  import ComponentA from "./ComponentA.svelte";
  import ComponentB from "./ComponentB.svelte";
  let active = ComponentA;
  function toggleComponent() {
    if (active === ComponentA) {
      active = ComponentB;
    } else {
      active = ComponentA;
    }
  }

  // 任何会被隐式转换为false的值，都不会渲染任何组件
  // 为了和组件构造相对应，用null可能更好一点
  function remove() {
    // active = 0;
    active = null;
  }
</script>

<div>
  <button on:click={toggleComponent}>切换组件</button>
  <button on:click={remove}>隐藏</button>
  <!-- 动态组件，通过this指定组件类型，注意不是字符串 -->
  <svelte:component this={active} />
</div>
