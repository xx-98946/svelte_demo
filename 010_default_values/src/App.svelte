<script>
	import Nested from "./Nested.svelte";
	let value = 42;
</script>

<Nested answer={value} />
<Nested />
