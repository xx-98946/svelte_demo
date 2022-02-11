<script>
  let content = "我是可以被编辑的";
  function handleInput(e) {
    console.log(e);
    console.log(e.target.innerHTML);
    console.log(e.target.innerText);
    console.log(e.target.textContent);
  }
</script>

<!-- 主要是设置这个属性： contenteditable -->
<!-- 属性为true时，组件可以编辑，bind绑定的事件是: input方法 -->
<p contenteditable="true" bind:innerHTML={content} on:input={handleInput} />
<p contenteditable="true" bind:textContent={content} on:input={handleInput} />
