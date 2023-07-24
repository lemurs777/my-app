import styles from './InPersonScore.module.scss';

type InPersonScoreData = {
	title: string,
	winOne: number,
	percentOne: number,
	nameOne: string,
	winTwo: number,
	percentTwo: number,
	nameTwo: string,
};

function InPersonScore(
	{ data } : {data : InPersonScoreData}
) {

	return (
		<div className={styles.inPersonScore}>
			<h2 className={styles.title}>{data.title}</h2>
			<div className={styles.wrapper}>
				<div className={styles.colors}>
					<div className={styles.color} style={{width: `${data.percentOne}%`}}></div>
					<div className={styles.color} style={{width: `${data.percentTwo}%`}}></div>
				</div>
				<div className={styles.percent}>
					<div className={styles.percentText}>
						<span className={styles.textWin}>{data.winOne} ({data.percentOne}%)</span>
					</div>
					<div className={styles.percentText}>
						<span className={styles.textWin}>{data.winTwo} ({data.percentTwo}%)</span>
					</div>
				</div>
			</div>
			<div className={styles.names}>
				<div className={styles.name}>{data.nameOne}</div>
				<div className={styles.name}>{data.nameTwo}</div>
			</div>
		</div>
	);
}

export default InPersonScore;
