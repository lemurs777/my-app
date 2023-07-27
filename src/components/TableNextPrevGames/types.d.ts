export type PrevNextGamesData = {
	title: string | null,
	dataTable: Array<{
		title: string,
		nameOne: string,
		winOne: boolean,
		date: string,
		score: string | null,
		nameTwo: string,
	}>;
};
