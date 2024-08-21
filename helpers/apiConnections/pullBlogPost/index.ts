export const getAllBlogPosts = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_CMS}/api/blogposts`, {
		next: { revalidate: 60 },
		headers: { storedId: `${process.env.NEXT_PUBLIC_CLIENT_ID}` },
	});

	const data = await res.json();

	return data;
};

export const getPostByLink = async (link: string) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_CMS}/api/blogposts/${link}`,
		{
			next: { revalidate: 60 },
			headers: { storedId: `${process.env.NEXT_PUBLIC_CLIENT_ID}` },
		},
	);

	if (res.status === 404) {
		return new Error('Page not found');
	}

	if (!res.ok) {
		return new Error('An error occurred while fetching the data');
	}

	const data = await res.json();

	return data;
};

export const getPostsByCategory = async (categoryLink: string) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_CMS}/api/categories/${categoryLink}`,
		{
			next: { revalidate: 60 },
			headers: { storedId: `${process.env.NEXT_PUBLIC_CLIENT_ID}` },
		},
	);

	const data = await res.json();

	return data;
};
