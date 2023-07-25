import clsx from 'clsx';

import styles from './TableNextGames.module.scss';

type NextGamesData = {
	title: string,
	dataTable: Array<{
		date: string,
		round: number,
		nameOne: string,
		winOne: boolean,
		scoreOne: number,
		scoreTwo: number,
		scoreInfo: string,
		nameTwo: string,
		tournament: string,
	}>;
};

function TableNextGames(
	{ data } : {data : NextGamesData}
) {

	return (
		<>
			<h2 className={styles.title}>{data.title}</h2>
			<div className={styles.table}>
				<div className={styles.header}>
					<div className={styles.headerCell}>Дата</div>
					<div className={styles.headerCell}>Раунд</div>
					<div className={styles.headerCell}>Матч</div>
					<div className={styles.headerCell}>Турнир</div>
				</div>
				{data.dataTable.map((item, index) => (
					<div key={index} className={styles.row}>
						<div className={styles.cell}>{item.date}</div>
						<div className={styles.cell}>{item.round}</div>
						<div className={styles.cell}>
							<div className={clsx(
								styles.cellText,
								{ [styles.cellTextAccent] : item.winOne}
							)}>{item.nameOne}</div>
							<div className={styles.cellText}>
								<span className={clsx(
									styles.cellTextSmall,
									{ [styles.cellTextSmallAccent] : item.winOne}
								)}>{item.scoreOne}</span>&nbsp;:&nbsp;
								<span className={clsx(
									styles.cellTextSmall,
									{ [styles.cellTextSmallAccent] : !item.winOne}
								)}>{item.scoreTwo}</span>&nbsp;
								<span className={styles.cellTextSmall}>{item.scoreInfo}</span>
							</div>
							<div className={clsx(
								styles.cellText,
								{ [styles.cellTextAccent] : !item.winOne}
							)}>{item.nameTwo}</div>
						</div>    
						<div className={styles.cell}>{item.tournament}</div>
					</div>
				))}
			</div>
		</>
	);
}

export default TableNextGames;