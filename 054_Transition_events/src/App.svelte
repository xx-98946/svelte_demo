<script>
  import { fly } from "svelte/transition";

  let visible = true;
  let status = "waiting...";

  function setStatus(v) {
    return () => {
      status = v;
    };
  }
</script>

<p>status: {status}</p>

<label>
  <input type="checkbox" bind:checked={visible} />
  visible
</label>

{#if visible}
  <p
    transition:fly={{ y: 200, duration: 2000 }}
    on:introstart={setStatus("intro(前奏) started")}
    on:outrostart={setStatus("outro（尾声） started")}
    on:introend={setStatus("intro(前奏) ended")}
    on:outroend={setStatus("outro（尾声） ended")}
  >
    Flies in and out
  </p>
{/if}
