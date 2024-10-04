<script>
	import Farmer from '$lib/icons/farmer.svelte';
</script>

<div
	data-main=""
	class="bg-white h-full rounded-3xl w-full flex justify-center items-center flex-col gap-8 overflow-y-scroll"
>
	<Farmer />
	<div class="font-bold text-3xl" style="color:#44B79A">Let's create an account</div>
	<div class="flex flex-col items-start gap-2">
		<div><span class="text-black">Your name</span> <span style="color:#E45270">*</span></div>
		<input type="text" placeholder="Type here" class="input w-96 border-blue-400" />
	</div>

	<div class="flex flex-col items-start gap-2">
		<div><span class="text-black">Phone Number</span> <span style="color:#E45270">*</span></div>
		<input type="text" placeholder="Type here" class="input w-96 border-blue-400" />
	</div>

	<div class="flex flex-col items-start gap-2">
		<div>Email</div>
		<input type="text" placeholder="Type here" class="input w-96 border-blue-400" />
	</div>

	<div class="flex flex-col items-start gap-2">
		<div>Location</div>
		<input type="text" placeholder="Type here" class="input w-96 border-blue-400" />
	</div>

	<div class="flex flex-col items-start gap-2">
		<div>Language</div>
		<input type="text" placeholder="Type here" class="input w-96 border-blue-400" />
	</div>

	<div>Have an Account? <a href="./login" class="text-black font-semibold">Sign In</a></div>
	<a href="./success" class="btn btn-accent !bg-[#44b79a] text-white w-56 h-4 font-bold text-lg"
		>Continue</a
	>
</div>

<style>
	div[data-main] {
		font-family: 'Nunito';
	}
</style>
