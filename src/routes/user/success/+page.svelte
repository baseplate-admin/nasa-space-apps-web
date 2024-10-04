<script>
	import Farmer from '$lib/icons/farmer.svelte';
</script>

<div class="bg-white rounded-3xl h-full w-full flex justify-center items-center flex-col gap-8">
	<Farmer />
	<div class="font-bold text-3xl">Yay! We have created our account successfully!</div>
	<div class="font-bold text-3xl">
		You are now a <span class="text-[#44b79a]">Field Master!</span>
	</div>

	<a href="/home" class="btn btn-accent !bg-[#44b79a] text-white w-56 h-4 font-bold text-lg"
		>Let's Setup the Farm</a
	>
</div>
