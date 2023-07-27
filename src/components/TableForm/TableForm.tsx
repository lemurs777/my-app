import clsx from 'clsx';

import { TableFormData } from './types';

import styles from './TableForm.module.scss';

function TableLeague(
	{ data } : {data : TableFormData }
) {

	return (
		<div className={styles.tableForm}>
			<div className={styles.header}>
				<div className={styles.headerCell}>Поз.</div>
				<div className={styles.headerCell}>Команда</div>
				<div className={styles.headerCell}>ГЗ</div>
				<div className={styles.headerCell}>ГП</div>
				<div className={styles.headerCell}>Разн</div>
				<div className={styles.headerCell}>Сыграно</div>
				<div className={styles.headerCell}>Очки</div>
				<div className={styles.headerCell}>Форма</div>
				<div className={styles.headerCell}>Следующий оппонент</div>
			</div>
			{data.map((item, index) => (
				<div key={index} className={styles.row}>
					<div className={styles.cell}>{item.number}</div>
					<div className={styles.cell}>{item.name}</div>
					<div className={styles.cell}>{item.scored}</div>
					<div className={styles.cell}>{item.conceded}</div>
					<div className={styles.cell}>{item.scored - item.conceded}</div>
					<div className={styles.cell}>{item.game}</div>
					<div className={clsx(styles.cell, styles.cellPoints)}>
						<div className={styles.points}>
							<div className={styles.pointsPercent} style={{width: `${item.percent}%`}}></div>
						</div>
						<div className={styles.pointsText}>{item.points}</div>
					</div>
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
					<div className={styles.cell}>{item.next}</div>
				</div>
			))}
		</div>
	);
}

export default TableLeague;