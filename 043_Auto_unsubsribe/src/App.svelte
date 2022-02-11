<script>
  import Incrementer from "./Incrementer.svelte";
  import Decrementer from "./Decrementer.svelte";
  import Resetter from "./Resetter.svelte";

  import { count } from "./stores";
  import { onDestroy } from "svelte";
  let countValue;
  // store的返回值是一个对象，自然需要调用对象的订阅方法才能获取到真实的值
  // 发布订阅模式如果处理不善可能会发生内存泄漏，但网页中的泄露一般问题不大，通过刷新就能解决
  // 其中最容易出现的问题就是订阅后，store销毁了，但是订阅却没有被取消
  // subscribe的返回值就是取消订阅的函数，同常来说应该返回一个id的，但这么设计也没毛病
  const unsubscribe = count.subscribe((value) => (countValue = value));
  $: console.log({ unsubscribe });
  onDestroy(unsubscribe);
</script>

<p>count : {countValue}</p>
<!-- 但为了简化，提供了语法糖，$storeName 变量的作用和上述等价-->
<p>count : {$count}</p>

<Incrementer />
<Decrementer />
<Resetter />
