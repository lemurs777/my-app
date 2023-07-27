import { useState } from 'react';
import clsx from 'clsx';

import { TableBigSmallData } from './types';

import styles from './TableBigSmall.module.scss';

function TableBigSmall(
	{ data } : { data : TableBigSmallData }
) {

	const [showTable, setShowTable] = useState(false);

	return (
		<>
			<div className={styles.tableBigSmall}>
				<div className={styles.header}>
					<div className={styles.headerCell}>Поз.</div>
					<div className={styles.headerCell}>Команда</div>
					<div className={styles.headerCell}>Сыграно</div>
					<div className={clsx(styles.headerCell, styles.headerCellUpp)}>Больше</div>
					<div className={clsx(styles.headerCell, styles.headerCellUppDown)}>Меньше</div>
					<div className={styles.headerCell}>Сред. очки/матч</div>
				</div>
				{data.dataTable.map((item, index) => (item.show || (!item.show && showTable)) ? (
					<div key={index} className={styles.row}>
						<div className={styles.cell}>{item.number}</div>
						<div className={styles.cell}>{item.name}</div>
						<div className={styles.cell}>{item.game}</div>
						<div className={styles.cell}>{item.win}</div>
						<div className={styles.cell}>
							<div className={styles.percentOne}>{`${item.percent}%`}</div>
							<div className={styles.percent}>
								<div className={styles.percentShow} style={{width: `${item.percent}%`}}></div>
							</div>
							<div className={styles.percentTwo}>{`${100 - item.percent}%`}</div>
							<div className={styles.percentInfo}>{`${item.game - item.win}`}</div>
						</div>
						<div className={styles.cell}>{item.points}</div>
					</div>
				) : null )}
			</div>
			{ data.btnShowTable ? (
				<div className={styles.btnWrapper}>
					<button 
						className={styles.btn}
						onClick={() => setShowTable((showTable) => !showTable)}
					>{ showTable
						? 'Скрыть таблицу'
						: 'Показать всю таблицу'
					}</button>
				</div>
			) : null }
		</>
	);
}

export default TableBigSmall;
