import React from 'react';
import Image, { StaticImageData } from 'next/image';

import PlitzPlaceholder from '@/public/images/big-placeholder.jpg';

type Props = {
	imageSrc: string | StaticImageData;
	isLocal?: boolean;
	priority?: boolean;
};

const ImagePlacer = (props: Props) => {
	const { imageSrc, priority = false, isLocal = false } = props;

	const imageUri: string =
		typeof imageSrc === 'object' && isLocal
			? imageSrc.src
			: (imageSrc as string);

	const altText = imageUri
		.replace('uploads/', '')
		.replace(/\.(webp|jpg|png)/g, '')
		.replace(/-/g, ' ');

	return imageSrc && !imageUri.includes('big-placeholder') ? (
		<Image
			src={!isLocal ? `${process.env.NEXT_PUBLIC_CMS}/${imageSrc}` : imageSrc}
			alt={altText}
			width={1000}
			height={1000}
			priority={priority}
			className="object-cover min-h-full min-w-full max-h-full max-w-full"
		/>
	) : (
		<Image
			src={PlitzPlaceholder}
			alt="Taqueria Maria Bonita placeholder"
			className="object-cover min-h-full min-w-full max-h-full max-w-full"
			priority={priority}
		/>
	);
};

export default ImagePlacer;
