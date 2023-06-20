import { 
	TableNextPrevGames,
	PositionsChart,
} from '../components';

import arrTables from '../data/dataStatisticsSeven';

function StatisticsSeven() {

	const mainTitle = 'Хьюм Сити';
	const mainPercent = 100;

	const PositionsChartData = {
        nameOne: 'Хьюм Сити',
        arrOne: [1, 2, 1, 3, 5, 4, 6, 1, 1],
        nameTwo: '',
        arrTwo: []
    }

	const arrRowOne = arrTables.arrRowsOne;

	const dataPrevTable = arrTables.dataPrevTable;

	const dataNextTable = arrTables.dataNextTable;

	return (
		<div className="statistics-seven">
			<div className="statistics-seven__wrapper">
				<div className="statistics-seven__filter">
					<div className="statistics-seven__filter-name">Биг V (Викторияан Стейт Чемпионшип)</div>
					<div className="statistics-seven__filter-command">Хьюм сити</div>
				</div>
				<h1 className="statistics-seven__main-tittle">{mainTitle}</h1>
				<div className="statistics-seven__main-info">
					<div className="statistics-seven__main-info-game">
						<div className="statistics-seven__main-info-game-title">Недавние выступления</div>
						<div className="statistics-seven__main-info-game-forms">
							<div className="statistics-seven__main-info-game-form statistics-seven__main-info-game-form--loss">П</div>
							<div className="statistics-seven__main-info-game-form statistics-seven__main-info-game-form--win">В</div>
							<div className="statistics-seven__main-info-game-form statistics-seven__main-info-game-form--loss">П</div>
							<div className="statistics-seven__main-info-game-form statistics-seven__main-info-game-form--loss">П</div>
							<div className="statistics-seven__main-info-game-form statistics-seven__main-info-game-form--win">В</div>
							<div className="statistics-seven__main-info-game-form statistics-seven__main-info-game-form--loss">П</div>
						</div>
					</div>
					<div className="statistics-seven__main-info-win">
						<div className="statistics-seven__main-info-win-wrapper">
							<div className="statistics-seven__main-info-win-show" style={{height: `${mainPercent}%`}}></div>
						</div>
						<div className="statistics-seven__main-info-win-percent-wrapper">
							<div className="statistics-seven__main-info-win-percent">{mainPercent}%</div>
							<div className="statistics-seven__main-info-win-percent-text">Результативность</div>
						</div>
					</div>
				</div>
				<h2 className="statistics-seven__title">Биг V (Викториан Стейт Чемпионшип)</h2>
				<div className="statistics-seven__table-wrapper">
					<div className="statistics-two__table-one">
						<div className="statistics-two__table-one-header">
							<div className="statistics-two__table-one-header-cell">Поз.</div>
							<div className="statistics-two__table-one-header-cell">Команда</div>
							<div className="statistics-two__table-one-header-cell">И</div>
							<div className="statistics-two__table-one-header-cell">В</div>
							<div className="statistics-two__table-one-header-cell">П</div>
							<div className="statistics-two__table-one-header-cell">ГЗа/ГПр</div>
							<div className="statistics-two__table-one-header-cell">Разн.</div>
							<div className="statistics-two__table-one-header-cell">Соотношение корзин</div>
							<div className="statistics-two__table-one-header-cell">pct</div>
							<div className="statistics-two__table-one-header-cell">Очки</div>
							<div className="statistics-two__table-one-header-cell"></div>
						</div>
						{arrRowOne.map((item, index) => (
							<div key={index} className="statistics-two__table-one-row">
								<div className={`statistics-two__table-one-cell statistics-two__table-one-cell--number ${item.playTournamentClass} ${item.directionClass}`}>{item.number}</div>
								<div className="statistics-two__table-one-cell">{item.name}</div>
								<div className="statistics-two__table-one-cell">{item.game}</div>
								<div className="statistics-two__table-one-cell">{item.win}</div>
								<div className="statistics-two__table-one-cell">{item.loss}</div>
								<div className="statistics-two__table-one-cell">{item.scored}-{item.conceded}</div>
								<div className="statistics-two__table-one-cell">{item.scored - item.conceded}</div>
								<div className="statistics-two__table-one-cell">{item.ratio}</div>
								<div className="statistics-two__table-one-cell">{item.pct}</div>
								<div className="statistics-two__table-one-cell">{item.points}</div>
								<div className="statistics-two__table-one-cell statistics-two__table-one-cell--forms"></div>
							</div>
						))}
					</div>
				</div>
				<div className="statistics-seven__table-wrapper">
					<div className="statistics-two__two-table-columns">
						<TableNextPrevGames data={dataPrevTable} />
						<TableNextPrevGames data={dataNextTable} />
					</div>
				</div>
				<div className="statistics-six__pos">
                    <h2 className="statistics-six__name-accent">Позиция команды</h2>
                    <PositionsChart props={PositionsChartData}/>
                </div>
			</div>
		</div>
	);
}

export default StatisticsSeven;