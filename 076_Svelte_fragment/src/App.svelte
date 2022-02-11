<script>
  import ContactCard from "./ContactCard.svelte";
</script>

<ContactCard>
  <span slot="name"> Jerry and Tom </span>

  <!-- 同名的插槽只能插入一个 -->
  <span slot="address"> California </span>

  <!-- 当时我就觉得会有这么一个空白标签，果然 ，这样插槽就可以放多个标签了-->
  <svelte:fragment slot="email">
    <span> jerry@abc.com </span>
    /
    <span> tom@abc.com </span>
  </svelte:fragment>
</ContactCard>
