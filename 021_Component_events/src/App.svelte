<script>
  import Inner from "./Inner.svelte";

  function handleMessage(event) {
    // 数据保存在：event.detail中
    alert(event.detail.text);
  }
  // svelte不支持向子组件传递事件
</script>

<Inner on:message={handleMessage} message={handleMessage} />
