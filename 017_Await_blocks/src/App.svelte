<script>
  // 返回值是promise就可以使用await标签
  // todo: 学习promise
  function getRandomNumber() {
    return Promise.resolve(Math.ceil(Math.random() * 100));
  }

  function handleClick() {
    promise = getRandomNumber();
  }
  let promise = getRandomNumber();
</script>

<button on:click={handleClick}>生成随机数</button>
{#await promise}
  <p>加载中……</p>
{:then data}
  <p>数字是：{data}</p>
{:catch error}
  <p>出错了，{error.message}</p>
{/await}
