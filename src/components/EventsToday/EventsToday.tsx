import React from 'react';
import clsx from 'clsx';

import styles from './EventsToday.module.scss';

function EventsToday() {

	const arrItems = [
		{
			title: 'Бундеслига',
			class: 'leagueNameBundesliga', 
			comands: [
				{
					active: true,
					nameOne: 'Вольсбург',
					nameTwo: 'Арминия',
					score: '1-0',
					minutes: 89,
					half: '2-й тайм',
					coefficientOne: 2.65,
					coefficientTwo: 1.65,
					coefficientThree: 2.65,
				},
				{
					active: false,
					nameOne: 'Вольсбург',
					nameTwo: 'Арсенал',
					score: '1-0',
					minutes: 89,
					half: '2-й тайм',
					coefficientOne: 2.65,
					coefficientTwo: 2.65,
					coefficientThree: 3.35,
				},
				{
					active: false,
					nameOne: 'Вольсбург',
					nameTwo: 'Арминия',
					score: '1-0',
					minutes: 89,
					half: '2-й тайм',
					coefficientOne: 2.65,
					coefficientTwo: 2.65,
					coefficientThree: 2.65,
				},
				{
					active: false,
					nameOne: 'Вольсбург',
					nameTwo: 'Арминия',
					score: '1-0',
					minutes: 89,
					half: '2-й тайм',
					coefficientOne: 2.65,
					coefficientTwo: 2.65,
					coefficientThree: 2.65,
				},
				{
					active: false,
					nameOne: 'Вольсбург',
					nameTwo: 'Арминия',
					score: '1-0',
					minutes: 89,
					half: '2-й тайм',
					coefficientOne: 2.65,
					coefficientTwo: 2.65,
					coefficientThree: 2.65,
				},
			]
		},
		{
			title: 'Лига чемпионов',
			class: 'leagueNameChampionsLeague',
			comands: [
				{
					active: false,
					nameOne: 'Вольсбург',
					nameTwo: 'Арминия',
					score: '1-0',
					minutes: 89,
					half: '2-й тайм',
					coefficientOne: 2.65,
					coefficientTwo: 2.65,
					coefficientThree: 2.65,
				},
				{
					active: false,
					nameOne: 'Вольсбург',
					nameTwo: 'Арминия',
					score: '1-0',
					minutes: 89,
					half: '2-й тайм',
					coefficientOne: 2.65,
					coefficientTwo: 2.65,
					coefficientThree: 2.65,
				},
				{
					active: false,
					nameOne: 'Вольсбург',
					nameTwo: 'Арминия',
					score: '1-0',
					minutes: 89,
					half: '2-й тайм',
					coefficientOne: 2.65,
					coefficientTwo: 2.65,
					coefficientThree: 2.65,
				},
				{
					active: false,
					nameOne: 'Вольсбург',
					nameTwo: 'Арминия',
					score: '1-0',
					minutes: 89,
					half: '2-й тайм',
					coefficientOne: 2.65,
					coefficientTwo: 2.65,
					coefficientThree: 2.65,
				},
			]
		},		
	]

	return (
		<div className={styles.eventsToday}>
			<div className={styles.content}>
				<h2 className={styles.title}>Футбол сегодня</h2>
				{arrItems.map((item, index) => (
					<React.Fragment key={index}>
						<div className={styles.leagueHeader}>
							<h3 className={clsx(
								styles.leagueName,
								styles[item.class]
							)}>{item.title}</h3>
							<div className={styles.leagueCount}>{item.comands.length}</div>
						</div>
						<ul className={styles.list}>
							{item.comands.map((comand, index) => (
								<li key={index} className={clsx(
									styles.item,
									{[styles.itemActive] : comand.active}
								)}>
									<div className={styles.about}>
										<div className={styles.aboutNames}>
											<div className={styles.aboutName}>{comand.nameOne}</div>
											<div className={styles.aboutName}>{comand.nameTwo}</div>
										</div>
										<div className={styles.aboutInfo}>
											<div className={styles.aboutScore}>{comand.score}</div>
											<div className={styles.aboutWrapper}>
												<span className={styles.aboutMinutes}>{comand.minutes}’</span>
												<span className={styles.aboutHalf}>{comand.half}</span>
											</div>
										</div>
									</div>
									<div className={styles.coefficients}>
										<div className={styles.coefficient}>
											<div className={styles.coefficientName}>1</div>
											<div className={styles.coefficientCount}>{comand.coefficientOne}</div>
										</div>
										<div className={styles.coefficient}>
											<div className={styles.coefficientName}>X</div>
											<div className={styles.coefficientCount}>{comand.coefficientTwo}</div>
										</div>
										<div className={styles.coefficient}>
											<div className={styles.coefficientName}>2</div>
											<div className={styles.coefficientCount}>{comand.coefficientThree}</div>
										</div>
									</div>
								</li>
							))}	
						</ul>
					</React.Fragment>
				))}
			</div>
		</div>
	);
}

export default EventsToday;
