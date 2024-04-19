import animations from '@midudev/tailwind-animations'
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--aw-color-primary)',
				secondary: 'var(--aw-color-secondary)',
				accent: 'var(--aw-color-accent)',
				default: 'var(--aw-color-text-default)',
				muted: 'var(--aw-color-text-muted)',
			},
			fontFamily: {
			  sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
			  serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
			  heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
			},
		  },
	},
	plugins: [animations],
	darkMode: 'class'
}
