<script>
  let user = {
    firstname: "Ada",
    lastname: "Lovelace",
  };
  let element;
</script>

<div bind:this={element}>
  <input bind:value={user.firstname} />
  <input bind:value={user.lastname} />
</div>

<!-- 这个空标签会执行，就离谱。调试模式还是直接console比较好 -->
{(console.log(user), "")}

<!-- 在标签内部可以进入调试模式，后面可以跟可选的的多个变量名，但是需要打开控制台才能进入debug模式 -->
<!-- {@debug} -->
{@debug user, element}

<h1>Hello {user.firstname}!</h1>
