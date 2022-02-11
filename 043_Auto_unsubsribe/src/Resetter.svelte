<script>
  import { count } from "./stores";
  function handleClick() {
    // set方法可以直接设置值
    count.set(0);
  }
</script>

<button on:click={handleClick}>重置</button>
