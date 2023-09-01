import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useState } from 'react';

import styles from './Promotion.module.scss';

import PromoMainBanner1 from '../../assets/images/promo-main-banner-1-x2.min.jpg';
import PromoListImg1 from '../../assets/images/promo-list-img-1-x2.min.png';
import PromoListImg2 from '../../assets/images/promo-list-img-2-x2.min.png';
import PromoListImg3 from '../../assets/images/promo-list-img-3-x2.min.png';

function Promotion() {

	const [showAllRules, setShowAllRules] = useState(false);

	const defaultShowRules = 3;

	const arrRules = [
		{rule: 'Сумма выигрыша соответствует сумме очков'},
		{rule: 'Сумма выигрыша соответствует сумме очков'},
		{rule: 'В акции участвуют только ставки с коэффициентом от 2.6'},
		{rule: 'Сумма выигрыша соответствует сумме очков'},
		{rule: 'Сумма выигрыша соответствует сумме очков'},
		{rule: 'В акции участвуют только ставки с коэффициентом от 2.6'},
		{rule: 'Сумма выигрыша соответствует сумме очков'},
	];

	const arrTask = [
		{
			name: 'Сделать от 5 ставок по игре CS:GO',
			all: 5,
			done: 5,
		},
		{
			name: 'Сделать от 5 ставок по игре Dota 2',
			all: 5,
			done: 3,
		},
	]

	

	return (
		<div className={styles.promotion}>
			<img className={styles.bannner} src={PromoMainBanner1} alt="Banner" />
			<div className={styles.infoWrapper}>
				<div className={styles.info}>
					<div className={styles.top}>
						<div className={styles.topDates}>02.07.2020 - 03.07.2020</div>
						<h1 className={styles.topTitle}>Ставь на киберспорт и выиграй спец. призы</h1>
						<div className={styles.topContent}>
							<p className={styles.topText}>Правила акции очень просты.</p>
							<p className={styles.topText}>В период с 05.04.2021 по 27.04.2021 делайте ставки на любую из игр категории <Link className="promotion__info-top-link" to="/promotions/">киберспорт</Link> и станьте победителем розыгрыша 9999₽.</p>
							<p className={styles.topText}>Чем больше Вы ставите, тем больше ваши шансы выиграть главный приз!</p>
						</div>
					</div>
					<div className={styles.about}>
						<p className={styles.aboutText}>Как начать выигрывать:</p>
						<ul className={styles.aboutList}>
							<li className={styles.aboutItem}>
								<img className={styles.aboutItemImg} src={PromoListImg1} alt="Step 1" width="90" height="90" />
								<div className={styles.aboutItemText}>Регистрируйся и <span className={styles.aboutItemTextAccent}>получай бонусы</span></div>
							</li>
							<li className={styles.aboutItem}>
								<img className={styles.aboutItemImg} src={PromoListImg2} alt="Step 2" width="90" height="90" />
								<div className={styles.aboutItemText}>Ставь на киберспорт и <span className={styles.aboutItemTextAccent}>получай очки</span></div>
							</li>
							<li className={styles.aboutItem}>
								<img className={styles.aboutItemImg} src={PromoListImg3} alt="Step 3" width="90" height="90" />
								<div className={styles.aboutItemText}>Выиграй и <br/><span className={styles.aboutItemTextAccent}>получай награды</span></div>
							</li>
						</ul>
					</div>
					<div className={styles.rules}>
						<h2 className={styles.rulesTitle}>Важные примечания</h2>
						<div className={styles.rulesWrapper}>
							<ul className={styles.rulesList}>
								{arrRules.map((item, index) => (index <= defaultShowRules || (index > defaultShowRules && showAllRules)) ? (
									<li className={styles.rulesItem} key={index}>{item.rule}</li>
								) : null ) }
							</ul>
							<div className={styles.rulesBtnWrapper}>
								<button 
									className={styles.rulesBtn} 
									onClick={() => setShowAllRules((showAllRules) => !showAllRules)}
								>{ showAllRules
									? 'Свернуть правила'
									: 'Все правила'
								}</button>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.tasks}>
					<h2 className={styles.tasksTitle}>Вы готовы побеждать?</h2>
					<div className={styles.tasksName}>Задачи</div>
					<ul className={styles.tasksList}>
						{arrTask.map((item, index) => (
							<li 
								key={index}
								className={clsx(
									styles.tasksItem,
									{[styles.tasksItemDone] : item.all === item.done}
								)}
							>
								<div className={styles.tasksItemText}>{item.name}</div>
								<div className={clsx(
									styles.tasksItemInfo,
									{[styles.tasksItemInfoHalf] : item.done > 0 && item.done < item.all},
									{[styles.tasksItemInfoAll] : item.done > 0 && item.done === item.all}
								)}>
									<span className={styles.tasksItemInfoNum}>{item.done}</span>&nbsp;/&nbsp;<span className={styles.tasksItemInfoNum}>{item.all}</span>
								</div>
							</li>
						))}
					</ul>
					<button className={clsx(styles.tasksBtn, styles.tasksBtnDisable)}>Забрать приз</button>
				</div>
			</div>
		</div>
	);
};

export default Promotion;