<script>
  let user = { loggedIn: false };

  function toggle() {
    user.loggedIn = !user.loggedIn;
  }
</script>

<!-- 起始使用# -->
{#if user.loggedIn}
  <button on:click={toggle}> 退出 </button>
  <!-- 中间标签使用： -->
{:else}
  <button on:click={toggle}> 登录 </button>
{/if}
<!-- 闭合标签使用/ -->
