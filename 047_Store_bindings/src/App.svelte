<script>
  import { count } from "./store";
</script>

<div>当前时间：{$count}</div>
<!-- store中的变量和本地变量的用法是相同的
需要注意的是，如果要绑定store数据，需要确定store具有set方法
-->
<input type="number" bind:value={$count} />
