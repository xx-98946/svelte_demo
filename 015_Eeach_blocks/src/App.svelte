<script>
  let cats = [
    { id: "J---aiyznGQ", name: "Keyboard Cat" },
    { id: "z_AbfPXTKms", name: "Maru" },
    { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
  ];
</script>

<h1>The Famous Cats of YouTube</h1>

<ol>
  {#each cats as cat}
    <li>id：{cat.id} &nbsp;&nbsp;&nbsp; name:{cat.name}</li>
  {/each}
</ol>

<!-- Each 里可以解构 -->
<ol>
  {#each cats as { id, name }, i}
    <li>id：{id} &nbsp;&nbsp;&nbsp; name:{name}</li>
  {/each}
</ol>
