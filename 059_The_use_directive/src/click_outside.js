export function clickOutside(node) {
  const handleClick = (event) => {
    if (!node.contains(event.target)) {
      node.dispatchEvent(new CustomEvent("outclick"));
    }
  };

  document.addEventListener("click", handleClick, true);

  // 传入的node销毁时会触发
  return {
    destroy() {
      document.removeEventListener("click", handleClick, true);
    },
  };
}
