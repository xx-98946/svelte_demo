<script>
  import Keypad from "./Keypad.svelte";
  import MyInput from "./MyInput.svelte";

  // 这个bin触发了联动效果
  // 其绑定的value发生了变化就会同步到bin中，和什么事件无关
  // 这和原生的DOM组件有一些区别，需要回头和原生DOM对比一下，感觉其中有什么关键的不同
  let pin;
  $: view = pin ? pin.replace(/\d(?!$)/g, "•") : "enter your pin";
  $: console.log({ pin });

  function handleSubmit() {
    alert(`submitted ${pin}`);
  }

  let my_value = "";
  $: console.log("@", my_value);
</script>

<h1 style="color: {pin ? '#333' : '#ccc'}">{view}</h1>

<Keypad on:submit={handleSubmit} bind:value={pin} />

<input bind:value={my_value} />
<!-- 调用组件的属性绑定默认值优先级高于被调用组件的属性绑定默认值 -->
<!-- 文件名就是组件名，一般采用大驼峰风格 -->
<MyInput bind:my_value />
