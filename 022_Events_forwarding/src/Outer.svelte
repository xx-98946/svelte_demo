<script>
  import Inner from "./Inner.svelte";
</script>

<div>
  <h2>中转站</h2>
  <!-- 如果需要向外传递子组件的事件只要不写绑定的值即可 -->
  <Inner on:message />
</div>
