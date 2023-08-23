import { useState } from 'react';
import clsx from 'clsx';

import styles from './LimitDeposit.module.scss';

function LimitDeposit() {

	const [isDaylyLimit, setIsDaylyLimit] = useState(false);
	const [isWeeklyLimit, setIsWeeklyLimit] = useState(false);
	const [isMonthlyLimit, setIsMonthlyLimit] = useState(false);

	const [daylyLimit, setDaylyLimit] = useState("");

	const updateDaylyLimit = (e: any) => {
		const regex = /^[\D0]+|\D/;
		if (e.target.value === "" || !regex.test(e.target.value)) {
			setDaylyLimit(e.target.value);
		}
	};

	const [weeklyLimit, setWeeklyLimit] = useState("");

	const updateWeeklyLimit = (e: any) => {
		const regex = /^[\D0]+|\D/;
		if (e.target.value === "" || !regex.test(e.target.value)) {
			setWeeklyLimit(e.target.value);
		}
	};

	const [monthlyLimit, setMonthlyLimit] = useState("");

	const updateMonthlyLimit = (e: any) => {
		const regex = /^[\D0]+|\D/;
		if (e.target.value === "" || !regex.test(e.target.value)) {
			setMonthlyLimit(e.target.value);
		}
	};

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
					<input className={styles.itemInput} type="text" placeholder="Введите сумму" value={daylyLimit} onChange={updateDaylyLimit}/>
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
					<input className={styles.itemInput} type="text" placeholder="Введите сумму" value={weeklyLimit} onChange={updateWeeklyLimit}/>
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
					<input className={styles.itemInput} type="text" placeholder="Введите сумму" value={monthlyLimit} onChange={updateMonthlyLimit}/>
				</li>
			</ul>
		</div>
				
	);
}

export default LimitDeposit;