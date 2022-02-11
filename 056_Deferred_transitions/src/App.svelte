<script>
  /**
   * 学习动画和过渡到现在，我已经越来越迷惑了，svelte中的动画支持是非常强大的，
   * 但是随之而来也是更高的学习难度，尤其是存在easing、transition、motion等多个文件
   * 那这些不同的文件夹到底有什么不同，我查看了源码，其中的动画效果是继承自另一个仓库
   * 是postCSS的作者写的，果然对CSS是真爱！！！
   *
   * 更完美的是，作者还写了一本书来讲解这些概念，虽然是基于Flash的activeScript进行讲解，但和JS是同根同源的
   *
   * 首先补间动画分为静态和动态两种，
   * 1. 静态补间动画是指自动计算了补间动画对应的关键帧，是一劳永逸的
   * 2. 动态补间动画是指将动画函数和首尾关键帧直接保存，渲染时通过调用函数生成补间时的关键帧
   * 有点类似数组和对应生成器之间的关系
   *
   *
   */
  import { quintOut, circInOut } from "svelte/easing";
  import { crossfade } from "svelte/transition";
  import Todo from "./Todo.svelte";
  import Move from "./Move.svelte";
  const [send, receive] = crossfade({
    duration: (d) => Math.sqrt(d * 200),

    fallback(node, params) {
      const style = getComputedStyle(node);
      const transform = style.transform === "none" ? "" : style.transform;

      return {
        duration: 600,
        easing: quintOut,
        // easing: circInOut,
        css: (t) => {
          let css = `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`;
          console.log(css);
          return css;
        },
      };
    },
  });

  let uid = 1;

  let todos = [
    { id: uid++, done: false, description: "write some docs" },
    { id: uid++, done: false, description: "start writing blog post" },
    { id: uid++, done: true, description: "buy some milk" },
    { id: uid++, done: false, description: "mow the lawn" },
    { id: uid++, done: false, description: "feed the turtle" },
    { id: uid++, done: false, description: "fix some bugs" },
  ];

  function add(input) {
    const todo = {
      id: uid++,
      done: false,
      description: input.value,
    };

    todos = [todo, ...todos];
    input.value = "";
  }

  function remove(todo) {
    todos = todos.filter((t) => t !== todo);
  }

  function mark(todo, done) {
    todo.done = done;
    remove(todo);
    todos = todos.concat(todo);
  }
</script>

<Move />
<div class="board">
  <input
    placeholder="what needs to be done?"
    on:keydown={(e) => e.key === "Enter" && add(e.target)}
  />

  <div class="left">
    <h2>todo</h2>
    {#each todos.filter((t) => !t.done) as todo (todo.id)}
      <label in:receive={{ key: todo.id }} out:send={{ key: todo.id }}>
        <input type="checkbox" on:change={() => mark(todo, true)} />
        {todo.description}
        <button on:click={() => remove(todo)}>remove</button>
      </label>
    {/each}
  </div>

  <div class="right">
    <h2>done</h2>
    {#each todos.filter((t) => t.done) as todo (todo.id)}
      <label
        class="done"
        in:receive={{ key: todo.id }}
        out:send={{ key: todo.id }}
      >
        <input type="checkbox" checked on:change={() => mark(todo, false)} />
        {todo.description}
        <button on:click={() => remove(todo)}>remove</button>
      </label>
    {/each}
  </div>
</div>

<Todo />

<style>
  .board {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
    max-width: 36em;
    margin: 0 auto;
  }

  .board > input {
    font-size: 1.4em;
    grid-column: 1/3;
  }

  h2 {
    font-size: 2em;
    font-weight: 200;
    user-select: none;
    margin: 0 0 0.5em 0;
  }

  label {
    position: relative;
    line-height: 1.2;
    padding: 0.5em 2.5em 0.5em 2em;
    margin: 0 0 0.5em 0;
    border-radius: 2px;
    user-select: none;
    border: 1px solid hsl(240, 8%, 70%);
    background-color: hsl(240, 8%, 93%);
    color: #333;
  }

  input[type="checkbox"] {
    position: absolute;
    left: 0.5em;
    top: 0.6em;
    margin: 0;
  }

  .done {
    border: 1px solid hsl(240, 8%, 90%);
    background-color: hsl(240, 8%, 98%);
  }

  button {
    position: absolute;
    top: 0;
    right: 0.2em;
    width: 2em;
    height: 100%;
    background: no-repeat 50% 50%
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23676778' d='M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z'%3E%3C/path%3E%3C/svg%3E");
    background-size: 1.4em 1.4em;
    border: none;
    opacity: 0;
    transition: opacity 0.2s;
    text-indent: -9999px;
    cursor: pointer;
  }

  label:hover button {
    opacity: 1;
  }
</style>
