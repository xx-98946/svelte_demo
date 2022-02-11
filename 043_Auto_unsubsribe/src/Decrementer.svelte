<script>
  import { count } from "./stores";
  function handleClick() {
    count.update((n) => n - 1);
  }
</script>

<button on:click={handleClick}>减少</button>
