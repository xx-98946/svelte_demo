import { writable } from "svelte/store";

function createCount() {
  let { update, subscribe } = writable(0);

  return {
    subscribe,
    add() {
      update((n) => n + 1);
    },
    sub() {
      update((n) => n - 1);
    },
    reset() {
      update(() => 0);
    },
  };
}
export default count = createCount();

// 任何实现了subscribe方法的对象都是合理的store
// 不一定非要是svelte中定义的这个
// 优点1：可以自己控制store暴露出哪些方法，如当前这个对象就未向外暴露update方法
// 优点2：可以使用第三方库来代替实现svelte/store的功能，便于定制
