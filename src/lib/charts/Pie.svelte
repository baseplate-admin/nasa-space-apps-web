<script>
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';

	/**
	 * @type {HTMLCanvasElement}
	 */
	let chartCanvas;

	onMount(() => {
		const ctx = chartCanvas.getContext('2d');
		// @ts-ignore
		new Chart(ctx, {
			type: 'pie',
			data: {
				datasets: [
					{
						data: [60, 20, 15],
						backgroundColor: [
							'rgb(64, 192, 160)', // Teal
							'rgb(64, 64, 255)', // Blue
							'rgb(240, 240, 255)' // Light blue/white
						]
					}
				],
				labels: ['Probability', 'Target Yield', 'Loss']
			},
			options: {
				responsive: true,
				plugins: {
					legend: {
						display: false
					},
					title: {
						display: true,
						text: 'Pie Chart'
					}
				}
			}
		});
	});
</script>

<div>
	<canvas bind:this={chartCanvas}></canvas>
</div>
