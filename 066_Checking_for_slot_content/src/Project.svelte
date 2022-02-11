<script>
  import { onMount } from "svelte";

  export let title;
  export let tasksCompleted = 0;
  export let totalTasks = 0;
  onMount(() => {
    console.log($$slots);
  });
</script>

<article class:has-discussion={true}>
  <div>
    <h2>{title}</h2>
    <p>已完成 {tasksCompleted}/{totalTasks} 任务</p>
  </div>
  <!-- $$slots对象包含了插槽是否存在内容的数据 {name:boolean} -->
  <!-- 作用：无插槽内容时不显示相关标签 -->
  {#if $$slots.comments}
    <div class="discussion">
      <h3>批注</h3>
      <slot name="comments" />
    </div>
  {/if}
</article>

<style>
  article {
    border: 1px #ccc solid;
    border-radius: 4px;
    position: relative;
  }

  article > div {
    padding: 1.25rem;
  }

  article.has-discussion::after {
    content: "";
    background-color: #ff3e00;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    height: 20px;
    position: absolute;
    right: -10px;
    top: -10px;
    width: 20px;
  }

  h2,
  h3 {
    margin: 0 0 0.5rem;
  }

  h3 {
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  p {
    color: #777;
    margin: 0;
  }

  .discussion {
    background-color: #eee;
    border-top: 1px #ccc solid;
  }
</style>
