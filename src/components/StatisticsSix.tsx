import clsx from 'clsx';

import { 
	TableNextPrevGames,
	PositionsChart,
	TableLeague,
	TableBigSmall,
	TableBigSmallCustomFilter,
} from '../components';

import arrTables from '../data/dataStatisticsSix';

function StatisticsSix() {

	const Score = {
		win: 4,
		game: 5,
	};

	const PositionsChartData = {
		nameOne: 'Блэкберн Викингс',
		arrOne: [4, 4, 6, 5, 2, 2, 1, 3, 4],
		nameTwo: 'Western Port Steelers',
		arrTwo: [7, 8, 8, 9, 10, 8, 8, 5, 8],
	};

	const arrRowsOne = arrTables.arrRowsOne;

	const dataPrevTableOne = arrTables.dataPrevTableOne;

	const dataPrevTableTwo = arrTables.dataPrevTableTwo;

	const dataNextTableOne = arrTables.dataNextTableOne;

	const dataNextTableTwo = arrTables.dataNextTableTwo;

	const dataLeagueTable = arrTables.dataLeagueTable;

	const dataBigSmallTable = arrTables.dataBigSmallTable;

	return (
		<div className="statistics-six">
			<div className="statistics-six__wrapper">
				<h1 className="statistics-six__title">Биг V (Викториан Стейт Чемпионшип) Раунд 4</h1>
				<div className="statistics-six__info">
					<div className="statistics-six__info-name">Western Port Steelers</div>
					<div className="statistics-six__info-date-wrapper">
						<div className="statistics-six__info-date">15/04/23 - 12:00</div>
						<button className="statistics-six__info-btn-date-update">Update</button>
					</div>
					<div className="statistics-six__info-name">Блэкберн Викингс</div>
				</div>
				<h2 className="statistics-six__name-accent">Следующие матчи</h2>
				<div className="statistics-six__table">
					<div className="statistics-six__table-header">
						<div className="statistics-six__table-header-name">Дата</div>
						<div className="statistics-six__table-header-name">Турнир</div>
						<div className="statistics-six__table-header-name">Раунд</div>
						<div className="statistics-six__table-header-name">Матч</div>
					</div>
					<div className="statistics-six__table-content">
						<div className="statistics-six__table-content-names">
							<div className="statistics-six__table-content-name">Western Port Steelers</div>
							<div className="statistics-six__table-content-name">100 : 199</div>
							<div className="statistics-six__table-content-name">Блэкберн Викингс</div>
						</div>    
						<div className="statistics-six__table-col-one">
							<div className="statistics-six__table-col-one-date">15/01/23</div>
							<div className="statistics-six__table-col-one-name">Таблица</div>
							<div className="statistics-six__table-col-one-mini-table">
								<div className="statistics-six__table-col-one-mini-table-num" style={{bottom: '25%'}}>#8</div>
							</div>
							<div className="statistics-six__table-col-one-info">0.25%</div>
						</div>
						<div className="statistics-six__table-col-two">
							<div className="statistics-six__table-col-two-title">Биг V (Викториан Стейт Чемпионшип)</div>
							<div className="statistics-six__table-col-two-info-wrapper">
								<svg viewBox="0 0 36 36" className="statistics-six__table-col-two-info-chart">
									<path className="statistics-six__table-col-two-info-circle-one"
										strokeDasharray="100, 100"
										d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
									/>
									<path className="statistics-six__table-col-two-info-circle-two"
										strokeDasharray="33, 100"
										d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
									/>
								</svg>
								<div className="statistics-six__table-col-two-info-content">
									<div className="statistics-six__table-col-two-info-content-num">33%</div>
									<div className="statistics-six__table-col-two-info-content-text">Результативность</div>
								</div>
							</div>
							<div className="statistics-six__table-col-two-name">Результативность</div>
							<div className="statistics-six__table-col-two-forms-wrapper">
								<div className="statistics-six__table-col-two-forms">
									<div className="statistics-six__table-col-two-form statistics-six__table-col-two-form--loss">П</div>
									<div className="statistics-six__table-col-two-form statistics-six__table-col-two-form--win">В</div>
									<div className="statistics-six__table-col-two-form statistics-six__table-col-two-form--loss">П</div>
									<div className="statistics-six__table-col-two-form statistics-six__table-col-two-form--loss">П</div>
									<div className="statistics-six__table-col-two-form statistics-six__table-col-two-form--win">В</div>
									<div className="statistics-six__table-col-two-form statistics-six__table-col-two-form--loss">П</div>
								</div>
							</div>
						</div>
						<div className="statistics-six__table-col-three">
							<div className="statistics-six__table-col-three-about">
								<div className="statistics-six__table-col-three-about-win">
									<div className="statistics-six__table-col-three-about-win-count">4</div>
									<div className="statistics-six__table-col-three-about-win-text">ПОБЕДЫ</div>
								</div>
								<ul className="statistics-six__table-col-three-about-list">
									<li className="statistics-six__table-col-three-about-item">
										<div className="statistics-six__table-col-three-about-item-text">Самая крупная победа</div>
										<div className="statistics-six__table-col-three-about-item-count">106 : 88</div>
									</li>
									<li className="statistics-six__table-col-three-about-item">
										<div className="statistics-six__table-col-three-about-item-text">Всего очков</div>
										<div className="statistics-six__table-col-three-about-item-count">457</div>
									</li>
									<li className="statistics-six__table-col-three-about-item">
										<div className="statistics-six__table-col-three-about-item-text">Сред. очки/матч</div>
										<div className="statistics-six__table-col-three-about-item-count">91.40</div>
									</li>
								</ul>
							</div>
							<div className="statistics-six__table-col-three-info">
								<div className="statistics-six__table-col-three-info-text">4</div>
								<div className="statistics-six__table-col-three-info-wrapper">
								<svg viewBox="0 0 36 36" className="statistics-six__table-col-three-info-chart">
									<path className="statistics-six__table-col-three-info-circle-one"
										strokeDasharray="100, 100"
										d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
									/>
									<path className="statistics-six__table-col-three-info-circle-two-more"
										strokeDasharray="40, 100"
										d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
									/>
									<path className="statistics-six__table-col-three-info-circle-two"
										strokeDasharray="38, 100"
										d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
									/>
								</svg>
								<div className="statistics-six__table-col-three-info-content">
									<div className="statistics-six__table-col-three-info-content-num">38%</div>
									<div className="statistics-six__table-col-three-info-content-text">Результативность</div>
								</div>
							</div>
							</div>
							<div className="statistics-six__table-col-three-about">
								<div className="statistics-six__table-col-three-about-win">
									<div className="statistics-six__table-col-three-about-win-count">1</div>
									<div className="statistics-six__table-col-three-about-win-text">ПОБЕДЫ</div>
								</div>
								<ul className="statistics-six__table-col-three-about-list">
									<li className="statistics-six__table-col-three-about-item">
										<div className="statistics-six__table-col-three-about-item-text">Самая крупная победа</div>
										<div className="statistics-six__table-col-three-about-item-count">106 : 88</div>
									</li>
									<li className="statistics-six__table-col-three-about-item">
										<div className="statistics-six__table-col-three-about-item-text">Всего очков</div>
										<div className="statistics-six__table-col-three-about-item-count">457</div>
									</li>
									<li className="statistics-six__table-col-three-about-item">
										<div className="statistics-six__table-col-three-about-item-text">Сред. очки/матч</div>
										<div className="statistics-six__table-col-three-about-item-count">91.40</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="statistics-six__table-col-two">
							<div className="statistics-six__table-col-two-title"></div>
							<div className="statistics-six__table-col-two-info-wrapper">
								<svg viewBox="0 0 36 36" className="statistics-six__table-col-two-info-chart">
									<path className="statistics-six__table-col-two-info-circle-one"
										strokeDasharray="100, 100"
										d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
									/>
									<path className="statistics-six__table-col-two-info-circle-two"
										strokeDasharray="17, 100"
										d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
									/>
								</svg>
								<div className="statistics-six__table-col-two-info-content">
									<div className="statistics-six__table-col-two-info-content-num">17%</div>
									<div className="statistics-six__table-col-two-info-content-text">Результативность</div>
								</div>
							</div>
							<div className="statistics-six__table-col-two-name">Результативность</div>
							<div className="statistics-six__table-col-two-forms-wrapper">
								<div className="statistics-six__table-col-two-forms">
									<div className="statistics-six__table-col-two-form statistics-six__table-col-two-form--loss">П</div>
									<div className="statistics-six__table-col-two-form statistics-six__table-col-two-form--win">П</div>
									<div className="statistics-six__table-col-two-form statistics-six__table-col-two-form--loss">П</div>
									<div className="statistics-six__table-col-two-form statistics-six__table-col-two-form--loss">В</div>
									<div className="statistics-six__table-col-two-form statistics-six__table-col-two-form--win">П</div>
									<div className="statistics-six__table-col-two-form statistics-six__table-col-two-form--loss">П</div>
								</div>
							</div>
						</div>
						<div className="statistics-six__table-col-one statistics-six__table-col-one--right">
							<div className="statistics-six__table-col-one-name">Таблица</div>
							<div className="statistics-six__table-col-one-mini-table statistics-six__table-col-one-mini-table--right">
								<div className="statistics-six__table-col-one-mini-table-num statistics-six__table-col-one-mini-table-num--right" style={{bottom: '33.3%'}}>#6</div>
							</div>
							<div className="statistics-six__table-col-one-info">0.333%</div>
						</div>
					</div>
				</div>
				<h2 className="statistics-six__name-accent">Следующие матчи</h2>
				<div className="statistics-six__table-one">
					<div className="statistics-six__table-one-header-row">
						<div className="statistics-six__table-one-header-cell">Дата</div>
						<div className="statistics-six__table-one-header-cell">Раунд</div>
						<div className="statistics-six__table-one-header-cell">Матч</div>
						<div className="statistics-six__table-one-header-cell">Турнир</div>
					</div>
					{arrRowsOne.map((item, index) => (
						<div key={index} className="statistics-six__table-one-row">
							<div className="statistics-six__table-one-cell">{item.date}</div>
							<div className="statistics-six__table-one-cell">{item.round}</div>
							<div className="statistics-six__table-one-cell">
								<div className={clsx(
									'statistics-six__table-one-cell-text',
									{'statistics-six__table-one-cell-text--accent': item.winOne}
								)}>{item.nameOne}</div>
								<div className="statistics-six__table-one-cell-text">
									<span className={clsx(
										'statistics-six__table-one-cell-text-small',
										{'statistics-six__table-one-cell-text-small--accent': item.winOne}
									)}>{item.scoreOne}</span>&nbsp;:&nbsp;
									<span className={clsx(
										'statistics-six__table-one-cell-text-small',
										{'statistics-six__table-one-cell-text-small--accent': !item.winOne}
									)}>{item.scoreTwo}</span>&nbsp;
									<span className="statistics-six__table-one-cell-text-small">{item.scoreInfo}</span>
								</div>
								<div className={clsx(
									'statistics-six__table-one-cell-text',
									{'statistics-six__table-one-cell-text--accent': !item.winOne}
								)}>{item.nameTwo}</div>
							</div>    
							<div className="statistics-six__table-one-cell">{item.tournament}</div>
						</div>
					))}
				</div>
				<div className="statistics-six__score">
					<h2 className="statistics-six__score-title">Общий счёт</h2>
					<div className="statistics-six__score-wrapper">
						<div className="statistics-six__score-colors">
							<div className="statistics-six__score-color" style={{width: `${Score.win/Score.game*100}%`}}></div>
							<div className="statistics-six__score-color" style={{width: `${100 - (Score.win/Score.game*100)}%`}}></div>
						</div>
						<div className="statistics-six__score-percent">
							<div className="statistics-six__score-percent-text">
								<span className="statistics-six__score-percent-text-win">{Score.win} ({Score.win/Score.game*100}%)</span>
							</div>
							<div className="statistics-six__score-percent-text">
								<span className="statistics-six__score-percent-text-win">{Score.game - Score.win} ({100 - (Score.win/Score.game*100)}%)</span>
							</div>
						</div>
					</div>
				</div>
				<h2 className="statistics-six__name-accent">Последние матчи</h2>
				<div className="statistics-two__two-table-columns-wrapper">
					<div className="statistics-two__two-table-columns">
						<TableNextPrevGames data={dataPrevTableOne} />
						<TableNextPrevGames data={dataPrevTableTwo} />
					</div>
				</div>

				<h2 className="statistics-six__name-accent">Следующие матчи</h2>
				<div className="statistics-two__two-table-columns-wrapper">
					<div className="statistics-two__two-table-columns">
						<TableNextPrevGames data={dataNextTableOne} />
						<TableNextPrevGames data={dataNextTableTwo} />
					</div>
				</div>
				<div className="statistics-six__pos">
					<h2 className="statistics-six__name-accent">Позиция команды</h2>
					<PositionsChart props={PositionsChartData}/>
				</div>
				<div className="statistics-six__table-wrapper">
					<TableLeague data={dataLeagueTable} />
				</div>   
				<div className="statistics-two__two-table-columns-wrapper">
					<TableBigSmallCustomFilter />
					<TableBigSmall data={dataBigSmallTable}/>
				</div>
			</div>
		</div>
	);
}

export default StatisticsSix;
