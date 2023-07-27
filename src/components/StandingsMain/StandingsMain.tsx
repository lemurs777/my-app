import clsx from 'clsx';

import { StandingsMainData } from './types';

import styles from './StandingsMain.module.scss';

function StandingsMain(
	{ data } : {data : StandingsMainData}
) {

	return (
		<>
			<div className={styles.filter}>
				<div className={styles.filterName}>{data.tournament}</div>
				<div className={styles.filterTeam}>{data.team}</div>
			</div>
			<h1 className={styles.tittle}>{data.team}</h1>
			<div className={styles.info}>
				<div className={styles.infoGame}>
					<div className={styles.infoTitle}>Недавние выступления</div>
					<div className={styles.forms}>
						{data.forms.map((form, index) => (
							<div
								key={index} 
								className={clsx(
									styles.form,
									{ [styles.formWin] : form.form === 'win'},
									{ [styles.formLoss]  : form.form === 'loss'},
								)}>
								{ form.form === 'win'? 'В' : 'П' }
							</div>
						))}
					</div>
				</div>
				<div className={styles.win}>
					<div className={styles.winWrapper}>
						<div className={styles.winShow} style={{height: `${data.percent}%`}}></div>
					</div>
					<div className={styles.winPercentWrapper}>
						<div className={styles.winPercent}>{data.percent}%</div>
						<div className={styles.winPercentText}>Результативность</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default StandingsMain;