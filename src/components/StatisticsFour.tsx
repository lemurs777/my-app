import { 
	TableLeagueCustomFilter,
	TableLeagueCustom,
	TableFormFilter,
	TableForm,
} from '../components';

import arrTables from '../data/dataStatisticsFour';

function StatisticsFour() {

	const dataLeagueTable = arrTables.dataLeagueTable;

	const dataFormTable = arrTables.dataFormTable;

	return (
		<div className="statistics-four">
			<div className="statistics-four__wrapper">
				<div className="statistics-four__table-league-wrapper">
					<TableLeagueCustomFilter />
					<TableLeagueCustom data={dataLeagueTable}/>
				</div>
				<TableFormFilter />
				<TableForm data={dataFormTable}/>
			</div>
		</div>
	);
}

export default StatisticsFour;