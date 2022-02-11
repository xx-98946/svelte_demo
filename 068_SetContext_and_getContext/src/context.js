import { setContext } from "svelte";
const key = Symbol();

function init() {
  setContext(key, {
    help: "设置上下文环境",
  });
}

export { key, init };
