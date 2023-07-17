import { useState } from 'react';
import clsx from 'clsx';
import {
	LimitSelf,
	LimitDeposit,
	LimitSession,
} from '../';

import styles from './Limits.module.scss';

function Limits() {

	const [isTabActive, setIsTabActive] = useState('limit-self');

	return (
		<div className={styles.limits}>
            <h1 className={styles.title}>Ответственная игра</h1>
			<ul className={styles.tabList}>
				<li className={styles.tabItem}>
					<button className={clsx(
						styles.tabItemBtn,
						{ [styles.tabItemBtnActive] : isTabActive === 'limit-self'},
					)} onClick={() => setIsTabActive(() => 'limit-self')}>Самоограничения</button>
				</li>
				<li className={styles.tabItem}>
					<button className={clsx(
						styles.tabItemBtn,
						{ [styles.tabItemBtnActive] : isTabActive === 'limit-deposit'},
					)} onClick={() => setIsTabActive(() => 'limit-deposit')}>Лимиты на пополнение</button>
				</li>
				<li className={styles.tabItem}>
					<button className={clsx(
						styles.tabItemBtn,
						{ [styles.tabItemBtnActive] : isTabActive === 'limit-session'},
					)} onClick={() => setIsTabActive(() => 'limit-session')}>Лимиты игровой сессии</button>
				</li>
			</ul>
			<ul className={styles.tabContentList}>
				<li className={clsx(
						styles.tabContent,
						{ [styles.tabContentActive] : isTabActive === 'limit-self'},
					)}>
					<LimitSelf />
				</li>
				<li className={clsx(
					styles.tabContent,
					{ [styles.tabContentActive] : isTabActive === 'limit-deposit'},
				)}>
					<LimitDeposit />
				</li>
				<li className={clsx(
					styles.tabContent,
					{ [styles.tabContentActive] : isTabActive === 'limit-session'},
				)}>
					<LimitSession />
				</li>
			</ul>
        </div>
	);
}

export default Limits;