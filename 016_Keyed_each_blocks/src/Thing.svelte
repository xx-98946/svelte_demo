<script>
  export let color;
  export let title;
  export let id;
  const attr = { id, color, title };
</script>

<p>
  <span style="background-color: {color}">{id} 外部参数:{title}</span>
  <span style="background-color: {attr.color}"
    >{attr.id} 自身属性:{attr.title}</span
  >
</p>

<style>
  span {
    display: inline-block;
    padding: 0.2em 0.5em;
    margin: 0 0.2em 0.2em 0;
    width: 10em;
    text-align: center;
    border-radius: 0.2em;
    color: white;
  }
</style>
