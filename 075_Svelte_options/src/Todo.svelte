<!-- 编译指令，写在哪个组件里就是哪个组件的编译配置，和父组件编译配置无关
使用该指令需要确保你知道对应属性更改后的行为！！属于高级用法，详情需查看配置文档
原来options不是组件
-->
<svelte:options immutable={true} />

<script>
  import { afterUpdate } from "svelte";
  import flash from "./flash.js";

  export let todo;

  let div;

  afterUpdate(() => {
    flash(div);
  });
</script>

<div bind:this={div} on:click>
  {todo.done ? "👍" : ""}
  {todo.text}
</div>

<style>
  div {
    cursor: pointer;
    line-height: 1.5;
  }
</style>
