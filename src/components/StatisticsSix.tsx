import clsx from 'clsx';

function StatisticsSix() {

	const arrRowsOne = [
		{
            date: '10/07/22',
            round: 15,
            nameOne: 'Western Port Steelers',
            winOne: true,
            scoreOne: 77,
            scoreTwo: 61,
            scoreInfo: '(Р)',
            nameTwo: 'Блэкберн Викингс',
            tournament: 'Биг V (Викториан Стейт Чемпионшип)',
        },
        {
            date: '19/06/22',
            round: 12,
            nameOne: 'Western Port Steelers',
            winOne: false,
            scoreOne: 797,
            scoreTwo: 103,
            scoreInfo: '(Р)',
            nameTwo: 'Блэкберн Викингс',
            tournament: 'Биг V (Викториан Стейт Чемпионшип)',
        },
        {
            date: '23/04/22',
            round: 5,
            nameOne: 'Блэкберн Викингс',
            winOne: false,
            scoreOne: 88,
            scoreTwo: 106,
            scoreInfo: '(Р)',
            nameTwo: 'Western Port Steelers',
            tournament: 'Биг V (Викториан Стейт Чемпионшип)',
        },
        {
            date: '01/08/21',
            round: 11,
            nameOne: 'Блэкберн Викингс',
            winOne: false,
            scoreOne: 82,
            scoreTwo: 85,
            scoreInfo: '(Р)',
            nameTwo: 'Western Port Steelers',
            tournament: 'Биг V (Викториан Стейт Чемпионшип)',
        },
        {
            date: '10/07/21',
            round: 16,
            nameOne: 'Western Port Steelers',
            winOne: true,
            scoreOne: 92,
            scoreTwo: 85,
            scoreInfo: '(Р)',
            nameTwo: 'Блэкберн Викингс',
            tournament: 'Биг V (Викториан Стейт Чемпионшип)',
        },
	];

    const Score = {
        win: 4,
        game: 5,
    };

    const arrRowTwo = [
		{
			title: 'БигV(3)',
			nameOne: 'Western Port Steelers',
			winOne: false,
			date: '02/04/23',
			score: '76:112 (Р)',
			scoreAccent: true,
			nameTwo: 'Wyndham Basketball',
		},
		{
			title: 'БигV(3)',
			nameOne: 'Bellarine',
			winOne: false,
			date: '01/04/23',
			score: '81:88 (Р)',
			scoreAccent: true,
			nameTwo: 'Western Port Steelers',
		},
		{
			title: 'БигV(2)',
			nameOne: 'Western Port Steelers',
			winOne: false,
			date: '26/03/23',
			score: '60:82 (Р)',
			scoreAccent: true,
			nameTwo: 'Keysborough',
		},
		{
			title: 'БигV(1)',
			nameOne: 'Western Port Steelers',
			winOne: false,
			date: '19/03/23',
			score: '95:104 (Р)',
			scoreAccent: true,
			nameTwo: 'Camberwell Dragons',
		},
		{
			title: 'БигV(18)',
			nameOne: 'Bellarine',
			winOne: true,
			date: '30/07/22',
			score: '95:85 (Р)',
			scoreAccent: true,
			nameTwo: 'Camberwell Dragons',
		},
		{
			title: 'БигV(16)',
			nameOne: 'Melbourne Uni Bball',
			winOne: false,
			date: '02/04/23',
			score: '84:92 (Р)',
			scoreAccent: true,
			nameTwo: 'Sunbury Jets',
		}
	]

    const arrRowThree = [
		{
			title: 'БигV(3)',
			nameOne: 'Блэкберн Викингс',
			winOne: false,
			date: '01/04/23',
			score: '67:82 (Р)',
			scoreAccent: true,
			nameTwo: 'Camberwell Dragons',
		},
		{
			title: 'БигV(2)',
			nameOne: 'Блэкберн Викингс',
			winOne: false,
			date: '26/03/23',
			score: '67:82 (Р)',
			scoreAccent: true,
			nameTwo: 'Melbourne Uni Bball',
		},
		{
			title: 'БигV(1)',
			nameOne: 'Блэкберн Викингс',
			winOne: false,
			date: '19/03/23',
			score: '81:111 (Р)',
			scoreAccent: true,
			nameTwo: 'Sunbury Jets',
		},
		{
			title: 'БигV(1)',
			nameOne: 'Bellarine',
			winOne: false,
			date: '18/03/23',
			score: '60:66 (Р)',
			scoreAccent: true,
			nameTwo: 'Блэкберн Викингс',
		},
		{
			title: 'БигV(18)',
			nameOne: 'Блэкберн Викингс',
			winOne: false,
			date: '30/07/22',
			score: '73:108 (Р)',
			scoreAccent: true,
			nameTwo: 'Маккиннон Кугарс',
		},
		{
			title: 'БигV(17)',
			nameOne: 'Sunbury Jets',
			winOne: true,
			date: '23/07/22',
			score: '92:57 (Р)',
			scoreAccent: true,
			nameTwo: 'Блэкберн Викингс',
		}
	]

	const arrRowFour = [
		{
			title: 'БигV(4)',
			nameOne: 'Western Port Steelers',
			nameAccent: false,
			date: '15/04/23',
			score: '- : -',
			scoreAccent: false,
			nameTwo: 'Блэкберн Викингс',
		},
		{
			title: 'БигV(5)',
			nameOne: 'Wyndham Basketball',
			nameAccent: false,
			date: '22/04/23',
			score: '- : -',
			scoreAccent: false,
			nameTwo: 'Маккиннон Кугарс',
		},
		{
			title: 'БигV(7)',
			nameOne: 'Хьюм Сити',
			nameAccent: false,
			date: '06/05/23',
			score: '- : -',
			scoreAccent: false,
			nameTwo: 'Western Port Steelers',
		},
		{
			title: 'БигV(7)',
			nameOne: 'Western Port Steelers',
			nameAccent: false,
			date: '07/05/23',
			score: '- : -',
			scoreAccent: false,
			nameTwo: 'Melbourne Uni Bball',
		},
		{
			title: 'БигV(8)',
			nameOne: 'Bellarine',
			nameAccent: false,
			date: '13/05/23',
			score: '- : -',
			scoreAccent: false,
			nameTwo: 'Western Port Steelers',
		},
		{
			title: 'БигV(9)',
			nameOne: 'Western Port Steelers',
			nameAccent: false,
			date: '20/05/23',
			score: '- : -',
			scoreAccent: false,
			nameTwo: 'Camberwell Dragons',
		},
	]

    const arrRowFive = [
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
			title: 'БигV(5)',
			nameOne: 'Блэкберн Викингс',
			nameAccent: false,
			date: '02/04/23',
			score: '- : -',
			scoreAccent: false,
			nameTwo: 'Хьюм Сити',
		},
		{
			title: 'БигV(45)',
			nameOne: 'Блэкберн Викингс',
			nameAccent: false,
			date: '02/04/23',
			score: '- : -',
			scoreAccent: false,
			nameTwo: 'Keysborough',
		},
		{
			title: 'БигV(6)',
			nameOne: 'Melbourne Uni Bball',
			nameAccent: false,
			date: '02/04/23',
			score: '- : -',
			scoreAccent: false,
			nameTwo: 'Блэкберн Викингс',
		},
		{
			title: 'БигV(7)',
			nameOne: 'Wyndham Basketball',
			nameAccent: false,
			date: '01/04/23',
			score: '- : -',
			scoreAccent: false,
			nameTwo: 'Блэкберн Викингс',
		},
		{
			title: 'БигV(8)',
			nameOne: 'Блэкберн Викингс',
			nameAccent: false,
			date: '01/04/23',
			score: '- : -',
			scoreAccent: false,
			nameTwo: 'Melbourne Uni Bball',
		},
	]

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
                        <div className="statistics-two__table-two-wrapper">
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
                                            {'statistics-two__table-two-cell--accent': item.winOne}
                                        )}>{item.nameOne}</div>
                                        <div className="statistics-two__table-two-cell">
                                            <div className="statistics-two__table-two-cell-text">{item.date}</div>
                                            <div className={clsx(
                                                'statistics-two__table-two-cell-text',
                                                {'statistics-two__table-two-cell-text--accent': item.scoreAccent}
                                            )}>{item.score}</div>
                                        </div>
                                        <div className={clsx(
                                            'statistics-two__table-two-cell',
                                            {'statistics-two__table-two-cell--accent': !item.winOne}
                                        )}>{item.nameTwo}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="statistics-two__table-two-btn-wrapper">
                                <button className="statistics-two__table-two-btn">Показать еще</button>
                            </div>
                        </div>
                        <div className="statistics-two__table-two-wrapper">
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
                                            {'statistics-two__table-two-cell--accent': item.winOne}
                                        )}>{item.nameOne}</div>
                                        <div className="statistics-two__table-two-cell">
                                            <div className="statistics-two__table-two-cell-text">{item.date}</div>
                                            <div className={clsx(
                                                'statistics-two__table-two-cell-text',
                                                {'statistics-two__table-two-cell-text--accent': item.scoreAccent}
                                            )}>{item.score}</div>
                                        </div>
                                        <div className={clsx(
                                            'statistics-two__table-two-cell',
                                            {'statistics-two__table-two-cell--accent': !item.winOne}
                                        )}>{item.nameTwo}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="statistics-two__table-two-btn-wrapper">
                                <button className="statistics-two__table-two-btn">Показать еще</button>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="statistics-six__name-accent">Следующие матчи</h2>
                <div className="statistics-two__two-table-columns-wrapper">
                    <div className="statistics-two__two-table-columns">
                        <div className="statistics-two__table-two-wrapper">
                            <div className="statistics-two__table-two">
                                <div className="statistics-two__table-two-header">
                                    <div className="statistics-two__table-two-header-cell">ТУ/Р</div>
                                    <div className="statistics-two__table-two-header-cell">Матч</div>
                                </div>
                                {arrRowFour.map((item, index) => (
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
                            <div className="statistics-two__table-two">
                                <div className="statistics-two__table-two-header">
                                    <div className="statistics-two__table-two-header-cell">ТУ/Р</div>
                                    <div className="statistics-two__table-two-header-cell">Матч</div>
                                </div>
                                {arrRowFive.map((item, index) => (
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
            </div>
		</div>
	);
}

export default StatisticsSix;