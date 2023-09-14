import styles from './Betting.module.scss'

import { Link } from 'react-router-dom'

function Betting() {

	const arrRows = [
		{
			result: 'Проигрыш',
			number: '29847938',
			date: '2023-03-31',
			time: '20:31:41',
			sum: '500',
			currency: 'руб.',
			status: 'Линия',
		},
		{
			result: 'Проигрыш',
			number: '29847938',
			date: '2023-03-31',
			time: '20:31:41',
			sum: '500',
			currency: 'руб.',
			status: 'Линия',
		},
		{
			result: 'Проигрыш',
			number: '29847938',
			date: '2023-03-31',
			time: '20:31:41',
			sum: '500',
			currency: 'руб.',
			status: 'Линия',
		},
		{
			result: 'Проигрыш',
			number: '29847938',
			date: '2023-03-31',
			time: '20:31:41',
			sum: '500',
			currency: 'руб.',
			status: 'Линия',
		},
		{
			result: 'Проигрыш',
			number: '29847938',
			date: '2023-03-31',
			time: '20:31:41',
			sum: '500',
			currency: 'руб.',
			status: 'Линия',
		},
		{
			result: 'Проигрыш',
			number: '29847938',
			date: '2023-03-31',
			time: '20:31:41',
			sum: '500',
			currency: 'руб.',
			status: 'Линия',
		},
		{
			result: 'Проигрыш',
			number: '29847938',
			date: '2023-03-31',
			time: '20:31:41',
			sum: '500',
			currency: 'руб.',
			status: 'Линия',
		},
		{
			result: 'Проигрыш',
			number: '29847938',
			date: '2023-03-31',
			time: '20:31:41',
			sum: '500',
			currency: 'руб.',
			status: 'Линия',
		},
	]

	return (
		<div className={styles.betting}>
			<div className={styles.header}>
				<Link className={styles.headerBtn} to="/profile/">Profile</Link>
				<h1 className={styles.headerTitle}>Мои ставки</h1>
			</div>
			<div className={styles.content}>
				<div className={styles.contentTop}>
					<div className={styles.contentTopTitle}>История ставок</div>
					<button className={styles.contentTopBtn}>More</button>
				</div>
				<div className={styles.table}>
					<div className={`${styles.tableHeader} desktop`}>
						<div className={styles.tableHeaderCell}>Результат</div>
						<div className={styles.tableHeaderCell}>Номер ставки</div>
						<div className={styles.tableHeaderCell}>Дата</div>
						<div className={styles.tableHeaderCell}>Время</div>
						<div className={styles.tableHeaderCell}>Сумма</div>
						<div className={styles.tableHeaderCell}>Статус</div>
					</div>
					<ul className={styles.tableList}>
						{arrRows.map((item, index) => (
							<li key={index} className={styles.tableItem}>
								<div className={styles.tableItemCell}>
									<div className={styles.tableItemCell__top}>{item.result}</div>
									<div className={`${styles.tableItemCell__bottom} mobile`}>{item.time}</div>
								</div>
								<div className={styles.tableItemCell}>
									<div className={styles.tableItemCell__top}><span>№&nbsp;</span>{item.number}</div>
									<div className={`${styles.tableItemCell__bottom} mobile`}>{item.date}</div>
								</div>
								{/* <div className={styles.tableItemCell}>{item.number}</div> */}
								<div className={styles.tableItemCell}>{item.date}</div>
								<div className={styles.tableItemCell}>{item.time}</div>
								<div className={styles.tableItemCell}>
									<div className={styles.tableItemCell__top}>{item.sum} {item.currency}</div>
									<div className={`${styles.tableItemCell__bottom} mobile`}>{item.status}</div>
								</div>
								{/* <div className={styles.tableItemCell}>{item.sum} {item.currency}</div> */}
								<div className={styles.tableItemCell}>{item.status}</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Betting
