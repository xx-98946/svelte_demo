<script>
  let score = randScore();
  function randScore() {
    return Math.round(Math.random() * 100);
  }
</script>

<main>
  <button on:click={() => (score = randScore())}> 重新生成分数 </button>
  <p>分数：{score}</p>
  {#if score < 60}
    <p>不及格</p>
  {:else if score < 80}
    <p>及格</p>
  {:else}
    <p>优秀</p>
  {/if}

  <!-- if嵌套 -->
  {#if score < 60}
    <p>不及格</p>
  {:else}
    {#if score < 80}
      <p>及格</p>
    {:else}
      <p>优秀</p>
    {/if}
  {/if}
</main>
