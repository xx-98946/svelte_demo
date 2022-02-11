<script>
  let current = "foo";
  let list = ["foo", "bar", "baz"];
</script>

<button
  class={current === "foo" ? "selected" : ""}
  on:click={() => (current = "foo")}>foo</button
>

<button
  class={current === "bar" ? "selected" : ""}
  on:click={() => (current = "bar")}>bar</button
>

<button
  class={current === "baz" ? "selected" : ""}
  on:click={() => (current = "baz")}>baz</button
>

<hr />
{#each list as item (item)}
  <!-- class={current === item ? "selected" : ""} -->
  <!-- class指令可以有多个，其作用也是让代码更可读 -->
  <button
    class:selected={current === item}
    class:pink={current === item}
    on:click={() => {
      current = item;
    }}>{item}</button
  >
{/each}

<style>
  button {
    display: block;
  }

  .selected {
    background-color: #ff3e00;
    color: white;
  }
  .pink {
    color: pink;
  }
</style>
