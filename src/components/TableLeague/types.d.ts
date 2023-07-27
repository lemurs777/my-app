export type TableLeagueData = {
	title: string | null,
	info: boolean,
	btnShowTable: boolean,
	forms: boolean,
	dataTable: Array<{
		show: boolean,
		number: number,
		playTournamentClass: string,
		directionClass: string,
		name: string,
		game: number,
		win: number,
		loss: number,
		scored: number,
		conceded: number,
		ratio: number,
		pct: number,
		points: number,
		forms: Array<{
			form: string,
		}>
	}>	
};
