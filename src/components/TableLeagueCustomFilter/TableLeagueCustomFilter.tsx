import clsx from 'clsx'

import styles from './TableLeagueCustomFilter.module.scss'

function TableLeagueCustomFilter() {
	return (
		<>
			<h1 className={styles.title}>Таблица лиги</h1>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<button className={clsx(styles.btn, styles.btnActive)}>
						Все игры
					</button>
					<button className={styles.btn}>Домашние игры</button>
					<button className={styles.btn}>Матчи на выезде</button>
					<button className={styles.btn}>Полная таблица</button>
				</div>
				<div className={styles.selectWrapper}>
					Раунд
					<div className={styles.selectBtn}>
						<button className={styles.select}>3</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default TableLeagueCustomFilter
