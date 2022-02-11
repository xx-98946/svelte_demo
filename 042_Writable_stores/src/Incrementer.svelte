<script>
  import { count } from "./stores";
  function handleClick() {
    // update方法的返回将被作为新值
    count.update((n) => n + 1);
  }
</script>

<button on:click={handleClick}> 增加 </button>
