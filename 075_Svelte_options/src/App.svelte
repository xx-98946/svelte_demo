<script>
  import Todo from "./Todo.svelte";

  let todos = [
    { id: 1, done: true, text: "洗车" },
    { id: 2, done: false, text: "遛狗" },
    { id: 3, done: false, text: "修脚草坪" },
  ];

  function toggle(toggled) {
    todos = todos.map((todo) => {
      if (todo === toggled) {
        // return a new object
        return {
          id: todo.id,
          text: todo.text,
          done: !todo.done,
        };
      }

      // return the same object
      return todo;
    });
  }
</script>

<h2>Todos</h2>
{#each todos as todo}
  <Todo {todo} on:click={() => toggle(todo)} />
{/each}
