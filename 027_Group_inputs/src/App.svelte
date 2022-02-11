<script>
  let food = "";
  let foods = [];
  let values = ["方便面", "面包", "三明治"];
  $: console.log({ food });
  $: console.log({ foods });
  /**
   * 单选和多选都可以通过bind:group进行绑定
   * 但区别在于：单选是基本类型，而多选则是数组类型
   */
</script>

<p>选择食品（单选）：</p>
{#each values as value (value)}
  <label>
    <input type="radio" {value} bind:group={food} />
    {value}
  </label>
{/each}

<p>选择食品（多选）：</p>
{#each values as value (value)}
  <label>
    <input type="checkbox" {value} bind:group={foods} />
    {value}
  </label>
{/each}
