<script>
  let choose = [];
  // 多选时就是数组类型了，按住ctrl进行多选
  // 虽然文档说可以使用对象作为选项，但是强烈不推荐使用！！！
  // 这次的默认值没有了，需要手动赋值为数组
  let options = [
    { text: "A", value: 1 },
    { text: "B", value: 2 },
    { text: "C", value: 3 },
    // { text: "C", value: 3 }, // 内存地址不相同的对象就代表不同的选项
  ];
</script>

<p>答案：{JSON.stringify(choose)}</p>
<select bind:value={choose} multiple>
  {#each options as option}
    <option value={option}>{option.text} </option>
  {/each}
</select>
