export type CategoryData = Array<{
	name: string,
	active: boolean,
}>;

export type ItemsData = Array<{
	title: string,
	favourite: boolean,
	arrInfo: Array<{
		arrRow: Array<{
			name: string,
			countOne: string,
			countTwo: string | null,
			up: boolean,
			down: boolean,
		}>,
	}>,
}>
