import React from 'react'
import styles from './DropdownTable.module.scss'
import clsx from 'clsx'
import CustomDropdown from '../../CustomDropdown'
//@ts-ignore
const DropdownTable = ({ data, title }) => {
	return (
		<CustomDropdown title={title}>
			<div className={styles.table}>
				<div className={styles.table__head}>
					<div className={styles.tableHead}>
						<div className={styles.tableHead__left}>
							<span>Бундеслига</span>
						</div>
						<div className={styles.tableHead__right}>
							<div className={styles.tableHead__section}>
								<div className={styles.tableHead__block}>1</div>
								<div className={styles.tableHead__block}>X</div>
								<div className={styles.tableHead__block}>2</div>
							</div>
							<div className={styles.tableHead__section}>
								<div className={styles.tableHead__block}>Т</div>
								<div className={styles.tableHead__block}>Б</div>
								<div className={styles.tableHead__block}>М</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.table__content}>
					{data.map((item: any, index: any) => {
						return (
							<div key={index} className={styles.tableItem}>
								<div className={styles.tableItem__left}>
									<div className={styles.tableItem__row}>
										<div className={clsx(styles.tableItem__time, item.class)}>
											{item.time}
										</div>
										<div className={styles.tableItem__command}>
											{item.nameOne}
										</div>
										<div className={styles.tableItem__check}>
											{item.checkOne}
										</div>
									</div>
									<div className={styles.tableItem__row}>
										<div className={styles.tableItem__date}>{item.date}</div>
										<div className={styles.tableItem__command}>
											{item.nameTwo}
										</div>
										<div className={styles.tableItem__check}>
											{item.checkTwo}
										</div>
									</div>
								</div>
								<div className={styles.tableItem__right}>
									<div className={styles.tableItem__section}>
										{item.arrNumbers.map((item: any, index: any) => {
											return (
												<div
													className={clsx(
														styles.tableItem__block,
														styles[item.class]
													)}
												>
													{item.number}
												</div>
											)
										})}
									</div>
									<div className={styles.tableItem__section}>
										{item.arrNumbers2.map((item: any, index: any) => {
											return (
												<div
													className={clsx(
														styles.tableItem__block,
														styles[item.class]
													)}
												>
													{item.number}
												</div>
											)
										})}
									</div>
								</div>
								<div className={styles.tableItem__plus}>+{item.lastNumber}</div>
							</div>
						)
					})}
				</div>
			</div>
		</CustomDropdown>
	)
}

export default DropdownTable
