<script>
  import App from "../../051_Adding_parameters/src/App.svelte";

  let text = "";
  function handleKeydown(event) {
    let key = event.key;
    let keyCode = event.keyCode;
    text = `按键：${key} 编码：${keyCode}`;
  }

  function handleKeydown2(event) {
    let key = event.key;
    let keyCode = event.keyCode;
    console.log(`按键：${key} 编码：${keyCode}`);
  }
  // 好处就是不用DOM的原生写法就能实现对应功能、
  window.addEventListener("keydown", handleKeydown2);
</script>

<div>按任意键：{text}</div>
<!-- svelte:window指代window对象，组件中只能有一个window组件 -->
<svelte:window on:keydown={handleKeydown} />

