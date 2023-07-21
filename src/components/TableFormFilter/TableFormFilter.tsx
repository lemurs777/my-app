import clsx from 'clsx';

import styles from './TableFormFilter.module.scss';

function TableFormFilter() {

	return (
		<>
			<h2 className={styles.title}>Форма</h2>
			<div className={styles.wrapper}>
				<div className={styles.filterWrapper}>
					<button className={clsx(styles.filterBtn, styles.filterBtnActive)}>Все игры</button>
					<button className={styles.filterBtn}>Домашние игры</button>
					<button className={styles.filterBtn}>Матчи на выезде</button>
				</div>
				<button className={styles.selectWrapper}>
					Раунд <span className={styles.select}>3</span>
				</button>
			</div>
			<div className={styles.bottomWrapper}>
				<div className={styles.text}>Количество матчей</div>
				<button className={styles.btn}>2</button>
				<button className={styles.btn}>4</button>
				<button className={styles.btn}>5</button>
			</div>
		</>
	);
}

export default TableFormFilter;