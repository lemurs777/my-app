import { 
	InPersonMain,
	InPersonInfo,
	InPersonScore,
	TableNextGames,
	TableNextPrevGames,
	PositionsChart,
	TableLeague,
	TableBigSmall,
	TableBigSmallCustomFilter,
} from '../';

import styles from './StatisticsInPerson.module.scss';

import arrTables from '../../data/dataStatisticsSix';

function StatisticsInPerson() {

	const MainData = {
		title: 'Биг V (Викториан Стейт Чемпионшип) Раунд 4',
		nameOne: 'Western Port Steelers',
		nameTwo: 'Блэкберн Викингс',
		date: '15/04/23',
		time: '12:00',
	}

	const InfoData = {
		title: 'Следующие матчи',
		date: '15/01/23',
		tournament: 'Биг V (Викториан Стейт Чемпионшип)',
		round: 4,
		mainPercent: 38,
		nameOne: 'Western Port Steelers',
		scoreOne: 100,
		tablePercentOne: 0.25,
		tablePositionOne: 8,
		winOne: 4,
		bigWinOne: '106 : 88',
		pointsOne: 457,
		mediumPointsOne: 91.40,
		efficiencyOne: 33,
		formsOne: [
			{ form: 'loss' },
			{ form: 'win' },
			{ form: 'loss' },
			{ form: 'loss' },
			{ form: 'win' },
			{ form: 'loss' },
		],
		nameTwo: 'Блэкберн Викингс',
		scoreTwo: 199,
		tablePercentTwo: 0.333,
		tablePositionTwo: 6,
		winTwo: 1,
		bigWinTwo: '106 : 88',
		pointsTwo: 457,
		mediumPointsTwo: 91.40,
		efficiencyTwo: 17,
		formsTwo: [
			{ form: 'loss' },
			{ form: 'loss' },
			{ form: 'loss' },
			{ form: 'win' },
			{ form: 'loss' },
			{ form: 'loss' },
		],
	}

	const ScoreData = {
		title: 'Общий счёт',
		winOne: 4,
		percentOne: 80,
		nameOne: 'Western Port Steelers',
		winTwo: 1,
		percentTwo: 20,
		nameTwo: 'Блэкберн Викингс',
	};

	const PositionsChartData = {
		nameOne: 'Блэкберн Викингс',
		arrOne: [4, 4, 6, 5, 2, 2, 1, 3, 4],
		nameTwo: 'Western Port Steelers',
		arrTwo: [7, 8, 8, 9, 10, 8, 8, 5, 8],
	};

	const dataNextTable = arrTables.dataNextTable;

	const dataPrevTableOne = arrTables.dataPrevTableOne;

	const dataPrevTableTwo = arrTables.dataPrevTableTwo;

	const dataNextTableOne = arrTables.dataNextTableOne;

	const dataNextTableTwo = arrTables.dataNextTableTwo;

	const dataLeagueTable = arrTables.dataLeagueTable;

	const dataBigSmallTable = arrTables.dataBigSmallTable;

	return (
		<div className={styles.statisticsInPerson}>
			<div className={styles.wrapper}>
				<div className={styles.mainWrapper}>
					<InPersonMain data={MainData}/>
				</div>
				<div className={styles.infoWrapper}>
					<InPersonInfo data={InfoData}/>
				</div>
				<div className={styles.nextWrapper}>
					<TableNextGames data={dataNextTable}/>
				</div>
				<div className={styles.scoreWrapper}>
					<InPersonScore data={ScoreData}/>
				</div>
				<h2 className={styles.title}>Последние матчи</h2>
				<div className={styles.twoTableColumnsWrapper}>
					<TableNextPrevGames data={dataPrevTableOne} />
					<TableNextPrevGames data={dataPrevTableTwo} />
				</div>

				<h2 className={styles.title}>Следующие матчи</h2>
				<div className={styles.twoTableColumnsWrapper}>
					<TableNextPrevGames data={dataNextTableOne} />
					<TableNextPrevGames data={dataNextTableTwo} />
				</div>
				<div className={styles.posWrapper}>
					<h2 className={styles.title}>Позиция команды</h2>
					<PositionsChart props={PositionsChartData}/>
				</div>
				<div className={styles.tableWrapper}>
					<TableLeague data={dataLeagueTable} />
				</div>   
				<div className={styles.tableBottomWrapper}>
					<TableBigSmallCustomFilter />
					<TableBigSmall data={dataBigSmallTable}/>
				</div>
			</div>
		</div>
	);
}

export default StatisticsInPerson;
