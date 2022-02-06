<script>
	let count = 0;
	function handleCOunt() {
		count += 1;
	}
	// 右侧变量变化，左侧就会自动变化
	$: double = 2 * count;
	$: quadrupled = 2 * double;
</script>

<button on:click={handleCOunt}>
	Count: {count}
</button>

<p>{count} * 2 = {double}</p>
<p>{double} * 2 = {quadrupled}</p>
