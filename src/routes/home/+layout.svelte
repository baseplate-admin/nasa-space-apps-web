<script lang="ts">
	import { onMount } from 'svelte';

	const { children } = $props();

	$effect.pre(() => {
		window.document.body.classList.add(`bg-[#f7f6f6]`);
	});
</script>

<div class="w-screen">
	{@render children()}
</div>
