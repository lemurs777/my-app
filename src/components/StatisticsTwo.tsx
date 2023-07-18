import { 
	TableNextPrevGames,
	OverviewInfo,
} from '../components';

import arrTables from '../data/dataStatisticsTwo';

function StatisticsTwo() {

	const arrRowsOne = arrTables.arrRowsOne;

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
				<h1 className="statistics-two__title">Биг V (Викториан Стейт Чемпионшип)</h1>
				<div className="statistics-two__filter-wrapper">
					<button className="statistics-two__filter-btn statistics-two__filter-btn--active">Всего</button>
					<button className="statistics-two__filter-btn">Хозяева</button>
					<button className="statistics-two__filter-btn">Гости</button>
				</div>
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
						<div className="statistics-two__table-one-header-cell">Форма</div>
					</div>
					{arrRowsOne.map((item, index) => (
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
							<div className="statistics-two__table-one-cell statistics-two__table-one-cell--forms">
								{ item.forms.length > 0
									? <div className="statistics-two__table-one-forms">
										{item.forms.map((form, index) => (
											<div key={`key-${index}`} className={`statistics-two__table-one-form statistics-two__table-one-form--${form.form}`}>
												{ form.form === 'win'? 'В' : 'П' }
											</div>
										))} 
									</div>
									: ''
								}
							</div>
						</div>
					))}
				</div>
				<div className="statistics-two__table-one-info">
					<p className="statistics-two__table-one-info-text">Если две (или более) команды имеют одинаковое количество очков, следующие факторы помогут выявить победителя:</p>
					<p className="statistics-two__table-one-info-text">1. Процент побед и поражений</p>
					<p className="statistics-two__table-one-info-text">2. Очные встречи</p>
					<ul className="statistics-two__table-one-info-list">
						<li className="statistics-two__table-one-info-item">Плей-офф</li>
						<li className="statistics-two__table-one-info-item">Квалификация, Плей-офф</li>
					</ul>
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