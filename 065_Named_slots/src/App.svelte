<script>
  import ContactCard from "./ContactCard.svelte";
</script>

<ContactCard>
  <span slot="name"> Jerry and Tom </span>

  <!-- 同名的插槽只能插入一个 -->
  <span slot="address"> California </span>

  <span slot="email"> jerry@tom.com </span>
</ContactCard>
