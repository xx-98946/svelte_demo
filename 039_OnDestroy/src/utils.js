import { onDestroy, onMount } from "svelte";

export function onInterval(callback, milliseconds) {
  let timer;
  onMount(() => {
    timer = setInterval(callback, milliseconds);
  });

  onDestroy(() => {
    clearInterval(timer);
  });
}
