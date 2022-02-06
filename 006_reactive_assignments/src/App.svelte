<script>
	let count = 0;
	function handleCOunt() {
		count += 1;
	}
</script>

<button on:click={handleCOunt}>
	Clicked {count}
	{count <= 1 ? "time" : "times"}
</button>
