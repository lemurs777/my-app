
import { Link } from 'react-router-dom';

function StatisticsOne() {

    const arrRows = [
		{
			name: 'Штутгарт (iONE) — Болоруссия М (bekplay)',
			score: '0:2 (0-2 0-0)',
            time: 'Сегодня в 13:55',
            status: 'Завершен',
            info: '1-й гол: 2-я на 7-мин.',
		},
        {
			name: 'Штутгарт (iONE) — Болоруссия М (bekplay)',
			score: '0:2 (0-2 0-0)',
            time: 'Сегодня в 13:55',
            status: 'Завершен',
            info: '1-й гол: 2-я на 7-мин.',
		},
        {
			name: 'Штутгарт (iONE) — Болоруссия М (bekplay)',
			score: '0:2 (0-2 0-0)',
            time: 'Сегодня в 13:55',
            status: 'Завершен',
            info: '1-й гол: 2-я на 7-мин.',
		},
        {
			name: 'Штутгарт (iONE) — Болоруссия М (bekplay)',
			score: '0:2 (0-2 0-0)',
            time: 'Сегодня в 13:55',
            status: 'Завершен',
            info: '1-й гол: 2-я на 7-мин.',
		},
        {
			name: 'Штутгарт (iONE) — Болоруссия М (bekplay)',
			score: '0:2 (0-2 0-0)',
            time: 'Сегодня в 13:55',
            status: 'Завершен',
            info: '1-й гол: 2-я на 7-мин.',
		},
        {
			name: 'Штутгарт (iONE) — Болоруссия М (bekplay)',
			score: '0:2 (0-2 0-0)',
            time: 'Сегодня в 13:55',
            status: 'Завершен',
            info: '1-й гол: 2-я на 7-мин.',
		},
        {
			name: 'Штутгарт (iONE) — Болоруссия М (bekplay)',
			score: '0:2 (0-2 0-0)',
            time: 'Сегодня в 13:55',
            status: 'Live',
            info: '1-й гол: 2-я на 7-мин.',
		},
        {
			name: 'Штутгарт (iONE) — Болоруссия М (bekplay)',
			score: '0:2 (0-2 0-0)',
            time: 'Сегодня в 13:55',
            status: 'Завершен',
            info: '1-й гол: 2-я на 7-мин.',
		},
        {
			name: 'Штутгарт (iONE) — Болоруссия М (bekplay)',
			score: '0:2 (0-2 0-0)',
            time: 'Сегодня в 13:55',
            status: 'Завершен',
            info: '1-й гол: 2-я на 7-мин.',
		},
        {
			name: 'Штутгарт (iONE) — Болоруссия М (bekplay)',
			score: '0:2 (0-2 0-0)',
            time: 'Сегодня в 13:55',
            status: 'Завершен',
            info: '1-й гол: 2-я на 7-мин.',
		},
        {
			name: 'Штутгарт (iONE) — Болоруссия М (bekplay)',
			score: '0:2 (0-2 0-0)',
            time: 'Сегодня в 13:55',
            status: 'Завершен',
            info: '1-й гол: 2-я на 7-мин.',
		},
        {
			name: 'Штутгарт (iONE) — Болоруссия М (bekplay)',
			score: '0:2 (0-2 0-0)',
            time: 'Сегодня в 13:55',
            status: 'Завершен',
            info: '1-й гол: 2-я на 7-мин.',
		},
        {
			name: 'Штутгарт (iONE) — Болоруссия М (bekplay)',
			score: '0:2 (0-2 0-0)',
            time: 'Сегодня в 13:55',
            status: 'Live',
            info: '1-й гол: 2-я на 7-мин.',
		},
        {
			name: 'Штутгарт (iONE) — Болоруссия М (bekplay)',
			score: '0:2 (0-2 0-0)',
            time: 'Сегодня в 13:55',
            status: 'Live',
            info: '1-й гол: 2-я на 7-мин.',
		},
        {
			name: 'Штутгарт (iONE) — Болоруссия М (bekplay)',
			score: '0:2 (0-2 0-0)',
            time: 'Сегодня в 13:55',
            status: 'Завершен',
            info: '1-й гол: 2-я на 7-мин.',
		},
        {
			name: 'Штутгарт (iONE) — Болоруссия М (bekplay)',
			score: '0:2 (0-2 0-0)',
            time: 'Сегодня в 13:55',
            status: 'Завершен',
            info: '1-й гол: 2-я на 7-мин.',
		},
        {
			name: 'Штутгарт (iONE) — Болоруссия М (bekplay)',
			score: '0:2 (0-2 0-0)',
            time: 'Сегодня в 13:55',
            status: 'Завершен',
            info: '1-й гол: 2-я на 7-мин.',
		},
        {
			name: 'Штутгарт (iONE) — Болоруссия М (bekplay)',
			score: '0:2 (0-2 0-0)',
            time: 'Сегодня в 13:55',
            status: 'Завершен',
            info: '1-й гол: 2-я на 7-мин.',
		},
        {
			name: 'Штутгарт (iONE) — Болоруссия М (bekplay)',
			score: '0:2 (0-2 0-0)',
            time: 'Сегодня в 13:55',
            status: 'Завершен',
            info: '1-й гол: 2-я на 7-мин.',
		},
    ]

	return (
		<div className="statistics-one">
            <ul className="statistics-one__header-list">
                <li className="statistics-one__header-item">
                    <button className="statistics-one__header-item-btn">Только текущие</button>
                </li>
                <li className="statistics-one__header-item">
                    <button className="statistics-one__header-item-btn statistics-one__header-item-btn--active">Сортировка по номеру</button>
                </li>
                <li className="statistics-one__header-item">
                    <button className="statistics-one__header-item-btn">Сортировка по времени</button>
                </li>
            </ul>
            <div className="statistics-one__table">
                <h2 className="statistics-one__table-name">ФУТБОЛ. FIFA 23. UNITED ESPORTS. BUNDESLIGA. 2X4 MIN.KAZAKYSTAN</h2>
                {arrRows.map((row, index) => (
                    <div key={`row-${index}`} className="statistics-one__table-row">
                        <div className="statistics-one__table-cell">{index}</div>
                        <div className="statistics-one__table-cell">{row.name}</div>
                        <div className="statistics-one__table-cell">{row.score}</div>
                        <div className="statistics-one__table-cell">{row.time}</div>
                        {row.status === 'Завершен'
                            ? <div className="statistics-one__table-cell">{row.status}</div>
                            : <Link to="/" className="statistics-one__table-cell statistics-one__table-cell--live">{row.status}</Link>
                        }
                        <div className="statistics-one__table-cell">{row.info}</div>
                    </div>
                ))};
            </div>
		</div>
	);
}

export default StatisticsOne;