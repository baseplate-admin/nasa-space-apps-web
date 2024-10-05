<script lang="ts">
	const { children } = $props();

	$effect(() => {
		window?.document?.body?.classList.add(`bg-[#f7f6f6]`);
		return () => {
			window?.document?.body?.classList.remove(`bg-[#f7f6f6]`);
		};
	});
</script>

<div class="w-screen">
	{@render children()}
</div>
