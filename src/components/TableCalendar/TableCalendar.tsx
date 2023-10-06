import clsx from 'clsx'

import { StatisticsNavigation } from '../'

import styles from './TableCalendar.module.scss'

function TableCalendar() {
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
			],
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
			],
		},
	]

	return (
		<div className={styles.tableCalendar}>
			<StatisticsNavigation name='calendar' />
			<div className={styles.wrapper}>
				<h1 className={styles.title}>Big V 2023</h1>
				<div className={styles.filterWrapper}>
					<button className={clsx(styles.filterBtn, styles.filterBtnActive)}>
						Раунды
					</button>
					<button className={styles.filterBtn}>Недели</button>
					<button className={styles.filterBtn}>Месяцы</button>
					<button className={styles.filterBtn}>Полный список</button>
				</div>
				<div className={styles.roundWrapper}>
					<button className={styles.roundBtn}>1</button>
					<button className={styles.roundBtn}>2</button>
					<button className={styles.roundBtn}>3</button>
					<button className={clsx(styles.roundBtn, styles.roundBtnActive)}>
						4
					</button>
					<button className={styles.roundBtn}>5</button>
					<button className={styles.roundBtn}>6</button>
					<button className={styles.roundBtn}>7</button>
					<button className={styles.roundBtn}>8</button>
					<button className={styles.roundBtn}>9</button>
					<button className={styles.roundBtn}>10</button>
					<button className={styles.roundBtn}>11</button>
					<button className={styles.roundBtn}>12</button>
					<button className={styles.roundBtn}>13</button>
					<button className={styles.roundBtn}>14</button>
					<button className={styles.roundBtn}>15</button>
					<button className={styles.roundBtn}>16</button>
					<button className={styles.roundBtn}>17</button>
					<button className={styles.roundBtn}>18</button>
				</div>
				<h2 className={styles.name}>Раунды 4</h2>
				{arrRows.map((item, index) => (
					<div key={index} className={styles.table}>
						<div className={styles.header}>
							<div className={styles.headerCell}>{item.date}</div>
							<div
								className={clsx(styles.headerCell, styles.headerCell__empty)}
							></div>
							<div className={styles.headerCell__right}>
								<div className={styles.headerCell}>1</div>
								<div className={styles.headerCell}>2</div>
								<div className={styles.headerCell}>3</div>
								<div className={styles.headerCell}>4</div>
								<div className={styles.headerCell}>P</div>
								<div className={styles.headerCell}>OT</div>
							</div>
						</div>
						{item.rows.map((row, index) => (
							<div key={index} className={styles.row}>
								<div className={styles.cell}>{row.time}</div>
								<div className={clsx(styles.cell, styles.cellInfo)}>
									<span className={styles.cellName}>{row.nameOne}</span>
									<span
										className={clsx(styles.cellScore, {
											[styles.cellScoreEmpty]: !row.score,
										})}
									>
										{row.score}
									</span>
									<span className={styles.cellName}>{row.nameTwo}</span>
								</div>
								<div className={styles.cell__right}>
									<div
										className={clsx(styles.cell, {
											[styles.cellEmpty]: !row.one,
										})}
									>
										{row.one}
									</div>
									<div
										className={clsx(styles.cell, {
											[styles.cellEmpty]: !row.two,
										})}
									>
										{row.two}
									</div>
									<div
										className={clsx(styles.cell, {
											[styles.cellEmpty]: !row.three,
										})}
									>
										{row.three}
									</div>
									<div
										className={clsx(styles.cell, {
											[styles.cellEmpty]: !row.four,
										})}
									>
										{row.four}
									</div>
									<div
										className={clsx(styles.cell, {
											[styles.cellEmpty]: !row.points,
										})}
									>
										{row.points}
									</div>
									<div
										className={clsx(styles.cell, {
											[styles.cellEmpty]: !row.overtime,
										})}
									>
										{row.overtime}
									</div>
								</div>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	)
}

export default TableCalendar
