<script>
  let hovering;

  function enter() {
    hovering = true;
  }

  function leave() {
    hovering = false;
  }
</script>

<div on:mouseenter={enter} on:mouseleave={leave}>
	<!-- 插槽的属性是向外传递的！！ -->
  <slot {hovering} />
</div>
