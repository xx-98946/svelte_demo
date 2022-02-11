<script>
  import { getContext, onMount } from "svelte";
  import { key } from "./context";
  const context = getContext(key);
  console.log(context);
  onMount(() => {
    console.log("子组件挂载完成");
  });
</script>

<p>子组件</p>
