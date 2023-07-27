export type NextGamesData = {
	title: string,
	dataTable: Array<{
		date: string,
		round: number,
		nameOne: string,
		winOne: boolean,
		scoreOne: number,
		scoreTwo: number,
		scoreInfo: string,
		nameTwo: string,
		tournament: string,
	}>;
};
