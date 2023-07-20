import clsx from 'clsx';

import styles from './TableBigSmallFilter.module.scss';

function TableBigSmallFilter() {

	return (
		<>
			<h1 className={styles.title}>бол/мен</h1>
			<div className={styles.wrapper}>
				<button className={clsx(styles.btn, styles.btnActive)}>Всего</button>
				<button className={styles.btn}>Хозяева</button>
				<button className={styles.btn}>Гости</button>
			</div>
		</>
	);
}

export default TableBigSmallFilter;