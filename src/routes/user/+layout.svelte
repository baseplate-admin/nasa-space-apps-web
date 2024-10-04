<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	const { children } = $props();

	let background_color: string | null = $state<null>(null);

	onMount(() => {
		window.document.body.classList.add('h-screen w-screen flex items-center justify-center p-10');
		background_color = window.document.body.style.backgroundColor;
	});
	onDestroy(() => {
		window.document.body.classList.remove(
			'h-screen w-screen flex items-center justify-center p-10'
		);
		if (background_color) {
			window.document.body.style.backgroundColor = background_color;
		}
	});
</script>

{@render children()}
