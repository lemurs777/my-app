import { Link } from 'react-router-dom';
import clsx from 'clsx';
import {  
	CategoryList,
    AccordionList,
} from '../';

import Logo1 from '../../assets/images/events-info-live-logo-fc-bayern-x2.min.png';
import Logo2 from '../../assets/images/events-info-live-logo-fc-frankfurt-x2.min.png';

import styles from './EventsInfo.module.scss';

function EventsInfo(
	{
		dataCategory,
		dataItems,
	}: {
		dataCategory: Array<{
			name: string,
			active: boolean,
		}>,
		dataItems: Array<{
			title: string,
			favourite: boolean,
			arrInfo: Array<{
				arrRow: Array<{
					name: string,
					countOne: string,
					countTwo: string | null,
					class: string,
				}>,
			}>,
		}>,
	}
) {

return (
	<div className={styles.eventsInfo}>
		<div className={styles.live}>
			<div className={styles.top}>
				<Link className={clsx(styles.topLink, styles.topLinkHome)} to="/">Home</Link>
				<button className={clsx(styles.topLink, styles.topLinkAdd)}>Add</button>
				<div className={styles.topLeft}>
					<img className={styles.topLogo} src={Logo1} alt="Логотип" />
					<div className={styles.topName}>Бавария</div>
					<div className={styles.topStatistics}>
						<div className={clsx(styles.topStatistic, styles.topStatisticYellow)}>0</div>
						<div className={clsx(styles.topStatistic, styles.topStatisticRed)}>0</div>
						<div className={clsx(styles.topStatistic, styles.topStatisticCorner)}>0</div>
						<div className={clsx(styles.topStatistic, styles.topStatisticShotOnGoal)}>0</div>
					</div>
				</div>
				<div className={styles.topCenter}>
					<div className={styles.topCenterTime}>89’</div>
					<div className={styles.topCenterScore}>3 : 2</div>
					<div className={styles.topCenterHalf}>2-й тайм</div>
				</div>
				<div className={styles.topRight}>
					<img className={styles.topLogo} src={Logo2} alt="Логотип" />
					<div className={styles.topName}>Айнтрахт Франкфурт</div>
					<div className={styles.topStatistics}>
						<div className={clsx(styles.topStatistic, styles.topStatisticYellow)}>5</div>
						<div className={clsx(styles.topStatistic, styles.topStatisticRed)}>2</div>
						<div className={clsx(styles.topStatistic, styles.topStatisticCorner)}>18</div>
						<div className={clsx(styles.topStatistic, styles.topStatisticShotOnGoal)}>12</div>
					</div>
				</div>
			</div>
			<div className={styles.bottom}>
				<div className={styles.bottomUniforms}>
					<div className={styles.bottomUniformName}>BMU</div>
					<div className={styles.bottomUniformName}>FRA</div>
				</div>
				<div className={styles.bottomTimelineWrapper}>
					<div className={styles.bottomTimeline}>
						<div className={styles.bottomGoal}></div>
						<div className={styles.bottomGoal}></div>
						<div className={styles.bottomGoal}></div>
						<div className={clsx(styles.bottomGoal, styles.bottomGoalBottom)}></div>
						<div className={clsx(styles.bottomGoal, styles.bottomGoalBottom)}></div>
						<div className={clsx(styles.bottomGoal, styles.bottomGoalBottom)}></div>
					</div>
				</div>
			</div>
			<CategoryList categoryList={dataCategory}/>
		</div>
		<AccordionList dataItems={dataItems}/>
	</div>
);
}

export default EventsInfo;
