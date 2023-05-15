import clsx from 'clsx';

function StatisticsThree() {

	const arrRows = [
		{
			date: '15/04/23',
			rows: [
				{
					time: '12:00',
					nameOne: 'Western Port Steelers',
					score: null,
					nameTwo: 'Блэкберн Викингс',
					one: null,
					two: null,
					three: null,
					four: null,
					points: null,
					overtime: null,
				},
				{
					time: '12:30',
					nameOne: 'Wyndham Basketball',
					score: '55:88',
					nameTwo: 'Блэкберн Викингс',
					one: '12:34',
					two: '44:26',
					three: '32:8',
					four: '55:12',
					points: '12:9',
					overtime: '8:6',
				},
				{
					time: '13:00',
					nameOne: 'Хьюм Сити',
					score: null,
					nameTwo: 'Блэкберн Викингс',
					one: null,
					two: null,
					three: null,
					four: null,
					points: null,
					overtime: null,
				},
				{
					time: '13:30',
					nameOne: 'Western Port Steelers',
					score: null,
					nameTwo: 'Блэкберн Викингс',
					one: null,
					two: null,
					three: null,
					four: null,
					points: null,
					overtime: null,
				},
				{
					time: '14:00',
					nameOne: 'Western Port Steelers',
					score: null,
					nameTwo: 'Блэкберн Викингс',
					one: null,
					two: null,
					three: null,
					four: null,
					points: null,
					overtime: null,
				},
			]
		},
		{
			date: '16/04/23',
			rows: [
				{
					time: '12:00',
					nameOne: 'Western Port Steelers',
					score: null,
					nameTwo: 'Блэкберн Викингс',
					one: null,
					two: null,
					three: null,
					four: null,
					points: null,
					overtime: null,
				},
				{
					time: '12:30',
					nameOne: 'Wyndham Basketball',
					score: '55:88',
					nameTwo: 'Блэкберн Викингс',
					one: '12:34',
					two: '44:26',
					three: '32:8',
					four: '55:12',
					points: '12:9',
					overtime: '8:6',
				},
				{
					time: '13:00',
					nameOne: 'Хьюм Сити',
					score: null,
					nameTwo: 'Блэкберн Викингс',
					one: null,
					two: null,
					three: null,
					four: null,
					points: null,
					overtime: null,
				},
				{
					time: '13:30',
					nameOne: 'Western Port Steelers',
					score: null,
					nameTwo: 'Блэкберн Викингс',
					one: null,
					two: null,
					three: null,
					four: null,
					points: null,
					overtime: null,
				},
				{
					time: '14:00',
					nameOne: 'Western Port Steelers',
					score: null,
					nameTwo: 'Блэкберн Викингс',
					one: null,
					two: null,
					three: null,
					four: null,
					points: null,
					overtime: null,
				},
			]
		},
		
	]

	return (
		<div className="statistics-three">
			<h1 className="statistics-three__title">Big V 2023</h1>
			<div className="statistics-three__filter-wrapper">
				<button className="statistics-three__filter-btn statistics-three__filter-btn--active">Раунды</button>
				<button className="statistics-three__filter-btn">Недели</button>
				<button className="statistics-three__filter-btn">Месяцы</button>
				<button className="statistics-three__filter-btn">Полный список</button>
			</div>
			<div className="statistics-three__round-wrapper">
				<button className="statistics-three__round-btn">1</button>
				<button className="statistics-three__round-btn">2</button>
				<button className="statistics-three__round-btn">3</button>
				<button className="statistics-three__round-btn statistics-three__round-btn--active">4</button>
				<button className="statistics-three__round-btn">5</button>
				<button className="statistics-three__round-btn">6</button>
				<button className="statistics-three__round-btn">7</button>
				<button className="statistics-three__round-btn">8</button>
				<button className="statistics-three__round-btn">9</button>
				<button className="statistics-three__round-btn">10</button>
				<button className="statistics-three__round-btn">11</button>
				<button className="statistics-three__round-btn">12</button>
				<button className="statistics-three__round-btn">13</button>
				<button className="statistics-three__round-btn">14</button>
				<button className="statistics-three__round-btn">15</button>
				<button className="statistics-three__round-btn">16</button>
				<button className="statistics-three__round-btn">17</button>
				<button className="statistics-three__round-btn">18</button>
			</div>
			<h2 className="statistics-three__name">Раунды 4</h2>
			{arrRows.map((item, index) => (
				<div key={index} className="statistics-three__table">
					<div className="statistics-three__header-row">
						<div className="statistics-three__header-cell">{item.date}</div>
						<div className="statistics-three__header-cell"></div>
						<div className="statistics-three__header-cell">1</div>
						<div className="statistics-three__header-cell">2</div>
						<div className="statistics-three__header-cell">3</div>
						<div className="statistics-three__header-cell">4</div>
						<div className="statistics-three__header-cell">P</div>
						<div className="statistics-three__header-cell">OT</div>
					</div>
					{item.rows.map((row, index) => (
					<div key={`row-${index}`} className="statistics-three__row">
						<div className="statistics-three__cell">{row.time}</div>
						<div className="statistics-three__cell statistics-three__cell--info">
							<span className="statistics-three__cell-name">{row.nameOne}</span>
							<span className={clsx(
								'statistics-three__cell-score',
								{'statistics-three__cell-score--empty': !row.score}
							)}>{row.score}</span>
							<span className="statistics-three__cell-name">{row.nameTwo}</span>
						</div>
						<div className={clsx(
							'statistics-three__cell',
							{'statistics-three__cell--empty': !row.one}
						)}>{row.one}</div>
						<div className={clsx(
							'statistics-three__cell',
							{'statistics-three__cell--empty': !row.two}
						)}>{row.two}</div>
						<div className={clsx(
							'statistics-three__cell',
							{'statistics-three__cell--empty': !row.three}
						)}>{row.three}</div>
						<div className={clsx(
							'statistics-three__cell',
							{'statistics-three__cell--empty': !row.four}
						)}>{row.four}</div>
						<div className={clsx(
							'statistics-three__cell',
							{'statistics-three__cell--empty': !row.points}
						)}>{row.points}</div>
						<div className={clsx(
							'statistics-three__cell',
							{'statistics-three__cell--empty': !row.overtime}
						)}>{row.overtime}</div>
					</div>
					))}
				</div>
			))}
		</div>
	);
}

export default StatisticsThree;