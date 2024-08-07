import RightArrow from '@/components/icons/RightArrow';
import Link from 'next/link';
import React from 'react';

interface SolidButtonProps {
	label: string;
	href?: string;
	onClick?: () => void;
}

const ButtonIcon = () => {
	return (
		<RightArrow className="fill-white translate-x-0 opacity-0 group-hover:fill-plitz-body group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
	);
};

const ButtonLabel = (props: { label: string }) => {
	const { label } = props;
	return (
		<span className="translate-x-2 group-hover:-translate-x-1 transition-all">
			{label}
		</span>
	);
};

const SolidButton = (props: SolidButtonProps) => {
	const { label, onClick, href } = props;

	const commonClasses =
		'relative flex items-center bg-plitz-blue text-white px-9 py-3 rounded-xl border border-plitz-blue md:px-9 md:py-4 hover:border-white hover:bg-plitz-bgs transition-all group shadow-2xl';

	return href ? (
		<Link href={href} className={commonClasses}>
			<ButtonLabel label={label} />
			<ButtonIcon />
		</Link>
	) : (
		<button onClick={onClick} className={commonClasses}>
			<ButtonLabel label={label} /> <ButtonIcon />
		</button>
	);
};

export default SolidButton;
