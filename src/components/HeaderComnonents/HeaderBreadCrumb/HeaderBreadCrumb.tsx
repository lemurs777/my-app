import React, { useEffect, useRef, useState } from 'react'

import styles from './HeaderBreadCrumb.module.scss'
import { Link } from 'react-router-dom'

import clsx from 'clsx'
import CustomDropdown from '../../CustomDropdown'
import DropdownFind from '../../DropdownFind'
import DropdownTable from '../../Dwopdowns/DropdownTable'
//interface ILinkProps {
//	icon?: any
//	link?: string

//}
//@ts-ignore
const HeaderBreadCrumb = ({ icon, link, data, dataTable, dataTableTitle }) => {
	const [isClose, setIsClose] = useState(false)

	const arrTables = [
		{
			name: 'Испания. Примера',
			time: '18:15',
			date: '21 Aug',
			nameOne: 'Севилья',
			nameTwo: 'Атлетико Мадрид',
			lastNumber: 21,
			checkOne: 0,
			checkTwo: 2,
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
					number: 9.1,
					class: 'empty',
				},
			],
			arrNumbers2: [
				{
					number: 9.1,
					class: 'upp',
				},
				{
					number: 9.1,
					class: 'down',
				},
				{
					number: 2.5,
					class: 'disableTable',
				},
			],
		},
		{
			name: 'Испания. Примера',
			time: '32`',
			date: '21 Aug',
			nameOne: 'Севилья',
			nameTwo: 'Атлетико Мадрид',
			lastNumber: 21,
			class: 'danger',
			checkOne: 0,
			checkTwo: 1,
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
					number: 9.1,
					class: 'empty',
				},
			],
			arrNumbers2: [
				{
					number: 9.1,
					class: 'upp',
				},
				{
					number: 9.1,
					class: 'down',
				},
				{
					number: 2.5,
					class: 'disableTable',
				},
			],
		},
		{
			name: 'Испания. Примера',
			time: '18:15',
			date: '21 Aug',
			nameOne: 'Севилья',
			nameTwo: 'Атлетико Мадрид',
			lastNumber: 21,
			checkOne: 0,
			checkTwo: 1,
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
					number: 9.1,
					class: 'empty',
				},
			],
			arrNumbers2: [
				{
					number: 9.1,
					class: 'upp',
				},
				{
					number: 9.1,
					class: 'down',
				},
				{
					number: 2.5,
					class: 'disableTable',
				},
			],
		},
		{
			name: 'Испания. Примера',
			time: '18:15',
			date: '21 Aug',
			nameOne: 'Севилья',
			nameTwo: 'Атлетико Мадрид',
			lastNumber: 21,
			checkOne: 0,
			checkTwo: 1,
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
					number: 9.1,
					class: 'empty',
				},
			],
			arrNumbers2: [
				{
					number: 9.1,
					class: 'upp',
				},
				{
					number: 9.1,
					class: 'down',
				},
				{
					number: 2.5,
					class: 'disableTable',
				},
			],
		},
	]
	const selectList = [
		{
			text: 'Атлетико Мадрид',
			counter: '8',
		},
		{
			text: 'Атлетико Мадрид',
			counter: '8',
		},
		{
			text: 'Бундеслига',
			counter: '8',
		},
	]
	const countryList = ['Германия', 'Франция', 'Италия']
	const [select, setSelect] = useState(data[0])
	const [inputs, setInputs] = useState('')
	const [team, setTeam] = useState(selectList[0])
	const [close, setClose] = useState(false)
	return (
		<div className={styles.breadcrumb}>
			<ul className={styles.breadcrumb__list}>
				<li>
					<Link to='/' className={styles.item}>
						<div className={styles.item__icon}>{icon}</div>
						<span>{link}</span>
					</Link>
				</li>
				<li className={styles.item}>
					{/*<CustomDropdown title={select}>
						<li className={styles.selectSearch}>
							<div className={styles.search}>
								<input
									type='text'
									className={styles.searchInput}
									placeholder={'Поиск по стране'}
									value={inputs}
									onChange={e => setInputs(e.target.value)}
								/>
							</div>
						</li>
						<li className={styles.selectSearchChoose}>
							<div className={styles.select__item}>{select}</div>
						</li>

						{countryList
							.filter(i => i.toLowerCase().includes(inputs.toLowerCase()))
							.map(item => {
								return (
									<li
										key={item}
										className={styles.select__item}
										onClick={() => {
											setSelect(item)
										}}
									>
										<div className={styles.select__name}>{item}</div>
									</li>
								)
							})}
					</CustomDropdown>*/}
					<DropdownFind data={data} />
				</li>
				<li className={styles.item}>
					<CustomDropdown title={'Бундеслига'}>
						{selectList.map((item, index) => {
							return (
								<div className={styles.select__item}>
									<div className={styles.select__name}>{item.text}</div>
									<div className={styles.select__num}>{item.counter}</div>
								</div>
							)
						})}
					</CustomDropdown>
				</li>
				<li className={styles.item}>
					{/*<CustomDropdown title={'Бавария - Айнтрахт Франкфурт'}>
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
								{arrTables.map((item, index) => {
									return (
										<div key={index} className={styles.tableItem}>
											<div className={styles.tableItem__left}>
												<div className={styles.tableItem__row}>
													<div
														className={clsx(styles.tableItem__time, item.class)}
													>
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
													<div className={styles.tableItem__date}>
														{item.date}
													</div>
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
													{item.arrNumbers.map((item, index) => {
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
													{item.arrNumbers2.map((item, index) => {
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
											<div className={styles.tableItem__plus}>
												+{item.lastNumber}
											</div>
										</div>
									)
								})}
							</div>
						</div>
					</CustomDropdown>*/}
					<DropdownTable data={dataTable} title={dataTableTitle} />
				</li>
			</ul>
		</div>
	)
}

export default HeaderBreadCrumb
