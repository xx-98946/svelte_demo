<script>
  let yes = false;
  let value = false;
  // checkbox的value属性是字符串！！！
  // 所以要按照文档中要求绑定checked属性
  $: console.log({ value });
  $: console.log({ yes });
</script>

<label>
  <!-- 绑定的是change事件，属性要绑定checked -->
  是否勾选： <input type="checkbox" bind:value bind:checked={yes} />
</label>
