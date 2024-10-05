<script lang="ts">
	import farmerImage from '$lib/assets/farm_image.png';
	import farmOutline from '$lib/assets/farm_outline.png';

	import AdditionalWater from '$lib/icons/additional-water.svelte';
	import Bar from '$lib/icons/bar.svelte';
	import Cloud from '$lib/icons/cloud.svelte';
	import TickWithCircle from '$lib/icons/tick_with_circle.svelte';
	import File from '$lib/icons/file.svelte';
	import ElipseBlue from '$lib/icons/elipse-blue.svelte';
	import ElipseCyan from '$lib/icons/elipse-cyan.svelte';
	import Pie from '$lib/charts/Pie.svelte';
	import Line from '$lib/charts/Line.svelte';

	const farm_data = {
		current_vegitation: `70%`,
		upcoming_tasks: 15,
		water_usage: `293 litres`,
		average_soil_moisture: `50%`,
		alert: `5 warnings`
	};

	let tabs = [
		{
			name: 'Crop Health Management',
			active: false
		},
		{
			name: 'Irrigation Optimization',
			active: false
		},
		{
			name: 'Yield Report',
			active: false
		},
		{
			name: 'Risk Management',
			active: false
		},
		{
			name: 'Harvest Planning',
			active: false
		}
	];
	let activeTab: (typeof tabs)[0] = $state(tabs[0]);

	const last_info = {
		yield: `5000 Kg`,
		prob: `2300 Kg`
	};
	let irrigation_schedule = [
		{
			checked: true,
			date: '28th July',
			location: 'North Side'
		},
		{
			checked: true,
			date: '28th July',
			location: 'North Side'
		},
		{
			checked: true,
			date: '28th July',
			location: 'North Side'
		},
		{
			checked: false,
			date: '28th July',
			location: 'South Side'
		}
	];
	let tasks = [
		{ task: 'Irrigate Land A', checked: false },
		{ task: 'Irrigate Land B', checked: false },
		{ task: 'Irrigate Land C', checked: false },
		{ task: 'Time to harvest South farm', checked: false },
		{ task: 'Time to harvest North farm', checked: false }
	];
</script>

<div class="w-full h-12 flex"></div>

<div class="h-96 w-full relative overflow-hidden flex" style="background-color:black;">
	<img class="object-cover w-full h-full absolute z-0" src={farmerImage} alt="farmer" />
	<div class="absolute z-10 w-full h-full" style="background-color:#FFFFFF33;"></div>
	<div
		class="absolute z-10 w-[95%] h-[91%] self-center rounded-2xl ml-10 flex pl-12 pt-6 gap-3 flex-col"
		style="background-color:#0000004D"
	>
		<div class="flex justify-between px-20 items-center">
			<div style="background-color:#FFFFFF33" class="text-white font-semibold text-3xl px-1.5 py-3">
				Weather Now
			</div>

			<div><Cloud /></div>
		</div>
	</div>
</div>

<div class="flex gap-7 w-full py-12 px-10">
	<div class="flex p-4 h-24 w-[340px] rounded-[20px] gap-5 bg-white">
		<div class="rounded-full size-14 bg-[#F4F7FE] flex justify-center items-center">
			<Bar />
		</div>
		<div class="flex flex-col">
			<div class="text-[#A3AED0]">Current Vegiation</div>
			<div class="text-black font-bold">{farm_data.current_vegitation}</div>
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
			<div class="text-[#A3AED0]">Upcoming Tasks</div>
			<div class="text-black font-bold">{farm_data.upcoming_tasks}</div>
		</div>
	</div>
	<div class="flex p-4 h-24 w-[340px] rounded-[20px] gap-5 bg-white">
		<div class="rounded-full size-14 bg-[#F4F7FE] flex justify-center items-center">
			<AdditionalWater />
		</div>
		<div class="flex flex-col">
			<div class="text-[#A3AED0]">Water Usage</div>
			<div class="text-black font-bold">{farm_data.water_usage}</div>
		</div>
	</div>
	<div class="flex p-4 h-24 w-[340px] rounded-[20px] gap-5 bg-white">
		<div class="rounded-full size-14 bg-[#F4F7FE] flex justify-center items-center">
			<File />
		</div>
		<div class="flex flex-col">
			<div class="text-[#A3AED0]">Average Soil Moisture</div>
			<div class="text-black font-bold">{farm_data.average_soil_moisture}</div>
		</div>
	</div>
	<div class="flex p-4 h-24 w-[340px] rounded-[20px] gap-5 bg-white">
		<div class="rounded-full size-14 bg-[#F4F7FE] flex justify-center items-center">
			<File />
		</div>
		<div class="flex flex-col">
			<div class="text-[#A3AED0]">Alerts</div>
			<div class="text-black font-bold">{farm_data.alert}</div>
		</div>
	</div>
</div>

<div class="flex justify-between px-10 gap-4 pb-14">
	<div class="flex flex-col w-full">
		<!-- tabs  -->
		<div role="tablist" class="tabs tabs-boxed gap-2 bg-white rounded-md">
			{#each tabs as tab}
				<button
					class="tab {activeTab?.name === tab.name ? 'tab-active !bg-[#44b79a] !text-white' : ''}"
					onclick={() => {
						tabs.forEach((tab) => {
							tab.active = false;
						});
						activeTab = tab;
					}}
				>
					{tab.name}
				</button>
			{/each}
		</div>

		<!-- work -->
		<div class="flex w-full h-full mt-7 justify-between">
			{#if activeTab.name === 'Crop Health Management'}
				<div class="relative w-[548px] h-[664px]">
					<img src={farmOutline} class="z-0 absolute inset-0 object-cover" alt="" />
					<div
						class="absolute z-10 top-0 right-0 -translate-x-2 translate-y-2 text-[#777777] p-[10px] bg-white"
					>
						Select or click any area to check crop health
					</div>
					<div
						style="border-radius: 16px 16px 0px 16px; top:130px ; left:117px"
						class="flex flex-col z-10 p-4 bg-white absolute"
					>
						<div>30% Highly Stressed</div>
						<div>20% at risk</div>
						<div>50% Healthy Crops</div>
						<div>Soil Moisture: 70%</div>
					</div>
					<div
						style="border: 4px solid #FFFFFF;width:262.89px;height:465.83px; z-index:100;rotate:24deg"
						class="absolute top-[169px] right-[86px]"
					></div>
				</div>
				<div class="flex w-[402px] gap-[19px] flex-col">
					<div class="flex gap-4 bg-white w-full flex-col rounded-[20px] p-6">
						<div class="font-bold text-xl">Crop Health Score</div>
						<div class="flex flex-col gap-1">
							<div class="self-end text-sm text-[#667085]">30%</div>
							<progress class="h-[12px] progress progress-accent w-full" value="30" max="100"
							></progress>
						</div>
						<div class="flex flex-col gap-1">
							<div class="self-end text-sm text-[#667085]">40%</div>
							<progress class="h-[12px] progress progress-warning w-full" value="40" max="100"
							></progress>
						</div>
						<div class="flex flex-col gap-1">
							<div class="self-end text-sm text-[#667085]">30%</div>
							<progress class="h-[12px] progress progress-secondary w-full" value="30" max="100"
							></progress>
						</div>
					</div>

					<div
						class="flex gap-4 bg-white w-full flex-col rounded-[20px] p-6 items-center justify-center"
					>
						<div class="text-black font-bold text-2xl">Recommandation</div>
						<div class="text-center">
							Stay on the pulse of distributed projects with an anline whiteboard to plan,
							coordinate and discuss
						</div>
					</div>
				</div>
			{:else if activeTab.name === 'Irrigation Optimization'}
				<div class="relative w-[548px] h-[664px]">
					<img src={farmOutline} class="z-0 absolute inset-0 object-cover" alt="" />
					<div
						class="absolute z-10 top-0 right-0 -translate-x-2 translate-y-2 text-[#777777] p-[10px] bg-white"
					>
						Select or click any area to check crop health
					</div>
					<div
						style="border-radius: 16px 16px 0px 16px; top:135px"
						class="right-[26px] flex flex-col z-10 p-4 bg-white absolute"
					>
						<div class="text-secondary">Immediate Irrigation</div>
					</div>
					<div
						style="border-radius: 16px 16px 0px 16px; top:207px"
						class="left-0 flex flex-col z-10 p-4 bg-white absolute"
					>
						<div class="text-warning">Needs Moderate Irrigation</div>
					</div>
					<div
						style="border-radius: 16px 16px 0px 16px; top:381px; right:26px"
						class="flex flex-col z-10 p-4 bg-white absolute"
					>
						<div class="text-warning">Needs Moderate Irrigation</div>
					</div>
				</div>
				<div class="flex w-[402px] gap-[19px] flex-col">
					<div class="flex gap-4 bg-white w-full flex-col rounded-[20px] p-6">
						<div class="font-bold text-xl">Need of Irrigation</div>
						<div class="flex flex-col gap-1">
							<div class="self-end text-sm text-[#667085]">30%</div>
							<progress class="h-[12px] progress progress-accent w-full" value="30" max="100"
							></progress>
						</div>
						<div class="flex flex-col gap-1">
							<div class="self-end text-sm text-[#667085]">40%</div>
							<progress class="h-[12px] progress progress-warning w-full" value="40" max="100"
							></progress>
						</div>
						<div class="flex flex-col gap-1">
							<div class="self-end text-sm text-[#667085]">30%</div>
							<progress class="h-[12px] progress progress-secondary w-full" value="30" max="100"
							></progress>
						</div>
					</div>

					<div
						class="flex gap-4 bg-white w-full flex-col rounded-[20px] p-6 items-center justify-center"
					>
						<div class="text-black font-bold text-xl">Recommended Irrigation Schedule</div>

						{#each irrigation_schedule as item}
							<div
								class="flex gap-[16px] shadow-sm rounded-lg p-4 text-sm items-center justify-center"
							>
								<div class="w-7">
									<input
										type="checkbox"
										bind:checked={item.checked}
										class="checkbox checkbox-primary justify-self-end w-5"
									/>
								</div>
								<div>{item.date}</div>
								<div>Irrigate {item.location}</div>
								<div>Show Map</div>
							</div>
						{/each}
					</div>
				</div>
			{:else if activeTab.name === 'Yield Report'}
				<div class="relative w-[548px] h-[664px]">
					<img src={farmOutline} class="z-0 absolute inset-0 object-cover" alt="" />
					<div
						class="absolute z-10 top-0 right-0 -translate-x-2 translate-y-2 text-[#777777] p-[10px] bg-white"
					>
						Select or click any area to check crop health
					</div>
					<div
						style="border-radius: 16px 16px 0px 16px; top:135px"
						class="right-[26px] flex flex-col z-10 p-4 bg-white absolute"
					>
						<div class="text-secondary">Immediate Irrigation</div>
					</div>
					<div
						style="border-radius: 16px 16px 0px 16px; top:207px"
						class="left-0 flex flex-col z-10 p-4 bg-white absolute"
					>
						<div class="text-warning">Needs Moderate Irrigation</div>
					</div>
					<div
						style="border-radius: 16px 16px 0px 16px; top:381px; right:26px"
						class="flex flex-col z-10 p-4 bg-white absolute"
					>
						<div class="text-warning">Needs Moderate Irrigation</div>
					</div>
				</div>
				<div class="flex w-[402px] gap-[19px] flex-col">
					<div class="flex gap-4 bg-white w-full flex-col rounded-[20px] p-6">
						<Line />
					</div>

					<div
						class="flex gap-4 bg-white w-full flex-col rounded-[20px] p-6 items-center justify-center"
					>
						<div class="text-black font-bold text-xl">Major Affecting Incidents</div>
						<div class="px-[32px] flex flex-col gap-[25px] w-full">
							<div class="flex justify-between w-full text-[#A3AED0]">
								<div>Name</div>
								<div>Date</div>
							</div>
							<div class="flex justify-between w-full text-black font-bold text-sm">
								<div>Storm</div>
								<div>18 April, 2021</div>
							</div>
							<div class="flex justify-between w-full text-black font-bold text-sm">
								<div>Lowest Irrigation</div>
								<div>18 April, 2021</div>
							</div>
							<div class="flex justify-between w-full text-black font-bold text-sm">
								<div>Flood</div>
								<div>20 May, 2021</div>
							</div>
							<div class="flex justify-between w-full text-black font-bold text-sm">
								<div>Heavy Rainfall</div>
								<div>12 Jul, 2021</div>
							</div>
						</div>
					</div>
				</div>
			{:else if activeTab.name === 'Risk Management'}
				<div class="relative w-[548px] h-[664px]">
					<img src={farmOutline} class="z-0 absolute inset-0 object-cover" alt="" />
					<div
						class="absolute z-10 top-0 right-0 -translate-x-2 translate-y-2 text-[#777777] p-[10px] bg-white"
					>
						Select or click any area to check crop health
					</div>
					<div
						style="border-radius: 16px 16px 0px 16px; top:135px"
						class="right-[26px] flex flex-col z-10 p-4 bg-white absolute"
					>
						<div class="text-secondary">Immediate Irrigation</div>
					</div>
					<div
						style="border-radius: 16px 16px 0px 16px; top:207px"
						class="left-0 flex flex-col z-10 p-4 bg-white absolute"
					>
						<div class="text-warning">Needs Moderate Irrigation</div>
					</div>
					<div
						style="border-radius: 16px 16px 0px 16px; top:381px; right:26px"
						class="flex flex-col z-10 p-4 bg-white absolute"
					>
						<div class="text-warning">Needs Moderate Irrigation</div>
					</div>
				</div>
				<div class="flex w-[402px] gap-[19px] flex-col">
					<div
						class="flex gap-4 bg-white w-full flex-col rounded-[20px] p-6 items-center justify-center"
					>
						<div class="text-black font-bold text-xl">Pest and Disease Risk</div>

						<div
							class="flex w-full gap-[16px] shadow-sm rounded-lg p-4 text-sm items-center justify-between"
						>
							<div>High Risks</div>
							<div>30%</div>
							<div>Show Map</div>
						</div>
						<div
							class="flex w-full gap-[16px] shadow-sm rounded-lg p-4 text-sm items-center justify-between"
						>
							<div>Moderate Risks</div>
							<div>20%</div>
							<div>Show Map</div>
						</div>
					</div>
					<div
						class="flex gap-4 bg-white w-full flex-col rounded-[20px] p-6 items-center justify-center"
					>
						<div class="text-black font-bold text-xl">Upcoming Weather Risks</div>

						<div
							class="flex w-full gap-[16px] text-red-700 shadow-sm rounded-lg p-4 text-sm items-center justify-between"
						>
							Heavy Rain expected in 2 days
						</div>
						<div
							class="flex w-full gap-[16px] text-red-700 shadow-sm rounded-lg p-4 text-sm items-center justify-between"
						>
							Heat wave Warning Next Month
						</div>
					</div>
					<div class="flex gap-4 bg-white w-full flex-col rounded-[20px] p-6 items-center">
						<div class="text-black font-bold text-xl w-full">Recommended Preventions</div>

						<div class="text-[#656565]">
							Stay on the pulse of distributed projects with an anline whiteboard to plan,
							coordinate and discuss
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
	<div class="flex gap-6 flex-col">
		<div class="bg-white w-96 p-6 rounded-3xl">
			<div class="flex justify-between">
				<div class="font-bold">Yield Summary</div>
				<div class="text-[#A3AED0]">Monthly</div>
			</div>
			<div class="flex items-center justify-center">
				<div class="size-36 self-center"><Pie></Pie></div>
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
</div>
