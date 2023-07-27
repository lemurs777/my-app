export type TableFormData = Array<{
	number: number,
	name: string,
	scored: number,
	conceded: number,
	game: number,
	points: number,
	percent: number,
	forms: Array<{
		form: string,
	}>,
	next: string,
}>;
