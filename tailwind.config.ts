import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Nunito', 'sans-serif']
			}
		}
	},
	plugins: [daisyui]
} satisfies Config;
