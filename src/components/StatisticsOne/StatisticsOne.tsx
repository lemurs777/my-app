import clsx from 'clsx'
import { Link } from 'react-router-dom'

import arrTables from '../../data/dataStatisticsOne'

import styles from './StatisticsOne.module.scss'

function StatisticsOne() {
	const arrRows = arrTables.arrRows

	return (
		<div className={styles.statisticsOne}>
			<ul className={styles.headerList}>
				<li className={styles.headerItem}>
					<button className={styles.headerItemBtn}>Только текущие</button>
				</li>
				<li className={styles.headerItem}>
					<button
						className={clsx(styles.headerItemBtn, styles.headerItemBtnActive)}
					>
						Сортировка по номеру
					</button>
				</li>
				<li className={styles.headerItem}>
					<button className={styles.headerItemBtn}>
						Сортировка по времени
					</button>
				</li>
			</ul>
			<div className={styles.tableWrap}>
				<div className={styles.table}>
					<h2 className={styles.tableName}>
						ФУТБОЛ. FIFA 23. UNITED ESPORTS. BUNDESLIGA. 2X4 MIN.KAZAKYSTAN
					</h2>
					{arrRows.map((row, index) => (
						<div key={index} className={styles.tableRow}>
							<div className={clsx(styles.tableCell, styles.tableCellIndex)}>
								{index + 1}
							</div>
							<div className={clsx(styles.mobileBlock, 'mobile')}>
								<div className={styles.mobileBlock__row}>
									<div className={clsx(styles.tableCell, styles.tableCellTime)}>
										{row.time}
									</div>
									{row.status === 'Завершен' ? (
										<div
											className={clsx(styles.tableCell, styles.tableCellStatus)}
										>
											{row.status}
										</div>
									) : (
										<Link
											to='/'
											className={clsx(
												styles.tableCell,
												styles.tableCellStatus,
												styles.tableCellLive
											)}
										>
											{row.status}
										</Link>
									)}
								</div>
								<div className={styles.tableCell}>{row.name}</div>
								<div className={styles.mobileBlock__row}>
									<div
										className={clsx(styles.tableCell, styles.tableCellScore)}
									>
										<span>{row.score}</span>
									</div>
									<div className={clsx(styles.tableCell, styles.tableCellInfo)}>
										{row.info}
									</div>
								</div>
							</div>
							<div className={clsx(styles.tableCell, 'desktop')}>
								{row.name}
							</div>
							<div className={clsx(styles.tableCell, styles.tableCellScore)}>
								<div className={styles.tableCellGeneralScore}>
									{row.scoreGeneral}
								</div>
								&nbsp;
								<span>{row.score}</span>
							</div>
							<div className={clsx(styles.tableCell, styles.tableCellTime)}>
								{row.time}
							</div>
							{row.status === 'Завершен' ? (
								<div className={clsx(styles.tableCell, styles.tableCellStatus)}>
									{row.status}
								</div>
							) : (
								<Link
									to='/'
									className={clsx(
										styles.tableCell,
										styles.tableCellStatus,
										styles.tableCellLive
									)}
								>
									{row.status}
								</Link>
							)}
							<div className={clsx(styles.tableCell, styles.tableCellInfo)}>
								{row.info}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default StatisticsOne
