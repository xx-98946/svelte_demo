<script>
  let list = ["A", "B"];
  $: console.log(list);
  function handleAddList() {
    // 才想起来，svelte中的刷新都是通过赋值操作触发的
    list = [...list, ""];
  }
</script>

<button on:click={handleAddList}>新增</button>
<!-- each循环中可以使用bind:value的语法 -->
{#each list as item}
  <input type="text" bind:value={item} />
{/each}
