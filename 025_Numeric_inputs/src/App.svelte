<script>
  let a = 1;
  let b = 2;
</script>

<!-- bind:value 会自动根据type对双向绑定的值进行处理，就是数据类型转换 -->
<label>
  <input type="number" bind:value={a} min="0" max="10" />
  <input type="range" bind:value={a} min="0" max="10" />
</label>

<label>
  <input type="number" bind:value={b} min="0" max="10" />
  <input type="range" bind:value={b} min="0" max="10" />
</label>

<p>{a} + {b} = {a + b}</p>

<style>
  label {
    display: flex;
  }
  input,
  p {
    margin: 6px;
  }
</style>
