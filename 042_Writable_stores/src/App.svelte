<script>
  import Incrementer from "./Incrementer.svelte";
  import Decrementer from "./Decrementer.svelte";
  import Resetter from "./Resetter.svelte";

  import { count } from "./stores";
  let countValue;
  // store的返回值是一个对象，自然需要调用对象的订阅方法才能获取到真实的值
  count.subscribe((value) => (countValue = value));
</script>

<p>count : {countValue}</p>
<Incrementer />
<Decrementer />
<Resetter />
