import clsx from 'clsx';

import styles from './GameBanner.module.scss';

import GameStreamImage from '../../assets/images/game-stream-x2.min.jpg';
import GameStreamIcon1 from '../../assets/images/svg/game-banner-icon-1.svg';
import GameStreamIcon2 from '../../assets/images/svg/game-banner-icon-2.svg';

function GameBanner() {

	const arrRow = {
		name: 'ESL Pro League',
		time: 32,
		date: 'Map1',
		nameOne: 'Nemiga',
		nameTwo: 'Winstrike',
		scoreOne: 23,
		scoreTwo: 19,
		lastNumber: '+21',
		arrNumbers: [
			{
				number: 9.1,
				class: 'empty',
			},
			{
				number: 9.1,
				class: 'empty',
			},
			{
				number: 10.2,
				class: 'empty',
			},
			{
				number: 2.5,
				class: 'disable',
			},
			{
				number: 8.7,
				class: 'empty',
			},
			{
				number: 2.5,
				class: 'empty',
			},
			{
				number: 9.1,
				class: 'upp',
			},
			{
				number: 9.1,
				class: 'down',
			},
		],
	};

	return (
	<div className={styles.gameBanner}>
		<div className={styles.top}>
			<div className={styles.streamWrapper}>
				<img className={styles.stream} src={GameStreamImage} alt="Twitch stream" />
				<button className={styles.streamPlay}>Play</button>
			</div>
			<div className={styles.infoWrapper}>
				<div className={styles.info}>
					<div className={styles.infoIconWrapper}>
						<div className={styles.infoIcon}>
							<div className={styles.infoIconInner}>
								<img className={styles.infoIconImg} src={GameStreamIcon1} alt="Icon" />
							</div>
						</div>
						<div className={styles.infoIconText}>Nemiga</div>
					</div>
					<div className={styles.infoContentWrapper}>
						<div className={styles.infoContentName}>IEM New York CIS</div>
						<div className={styles.infoContentTime}>89’</div>
						<div className={styles.infoContentDate}>MAP 2</div>
						<div className={styles.infoContentScore}>7 : 5</div>
					</div>
					<div className={styles.infoIconWrapper}>
						<div className={styles.infoIcon}>
							<div className={styles.infoIconInner}>
								<img className={styles.infoIconImg} src={GameStreamIcon2} alt="Icon" />
							</div>
						</div>
						<div className={styles.infoIconText}>Winstrike</div>
					</div>
				</div>
				<div className={styles.infoDates}>
					<div className={styles.infoDate}>Map 1</div>
					<div className={styles.infoDate}>Map 2</div>
				</div>
				<div className={styles.infoDatesMore}>
					<div className={styles.infoDatesMoreRow}>
						<div className={styles.infoDate}>7</div>
						<div className={styles.infoDate}>10</div>
					</div>
					<div className={styles.infoDatesMoreRow}>
						<div className={styles.infoDate}>16</div>
						<div className={styles.infoDate}>6</div>
					</div>   
				</div>
			</div>
		</div>
		<div className={styles.table}>
			<div className={styles.tableNameWrapper}>
				<div className={styles.tableName}>{arrRow.name}</div>
				<div className={styles.tableInfoWrapper}>
					<div className={styles.tableInfo}>1</div>
					<div className={styles.tableInfo}>2</div>
					<div className={styles.tableInfo}>1</div>
					<div className={styles.tableInfo}>H</div>
					<div className={styles.tableInfo}>2</div>
					<div className={styles.tableInfo}>Т</div>
					<div className={styles.tableInfo}>М</div>
					<div className={styles.tableInfo}>Б</div>
				</div>
			</div>
			<div className={styles.tableWrapper}>
				<div className={styles.tableDateTime}>
					<div className={styles.tableTime}>{arrRow.time}’</div>
					<div className={styles.tableDate}>{arrRow.date}</div>
				</div>
				<div className={styles.tableNames}>
					<div className={styles.tableName}>{arrRow.nameOne}</div>
					<div className={styles.tableName}>{arrRow.nameTwo}</div>
				</div>
				<div className={styles.tableScores}>
					<div className={styles.tableScore}>{arrRow.scoreOne}</div>
					<div className={styles.tableScore}>{arrRow.scoreTwo}</div>
				</div>
				<div className={styles.tableNumbers}>
					{arrRow.arrNumbers.map((item, index) => (
						(index !== 3) ? (
							<div key={index} className={clsx(
								styles.tableNumber,
								styles[item.class]
							)}>
								{item.number}
							</div>
						) : (
							<div key={index} className={clsx(
								styles.tableNumber,
								styles[item.class]
							)}>
								+ {item.number} -
							</div>
						)
					))}
					<div className={styles.tableNumber}>{arrRow.lastNumber}</div>
				</div>
			</div>
		</div>
	</div>
	);
}

export default GameBanner;