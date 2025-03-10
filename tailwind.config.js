/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			primary: 'Oswald',
			secondary: 'Raleway',
			tertiary: 'Rozha One',
		},
		container: {
			padding: {
				DEFAULT: '20px',
				lg: '0',
			},
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1300px',
		},
		extend: {
			colors: {
				dark: '#111111',
				grey: {
					DEFAULT: '#555555',
				},
			},
			backgroundImage: {
				hero: "url('/src/img/hero/bg.png')",
				about: "url('/src/img/about/image.png')",
				interview: "url('/src/img/interview/bg.png')",
			},
			content: {
				outlineText: 'url("/src/img/hero/outline-text.svg")',
			},
		},
	},
	plugins: [],
}

