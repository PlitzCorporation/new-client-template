import { DM_Sans, Montserrat } from 'next/font/google';

export const secondaryFont = Montserrat({
	variable: '--primary-font',
	display: 'swap',
	subsets: ['cyrillic', 'latin'],
});

export const primaryFont = DM_Sans({
	variable: '--secodary-font',
	display: 'swap',
	subsets: ['latin'],
});
