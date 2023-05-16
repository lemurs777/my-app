function StatisticsFour() {

	const arrRowOne = [
		{
			number: 1,
			playTournamentClass: 'statistics-four__table-one-cell--playoff',
			directionClass: '',
			name: 'Хьюм Сити',
			game: 3,
			away: '3-0',
			scored: 248,
			conceded: 225,
			ratio: 1.262,
			pct: 1,
			points: 6,
			forms: [
				{ form: 'win' },
				{ form: 'win' },
				{ form: 'win' },
			],
		},
		{
			number: 2,
			playTournamentClass: 'statistics-four__table-one-cell--qualification',
			directionClass: '',
			name: 'Wyndham Basketball',
			game: 2,
			away: '2-0',
			scored: 231,
			conceded: 138,
			ratio: 1.673,
			pct: 1,
			points: 6,
			forms: [
				{ form: 'win' },
				{ form: 'win' },
			],
		},
		{
			number: 3,
			playTournamentClass: 'statistics-four__table-one-cell--qualification',
			directionClass: 'statistics-four__table-one-cell--up',
			name: 'Camberwell Dragons',
			game: 3,
			away: '2-1',
			scored: 282,
			conceded: 163,
			ratio: 1.072,
			pct: 0.667,
			points: 6,
			forms: [
				{ form: 'win' },
				{ form: 'win' },
				{ form: 'loss' },
			],
		},
		{
			number: 4,
			playTournamentClass: '',
			directionClass: 'statistics-four__table-one-cell--down',
			name: 'Блэкберн Викингс',
			game: 1,
			away: '1-0',
			scored: 66,
			conceded: 60,
			ratio: 1.1,
			pct: 1,
			points: 3,
			forms: [
				{ form: 'win' },
			],
		},
		{
			number: 4,
			playTournamentClass: 'statistics-four__table-one-cell--qualification',
			directionClass: 'statistics-four__table-one-cell--down',
			name: 'Sanbury Jest',
			game: 1,
			away: '1-0',
			scored: 96,
			conceded: 68,
			ratio: 1.412,
			pct: 1,
			points: 3,
			forms: [
				{ form: 'win' },
			],
		},
		{
			number: 4,
			playTournamentClass: '',
			directionClass: 'statistics-four__table-one-cell--up',
			name: 'Western Port Steeltrs',
			game: 1,
			away: '1-0',
			scored: 88,
			conceded: 81,
			ratio: 1.086,
			pct: 1,
			points: 3,
			forms: [
				{ form: 'win' },
			],
		},
		{
			number: 7,
			playTournamentClass: '',
			directionClass: 'statistics-four__table-one-cell--down',
			name: 'Keysborought',
			game: 2,
			away: '1-1',
			scored: 176,
			conceded: 155,
			ratio: 1.135,
			pct: 0.5,
			points: 3,
			forms: [
				{ form: 'win' },
				{ form: 'loss' },
			],
		},
		{
			number: 8,
			playTournamentClass: '',
			directionClass: 'statistics-four__table-one-cell--down',
			name: 'Bellarine',
			game: 1,
			away: '0-1',
			scored: 85,
			conceded: 92,
			ratio: 0.924,
			pct: 0,
			points: 0,
			forms: [
				{ form: 'loss' },
			],
		},
		{
			number: 8,
			playTournamentClass: '',
			directionClass: 'statistics-four__table-one-cell--down',
			name: 'Маккиннон Кугарс',
			away: 2,
			loss: '0-2',
			scored: 205,
			conceded: 218,
			ratio: 0.94,
			pct: 0,
			points: 0,
			forms: [
				{ form: 'loss' },
			],
		},
		{
			number: 8,
			playTournamentClass: '',
			directionClass: 'statistics-four__table-one-cell--down',
			name: 'Мельбург Тайгерс',
			game: 0,
			away: '0-0',
			scored: 0,
			conceded: 0,
			ratio: 0,
			pct: 0,
			points: 0,
			forms: [
                { form: 'loss' },
                { form: 'loss' },
            ],
		},
	]

	const arrRowTwo = [
		{
			number: 1,
			name: 'Wyndham Basketball',
			scored: 326,
			conceded: 232,
			game: 3,
			points: 9,
            percent: 100,
            forms: [
                { form: 'win' },
                { form: 'win' },
                { form: 'win' },
            ],
            next: 'Маккиннон Кургас'
		},
		{
			number: 2,
			name: 'Wyndham Basketball',
			scored: 326,
			conceded: 232,
			game: 3,
			points: 9,
            percent: 93.25,
            forms: [
                { form: 'win' },
                { form: 'win' },
                { form: 'win' },
            ],
            next: 'Маккиннон Кургас'
		},
		{
			number: 3,
			name: 'Wyndham Basketball',
			scored: 326,
			conceded: 232,
			game: 3,
			points: 9,
            percent: 80.25,
            forms: [
                { form: 'win' },
                { form: 'win' },
                { form: 'win' },
            ],
            next: 'Маккиннон Кургас'
		},
		{
			number: 4,
			name: 'Wyndham Basketball',
			scored: 326,
			conceded: 232,
			game: 3,
			points: 9,
            percent: 75.25,
            forms: [
                { form: 'win' },
                { form: 'win' },
                { form: 'win' },
            ],
            next: 'Маккиннон Кургас'
		},
		{
			number: 5,
			name: 'Wyndham Basketball',
			scored: 326,
			conceded: 232,
			game: 3,
			points: 9,
            percent: 74,
            forms: [
                { form: 'loss' },
                { form: 'win' },
                { form: 'win' },
            ],
            next: 'Маккиннон Кургас'
		},
		{
			number: 6,
			name: 'Wyndham Basketball',
			scored: 326,
			conceded: 232,
			game: 3,
			points: 9,
            percent: 63,
            forms: [
                { form: 'win' },
                { form: 'loss' },
                { form: 'win' },
            ],
            next: 'Маккиннон Кургас'
		},
		{
			number: 7,
			name: 'Wyndham Basketball',
			scored: 326,
			conceded: 232,
			game: 3,
			points: 9,
            percent: 40,
            forms: [
                { form: 'win' },
                { form: 'loss' },
                { form: 'win' },
            ],
            next: 'Маккиннон Кургас'
		},
		{
			number: 8,
			name: 'Wyndham Basketball',
			scored: 326,
			conceded: 232,
			game: 3,
			points: 9,
            percent: 25,
            forms: [
                { form: 'loss' },
                { form: 'win' },
                { form: 'loss' },
            ],
            next: 'Маккиннон Кургас'
		},
		{
			number: 9,
			name: 'Wyndham Basketball',
			scored: 326,
			conceded: 232,
			game: 3,
			points: 9,
            percent: 10.25,
            forms: [
                { form: 'win' },
                { form: 'win' },
                { form: 'loss' },
            ],
            next: 'Маккиннон Кургас'
		},
		{
			number: 10,
			name: 'Wyndham Basketball',
			scored: 326,
			conceded: 232,
			game: 3,
			points: 9,
            percent: 0,
            forms: [
                { form: 'loss' },
                { form: 'loss' },
                { form: 'loss' },
            ],
            next: 'Маккиннон Кургас'
		},
	]

	return (
		<div className="statistics-four">
			<div className="statistics-four__wrapper">
				<h1 className="statistics-four__title">Таблица лиги</h1>
                <div className="statistics-four__top-wrapper">
                    <div className="statistics-four__filter-wrapper">
                        <button className="statistics-four__filter-btn statistics-four__filter-btn--active">Все игры</button>
                        <button className="statistics-four__filter-btn">Домашние игры</button>
                        <button className="statistics-four__filter-btn">Матчи на выезде</button>
                        <button className="statistics-four__filter-btn">Полная таблица</button>
                    </div>
                    <button className="statistics-four__filter-select-wrapper">
                        Раунд <span className="statistics-four__filter-select">3</span>
                    </button>
                </div>
				<div className="statistics-four__table-one">
					<div className="statistics-four__table-one-header">
						<div className="statistics-four__table-one-header-cell">Поз.</div>
						<div className="statistics-four__table-one-header-cell">Команда</div>
						<div className="statistics-four__table-one-header-cell">И</div>
						<div className="statistics-four__table-one-header-cell">Выезд</div>
						<div className="statistics-four__table-one-header-cell">ГЗа/ГПр</div>
						<div className="statistics-four__table-one-header-cell">Разн.</div>
						<div className="statistics-four__table-one-header-cell">Соотношение корзин</div>
						<div className="statistics-four__table-one-header-cell">pct</div>
						<div className="statistics-four__table-one-header-cell">Очки</div>
						<div className="statistics-four__table-one-header-cell">Форма</div>
					</div>
					{arrRowOne.map((item, index) => (
						<div key={index} className="statistics-four__table-one-row">
							<div className={`statistics-four__table-one-cell statistics-four__table-one-cell--number ${item.playTournamentClass} ${item.directionClass}`}>{item.number}</div>
							<div className="statistics-four__table-one-cell">{item.name}</div>
							<div className="statistics-four__table-one-cell">{item.game}</div>
							<div className="statistics-four__table-one-cell">{item.away}</div>
							<div className="statistics-four__table-one-cell">{item.scored}-{item.conceded}</div>
							<div className="statistics-four__table-one-cell">{item.scored - item.conceded}</div>
							<div className="statistics-four__table-one-cell">{item.ratio}</div>
							<div className="statistics-four__table-one-cell">{item.pct}</div>
							<div className="statistics-four__table-one-cell">{item.points}</div>
							<div className="statistics-four__table-one-cell statistics-four__table-one-cell--forms">
								{ item.forms.length > 0
									? <div className="statistics-four__table-two-forms">
										{item.forms.map((form, index) => (
											<div key={`key-${index}`} className={`statistics-four__table-one-form statistics-four__table-one-form--${form.form}`}>
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
				<div className="statistics-four__table-one-info">
					<p className="statistics-four__table-one-info-text">Если две (или более) команды имеют одинаковое количество очков, следующие факторы помогут выявить победителя:</p>
					<p className="statistics-four__table-one-info-text">1. Процент побед и поражений</p>
					<p className="statistics-four__table-one-info-text">2. Очные встречи</p>
					<ul className="statistics-four__table-one-info-list">
						<li className="statistics-four__table-one-info-item">Плей-офф</li>
						<li className="statistics-four__table-one-info-item">Квалификация, Плей-офф</li>
					</ul>
				</div>
				<h2 className="statistics-four__title">Форма</h2>
				<div className="statistics-four__top-wrapper">
                    <div className="statistics-four__filter-wrapper">
                        <button className="statistics-four__filter-btn statistics-four__filter-btn--active">Все игры</button>
                        <button className="statistics-four__filter-btn">Домашние игры</button>
                        <button className="statistics-four__filter-btn">Матчи на выезде</button>
                    </div>
                    <button className="statistics-four__filter-select-wrapper">
                        Раунд <span className="statistics-four__filter-select">3</span>
                    </button>
                </div>
                <div className="statistics-four__bottom-wrapper">
                    <div className="statistics-four__bottom-text">Количество матчей</div>
                    <div className="statistics-four__bottom-text">2</div>
                    <div className="statistics-four__bottom-text">4</div>
                    <div className="statistics-four__bottom-text">5</div>
                </div>
				<div className="statistics-four__table-two">
					<div className="statistics-four__table-two-header">
						<div className="statistics-four__table-two-header-cell">Поз.</div>
						<div className="statistics-four__table-two-header-cell">Команда</div>
						<div className="statistics-four__table-two-header-cell">ГЗ</div>
						<div className="statistics-four__table-two-header-cell">ГП</div>
                        <div className="statistics-four__table-two-header-cell">Разн</div>
                        <div className="statistics-four__table-two-header-cell">Сыграно</div>
						<div className="statistics-four__table-two-header-cell">Очки</div>
						<div className="statistics-four__table-two-header-cell">Форма</div>
                        <div className="statistics-four__table-two-header-cell">Следующий оппонент</div>
					</div>
					{arrRowTwo.map((item, index) => (
						<div key={index} className="statistics-four__table-two-row">
                            <div className="statistics-four__table-two-cell">{item.number}</div>
							<div className="statistics-four__table-two-cell">{item.name}</div>
							<div className="statistics-four__table-two-cell">{item.scored}</div>
							<div className="statistics-four__table-two-cell">{item.conceded}</div>
							<div className="statistics-four__table-two-cell">{item.scored - item.conceded}</div>
							<div className="statistics-four__table-two-cell">{item.game}</div>
							<div className="statistics-four__table-two-cell statistics-four__table-two-cell--points">
                                <div className="statistics-four__table-two-points">
                                    <div className="statistics-four__table-two-points-percent" style={{width: `${item.percent}%`}}></div>
                                </div>
                                <div className="statistics-four__table-two-points-text">{item.points}</div>
                            </div>
                            <div className="statistics-four__table-two-cell statistics-four__table-two-cell--forms">
								{ item.forms.length > 0
									? <div className="statistics-four__table-two-forms">
										{item.forms.map((form, index) => (
											<div key={`key-${index}`} className={`statistics-four__table-two-form statistics-four__table-two-form--${form.form}`}>
												{ form.form === 'win'? 'В' : 'П' }
											</div>
										))} 
									</div>
									: null
								}
							</div>
                            <div className="statistics-four__table-two-cell">{item.next}</div>
						</div>
					))}
				</div>	
			</div>
		</div>
	);
}

export default StatisticsFour;