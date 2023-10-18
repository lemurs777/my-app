import { useState } from 'react'
import clsx from 'clsx'

import { dataItemsType, dataItemType } from './types'

import styles from './EventsList.module.scss'
// @ts-ignore
function EventsList({ dataList }) {
	return (
		<ul className={styles.eventList}>
			{dataList.map((item: dataItemType, idx:number) => (
				<EventsItem key={idx} data={item} />
			))}
		</ul>
	)
}

export default EventsList
// @ts-ignore
function EventsItem({ data }: { data: dataItemType }) {
	const [isOpenTab, setIsOpenTab] = useState(false)

	const handleClick = () => {
		setIsOpenTab(current => !current)
	}
	// const handleClose = () => {
	// 	if (isOpenTab) {
	// 		setIsOpenTab(false)
	// 	}
	// }
	return (
		<li className={clsx(styles.item, { [styles.itemOpen]: isOpenTab })}>
			{data.showIcon && (
				<button
					className={clsx(styles.btnFavourite, {
						[styles.btnFavouriteActive]: data.favourite,
					})}
				>
					Favourite
				</button>
			)}
			<h2 className={styles.title}>
				<button
					className={clsx(
						styles.btn,
						isOpenTab ? styles.btnActive : null,
						data.collapse ? styles.btnCollapse : null
					)}
					onClick={handleClick}
				>
					{data.title}
					{data.collapse && (
						<div className={styles.btn__collapse}
						>
							Collapse all
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
							>
								<path
									d='M16 17L12 14L8 17'
									stroke='currentColor'
									stroke-width='1.5'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
								<path
									d='M8 7L12 10L16 7'
									stroke='currentColor'
									stroke-width='1.5'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
						</div>
					)}
				</button>
			</h2>
			<div className={styles.container}>
				<div className={styles.table}>
					{data.arrInfo.map((info, index) => (
						<div
							key={index}
							className={clsx(styles.row, styles[`row${info.arrRow.length}`])}
						>
							{info.arrRow.map((row, indexCell) =>
								typeof row.countTwo !== 'string' ? (
									<div
										key={indexCell}
										className={clsx(
											styles.cell,
											{ [styles.cellUp]: row.up },
											{ [styles.cellDown]: row.down }
										)}
									>
										<div className={styles.name}>{row.name}</div>
										<div className={styles.count}>{row.countOne}</div>
									</div>
								) : (
									<div
										key={indexCell}
										className={clsx(
											styles.cell,
											{ [styles.cellUp]: row.up },
											{ [styles.cellDown]: row.down }
										)}
									>
										<div className={styles.name}>{row.name}</div>
										<div className={clsx(styles.count, styles.countInd)}>
											{row.countOne}
										</div>
										<div className={clsx(styles.count, styles.countInd)}>
											{row.countTwo}
										</div>
									</div>
								)
							)}
						</div>
					))}
				</div>
			</div>
		</li>
	)
}
