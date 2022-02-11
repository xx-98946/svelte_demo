<script>
  import { fly } from "svelte/transition";

  let number = 0;
</script>

<div>
  The number is:
  <!-- key标签表示，只要内容更改就会重新触发页面的动画效果 -->
  {#key number}
    <span style="display: inline-block" in:fly={{ y: -20 }}>
      {number}
    </span>
  {/key}
</div>
<br />
<button
  on:click={() => {
    number += 1;
  }}
>
  加1
</button>
