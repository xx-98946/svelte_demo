<script>
  let name = "";
</script>

<!-- bind：value 绑定的事件触发是 input -->
<input type="text" bind:value={name} placeholder="输入姓名" />
<span>你好，{name || "陌生人"}</span>
