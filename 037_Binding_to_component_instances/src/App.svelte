<script>
  import MyInput from "./MyInput.svelte";

  let my_value = "";
  let input;
  $: console.log(input);
</script>

<span>自定义输入框：</span>
<button on:click="{input.focus()}">聚焦</button>
<MyInput bind:my_value bind:this={input} />
