import { useState } from 'react';
import clsx from 'clsx';

import styles from './EventsList.module.scss';

interface dataItemType {
	title: string,
	favourite: boolean,
	arrInfo: Array<{
		arrRow: Array<{
			name: string,
			countOne: string,
			countTwo: string | null,
			up: boolean,
			down: boolean,
		}>, 
	}>
}

interface dataItemsType {
	dataItems: Array<dataItemType>,
}

function EventsList ( {dataList} : {dataList: dataItemsType} ){

return (
	<ul className={styles.eventList}>
		{dataList.dataItems.map((item, idx) => (
			<EventsItem
				key={idx}
				data={item}
			/>
		))}
	</ul>
);
}

export default EventsList;


function EventsItem ({ data } : { data: dataItemType }){

	const [isOpenTab, setIsOpenTab] = useState(false);

	const handleClick = () => {
		setIsOpenTab(current => !current);
	}

	return (
		<li className={clsx(styles.item, {[styles.itemOpen] : isOpenTab})}>
			<button className={clsx(
					styles.btnFavourite,
					{[styles.btnFavouriteActive]: data.favourite},
			)}>Favourite</button>
			<h2 className={styles.title}>
				<button className={styles.btn} onClick={handleClick}>
				{data.title}
				</button>
			</h2>
			<div className={styles.container}>
				<div className={styles.table}>
					{data.arrInfo.map((info, index) => (
						<div key={index} className={clsx(
							styles.row,
							styles[`row${info.arrRow.length}`]
						)}>
							{info.arrRow.map((row, indexCell) => ( 
								(typeof row.countTwo !== 'string') ? (
								<div key={indexCell} className={clsx(
									styles.cell,
									{[styles.cellUp] : row.up},
									{[styles.cellDown] : row.down},
								)}>
									<div className={styles.name}>{row.name}</div>
									<div className={styles.count}>{row.countOne}</div>
								</div>
								) : (
									<div key={indexCell} className={clsx(
										styles.cell,
										{[styles.cellUp] : row.up},
										{[styles.cellDown] : row.down},
									)}>
										<div className={styles.name}>{row.name}</div>
										<div className={clsx(styles.count, styles.countInd)}>{row.countOne}</div>
										<div className={clsx(styles.count, styles.countInd)}>{row.countTwo}</div>
									</div>
								)
							))}
						</div>
					))}
				</div>
			</div>
		</li>
	);
}
