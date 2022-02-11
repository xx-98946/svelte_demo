export function close(node, cb) {
  // node是指绑定use指令的那个元素
  function handleClick(e) {
    console.log({
      触发函数: "close",
      点击目标: e.target,
      use节点: node,
    });
  }
  document.addEventListener("click", handleClick, true);
}
