import { 
	TableLeagueCustomFilter,
	TableLeagueCustom,
	TableFormFilter,
	TableForm,
} from '../';

import arrTables from '../../data/dataStatisticsFour';

import styles from './StatisticsTables.module.scss';

function StatisticsTables() {

	const dataLeagueTable = arrTables.dataLeagueTable;

	const dataFormTable = arrTables.dataFormTable;

	return (
		<div className={styles.statisticsTables}>
			<div className={styles.wrapper}>
				<div className={styles.tableLeagueWrapper}>
					<TableLeagueCustomFilter />
					<TableLeagueCustom data={dataLeagueTable}/>
				</div>
				<TableFormFilter />
				<TableForm data={dataFormTable}/>
			</div>
		</div>
	);
}

export default StatisticsTables;