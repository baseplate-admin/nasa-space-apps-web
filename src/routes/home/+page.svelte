<script lang="ts">
	import Notifications from '$lib/icons/notifications.svelte';
	import farmerImage from '$lib/assets/picture.png';
	import Temp from '$lib/icons/temp.svelte';
	import Water from '$lib/icons/water.svelte';
	import Wind from '$lib/icons/wind.svelte';
	import Sun from '$lib/icons/sun.svelte';
	import Bar from '$lib/icons/bar.svelte';
	import TickWithCircle from '$lib/icons/tick_with_circle.svelte';
	import Add from '$lib/icons/add.svelte';
	import ElipseBlue from '$lib/icons/elipse-blue.svelte';
	import ElipseCyan from '$lib/icons/elipse-cyan.svelte';

	const weather = {
		current: 72, // farenheit
		humidity: `50%`,
		wind: `10mph`,
		solar: `1000w/m2`,
		precipitation: `0.00in`
	};
	const farmer = {
		name: 'Hassan'
	};

	const extra_field = {
		cost: `$350.4`,
		new_tasks: 154,
		water_usage: `293 litres`
	};

	const last_info = {
		yield: `5000 Kg`,
		prob: `2300 Kg`
	};

	const farms = new Array([]);
	let farms_added = $state<null | boolean>(true);
	// $effect(() => {
	// 	farms_added = farms.length === 0;
	// });
</script>

<div class="w-full h-12 flex items-center justify-end">
	<div class="flex gap-4 pr-6 items-center">
		<Notifications />
		<div class="avatar">
			<div class="h-7 w-7 rounded-full">
				<img
					alt="avatar"
					src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
				/>
			</div>
		</div>
	</div>
</div>
<div class="h-96 w-full relative overflow-hidden flex" style="background-color:black;">
	<img class="object-cover w-full object-end absolute z-0" src={farmerImage} alt="farmer" />
	<div class="absolute z-10 w-full h-full" style="background-color:#FFFFFF33;"></div>
	<div
		class="absolute z-10 w-[1040px] h-60 self-center rounded-2xl ml-10 flex pl-12 pt-6 gap-3 flex-col"
		style="background-color:#0000004D"
	>
		<div class="text-4xl text-white">
			Hello Farm Master {farmer.name}!
		</div>
		<div class="text-xl text-white">Current weather</div>
		<div class="flex gap-6">
			<div class="card bg-[#EAF6FC] h-28 w-40 shadow-xl">
				<div class="card-body">
					<h2 class="card-title"><Temp /></h2>
					<p>Temp: {weather.current}</p>
				</div>
			</div>
			<div class="card bg-[#F4EDFD] h-28 w-40 shadow-xl">
				<div class="card-body">
					<h2 class="card-title"><Water /></h2>
					<p>Humidity: {weather.humidity}</p>
				</div>
			</div>
			<div class="card bg-[#F3F5F5] h-28 w-40 shadow-xl">
				<div class="card-body">
					<h2 class="card-title"><Wind /></h2>
					<p>Wind: {weather.wind}</p>
				</div>
			</div>
			<div class="card bg-[#F3F5F5] h-28 w-40 shadow-xl">
				<div class="card-body">
					<h2 class="card-title"><Sun /></h2>
					<p>Solar: {weather.solar}</p>
				</div>
			</div>
			<div class="card bg-[#FBEDEC] h-28 w-40 shadow-xl">
				<div class="card-body">
					<h2 class="card-title"><Sun /></h2>
					<p>Preceip: {weather.precipitation}</p>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="flex gap-7 w-full py-12 px-10">
	<div class="flex p-4 h-24 w-[340px] rounded-[20px] gap-5 bg-white">
		<div class="rounded-full size-14 bg-[#F4F7FE] flex justify-center items-center"><Bar /></div>
		<div class="flex flex-col">
			<div class="text-[#A3AED0]">Cost</div>
			<div class="text-black font-bold">{extra_field.cost}</div>
		</div>
	</div>

	<div class="flex p-4 h-24 w-[340px] rounded-[20px] gap-5 bg-white">
		<div
			class="rounded-full size-14 flex justify-center items-center"
			style="background: linear-gradient(90deg, #4481EB 0%, #04BEFE 100%);
"
		>
			<TickWithCircle />
		</div>
		<div class="flex flex-col">
			<div class="text-[#A3AED0]">New Tasks</div>
			<div class="text-black font-bold">{extra_field.new_tasks}</div>
		</div>
	</div>
	<div class="flex p-4 h-24 w-[340px] rounded-[20px] gap-5 bg-white">
		<div class="rounded-full size-14 bg-[#F4F7FE] flex justify-center items-center"><Bar /></div>
		<div class="flex flex-col">
			<div class="text-[#A3AED0]">Water Usage</div>
			<div class="text-black font-bold">{extra_field.water_usage}</div>
		</div>
	</div>
	<div class="flex p-4 h-24 w-[340px] rounded-[20px] gap-5 bg-white">
		<div class="rounded-full size-14 bg-[#F4F7FE] flex justify-center items-center"><Bar /></div>
		<div class="flex flex-col">
			<div class="text-[#A3AED0]">Cost</div>
			<div class="text-black font-bold">{extra_field.cost}</div>
		</div>
	</div>
	<div class="flex p-4 h-24 w-[340px] rounded-[20px] gap-5 bg-white">
		<div class="rounded-full size-14 bg-[#F4F7FE] flex justify-center items-center"><Bar /></div>
		<div class="flex flex-col">
			<div class="text-[#A3AED0]">Cost</div>
			<div class="text-black font-bold">{extra_field.cost}</div>
		</div>
	</div>
</div>

<div class="flex justify-between px-10 gap-4">
	<div class="flex flex-col justify-center items-center w-full">
		<div class="flex w-full justify-between h-11 items-center">
			<span class="font-semibold">Farms Overview</span>
			{#if farms_added}<button
					class="btn btn-accent flex !bg-[#44b79a] text-white w-28 h-4 font-bold text-xs"
					><Add />Add Farm</button
				>
			{/if}
		</div>
		{#if farms_added}
			<div class="grid grid-cols-3 gap-5 mt-6">
				{#each Array(6).fill(0) as item}
					<div class="p-5 w-[309px] h-[321px] rounded-2xl bg-white">
						<div><img src="" /></div>
					</div>
				{/each}
			</div>
		{:else}
			<div>
				<div class="flex justify-center items-center flex-col gap-3">
					<div class="flex items-center justify-center bg-[#EAEEF9] rounded-full size-32">
						<div
							class="rounded-full size-14 flex justify-center items-center"
							style="background: linear-gradient(90deg, #4481EB 0%, #04BEFE 100%);"
						>
							<TickWithCircle />
						</div>
					</div>
					<div class="font-semibold text-black">Let’s Add a Farm First</div>
					<div class="text-[#344054]">Add Farm to track your farm data and get a quick vision</div>
					<button class="btn btn-accent flex !bg-[#44b79a] text-white w-28 h-4 font-bold text-xs"
						><Add />Add Farm</button
					>
				</div>
			</div>
		{/if}
	</div>
	<div>
		<div class="bg-white w-96 p-6 rounded-3xl">
			<div class="flex justify-between">
				<div class="font-bold">Yield Summary</div>
				<div class="text-[#A3AED0]">Monthly</div>
			</div>
			<div class="flex items-center justify-center">
				<div class="size-36 self-center"></div>
			</div>

			<div class="shadow-sm rounded-[20px] flex flex-row justify-between pb-3">
				<div class="flex flex-row items-center justify-center">
					<div class="flex flex-col">
						<div class="grid grid-cols-2 items-center justify-center gap-1 text-xs">
							<div class="justify-self-end"><ElipseBlue /></div>
							<span class="text-[#A3AED0] font-medium">Target Yield</span>
							<span class="col-start-2 text-[#2B3674] font-bold">{last_info.yield}</span>
						</div>
					</div>
				</div>
				<div class="divider divider-horizontal"></div>
				<div class="flex flex-row items-center justify-center -translate-x-10">
					<div class="flex flex-col">
						<div class="grid grid-cols-2 items-center justify-center gap-1 text-xs">
							<div class="justify-self-end"><ElipseCyan /></div>
							<span class="text-[#A3AED0] font-medium">Probability</span>
							<span class="col-start-2 text-[#2B3674] font-bold">{last_info.prob}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.card-body {
		@apply p-5;
	}
</style>
