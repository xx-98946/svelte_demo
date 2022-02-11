<script>
  import Input, { resetAllElements } from "./Input.svelte";
  /**
   * 终于明白教程中说的可以不借助state来实现一些功能是怎么回事了
   * 但你把所有DOM都存起来了和store有什么关键的区别？？？
   * 
   * 而且该语法除非保存全部的组件实例，否则也没什么别的用，毕竟模块中的数据不是响应的
   * 想修改数据只能通过修改DOM节点数据来间接实现
   * 
   * 归根结底，也算是提供了一种新的方式来编写代码吧，不愿用但也要能看得懂别人写的代码
   * */ 
</script>

<p>我不是很清楚分享代码意味着什么，但还是先跟着教程写一下。</p>
<button on:click={resetAllElements}>重置</button>
<Input />
<Input label="标题2" />


