<script lang="ts">
	import { onMount } from 'svelte';
	import L from 'leaflet';
	import 'leaflet/dist/leaflet.css';
	import 'proj4leaflet';
	import { goto } from '$app/navigation';
	import { farms } from '$lib/store/farm';

	interface SearchResult {
		name: string;
		lat: number;
		lon: number;
	}

	let map: L.Map | null = $state(null);
	let searchInput = $state('');
	let searchResults = $state<SearchResult[]>([]);
	let errorMessage = $state('');
	let mapElement = $state<HTMLElement | null>(null);
	let dropdownElement = $state<HTMLDetailsElement | null>(null);
	let marker: L.Marker | null = $state(null);

	let got_location = $state(false);
	let latitude = $state(0);
	let longitude = $state(0);

	onMount(() => {
		if (!mapElement) return;

		const EPSG4326 = new L.Proj.CRS(
			'EPSG:4326',
			'+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs',
			{
				origin: [-180, 90],
				resolutions: [
					0.5625, 0.28125, 0.140625, 0.0703125, 0.03515625, 0.017578125, 0.0087890625,
					0.00439453125, 0.002197265625
				],
				bounds: L.bounds([
					[-180, -90],
					[180, 90]
				])
			}
		);

		map = L.map(mapElement, {
			center: [0, 0],
			zoom: 2,
			pin: true,
			maxZoom: 8,
			crs: EPSG4326,
			maxBounds: [
				[-120, -220],
				[120, 220]
			]
		});

		const nasaTemplate: string =
			'//gibs-{s}.earthdata.nasa.gov/wmts/epsg4326/best/' +
			'{layer}/default/{time}/{tileMatrixSet}/{z}/{y}/{x}.jpg';

		const nasaLayer = L.tileLayer(nasaTemplate, {
			layer: 'MODIS_Terra_CorrectedReflectance_TrueColor',
			tileMatrixSet: '250m',
			time: '2023-11-04',
			tileSize: 512,
			subdomains: 'abc',
			noWrap: true,
			continuousWorld: true,
			bounds: [
				[-89.9999, -179.9999],
				[89.9999, 179.9999]
			],
			attribution:
				'<a href="https://wiki.earthdata.nasa.gov/display/GIBS">' +
				'NASA EOSDIS GIBS</a>&nbsp;&nbsp;&nbsp;' +
				'<a href="https://github.com/nasa-gibs/web-examples/blob/main/examples/leaflet/geographic-epsg4326.js">' +
				'View Source' +
				'</a>'
		});
		const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: '© OpenStreetMap'
		});

		const baseLayers = {
			'NASA GIBS': nasaLayer,
			OpenStreetMap: osmLayer
		};

		L.control.layers(baseLayers).addTo(map);

		nasaLayer.addTo(map);
		map.addEventListener('click', handleClick);
		return () => {
			map?.remove();
		};
	});

	async function handleSearch(): Promise<void> {
		if (!searchInput.trim()) return;

		errorMessage = '';
		searchResults = [];

		try {
			const response = await fetch(
				`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchInput)}`
			);
			if (!response.ok) throw new Error('Network response was not ok');
			const data: any[] = await response.json();

			if (data.length === 0) {
				errorMessage = 'No results found';
			} else {
				searchResults = data.map((result) => ({
					name: result.display_name,
					lat: parseFloat(result.lat),
					lon: parseFloat(result.lon)
				}));
			}
		} catch (error) {
			console.error('Search error:', error);
			errorMessage = 'An error occurred while searching';
		}
	}

	function selectLocation(result: SearchResult): void {
		if (map) {
			map.setView([result.lat, result.lon], 50);
			searchResults = [];
			searchInput = result.name;
		}
	}

	function handleClick(event: L.LeafletMouseEvent) {
		latitude = event.latlng.lat;
		longitude = event.latlng.lng;

		got_location = true;
		addMarker(latitude, longitude);
	}
	function addMarker(lat: number, lon: number) {
		if (map) {
			if (marker) {
				map.removeLayer(marker);
			}
			marker = L.marker([lat, lon]).addTo(map);
		}
	}
	$effect(() => {
		if (!dropdownElement) return;

		if (searchResults.length > 0 && searchInput !== '') dropdownElement.open = true;
		else dropdownElement.open = false;
	});
</script>

<main class="relative h-screen z-0">
	<div class="z-20 grid grid-cols-3 w-screen mt-14">
		<div></div>
		<details class="dropdown place-self-center order-2" bind:this={dropdownElement}>
			<summary class="btn p-0"
				><input
					type="text"
					onfocus={(event) => {
						event.preventDefault();
					}}
					oninput={async (event) => {
						searchInput = (event.currentTarget as HTMLInputElement).value;
						await handleSearch();
					}}
					placeholder="Search your location"
					class="input input-bordered w-full max-w-xs placeholder:font-normal"
				/></summary
			>
			<ul class="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
				{#if errorMessage === ''}
					{#each searchResults as item}
						<li>
							<button
								onclick={() => {
									selectLocation(item);
								}}
							>
								{item.name}
							</button>
						</li>
					{/each}
				{:else}
					There was error fetching data : {errorMessage}
				{/if}
			</ul>
		</details>
		{#if got_location}
			<button
				onclick={() => {
					$farms.push({});
					goto('/home');
				}}
				class="order-3 btn place-self-end btn-accent !bg-[#44b79a] text-white w-56 h-4 font-bold text-lg"
				>Add Farm</button
			>
		{/if}
	</div>
	<div id="map" bind:this={mapElement} class="absolute inset-0 z-10 h-full w-full"></div>
</main>

<style>
	main {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	#map {
		height: 100vh;
		flex-grow: 1;
	}
	:global(leaflet-control-layers) {
		z-index: 99999;
	}
	:global(.leaflet-container) {
		background: #000;
	}
</style>
