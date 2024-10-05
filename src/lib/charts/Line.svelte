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
			type: 'line',
			data: {
				labels: ['SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'JAN'],
				datasets: [
					{
						label: 'Series 1',
						data: [105, 95, 110, 100, 108, 106],
						borderColor: 'rgb(65, 84, 241)',
						tension: 0.4,
						pointRadius: 0
					},
					{
						label: 'Series 2',
						data: [100, 90, 105, 95, 102, 100],
						borderColor: 'rgb(144, 224, 255)',
						tension: 0.4,
						pointRadius: 0
					}
				]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: {
						display: false
					},
					tooltip: {
						enabled: false
					},
					title: {
						display: true,
						text: 'Historical Yield Data',
						align: 'start',
						color: '#333',
						font: {
							size: 16,
							weight: 'normal'
						},
						padding: {
							top: 10,
							bottom: 10
						}
					},
					customTooltip: {
						id: 'customTooltip',
						/**
						 * @param {{ ctx: any; chartArea: { top: any; bottom: any; left: any; right: any; width: any; height: any; }; }} chart
						 * @param {any} args
						 * @param {any} options
						 */
						afterDraw(chart, args, options) {
							const {
								ctx,
								chartArea: { top, bottom, left, right, width, height }
							} = chart;
							ctx.save();

							// Draw tooltip
							ctx.fillStyle = 'rgb(65, 84, 241)';
							ctx.fillRect(width * 0.6, top + 20, 60, 25);

							ctx.font = '12px Nunito';
							ctx.fillStyle = 'white';
							ctx.textAlign = 'center';
							ctx.fillText('$108.00', width * 0.6 + 30, top + 37);

							ctx.restore();
						}
					}
				},
				scales: {
					x: {
						grid: {
							display: false
						},
						ticks: {
							padding: 5
						}
					},
					y: {
						display: false
					}
				},
				layout: {
					padding: 0
				}
			},
			plugins: [
				{
					id: 'customBorder',
					beforeDraw(chart, args, options) {
						const {
							ctx,
							chartArea: { top, bottom, left, right, width, height }
						} = chart;
						ctx.save();
						ctx.strokeStyle = 'rgb(144, 224, 255)';
						ctx.lineWidth = 1;
						ctx.strokeRect(left, top, width, height);
						ctx.restore();
					}
				}
			]
		});
	});
</script>

<div class="chart-container" style="position: relative; width:100%; height:300px; max-width:600px;">
	<canvas bind:this={chartCanvas}></canvas>
	<div
		style="position: absolute; top: 5px; right: 5px; background-color: white; padding: 2px 8px; border: 1px solid #ddd; border-radius: 4px; font-size: 12px;"
	>
		6 Months
	</div>
</div>
