import clsx from 'clsx'

import { StatisticsNavigation } from '../'

import Select, { components, DropdownIndicatorProps } from 'react-select'
import { Tooltip } from 'react-tooltip'
import { ReactComponent as CaretDownIcon } from '../../assets/images/svg/triangle.svg'
import { ReactComponent as InfoIcon } from '../../assets/images/svg/info.svg'
import styles from './TableCalendar.module.scss'
const DropdownIndicator: React.FC<DropdownIndicatorProps> = props => {
	return (
		<components.DropdownIndicator {...props}>
			<CaretDownIcon />
		</components.DropdownIndicator>
	)
}
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
					points: <InfoIcon />,
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
					points: <InfoIcon />,
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
	const options = [
		{ value: '1', label: '1' },
		{ value: '2', label: '2' },
		{ value: '3', label: '3' },
		{ value: '4', label: '4' },
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
				<div className={styles.selectMobile}>
					<button
						type='button'
						className={clsx(
							styles.selectMobile__arrowPrev,
							styles.selectMobile__arrow
						)}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='12'
							height='15'
							viewBox='0 0 12 15'
							fill='none'
						>
							<path
								d='M10.7402 1.33281L1.26023 7.69441L10.7402 14.1328'
								stroke='#898989'
								stroke-width='1.5'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</svg>
					</button>
					<div className={styles.selectWrapper}>
						<Select
							components={{ DropdownIndicator }}
							classNamePrefix='selectR'
							options={options}
							defaultValue={{ value: '1', label: '1' }}
						/>
					</div>
					<button
						type='button'
						className={clsx(
							styles.selectMobile__arrowNext,
							styles.selectMobile__arrow
						)}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='12'
							height='15'
							viewBox='0 0 12 15'
							fill='none'
						>
							<path
								d='M1.25977 1.33281L10.7398 7.69441L1.25977 14.1328'
								stroke='#898989'
								stroke-width='1.5'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</svg>
					</button>
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
										id='tooltip'
										className={clsx(styles.cell, {
											[styles.cellEmpty]: !row.points,
										})}
									>
										{row.points && (
											<Tooltip
												className='tooltip'
												anchorSelect='#tooltip'
												content='Info'
												style={{ backgroundColor: '#fff', color: '#000' }}
											/>
										)}
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
