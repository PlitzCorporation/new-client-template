export const getAllCtas = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_CMS}/api/sliders`, {
		next: { revalidate: 60 },
		headers: { storedId: `${process.env.NEXT_PUBLIC_CLIENT_ID}` },
	});

	const data = await res.json();

	return data;
};
