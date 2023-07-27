export type PromoListData = {
	title: string,
	items: Array<{
		link: string,
		image: string,
		alt: string,
		dateStart: string,
		dateEnd: string,
		title: string,
		info: string,
	}>;
};
