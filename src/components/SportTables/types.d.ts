export type SportTableData = {
	sport: string,
	class: string,
	arrRows: Array<{ 
		name: string, 
		time: string, 
		date: string,
		nameOne: string,
		nameTwo: string,
		lastNumber: string,
		arrNumbers: Array<{
			number: number,
			class: string,
		}>	
	}>
};
