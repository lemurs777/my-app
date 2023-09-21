import clsx from 'clsx';
import { useState } from 'react';

import { PrevNextGamesData} from './types';

import styles from './TableNextPrevGames.module.scss';

function TableNextPrevGames(
	{ data } : {data : PrevNextGamesData}
) {
	
	const [showAllTable, setShowAllTable] = useState(false);

	const defaultShowRows = 5;

	return (
		<div className={styles.nextPrevGameTable}>
			{data.title !== null ? (
				<h2 className={clsx(styles.title,'tableHeaderGames')}>{data.title}</h2>
			) : null }
			<div className={styles.table}>
				<div className={styles.header}>
					<div className={styles.headerCell}>ТУ/Р</div>
					<div className={styles.headerCell}>Матч</div>
				</div>
				{data.dataTable.map((item, index) => (index <= defaultShowRows || (index > defaultShowRows && showAllTable)) ? (
					<div key={index} className={styles.row}>
						<div className={styles.cell}>{item.title}</div>
						<div className={clsx(
							styles.cell,
							{[styles.cellAccent] : item.winOne && item.score !== null}
						)}>{item.nameOne}</div>
						<div className={styles.cell}>
							<div className={styles.cellText}>{item.date}</div>
							{item.score !== null ? (
								<div className={clsx(styles.cellText, styles.cellTextAccent)}>{item.score}</div>
							) : (
								<div className={styles.cellText}>- : -</div>
							)}
						</div>
						<div className={clsx(
							styles.cell,
							{[styles.cellAccent] : !item.winOne && item.score !== null}
						)}>{item.nameTwo}</div>
					</div>
				) : null ) }
			</div>
			<div className={styles.btnWrapper}>
				<button 
					className={styles.btn}
					onClick={() => setShowAllTable((showAllTable) => !showAllTable)}
				>{ showAllTable
					? 'Скрыть таблицу'
					: 'Показать таблицу'
				}</button>
			</div>
		</div>
	);
}

export default TableNextPrevGames;