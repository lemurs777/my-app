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
            </div>
		</div>
	);
}

export default StatisticsTwo;