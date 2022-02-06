<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch("message", {
      text: "hello",
    });
  }
</script>

<button on:click={handleClick}>click to message</button>
