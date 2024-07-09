import React from 'react';

import PlitzLogo from '@/components/logos/PlitzLogo';

const HomePage = () => {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-10 lg:p-24">
			<h1 className="text-center text-balance w-2/3 mb-7">
				Welcome to Plitz&apos;s Next.JS + Tailwind CSS Starter
			</h1>
			<div className="w-full lg:w-2/4 flex flex-col items-center justify-center">
				<h2 className="text-plitz-green text-center mb-7">
					This Plitz7 template is really ready to start a new project
				</h2>
				<p className="mb-4">Things to start with:</p>
				<ul>
					<li>Fonts in FontSettings.ts file and Tailwind.config.ts</li>
					<li>Colors in Tailwind.config.ts</li>
					<li>Folder customization for components and other utilities</li>
				</ul>
			</div>
			<div className="flex flex-col justify-center items-center text-center">
				<PlitzLogo />
				<p className="py-4">Plitz Corporation © 2024</p>
			</div>
		</main>
	);
};

export default HomePage;
