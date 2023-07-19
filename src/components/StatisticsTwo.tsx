import { 
	TableLeagueFilter,
	TableLeague,
	TableNextPrevGames,
	OverviewInfo,
} from '../components';

import arrTables from '../data/dataStatisticsTwo';

function StatisticsTwo() {

	const dataLeagueTable = arrTables.dataLeagueTable;

	const dataPrevTable = arrTables.dataPrevTable;

	const dataNextTable = arrTables.dataNextTable;

	const arrRowsFour = arrTables.arrRowsFour;

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
				<h2 className="statistics-two__title">бол/мен</h2>
				<div className="statistics-two__filter-wrapper">
					<button className="statistics-two__filter-btn">Все игры</button>
					<button className="statistics-two__filter-btn statistics-two__filter-btn--active">Домашние игры</button>
					<button className="statistics-two__filter-btn">Матчи на выезде</button>
				</div>
				<div className="statistics-two__table-three">
					<div className="statistics-two__table-three-header">
						<div className="statistics-two__table-three-header-cell">Поз.</div>
						<div className="statistics-two__table-three-header-cell">Команда</div>
						<div className="statistics-two__table-three-header-cell">Сыграно</div>
						<div className="statistics-two__table-three-header-cell statistics-two__table-three-header-cell--up">Больше</div>
						<div className="statistics-two__table-three-header-cell statistics-two__table-three-header-cell--up-down">Меньше</div>
						<div className="statistics-two__table-three-header-cell">Сред. очки/матч</div>
					</div>
					{arrRowsFour.map((item, index) => (
						<div key={index} className="statistics-two__table-three-row">
							<div className="statistics-two__table-three-cell">{item.number}</div>
							<div className="statistics-two__table-three-cell">{item.name}</div>
							<div className="statistics-two__table-three-cell">{item.game}</div>
							<div className="statistics-two__table-three-cell">{item.win}</div>
							<div className="statistics-two__table-three-cell">
								<div className="statistics-two__table-three-cell-percent-one">{`${item.percent}%`}</div>
								<div className="statistics-two__table-three-cell-percent">
									<div className="statistics-two__table-three-cell-percent-percent-show" style={{width: `${item.percent}%`}}></div>
								</div>
								<div className="statistics-two__table-three-cell-percent-two">{`${100 - item.percent}%`}</div>
								<div className="statistics-two__table-three-cell-percent-info">{`${item.game - item.win}`}</div>
							</div>
							<div className="statistics-two__table-three-cell">{item.points}</div>
						</div>
					))}
				</div>	
			</div>
		</div>
	);
}

export default StatisticsTwo;