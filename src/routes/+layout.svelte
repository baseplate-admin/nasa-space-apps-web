<script lang="ts">
	import '@fontsource/nunito'; // Specify weight
	import '../styles.css';
	const { children } = $props();
</script>

<div class="h-screen w-screen flex items-center justify-center p-10" style="">
	{@render children()}
</div>

<style>
	div {
		background-color: #f3f4f6;
	}
</style>
