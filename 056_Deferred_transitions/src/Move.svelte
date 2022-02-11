<script>
  import { crossfade } from "svelte/transition";

  let isLeft = false;

  // send和receive是两个transition函数，关于具体的实现细节，我看过了源码，没看懂，以后再看吧
  // 先了解这个函数的作用就是key指定相同的两个元素分别作为过渡的起点和终点，
  const [send, receive] = crossfade({
    duration: 1000,
  });
</script>

<div>
  <label>
    放到左边
    <input type="checkbox" bind:checked={isLeft} />
  </label>

  <div class="container">
    <div class="item border left">
      {#if isLeft}
        <span in:receive={{ key: 2 }} out:send={{ key: 1 }}> 左边 </span>
      {/if}
    </div>
    <div class="item border right">
      {#if !isLeft}
        <span in:receive={{ key: 1 }} out:send={{ key: 2 }}> 右边 </span>
      {/if}
    </div>
  </div>
</div>

<style>
  .border {
    border: 1px solid black;
  }
  .container {
    display: flex;
    width: 100%;
  }
  .item {
    flex: 1;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .right {
    margin-top: 100px;
  }
</style>
