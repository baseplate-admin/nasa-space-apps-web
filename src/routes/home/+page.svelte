<script lang="ts">
	import Notifications from '$lib/icons/notifications.svelte';
	import Temp from '$lib/icons/temp.svelte';
	import Water from '$lib/icons/water.svelte';
	import Wind from '$lib/icons/wind.svelte';
	import Sun from '$lib/icons/sun.svelte';
	import Bar from '$lib/icons/bar.svelte';
	import TickWithCircle from '$lib/icons/tick_with_circle.svelte';
	import Add from '$lib/icons/add.svelte';
	import ElipseBlue from '$lib/icons/elipse-blue.svelte';
	import ElipseCyan from '$lib/icons/elipse-cyan.svelte';

	import farmerImage from '$lib/assets/picture.png';
	import farmImage1 from '$lib/assets/farms_1.png';
	import AdditionalWater from '$lib/icons/additional-water.svelte';
	import File from '$lib/icons/file.svelte';
	import Pie from '$lib/charts/Pie.svelte';
	import { farms } from '$lib/store/farm';
	import { get } from 'svelte/store';

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
		water_usage: `293 litres`,
		soil_moisture: `50%`,
		alerts: 5
	};

	const last_info = {
		yield: `5000 Kg`,
		prob: `2300 Kg`
	};

	let farms_added = $state<null | boolean>();

	let tasks = [
		{ task: 'Irrigate Land A', checked: false },
		{ task: 'Irrigate Land B', checked: false },
		{ task: 'Irrigate Land C', checked: false },
		{ task: 'Time to harvest South farm', checked: false },
		{ task: 'Time to harvest North farm', checked: false }
	];
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
		<div class="rounded-full size-14 bg-[#F4F7FE] flex justify-center items-center">
			<AdditionalWater />
		</div>
		<div class="flex flex-col">
			<div class="text-[#A3AED0]">Water Usage</div>
			<div class="text-black font-bold">{extra_field.water_usage}</div>
		</div>
	</div>
	<div class="flex p-4 h-24 w-[340px] rounded-[20px] gap-5 bg-white">
		<div class="rounded-full size-14 bg-[#F4F7FE] flex justify-center items-center"><File /></div>
		<div class="flex flex-col">
			<div class="text-[#A3AED0]">Average Soil Moisture</div>
			<div class="text-black font-bold">{extra_field.soil_moisture}</div>
		</div>
	</div>
	<div class="flex p-4 h-24 w-[340px] rounded-[20px] gap-5 bg-white">
		<div class="rounded-full size-14 bg-[#F4F7FE] flex justify-center items-center"><File /></div>
		<div class="flex flex-col">
			<div class="text-[#A3AED0]">Alerts</div>
			<div class="text-black font-bold">{extra_field.alerts}</div>
		</div>
	</div>
</div>

<div class="flex justify-between px-10 gap-4 pb-14">
	<div class="flex flex-col w-full">
		<div class="flex w-full justify-between h-11 items-center">
			<span class="font-semibold">Farms Overview</span>
			{#if $farms.length !== 0}
				<a
					href="/map"
					class="btn px-2 btn-accent flex flex-row !bg-[#44b79a] text-white w-28 h-4 font-bold"
				>
					<Add />Add Farm
				</a>
			{/if}
		</div>
		{#if $farms.length !== 0}
			<div class="grid grid-cols-2 md:grid-cols-3 justify-between w-full gap-y-8 mt-6">
				{#each $farms as item}
					<a href="/farmer" class="p-5 h-[321px] rounded-2xl m-auto bg-white">
						<div class="relative h-44 overflow-hidden rounded-xl z-0">
							<img src={farmImage1} class="object-cover absolute z-10" alt="" />
							<div
								class="absolute p-3 bottom-0 z-20 w-full text-white text-sm"
								style="background-color:#00000033"
							>
								Rain expected in 2 days
							</div>
						</div>
						<div class="mt-4 flex flex-col gap-2">
							<div class="font-semibold">South East Farm</div>
							<div>Crop Health: "Healthy"</div>
							<div>Soil Moisture: 55% Irrigation Needed</div>
						</div>
					</a>
				{/each}
			</div>
		{:else}
			<div class="self-center justify-self-center">
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
					<a
						href="/map"
						class="btn btn-accent flex !bg-[#44b79a] text-white w-28 h-4 font-bold text-xs"
						><Add />Add Farm</a
					>
				</div>
			</div>
		{/if}
	</div>
	<div class="flex gap-6 flex-col">
		<div class="bg-white w-96 p-6 rounded-3xl">
			<div class="flex justify-between">
				<div class="font-bold">Yield Summary</div>
				<div class="text-[#A3AED0]">Monthly</div>
			</div>
			<div class="flex items-center justify-center">
				<div class="size-36 self-center">
					{#if $farms.length !== 0}
						<Pie></Pie>
					{/if}
				</div>
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
		<div class="bg-white w-96 p-6 rounded-3xl">
			<div class="font-bold">Urgent Tasks</div>
			<div class="flex flex-col gap-5 mt-6">
				{#each tasks as task}
					<div class="flex gap-5 items-center">
						<input
							type="checkbox"
							bind:checked={task.checked}
							class="checkbox checkbox-primary justify-self-end w-5"
						/>
						<div>{task.task}</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div
		class="fixed bottom-[62px] right-[32px] w-[90px] h-[90px] rounded-full flex btn btn-accent text-white"
	>
		Ask AI
	</div>
</div>

<style lang="postcss">
	.card-body {
		@apply p-5;
	}
</style>
