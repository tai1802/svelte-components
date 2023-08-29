/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				sm: '375px',
				xs: '480px',
				xsm: '640px',
				md: '768px',
				xmd: '880px',
				lg: '1024px',
				mlg: '1170px',
				xmlg: '1200px',
				xlg: '1280px',
				xmdlg: '1500px',
				xxlg: '1920px'
			}
		}
	},
	plugins: []
};
