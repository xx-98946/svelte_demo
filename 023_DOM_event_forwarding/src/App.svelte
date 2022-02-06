<script>
  import CustomButton from "./CustomButton.svelte";
  function handleClick() {
    alert("点击");
  }
</script>

<CustomButton on:click={handleClick} />
