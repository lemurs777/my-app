import clsx from 'clsx';
import PositionsChart from './PositionsChart';

function StatisticsSeven() {

	const mainTitle = 'Хьюм Сити';
	const mainPercent = 100;

	const PositionsChartData = {
        nameOne: 'Хьюм Сити',
        arrOne: [1, 2, 1, 3, 5, 4, 6, 1, 1],
        nameTwo: '',
        arrTwo: []
    }

	const arrRowOne = [
		{
			number: 1,
			playTournamentClass: '',
			directionClass: '',
			name: 'Хьюм Сити',
			game: 4,
			win: 4,
			loss: 0,
			scored: 403,
			conceded: 335,
			ratio: 1.203,
			pct: 1,
			points: 12,
		},
		{
			number: 2,
			playTournamentClass: '',
			directionClass: '',
			name: 'Wyndham Basketball',
			game: 3,
			win: 3,
			loss: 0,
			scored: 326,
			conceded: 232,
			ratio: 1.405,
			pct: 1,
			points: 9,
		},
		{
			number: 3,
			playTournamentClass: '',
			directionClass: '',
			name: 'Camberwell Dragons',
			game: 5,
			win: 3,
			loss: 2,
			scored: 436,
			conceded: 467,
			ratio: 0.934,
			pct: 0.6,
			points: 9,
		},
		{
			number: 1,
			playTournamentClass: '',
			directionClass: '',
			name: 'Хьюм Сити',
			game: 4,
			win: 4,
			loss: 0,
			scored: 403,
			conceded: 335,
			ratio: 1.203,
			pct: 1,
			points: 12,
		},
		{
			number: 2,
			playTournamentClass: '',
			directionClass: '',
			name: 'Wyndham Basketball',
			game: 3,
			win: 3,
			loss: 0,
			scored: 326,
			conceded: 232,
			ratio: 1.405,
			pct: 1,
			points: 9,
		},
		{
			number: 3,
			playTournamentClass: '',
			directionClass: '',
			name: 'Camberwell Dragons',
			game: 5,
			win: 3,
			loss: 2,
			scored: 436,
			conceded: 467,
			ratio: 0.934,
			pct: 0.6,
			points: 9,
		},
	]

	const arrRowTwo = [
		{
			title: 'БигV(3)',
			nameOne: 'Keysborough',
			nameAccent: true,
			date: '02/04/23',
			score: '99:95 (Р)',
			scoreAccent: true,
			nameTwo: 'Маккиннон Кугарс',
		},
		{
			title: 'БигV(3)',
			nameOne: 'Bellarine',
			nameAccent: true,
			date: '02/04/23',
			score: '67:94 (Р)',
			scoreAccent: true,
			nameTwo: 'Хьюм Сити',
		},
		{
			title: 'БигV(3)',
			nameOne: 'Western Port Steelers',
			nameAccent: true,
			date: '02/04/23',
			score: '76:112 (Р)',
			scoreAccent: true,
			nameTwo: 'Wyndham Basketball',
		},
		{
			title: 'БигV(3)',
			nameOne: 'Блэкберн Викингс',
			nameAccent: true,
			date: '02/04/23',
			score: '67:82 (Р)',
			scoreAccent: true,
			nameTwo: 'Camberwell Dragons',
		},
		{
			title: 'БигV(3)',
			nameOne: 'Bellarine',
			nameAccent: true,
			date: '02/04/23',
			score: '81:88 (Р)',
			scoreAccent: true,
			nameTwo: 'Western Port Steelers',
		},
		{
			title: 'БигV(3)',
			nameOne: 'Melbourne Uni Bball',
			nameAccent: true,
			date: '02/04/23',
			score: '84:92 (Р)',
			scoreAccent: true,
			nameTwo: 'Sunbury Jets',
		}
	];

	const arrRowThree = [
		{
			title: 'БигV(4)',
			nameOne: 'Western Port Steelers',
			nameAccent: false,
			date: '02/04/23',
			score: '- : -',
			scoreAccent: false,
			nameTwo: 'Блэкберн Викингс',
		},
		{
			title: 'БигV(4)',
			nameOne: 'Wyndham Basketball',
			nameAccent: false,
			date: '02/04/23',
			score: '- : -',
			scoreAccent: false,
			nameTwo: 'Маккиннон Кугарс',
		},
		{
			title: 'БигV(4)',
			nameOne: 'Хьюм Сити',
			nameAccent: false,
			date: '02/04/23',
			score: '- : -',
			scoreAccent: false,
			nameTwo: 'Camberwell Dragons',
		},
		{
			title: 'БигV(4)',
			nameOne: 'Melbourne Uni Bball',
			nameAccent: false,
			date: '02/04/23',
			score: '- : -',
			scoreAccent: false,
			nameTwo: 'Keysborought',
		},
		{
			title: 'БигV(4)',
			nameOne: 'Маккиннон Кугарс',
			nameAccent: false,
			date: '01/04/23',
			score: '- : -',
			scoreAccent: false,
			nameTwo: 'Bellarine',
		},
		{
			title: 'БигV(4)',
			nameOne: 'Wyndham Basketball',
			nameAccent: false,
			date: '01/04/23',
			score: '- : -',
			scoreAccent: false,
			nameTwo: 'Хьюм Сити',
		},
	];

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
						<div className="statistics-two__table-two-wrapper">
							<h2 className="statistics-two__table-two-title">Последние матчи</h2>
							<div className="statistics-two__table-two">
								<div className="statistics-two__table-two-header">
									<div className="statistics-two__table-two-header-cell">ТУ/Р</div>
									<div className="statistics-two__table-two-header-cell">Матч</div>
								</div>
								{arrRowTwo.map((item, index) => (
									<div key={index} className="statistics-two__table-two-row">
										<div className="statistics-two__table-two-cell">{item.title}</div>
										<div className={clsx(
											'statistics-two__table-two-cell',
											{'statistics-two__table-two-cell--accent': item.nameAccent}
										)}>{item.nameOne}</div>
										<div className="statistics-two__table-two-cell">
											<div className="statistics-two__table-two-cell-text">{item.date}</div>
											<div className={clsx(
												'statistics-two__table-two-cell-text',
												{'statistics-two__table-two-cell-text--accent': item.scoreAccent}
											)}>{item.score}</div>
										</div>
										<div className="statistics-two__table-two-cell">{item.nameTwo}</div>
									</div>
								))}
							</div>
							<div className="statistics-two__table-two-btn-wrapper">
								<button className="statistics-two__table-two-btn">Показать еще</button>
							</div>
						</div>
						<div className="statistics-two__table-two-wrapper">
							<h2 className="statistics-two__table-two-title">Следующие матчи</h2>
							<div className="statistics-two__table-two">
								<div className="statistics-two__table-two-header">
									<div className="statistics-two__table-two-header-cell">ТУ/Р</div>
									<div className="statistics-two__table-two-header-cell">Матч</div>
								</div>
								{arrRowThree.map((item, index) => (
									<div key={index} className="statistics-two__table-two-row">
										<div className="statistics-two__table-two-cell">{item.title}</div>
										<div className={clsx(
											'statistics-two__table-two-cell',
											{'statistics-two__table-two-cell--accent': item.nameAccent}
										)}>{item.nameOne}</div>
										<div className="statistics-two__table-two-cell">
											<div className="statistics-two__table-two-cell-text">{item.date}</div>
											<div className={clsx(
												'statistics-two__table-two-cell-text',
												{'statistics-two__table-two-cell-text--accent': item.scoreAccent}
											)}>{item.score}</div>
										</div>
										<div className="statistics-two__table-two-cell">{item.nameTwo}</div>
									</div>
								))}
							</div>
							<div className="statistics-two__table-two-btn-wrapper">
								<button className="statistics-two__table-two-btn">Показать еще</button>
							</div>
						</div>
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