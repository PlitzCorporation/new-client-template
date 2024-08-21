import { Metadata } from 'next';

import { getPageByLink } from '@/helpers/apiConnections/pullPagesData';
import stripHTML from '@/helpers/stripHTML';

export interface AllPagesProps {
	params: {
		link: string;
	};
}

export const generateMetadata = async ({
	params,
}: AllPagesProps): Promise<Metadata> => {
	const currentPage = await getPageByLink(params.link);

	if (!currentPage || currentPage.message === 'not found') {
		return {
			title: '404 Page Not Found',
			description: '404 Page Not Found',
			openGraph: {
				images: [`https://thedavid.plitz7.com/404.jpg`],
			},
		};
	}

	const content = stripHTML(currentPage.content);
	const shortContent = content.split(' ').slice(0, 25).join(' ');

	return {
		title: currentPage.seotitle,
		description: shortContent,
		openGraph: {
			images: [`https://thedavid.plitz7.com/${currentPage.featuredimg}`],
		},
	};
};

const AllPages = async ({ params }: AllPagesProps) => {
	const currentPage = await getPageByLink(params.link);
	return <main className="plitz-container">{currentPage.title}</main>;
};

export default AllPages;
