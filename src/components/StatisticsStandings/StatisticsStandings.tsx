import { 
	StatisticsNavigation,
	StandingsMain,
	TableNextPrevGames,
	PositionsChart,
	TableLeague,
} from '../';

import styles from './StatisticsStandings.module.scss';

import arrTables from '../../data/dataStatisticsSeven';
import clsx from "clsx";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";

function StatisticsStandings() {

	const DataMain = {
		tournament: 'Биг V (Викторияан Стейт Чемпионшип)',
		team: 'Хьюм Сити',
		percent: 100,
		forms: [
			{ form: 'loss' },
			{ form: 'win' },
			{ form: 'loss' },
			{ form: 'loss' },
			{ form: 'win' },
			{ form: 'loss' }
		]
	}

	const PositionsChartData = {
        nameOne: 'Хьюм Сити',
        arrOne: [1, 2, 1, 3, 5, 4, 6, 1, 1],
        nameTwo: '',
        arrTwo: []
    }

	const dataLeagueTable = arrTables.dataLeagueTable;

	const dataPrevTable = arrTables.dataPrevTable;

	const dataNextTable = arrTables.dataNextTable;

	return (
		<div className={styles.statisticsStandings}>
			<StatisticsNavigation name="standings"/>
			<div className={styles.wrapper}>
				<div className={styles.mainWrapper}>
					<StandingsMain data={DataMain}/>
				</div>
				<h2 className={styles.title}>Биг V (Викториан Стейт Чемпионшип)</h2>
				<div className={styles.tableWrapper}>
					<TableLeague data={dataLeagueTable}/>
				</div>

				<div className={clsx(styles.twoTableColumns, 'desktop')}>
					<TableNextPrevGames data={dataPrevTable}/>
					<TableNextPrevGames data={dataNextTable}/>
				</div>
				<div className={clsx(styles.twoTableColumns, 'mobile')}>
					<Tabs className={clsx(styles.tabs,'tabsGame')}>
						<TabList className={styles.tabs__list}>
							<Tab className={styles.tabs__btn} selectedClassName={styles.tabs__btnActive} >Последние матчи</Tab>
							<Tab className={styles.tabs__btn} selectedClassName={styles.tabs__btnActive}>Следующие матчи</Tab>
						</TabList>
						<TabPanel className={styles.tabs__panel}>
							<TableNextPrevGames data={dataPrevTable}/>
						</TabPanel>
						<TabPanel className={styles.tabs__panel}>
							<TableNextPrevGames data={dataNextTable}/>
						</TabPanel>
					</Tabs>
				</div>
				<PositionsChart data={PositionsChartData}/>
			</div>
		</div>
	);
}

export default StatisticsStandings;