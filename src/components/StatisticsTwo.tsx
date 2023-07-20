import { 
	TableLeagueFilter,
	TableLeague,
	TableNextPrevGames,
	OverviewInfo,
	TableBigSmall,
	TableBigSmallFilter,
} from '../components';

import arrTables from '../data/dataStatisticsTwo';

function StatisticsTwo() {

	const dataLeagueTable = arrTables.dataLeagueTable;

	const dataPrevTable = arrTables.dataPrevTable;

	const dataNextTable = arrTables.dataNextTable;

	const dataBigSmallTable = arrTables.dataBigSmallTable;

	const overviewInfoOne = {
		title: 'Последние матчи',
		leftNum: '35.00%',
		leftText: 'Хозяева',
		centerNum: '0.00%',
		centerText: 'Ничья',
		rightNum: '65.00%',
		rightText: 'Гости',
		allNum: '20',
		allText: 'Сыгранные матчи',
		percentLeft: 35,
		percentRight: 65,
	}

	const overviewInfoTwo = {
		title: 'Очки за матч',
		leftNum: '83.75',
		leftText: 'Хозяева',
		centerNum: '179.15',
		centerText: 'Все',
		rightNum: '95.40',
		rightText: 'Гости',
		allNum: '3583',
		allText: 'Всего очков',
		percentLeft: 45,
		percentRight: 55,
	}

	return (
		<div className="statistics-two">
			<div className="statistics-two__wrapper">
				<div className="statistics-two__table-league-wrapper">
					<TableLeagueFilter />
					<TableLeague data={dataLeagueTable}/>
				</div>
				<div className="statistics-two__two-columns">
					<OverviewInfo data={overviewInfoOne}/>
					<OverviewInfo data={overviewInfoTwo}/>
				</div>
				<div className="statistics-two__two-table-columns">
					<TableNextPrevGames data={dataPrevTable} />
					<TableNextPrevGames data={dataNextTable} />
				</div>
				<TableBigSmallFilter />
				<TableBigSmall data={dataBigSmallTable}/>
			</div>
		</div>
	);
}

export default StatisticsTwo;