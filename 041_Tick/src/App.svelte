<script>
  import { afterUpdate } from "svelte";
  import Demo from "./Demo.svelte";
  let text = `Select some text and hit the tab key to toggle uppercase`;
  let selectionStart1;
  let selectionEnd1;
  let textarea;

  // 两个组件的功能是完全一样的，只不过一个借助了tick，一个则借助了afterUpdate
  // 但综合而言：还是tick函数更好用，因为可以在事件处理内部调用，而不必保存多余的变量，也不用获取DOM节点
  afterUpdate(() => {
    textarea.selectionStart = selectionStart1;
    textarea.selectionEnd = selectionEnd1;
  });
  async function handleKeydown(event) {
    if (event.key !== "Tab") return;

    event.preventDefault();

    const { selectionStart, selectionEnd, value } = this;
    const selection = value.slice(selectionStart, selectionEnd);

    const replacement = /[a-z]/.test(selection)
      ? selection.toUpperCase()
      : selection.toLowerCase();

    text =
      value.slice(0, selectionStart) + replacement + value.slice(selectionEnd);

    // this has no effect, because the DOM hasn't updated yet
    // await tick()
    selectionStart1 = selectionStart;
    selectionEnd1 = selectionEnd;
  }
</script>

<textarea value={text} bind:this={textarea} on:keydown={handleKeydown} />
<Demo />

<style>
  textarea {
    width: 100%;
    height: 200px;
  }
</style>
