<script>
  function handleClick() {
    alert("no more alerts");
  }
</script>

<!-- 常用的事件装饰器：
preventDefault — 阻止默认事件
stopPropagation — 阻止事件冒泡到上层
passive — 减少滚动事件触发的频率，默认已添加。只能用于wheel和touch
nonpassive — 明确不减少事件触发的频率
capture — 采用事件捕获而不是冒泡
once — 只触发一次，而后移除事件
self — 只有event.target和编写代码时的元素相同才能触发
trusted — 只有event.isTrusted为true才能触发
-->
<button on:click|once={handleClick}> Click me </button>
