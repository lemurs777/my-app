import clsx from 'clsx';

import { useState } from 'react';

import styles from './SportTables.module.scss';

function SportTables() {

	const arrTables = [
		{
			sport: 'Футбол',
			class: 'soccer',
			arrRows : [
				{
					name: 'Испания. Примера',
					time: '18:15',
					date: '21 Aug',
					nameOne: 'Севилья',
					nameTwo: 'Атлетико Мадрид',
					lastNumber: '+21',
					arrNumbers: [
						{
							number: 9.1,
							class: 'upp',
						},
						{
							number: 9.1,
							class: 'down',
						},
						{
							number: 9.1,
							class: 'disable',
						},
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
						{
							number: 9.1,
							class: 'empty',
						},
					],
				},
				{
					name: 'Испания. Примера',
					time: '18:15',
					date: '21 Aug',
					nameOne: 'Севилья',
					nameTwo: 'Атлетико Мадрид',
					lastNumber: '+21',
					arrNumbers: [
						{
							number: 9.1,
							class: 'upp',
						},
						{
							number: 9.1,
							class: 'down',
						},
						{
							number: 9.1,
							class: 'disable',
						},
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
						{
							number: 9.1,
							class: 'empty',
						},
					],
				},
				{
					name: 'Испания. Примера',
					time: '18:15',
					date: '21 Aug',
					nameOne: 'Севилья',
					nameTwo: 'Атлетико Мадрид',
					lastNumber: '+21',
					arrNumbers: [
						{
							number: 9.1,
							class: 'upp',
						},
						{
							number: 9.1,
							class: 'down',
						},
						{
							number: 9.1,
							class: 'disable',
						},
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
						{
							number: 9.1,
							class: 'empty',
						},
					],
				},
				{
					name: 'Испания. Примера',
					time: '18:15',
					date: '21 Aug',
					nameOne: 'Севилья',
					nameTwo: 'Атлетико Мадрид',
					lastNumber: '+21',
					arrNumbers: [
						{
							number: 9.1,
							class: 'upp',
						},
						{
							number: 9.1,
							class: 'down',
						},
						{
							number: 9.1,
							class: 'disable',
						},
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
						{
							number: 9.1,
							class: 'empty',
						},
					],
				},
			],
		},
		{
			sport: 'Хоккей',
			class: 'hockey',
			arrRows : [
				{
					name: 'Испания. Примера',
					time: '18:15',
					date: '21 Aug',
					nameOne: 'Севилья',
					nameTwo: 'Атлетико Мадрид',
					lastNumber: '+21',
					arrNumbers: [
						{
							number: 9.1,
							class: 'upp',
						},
						{
							number: 9.1,
							class: 'down',
						},
						{
							number: 9.1,
							class: 'disable',
						},
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
						{
							number: 9.1,
							class: 'empty',
						},
					],
				},
				{
					name: 'Испания. Примера',
					time: '18:15',
					date: '21 Aug',
					nameOne: 'Севилья',
					nameTwo: 'Атлетико Мадрид',
					lastNumber: '+21',
					arrNumbers: [
						{
							number: 9.1,
							class: 'upp',
						},
						{
							number: 9.1,
							class: 'down',
						},
						{
							number: 9.1,
							class: 'disable',
						},
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
						{
							number: 9.1,
							class: 'empty',
						},
					],
				},
			],
		},
	];

	return (
		<div className={styles.sportsTables}>
			{arrTables.map((item, index) => (
				<SportTable key={index} data={item}/>
			))}
		</div>
	);
}

export default SportTables;

type SportTableData = {
	sport: string,
	class: string,
	arrRows: Array<{ 
		name: string, 
		time: string, 
		date: string,
		nameOne: string,
		nameTwo: string,
		lastNumber: string,
		arrNumbers: Array<{
			number: number,
			class: string,
		}>	
	}>
};

function SportTable (
	{ data } : { data: SportTableData }
){

	const [showAllTable, setShowAllTable] = useState(false);

	const defaultShowRows = 1;

	return (
		<div className={styles.sportsTable}>
			<div className={clsx(
					styles.header,
					styles[data.class],
			)}>
				<h3 className={styles.headerTitle}>
					{data.sport}
				</h3>
				<div className={styles.headerInfoWrapper}>
					<div className={styles.headerInfo}>1</div>
					<div className={styles.headerInfo}>X</div>
					<div className={styles.headerInfo}>2</div>
					<div className={styles.headerInfo}>Т</div>
					<div className={styles.headerInfo}>Б</div>
					<div className={styles.headerInfo}>М</div>
					<div className={styles.headerInfo}>OVER</div>
					<div className={styles.headerInfo}>UNDER</div>
					<div className={styles.headerInfo}>HAND.</div>
					<div className={styles.headerInfo}>ODD</div>
				</div>
			</div>
			{data.arrRows.map((item, index) => (index <= defaultShowRows || (index > defaultShowRows && showAllTable)) ? (
				<div className={styles.table} key={index}>
					<div className={styles.tableNameWrapper}>
						<span className={styles.tableName}>{item.name}</span>
					</div>
					<div className={styles.tableWrapper}>
						<div className={styles.tableDateTime}>
							<div className={styles.tableTime}>{item.time}</div>
							<div className={styles.tableDate}>{item.date}</div>
						</div>
						<div className={styles.tableNames}>
							<div className={styles.tableName}>{item.nameOne}</div>
							<div className={styles.tableName}>{item.nameTwo}</div>
						</div>
						<div className={styles.tableNumbers}>
							{item.arrNumbers.map((item, index) => (
								<div key={index} className={clsx(
									styles.tableNumber,
									styles[item.class]
								)}>
									{item.number}
								</div>
							))}
							<div className={styles.tableNumber}>{item.lastNumber}</div>
						</div>
					</div>
				</div>
			) : null ) }
			{ (data.arrRows.length > 2) ? (
				<button 
					className={styles.btnMore} 
					onClick={() => setShowAllTable((showAllTable) => !showAllTable)}
				>{ showAllTable
					? 'Показать меньше событий'
					: 'Показать больше событий'
				}</button>
			) : null }
		</div>
	);
};
