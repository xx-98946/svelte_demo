<script>
  export let my_value = "x";
  let input;
  // 不导出的函数是无法被外部调用的
  export function focus() {
    // 为了获取真是DOM节点，目前只能通过bind:this进行绑定
    input.focus();
  }
</script>

<input
  type="text"
  bind:value={my_value}
  placeholder="随便输入点啥"
  bind:this={input}
/>
