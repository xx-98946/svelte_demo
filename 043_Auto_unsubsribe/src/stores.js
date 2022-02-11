import { writable } from "svelte/store";
// 可写Store 通过writable方法生成
export const count = writable(0);
