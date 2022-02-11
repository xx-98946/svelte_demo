<script>
  import { getContext, onMount, setContext } from "svelte";
  import Child from "./Child.svelte";
  import { key, init } from "./context";
  /**
   * 由于调用时间的限制，setContext方法不能在.js文件中执行，但可选的方法是如init方法所示，导出函数而后再调用，或者就是根据key直接使用setContext方法
   *
   * setContext方法是会覆盖之前的操作的!!
   * 
   * 该数据不是响应式的！！！
   */
  init();
  setContext(key, {
    ...getContext(key),
    text: "一段文本",
  });
  /**
   * getContext和setContext都只能在svelte组件的初始化中调用，也就是svelte文件的script标签中
   * 两者的对应关系是通过key来确定的，如果key是symbol类型的话，要保证key相同就只能从一个位置导入
   * 其他类型的key则保证两者相等即可！！
   *
   * 强调：父组件中非生命周期的代码执行是优先于子组件的，时间先后意义上的优先级，而不是权限意义
   */

  /**
   * 组件的挂载顺序依然是先挂载子组件，然后再挂载父组件，此种优先级和Context的要求刚好相反
   * 所以getContext和setContext都不能在onMount函数中调用！！
   *
   */
  onMount(() => {
    console.log("父组件挂载完成");
  });
</script>

<p>
  我不知道这是干啥的，怎么用！！！

  <Child />
</p>
