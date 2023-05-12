import clsx from 'clsx';

function StatisticsTwo() {

	const arrRowOne = [
		{
			number: 1,
			playTournamentClass: 'statistics-two__table-one-cell--playoff',
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
			forms: [
				{ form: 'win' },
				{ form: 'win' },
				{ form: 'win' },
				{ form: 'win' },
			],
		},
		{
			number: 2,
			playTournamentClass: 'statistics-two__table-one-cell--qualification',
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
			forms: [
				{ form: 'win' },
				{ form: 'win' },
				{ form: 'win' },
			],
		},
		{
			number: 3,
			playTournamentClass: 'statistics-two__table-one-cell--qualification',
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
			forms: [
				{ form: 'win' },
				{ form: 'loss' },
				{ form: 'win' },
				{ form: 'win' },
				{ form: 'loss' },
			],
		},
		{
			number: 4,
			playTournamentClass: 'statistics-two__table-one-cell--qualification',
			directionClass: 'statistics-two__table-one-cell--up',
			name: 'Keysborought',
			game: 4,
			win: 2,
			loss: 2,
			scored: 359,
			conceded: 338,
			ratio: 1.062,
			pct: 0.5,
			points: 6,
			forms: [
				{ form: 'win' },
				{ form: 'win' },
				{ form: 'loss' },
				{ form: 'loss' },
			],
		},
		{
			number: 5,
			playTournamentClass: 'statistics-two__table-one-cell--qualification',
			directionClass: 'statistics-two__table-one-cell--up',
			name: 'Sanbury Jest',
			game: 2,
			win: 1,
			loss: 1,
			scored: 170,
			conceded: 170,
			ratio: 1,
			pct: 0.5,
			points: 3,
			forms: [
				{ form: 'loss' },
				{ form: 'win' },
			],
		},
		{
			number: 6,
			playTournamentClass: '',
			directionClass: 'statistics-two__table-one-cell--down',
			name: 'Блэкберн Викингс',
			game: 3,
			win: 1,
			loss: 2,
			scored: 201,
			conceded: 238,
			ratio: 0.845,
			pct: 0.333,
			points: 3,
			forms: [
				{ form: 'loss' },
				{ form: 'win' },
				{ form: 'loss' },
			],
		},
		{
			number: 6,
			playTournamentClass: '',
			directionClass: 'statistics-two__table-one-cell--down',
			name: 'Маккиннон Кугарс',
			game: 3,
			win: 1,
			loss: 2,
			scored: 201,
			conceded: 238,
			ratio: 0.845,
			pct: 0.333,
			points: 3,
			forms: [
				{ form: 'loss' },
				{ form: 'win' },
				{ form: 'loss' },
			],
		},
		{
			number: 8,
			playTournamentClass: '',
			directionClass: '',
			name: 'Western Port Steelers',
			game: 4,
			win: 1,
			loss: 3,
			scored: 319,
			conceded: 379,
			ratio: 0.842,
			pct: 0.25,
			points: 3,
			forms: [
				{ form: 'loss' },
				{ form: 'win' },
				{ form: 'loss' },
				{ form: 'loss' },
			],
		},
		{
			number: 9,
			playTournamentClass: '',
			directionClass: 'statistics-two__table-one-cell--down',
			name: 'Bellarine',
			game: 4,
			win: 0,
			loss: 4,
			scored: 293,
			conceded: 340,
			ratio: 0.862,
			pct: 0,
			points: 0,
			forms: [
				{ form: 'loss' },
				{ form: 'loss' },
				{ form: 'loss' },
				{ form: 'loss' },
			],
		},
		{
			number: 9,
			playTournamentClass: '',
			directionClass: 'statistics-two__table-one-cell--down',
			name: 'Мульбурн Тайгерс',
			game: 0,
			win: 0,
			loss: 0,
			scored: 0,
			conceded: 0,
			ratio: 0,
			pct: 0,
			points: 0,
			forms: [],
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
	]

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
			date: '02/04/23',
			score: '- : -',
			scoreAccent: false,
			nameTwo: 'Bellarine',
		},
		{
			title: 'БигV(4)',
			nameOne: 'Wyndham Basketball',
			nameAccent: false,
			date: '02/04/23',
			score: '- : -',
			scoreAccent: false,
			nameTwo: 'Хьюм Сити',
		},
	]

	const arrRowFour = [
		{
			number: 1,
			name: 'Маккиннон Кугарс',
			game: 4,
			win: 4,
			percent: 100,
			points: 93.25,
		},
		{
			number: 2,
			name: 'Wyndham Basketball',
			game: 4,
			win: 4,
			percent: 100,
			points: 105.5,
		},
		{
			number: 3,
			name: 'Melbourne Uni Bball',
			game: 4,
			win: 4,
			percent: 100,
			points: 96.5,
		},
		{
			number: 4,
			name: 'Camberwell Dragons',
			game: 4,
			win: 4,
			percent: 80,
			points: 87.2,
		},
		{
			number: 5,
			name: 'Хьюм Сити',
			game: 4,
			win: 3,
			percent: 75,
			points: 94.25,
		},
		{
			number: 6,
			name: 'Western Port Steelers',
			game: 4,
			win: 4,
			percent: 75,
			points: 79.75,
		},
		{
			number: 7,
			name: 'Keysborough',
			game: 4,
			win: 3,
			percent: 75,
			points: 89.75,
		},
		{
			number: 8,
			name: 'Sunbury Jets',
			game: 3,
			win: 2,
			percent: 66.67,
			points: 87.33,
		},
		{
			number: 9,
			name: 'Bellarine',
			game: 4,
			win: 2,
			percent: 50,
			points: 73.25,
		},
		{
			number: 10,
			name: 'Блэкберн Викингс',
			game: 5,
			win: 2,
			percent: 50,
			points: 70.5,
		},
	]

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
					<div className="statistics-two__info">
						<h2 className="statistics-two__info-title">Последние матчи</h2>
						<div className="statistics-two__info-content">
							<div className="statistics-two__info-content-column">
								<div className="statistics-two__info-content-num">35.00%</div>
								<div className="statistics-two__info-content-text">Хозяева</div>
							</div>
							<div className="statistics-two__info-content-column">
								<div className="statistics-two__info-content-text">Ничья</div>
								<div className="statistics-two__info-content-num">0.00%</div>
								<div className="statistics-two__info-content-percent-left"></div>
								<div className="statistics-two__info-content-percent-right"></div>
							</div>
							<div className="statistics-two__info-content-column">
								<div className="statistics-two__info-content-num">65.00%</div>
								<div className="statistics-two__info-content-text">Гости</div>
							</div>
							<div className="statistics-two__info-content-column">
								<div className="statistics-two__info-content-text">Сыгранные матчи</div>
								<div className="statistics-two__info-content-num">20</div>
							</div>
						</div>
					</div>
					<div className="statistics-two__info">
						<h2 className="statistics-two__info-title">Очки за матч</h2>
						<div className="statistics-two__info-content">
						<div className="statistics-two__info-content-column">
								<div className="statistics-two__info-content-num">83.75%</div>
								<div className="statistics-two__info-content-text">Хозяева</div>
							</div>
							<div className="statistics-two__info-content-column">
								<div className="statistics-two__info-content-text">Все</div>
								<div className="statistics-two__info-content-num">179.15</div>
								<div className="statistics-two__info-content-percent-left"></div>
								<div className="statistics-two__info-content-percent-right"></div>
							</div>
							<div className="statistics-two__info-content-column">
								<div className="statistics-two__info-content-num">95.40%</div>
								<div className="statistics-two__info-content-text">Гости</div>
							</div>
							<div className="statistics-two__info-content-column">
								<div className="statistics-two__info-content-text">Всего очков</div>
								<div className="statistics-two__info-content-num">3583</div>
							</div>
						</div>
					</div>
				</div>
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
											'statistics-two__table-two-cell-text statistics-two__table-two-cell-text--center',
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
				<h1 className="statistics-two__title">бол/мен</h1>
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
					{arrRowFour.map((item, index) => (
						<div key={index} className="statistics-two__table-three-row">
							<div className="statistics-two__table-three-cell">{item.number}</div>
							<div className="statistics-two__table-three-cell">{item.name}</div>
							<div className="statistics-two__table-three-cell">{item.game}</div>
							<div className="statistics-two__table-three-cell">{item.win}</div>
							<div className="statistics-two__table-three-cell">
								<div className="statistics-two__table-three-cell-percent-one">{`${item.percent}%`}</div>
								<div className="statistics-two__table-three-cell-percent">
									<div className="statistics-two__table-three-cell-percent-percent-show"></div>
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