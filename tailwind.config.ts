import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			'plitz-bgs': '#1a1a1a',
			'plitz-body': '#dbdbdb',
			'plitz-light-gray': '#efefef',
			'plitz-accent': '#00ff62',
			'plitz-dark': '#434343',
			'plitz-blue': '#0b093a',
			white: '#ffffff',
		},
		fontFamily: {
			'plitz-font-main': 'var(--primary-font)',
			'plitz-font-sec': 'var(--secodary-font)',
		},

		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			dropShadow: {
				'plitz-text': '0 5px 15px rgba(0,0,0,0.16)',
				'plitz-darker': '0 3px 15px rgba(0,0,0,0.75)',
			},
			boxShadow: {
				'plitz-box': '0 5px 15px rgba(0,0,0,0.16)',
				'plitz-image': '0 0 25px rgba(0,0,0,0.75)',
			},
			borderRadius: {
				plitzsm: '1.25rem',
				plitzmd: '1.875rem',
				plitzlg: '2.1875rem',
				full: '50%',
			},
			keyframes: {
				bounce: {
					'0%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(-100%)' },
				},
			},
		},
	},
	plugins: [],
};
export default config;
