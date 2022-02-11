<script>
  import Hoverable from "./Hoverable.svelte";
  import Mine from "./Mine.svelte";
</script>

<!-- 要通过获取子组件中的数据来动态更新插槽的内容，赋值之后的内容才是变量名，满奇特的 -->
<Hoverable let:hovering={active}>
  <div class:active>
    {#if active}
      <p>鼠标已经放上来了！！！</p>
    {:else}
      <p>把鼠标放上来</p>
    {/if}
  </div>
</Hoverable>

<!-- 让我们重新思考一下，如果不借助插槽属性这个问题可以解决吗？为什么要这么设计呢 
  下面是我修改的代码，实现了相同的效果，对比两者可以发现，区别是业务逻辑的编写位置，
  一个放在父组件中，而另一个则是放在子组件中，哪个更好理解就用哪个！！

  强调：slot 属性并不是唯一的解决方案
-->
<Mine>
  <div slot="enter" class="active">
    <p>鼠标已经放上来了！！！</p>
  </div>
  <div slot="leave">
    <p>把鼠标放上来</p>
  </div>
</Mine>

<style>
  div {
    padding: 1em;
    margin: 0 0 1em 0;
    background-color: #eee;
  }

  .active {
    background-color: #ff3e00;
    color: white;
  }
</style>
