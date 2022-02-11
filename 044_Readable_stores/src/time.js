import { readable } from "svelte/store";

/**
 * 只读store的作用就是一经初始化，store就会按照初始化策略持续执行下去
 * 直到最终被销毁，期间不能被其他操作修改
 */
export const time = readable(new Date(), function start(set) {
  const i = setInterval(() => {
    const t = new Date();
    console.log({ t });
    set(t);
  }, 1000);
  // 所有订阅取消时，就会调用该函数
  return () => {
    clearInterval(i);
  };
});
