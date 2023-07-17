import { useState } from 'react';
import clsx from 'clsx';

import styles from './LimitSession.module.scss';

function LimitSession() {

	const [isDaylyLimit, setIsDaylyLimit] = useState(false);
	const [isWeeklyLimit, setIsWeeklyLimit] = useState(false);
	const [isMonthlyLimit, setIsMonthlyLimit] = useState(false);

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
								onChange={() => setIsDaylyLimit((dayly) => !dayly)} 
							/>
							Дневной лимит
						</label>
						<div className={styles.itemText}>Не установлен</div>
					</div>
					<div className={styles.itemRight}>
						<div className={styles.itemLine}></div>
						<ul className={styles.itemLineSublist}>
							<li className={styles.itemLineItem}>
								<button className={clsx(styles.itemLineItemBtn, styles.itemLineItemBtnActive)}>0 ч.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button className={styles.itemLineItemBtn}>6 ч.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button className={styles.itemLineItemBtn}>12 ч.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button className={styles.itemLineItemBtn}>18 ч.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button className={styles.itemLineItemBtn}>24 ч.</button>
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
						<div className={styles.itemText}>Не установлен</div>
					</div>
					<div className={styles.itemRight}>
						<div className={styles.itemLine}></div>
						<ul className={styles.itemLineSublist}>
							<li className={styles.itemLineItem}>
								<button className={clsx(styles.itemLineItemBtn, styles.itemLineItemBtnActive)}>0 ч.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button className={styles.itemLineItemBtn}>1 д.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button className={styles.itemLineItemBtn}>2 д.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button className={styles.itemLineItemBtn}>3 д.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button className={styles.itemLineItemBtn}>4 д.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button className={styles.itemLineItemBtn}>5 д.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button className={styles.itemLineItemBtn}>6 д.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button className={styles.itemLineItemBtn}>7 д.</button>
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
						<div className={styles.itemText}>Не установлен</div>
					</div>
					<div className={styles.itemRight}>
						<div className={styles.itemLine}></div>
						<ul className={styles.itemLineSublist}>
							<li className={styles.itemLineItem}>
								<button className={clsx(styles.itemLineItemBtn, styles.itemLineItemBtnActive)}>0 ч.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button className={styles.itemLineItemBtn}>5 д.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button className={styles.itemLineItemBtn}>10 д.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button className={styles.itemLineItemBtn}>15 д.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button className={styles.itemLineItemBtn}>20 д.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button className={styles.itemLineItemBtn}>25 д.</button>
							</li>
							<li className={styles.itemLineItem}>
								<button className={styles.itemLineItemBtn}>1 м.</button>
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