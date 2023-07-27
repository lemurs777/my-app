import { useState } from 'react';
import clsx from 'clsx';

import { TableLeagueCustomData } from './types';

import styles from './TableLeagueCustom.module.scss';

function TableLeagueCustom(
	{ data } : {data : TableLeagueCustomData }
) {

	const [showTable, setShowTable] = useState(false);

	return (
		<>
			<div className={styles.tableLeague}>
				<div className={styles.header}>
					<div className={styles.headerCell}>Поз.</div>
					<div className={styles.headerCell}>Команда</div>
					<div className={styles.headerCell}>И</div>
					<div className={styles.headerCell}>Выезда</div>
					<div className={styles.headerCell}>ГЗа/ГПр</div>
					<div className={styles.headerCell}>Разн.</div>
					<div className={styles.headerCell}>Соотношение корзин</div>
					<div className={styles.headerCell}>pct</div>
					<div className={styles.headerCell}>Очки</div>
					<div className={styles.headerCell}>{ data.forms ? 'Форма' : null }</div>
				</div>
				{data.dataTable.map((item, index) => (item.show || (!item.show && showTable)) ? (
					<div key={index} className={styles.row}>
						<div className={clsx(
							styles.cell,
							styles.cellNumber,
							{ [styles.cellPlayoff] : item.playTournamentClass === 'playoff'},
							{ [styles.cellQualification] : item.playTournamentClass === 'qualification'},
							{ [styles.cellDown] : item.directionClass === 'down'},
							{ [styles.cellUpp] : item.directionClass === 'upp'},

						)}>{item.number}</div>
						<div className={styles.cell}>{item.name}</div>
						<div className={styles.cell}>{item.game}</div>
						<div className={styles.cell}>{item.away}</div>
						<div className={styles.cell}>{item.scored}-{item.conceded}</div>
						<div className={styles.cell}>{item.scored - item.conceded}</div>
						<div className={styles.cell}>{item.ratio}</div>
						<div className={styles.cell}>{item.pct}</div>
						<div className={styles.cell}>{item.points}</div>
						<div className={clsx(styles.cell, styles.cellForms)}>
							{ item.forms.length > 0
								? <div className={styles.forms}>
									{item.forms.map((form, index) => (
										<div 
											key={`key-${index}`} 
											className={clsx(
												styles.form,
												{[styles.formWin] : form.form === 'win'},
												{[styles.formLoss] : form.form === 'loss'},
											)}>
											{ form.form === 'win'? 'В' : 'П' }
										</div>
									))} 
								</div>
								: null
							}
						</div>
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
			{ data.info ? (
				<div className={styles.info}>
					<p className={styles.infoText}>Если две (или более) команды имеют одинаковое количество очков, следующие факторы помогут выявить победителя:</p>
					<p className={styles.infoText}>1. Процент побед и поражений</p>
					<p className={styles.infoText}>2. Очные встречи</p>
					<ul className={styles.infoList}>
						<li className={styles.infoItem}>Плей-офф</li>
						<li className={styles.infoItem}>Квалификация, Плей-офф</li>
					</ul>
				</div>
			) : null }
		</>
	);
}

export default TableLeagueCustom;