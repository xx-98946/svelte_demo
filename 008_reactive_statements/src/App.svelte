<script>
	let count = 0;

	// $: 语法还可以触发事件，该事件的触发是在绑定事件之后
	$: if (count >= 10) {
		console.log(`count is dangerously high!`);
		count = 9;
	}
	// 而同样的事件检测则按书写的顺序依次执行
	$: console.log({ count });

	function handleClick() {
		console.log("click");
		count += 1;
	}
</script>

<button on:click={handleClick}>
	Clicked {count}
	{count === 1 ? "time" : "times"}
</button>
