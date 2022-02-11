<script context="module">
  /*
   * 在经过研究之后明白了分享代码的含义，就是说.svelte文件同样可以作为ES module文件
   * 你可以导出变量或者方法，就像其他的js 文件一样，
   * 方法就是添加一个新的 script标签，属性为： context="module"
   * <script context="module">
   * 该代码和 import * from <module> 效果是一样的，如果将该代码放到独立的module.js文件中的话
   * 经过测试：module模块不能获取组件内的变量，但是组件可以获取module中的变量
   *
   * 总结：你不需要多添加一个js文件来编写代码，在svelte组件中就可以
   */

  const elements = new Set();
	/**
	 * 这里只能分别导出，因为默认导出是组件
	 */
  export function resetAllElements() {
    elements.forEach((element) => {
      element.value = "";
    });
  }
</script>

<script>
  import { onMount } from "svelte";
  export let label = "标题";
  let element;
  let value = "";
  onMount(() => {
    elements.add(element);
    return () => elements.delete(element);
  });
</script>

<label>
  {label}:
  <input bind:value bind:this={element} />
</label>
