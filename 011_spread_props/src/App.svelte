<script>
  import Nested from "./Nested.svelte";

  const pkg = {
    name: "svelte",
    version: 3,
    speed: "blazing",
    website: "https://svelte.dev",
  };
</script>

<Nested {...pkg} />
