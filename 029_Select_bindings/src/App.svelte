<script>
  let choose;
  // option的选项可以是非基本数据类型
  // 如对象类型的相等条件是两者内存地址一致，字面量一致是不行的！！！
  // 所以还是使用基本数据类型吧
  // 另：第一个选项会作为默认值
  let options = [
    { text: "A", value: 1 },
    { text: "B", value: 2 },
    { text: "C", value: 3 },
  ];
</script>

<p>答案：{JSON.stringify(choose)}</p>
<select bind:value={choose}>
  {#each options as option}
    <option value={option}>{option.text} </option>
  {/each}
</select>
