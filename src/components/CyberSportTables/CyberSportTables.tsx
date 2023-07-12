import clsx from 'clsx';

import { useState } from 'react';

import styles from './CyberSportTables.module.scss';

function CyberSportTables() {

	const arrTables = [
		{
			sport: 'Counter Strike',
			class: 'cs',
			arrRows : [
				{
					name: 'ESL Pro League',
					time: 32,
					date: 'Map1',
					nameOne: 'Astralis',
					nameTwo: 'Gambit',
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
				},
				{
					name: 'ESL Pro League',
					time: 32,
					date: 'Map1',
					nameOne: 'Astralis',
					nameTwo: 'Gambit',
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
				},
				{
					name: 'ESL Pro League',
					time: 32,
					date: 'Map1',
					nameOne: 'Astralis',
					nameTwo: 'Gambit',
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
				},
				{
					name: 'ESL Pro League',
					time: 32,
					date: 'Map1',
					nameOne: 'Astralis',
					nameTwo: 'Gambit',
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
							class: 'disable',
						},
						{
							number: 2.5,
							class: 'empty',
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
				},
			],
		},
		{
			sport: 'Dota 2',
			class: 'dota2',
			arrRows : [
				{
					name: 'ESL Pro League',
					time: 32,
					date: 'Map1',
					nameOne: 'Astralis',
					nameTwo: 'Gambit',
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
				},
				{
					name: 'ESL Pro League',
					time: 32,
					date: 'Map1',
					nameOne: 'Astralis',
					nameTwo: 'Gambit',
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
				},
			],
		},
	];

	return (
		<div className={styles.cyberSportTables}>
			{arrTables.map((item, index) => (
				<CyberSportTable key={index} data={item}/>
			))}
		</div>
	);
}

export default CyberSportTables;

type CyberSportTableData = {
	sport: string,
	class: string,
	arrRows: Array<{ 
		name: string, 
		time: number, 
		date: string,
		nameOne: string,
		nameTwo: string,
		scoreOne: number,
		scoreTwo: number,
		lastNumber: string,
		arrNumbers: Array<{
			number: number,
			class: string,
		}>	
	}>
};

function CyberSportTable (
	{ data } : { data: CyberSportTableData }
){

	const [showAllTable, setShowAllTable] = useState(false);

	const defaultShowRows = 1;

	return (
		<div className={styles.cyberSportTable}>
			<div className={clsx(
					styles.header,
					styles[data.class],
			)}>
				<h3 className={styles.headerTitle}>
					{data.sport}
				</h3>
				<div className={styles.headerInfoWrapper}>
					<div className={styles.headerInfo}>1</div>
					<div className={styles.headerInfo}>2</div>
					<div className={styles.headerInfo}>1</div>
					<div className={styles.headerInfo}>H</div>
					<div className={styles.headerInfo}>2</div>
					<div className={styles.headerInfo}>Т</div>
					<div className={styles.headerInfo}>Б</div>
					<div className={styles.headerInfo}>М</div>
				</div>
			</div>
			{data.arrRows.map((item, index) => (index <= defaultShowRows || (index > defaultShowRows && showAllTable)) ? (
				<div className={styles.table} key={index}>
					<div className={styles.tableNameWrapper}>
						<span className={styles.tableName}>{item.name}</span>
					</div>
					<div className={styles.tableWrapper}>
						<div className={styles.tableDateTime}>
							<div className={styles.tableTime}>{item.time}’</div>
							<div className={styles.tableDate}>{item.date}</div>
						</div>
						<div className={styles.tableNames}>
							<div className={styles.tableName}>{item.nameOne}</div>
							<div className={styles.tableName}>{item.nameTwo}</div>
						</div>
						<button className={styles.tableBtn}></button>
						<div className={styles.tableScores}>
							<div className={styles.tableScore}>{item.scoreOne}</div>
							<div className={styles.tableScore}>{item.scoreTwo}</div>
						</div>
						<div className={styles.tableNumbers}>
							{item.arrNumbers.map((item, index) => (
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
