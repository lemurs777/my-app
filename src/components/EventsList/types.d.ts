export type dataItemType = {
	showIcon?: boolean
	title: string
	collapse?: boolean
	favourite: boolean
	arrInfo: Array<{
		arrRow: Array<{
			name: string
			countOne: string
			countTwo: string | null
			up: boolean
			down: boolean
		}>
	}>
}

export type dataItemsType = {
	dataItems: Array<dataItemType>
}
