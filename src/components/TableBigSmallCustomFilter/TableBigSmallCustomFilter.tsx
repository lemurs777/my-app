import clsx from 'clsx';

import styles from './TableBigSmallCustomFilter.module.scss';

function TableBigSmallCustomFilter() {

	return (
		<>
			<h2 className={styles.title}>бол/мен</h2>
			<div className={styles.wrapper}>
				<button className={clsx(styles.btn, styles.btnActive)}>Все игры</button>
				<button className={styles.btn}>Домашние игры</button>
				<button className={styles.btn}>Матчи на выезде</button>
			</div>
			<div className={styles.wrapperTwo}>
				<button className={clsx(styles.btnTwo, styles.btnTwoLess)}>Less</button>
				<div className={styles.select}>
					<span>165.5</span>
				</div>
				<button className={clsx(styles.btnTwo, styles.btnTwoMore)}>More</button>
			</div>
		</>
	);
}

export default TableBigSmallCustomFilter;