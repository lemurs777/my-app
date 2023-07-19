import clsx from 'clsx';

import styles from './TableLeagueFilter.module.scss';

function TableLeagueFilter() {

	return (
		<>
			<h1 className={styles.title}>Биг V (Викториан Стейт Чемпионшип)</h1>
			<div className={styles.wrapper}>
				<button className={clsx(styles.btn, styles.btnActive)}>Всего</button>
				<button className={styles.btn}>Хозяева</button>
				<button className={styles.btn}>Гости</button>
			</div>
		</>
	);
}

export default TableLeagueFilter;