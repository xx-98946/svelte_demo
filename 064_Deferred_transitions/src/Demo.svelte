<script>
  import { slide } from "svelte/transition";

  let todoList = [
    { done: false, id: 1 },
    { done: false, id: 2 },
    { done: false, id: 3 },
    { done: true, id: 4 },
    { done: false, id: 5 },
    { done: false, id: 6 },
    { done: true, id: 7 },
    { done: false, id: 8 },
    { done: false, id: 9 },
  ];

  function add() {
    todoList = [
      ...todoList,
      {
        id: todoList.length + 1,
        done: false,
      },
    ];
  }

  //   很显然，只修改数组中的一个元素是不可行的
  function mark(todoItem, done) {
    todoItem.done = done;
    // 这句才能触发页面刷新
    todoList = todoList;
  }
  let something;
</script>

<main>
  <button on:click={add}>新增代办事项</button>

  <section class="container">
    <div class="left">
      待办事项：
      <ul>
        {#each todoList.filter((item) => !item.done) as todoItem (todoItem.id)}
          <li transition:slide>
            <input type="checkbox" on:change={() => mark(todoItem, true)} />

            事项{todoItem.id}
          </li>
        {/each}
      </ul>
    </div>
    <div class="right">
      已完成事项：
      <ul>
        {#each todoList.filter((item) => item.done) as todoItem (todoItem.id)}
          <li transition:slide>
            <input type="checkbox" on:change={() => mark(todoItem, false)} />

            事项{todoItem.id}
          </li>
        {/each}
      </ul>
    </div>
  </section>
</main>

<style>
  main {
    text-align: center;
    padding-bottom: 100px;
  }
  .container {
    display: flex;
    justify-content: space-around;
    height: 300px;
  }
  .container .right,
  .container .left {
    border: 1px solid black;
    padding: 10px 50px;
  }

  .container .right li,
  .container .left li {
    list-style: none;
    border: 1px solid purple;
    border-radius: 5px;
    padding: 0 30px;
    margin: 5px;
  }
</style>
