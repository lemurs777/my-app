import { useState } from 'react';
import clsx from 'clsx';

import styles from './LimitSession.module.scss';

function LimitSession() {

	const [isDaylyLimit, setIsDaylyLimit] = useState(false);
	const [daylyLimit, setDaylyLimit] = useState(0);
	const [isWeeklyLimit, setIsWeeklyLimit] = useState(false);
	const [weeklyLimit, setWeeklyLimit] = useState(0);
	const [isMonthlyLimit, setIsMonthlyLimit] = useState(false);
	const [monthlyLimit, setMonthlyLimit] = useState(0);

	return (
		
		<div className={styles.limitSession}>
			<div className={styles.title}>Текущие ограничения</div>
			<div className={styles.info}>Не установлен</div>
			<div className={styles.titleTwo}>Будущие ограничения</div>
			<ul className={styles.list}>
				<li className={styles.item}>
					<div className={styles.itemLeft}>
						<label className={clsx(
							styles.itemLabel,
							{ [styles.itemLabelActive] : isDaylyLimit},
						)}>
							<input 
								className={styles.itemCheckbox} 
								type="checkbox" 
								checked={isDaylyLimit} 
								onChange={() => {setIsDaylyLimit((dayly) => !dayly)}}
							/>
							Дневной лимит
						</label>
						<div className={styles.itemText}>{(isDaylyLimit && daylyLimit !== 0) ? `${daylyLimit} ч.` : 'Не установлен'}</div>
					</div>
					<div className={styles.itemRight}>
						<div className={styles.itemLine}></div>
						<ul className={styles.itemLineSublist}>
							<li className={styles.itemLineItem}>
								<button 
									className={clsx(
										styles.itemLineItemBtn, 
										{[styles.itemLineItemBtnActive] : daylyLimit === 0 }
									)}
									onClick={() => setDaylyLimit(0)}
								>0 ч.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button 
									className={clsx(
										styles.itemLineItemBtn, 
										{[styles.itemLineItemBtnActive] : daylyLimit === 6 }
									)}
									onClick={() => setDaylyLimit(6)}
								>6 ч.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button 
									className={clsx(
										styles.itemLineItemBtn, 
										{[styles.itemLineItemBtnActive] : daylyLimit === 12 }
									)} 
									onClick={() => setDaylyLimit(12)}
								>12 ч.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button 
									className={clsx(
										styles.itemLineItemBtn, 
										{[styles.itemLineItemBtnActive] : daylyLimit === 18 }
									)} 
									onClick={() => setDaylyLimit(18)}
								>18 ч.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button 
									className={clsx(
										styles.itemLineItemBtn, 
										{[styles.itemLineItemBtnActive] : daylyLimit === 24 }
									)}
									onClick={() => setDaylyLimit(24)}
								>24 ч.</button>
							</li>
						</ul>
					</div>
				</li>
				<li className={styles.item}>
					<div className={styles.itemLeft}>
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
						<div className={styles.itemText}>{(isWeeklyLimit && weeklyLimit !== 0) ? `${weeklyLimit} д.` : 'Не установлен'}</div>
					</div>
					<div className={styles.itemRight}>
						<div className={styles.itemLine}></div>
						<ul className={styles.itemLineSublist}>
							<li className={styles.itemLineItem}>
								<button 
									className={clsx(
										styles.itemLineItemBtn, 
										{[styles.itemLineItemBtnActive] : weeklyLimit === 0 }
									)} 
									onClick={() => setWeeklyLimit(0)}
								>0 д.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button 
									className={clsx(
										styles.itemLineItemBtn, 
										{[styles.itemLineItemBtnActive] : weeklyLimit === 1 }
									)} 
									onClick={() => setWeeklyLimit(1)}
								>1 д.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button 
									className={clsx(
										styles.itemLineItemBtn, 
										{[styles.itemLineItemBtnActive] : weeklyLimit === 2 }
									)} 
									onClick={() => setWeeklyLimit(2)}
								>2 д.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button 
									className={clsx(
										styles.itemLineItemBtn, 
										{[styles.itemLineItemBtnActive] : weeklyLimit === 3 }
									)} 
									onClick={() => setWeeklyLimit(3)}
								>3 д.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button 
									className={clsx(
										styles.itemLineItemBtn, 
										{[styles.itemLineItemBtnActive] : weeklyLimit === 4 }
									)} 
									onClick={() => setWeeklyLimit(4)}
								>4 д.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button 
									className={clsx(
										styles.itemLineItemBtn, 
										{[styles.itemLineItemBtnActive] : weeklyLimit === 5 }
									)} 
									onClick={() => setWeeklyLimit(5)}
								>5 д.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button 
									className={clsx(
										styles.itemLineItemBtn, 
										{[styles.itemLineItemBtnActive] : weeklyLimit === 6 }
									)} 
									onClick={() => setWeeklyLimit(6)}
								>6 д.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button 
									className={clsx(
										styles.itemLineItemBtn, 
										{[styles.itemLineItemBtnActive] : weeklyLimit === 7 }
									)} 
									onClick={() => setWeeklyLimit(7)}
								>7 д.</button>
							</li>
						</ul>
					</div>
				</li>
				<li className={styles.item}>
					<div className={styles.itemLeft}>
						<label className={clsx(
							styles.itemLabel,
							{ [styles.itemLabelActive] : isMonthlyLimit},
						)}>
							<input 
								className={styles.itemCheckbox} 
								type="checkbox" 
								checked={isMonthlyLimit} 
								onChange={() => setIsMonthlyLimit((monthly) => !monthly)} 
							/>
							Месячный лимит
						</label>
						<div className={styles.itemText}>{(isMonthlyLimit && monthlyLimit !== 0) ? `${monthlyLimit} д.` : 'Не установлен'}</div>
					</div>
					<div className={styles.itemRight}>
						<div className={styles.itemLine}></div>
						<ul className={styles.itemLineSublist}>
							<li className={styles.itemLineItem}>
								<button 
									className={clsx(
										styles.itemLineItemBtn, 
										{[styles.itemLineItemBtnActive] : monthlyLimit === 0 }
									)} 
									onClick={() => setMonthlyLimit(0)}
								>0 д.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button 
									className={clsx(
										styles.itemLineItemBtn, 
										{[styles.itemLineItemBtnActive] : monthlyLimit === 5 }
									)} 
									onClick={() => setMonthlyLimit(5)}
								>5 д.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button 
									className={clsx(
										styles.itemLineItemBtn, 
										{[styles.itemLineItemBtnActive] : monthlyLimit === 10 }
									)} 
									onClick={() => setMonthlyLimit(10)}
								>10 д.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button 
									className={clsx(
										styles.itemLineItemBtn, 
										{[styles.itemLineItemBtnActive] : monthlyLimit === 15 }
									)} 
									onClick={() => setMonthlyLimit(15)}
								>15 д.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button 
									className={clsx(
										styles.itemLineItemBtn, 
										{[styles.itemLineItemBtnActive] : monthlyLimit === 20 }
									)} 
									onClick={() => setMonthlyLimit(20)}
								>20 д.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button 
									className={clsx(
										styles.itemLineItemBtn, 
										{[styles.itemLineItemBtnActive] : monthlyLimit === 25 }
									)} 
									onClick={() => setMonthlyLimit(25)}
								>25 д.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button 
									className={clsx(
										styles.itemLineItemBtn, 
										{[styles.itemLineItemBtnActive] : monthlyLimit === 30 }
									)} 
									onClick={() => setMonthlyLimit(30)}
								>30 д.</button>
							</li>
						</ul>
					</div>
				</li>
			</ul>
			<button className={styles.btn} disabled>Установить</button>
		</div>
				
	);
}

export default LimitSession;