<script>
  import { longpress } from "./longpress.js";
/**
 * 看到了滑块的同时，我意识到滑块这个组件可能存在些问题，滑块没办法拖动到边缘，
 * 虽然此时它已经处于最小值或者最大值了
 * 一开始我以为是浏览器或者svelte本身的问题
 * 直到在css里看到了全局样式的padding！问题出在官方模板的global.css!!!
 */
  let pressed = false;
  let duration = 2000;
</script>

<label>
  <input type="range" bind:value={duration} max={2000} step={100} />
  {duration}ms
</label>

<button
  use:longpress={ duration }
  on:longpress={() => (pressed = true)}
  on:mouseenter={() => (pressed = false)}>按住鼠标</button
>

{#if pressed}
  <p>恭喜你，你已经按住鼠标超过{duration}ms</p>
{/if}


<input type="range" />