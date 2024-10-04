<script>
	import Farmer from '$lib/icons/farmer.svelte';
</script>

<div
	data-main=""
	class="bg-white rounded-3xl h-full w-full flex justify-center items-center flex-col gap-8"
>
	<Farmer />
	<div class="font-bold text-3xl" style="color:#44B79A">Login to your existing account?</div>

	<div class="flex flex-col items-start gap-2">
		<div><span class="text-black">Phone Number</span> <span style="color:#E45270">*</span></div>
		<input type="text" placeholder="Type here" class="input w-96 border-blue-400" />
	</div>

	<div>Do not Have an Account? <a href="./create" class="text-black font-semibold">Sign Up</a></div>
	<a href="/home" class="btn btn-accent !bg-[#44b79a] text-white w-56 h-4 font-bold text-lg"
		>Continue</a
	>
</div>

<style>
	div[data-main] {
		font-family: 'Nunito';
	}
</style>
