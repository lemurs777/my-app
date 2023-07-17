import { useState } from 'react';
import clsx from 'clsx';

import styles from './LimitDeposit.module.scss';

function LimitDeposit() {

	const [isDaylyLimit, setIsDaylyLimit] = useState(false);
	const [isWeeklyLimit, setIsWeeklyLimit] = useState(false);
	const [isMonthlyLimit, setIsMonthlyLimit] = useState(false);

	return (
		
		<div className={styles.limitDeposit}>
			<div className={styles.title}>Текущие ограничения</div>
			<div className={styles.info}>Не установлен</div>
			<div className={styles.titleTwo}>Будущие ограничения</div>
			<ul className={styles.list}>
				<li className={styles.item}>
					<label className={clsx(
						styles.itemLabel,
						{ [styles.itemLabelActive] : isDaylyLimit},
					)}>
						<input 
							className={styles.itemCheckbox} 
							type="checkbox" 
							checked={isDaylyLimit} 
							onChange={() => setIsDaylyLimit((dayly) => !dayly)} 
						/>
						Дневной лимит
					</label>
					<input className={styles.itemInput} type="text" placeholder="Введите сумму"/>
				</li>
				<li className={styles.item}>
					<label className={clsx(
						styles.itemLabel,
						{ [styles.itemLabelActive] : isWeeklyLimit},
					)}>
						<input 
							className={styles.itemCheckbox} 
							type="checkbox" 
							checked={isWeeklyLimit} 
							onChange={() => setIsWeeklyLimit((weekly) => !weekly)} 
						/>
						Недельный лимит
					</label>
					<input className={styles.itemInput} type="text" placeholder="Введите сумму"/>
				</li>
				<li className={styles.item}>
					<label className={clsx(
						styles.itemLabel,
						{ [styles.itemLabelActive]:  isMonthlyLimit},
					)}>
						<input 
							className={styles.itemCheckbox} 
							type="checkbox" 
							checked={isMonthlyLimit} 
							onChange={() => setIsMonthlyLimit((monthly) => !monthly)} 
						/>
						Месячный лимит
					</label>
					<input className={styles.itemInput} type="text" placeholder="Введите сумму"/>
				</li>
			</ul>
		</div>
				
	);
}

export default LimitDeposit;