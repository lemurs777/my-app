import { useState } from 'react'
import clsx from 'clsx'

import styles from './GameInfo.module.scss'

function GameInfo() {
	const [isChecked, setIsChecked] = useState(false)

	const arrGames = [
		{
			title: 'Counter Strike',
			games: [
				{
					name: 'ESEA Season 35: Advanced Division',
					count: 21,
					live: false,
					country: 'empty',
				},
				{
					name: 'EBLAST Premier Fall 2020',
					count: 6,
					live: true,
					country: 'empty',
				},
				{
					name: 'Svenska Elitserien 2020 Fall',
					count: 5,
					live: true,
					country: 'empty',
				},
				{
					name: 'ESEA Season 35: Advanced Division',
					count: 4,
					live: false,
					country: 'germany',
				},
			],
		},
		{
			title: 'Dota 2',
			games: [
				{
					name: 'ESEA Season 35: Advanced Division',
					count: 21,
					live: false,
					country: 'empty',
				},
				{
					name: 'EBLAST Premier Fall 2020',
					count: 6,
					live: true,
					country: 'empty',
				},
				{
					name: 'Svenska Elitserien 2020 Fall',
					count: 5,
					live: true,
					country: 'empty',
				},
				{
					name: 'ESEA Season 35: Advanced Division',
					count: 4,
					live: false,
					country: 'germany',
				},
				{
					name: 'ESEA Season 35: Advanced Division',
					count: 21,
					live: false,
					country: 'empty',
				},
				{
					name: 'EBLAST Premier Fall 2020',
					count: 6,
					live: true,
					country: 'empty',
				},
				{
					name: 'Svenska Elitserien 2020 Fall',
					count: 5,
					live: true,
					country: 'empty',
				},
				{
					name: 'ESEA Season 35: Advanced Division',
					count: 4,
					live: false,
					country: 'germany',
				},
			],
		},
		{
			title: 'Overwatch',
			games: [
				{
					name: 'ESEA Season 35: Advanced Division',
					count: 21,
					live: false,
					country: 'empty',
				},
				{
					name: 'EBLAST Premier Fall 2020',
					count: 6,
					live: true,
					country: 'empty',
				},
				{
					name: 'Svenska Elitserien 2020 Fall',
					count: 5,
					live: true,
					country: 'empty',
				},
				{
					name: 'ESEA Season 35: Advanced Division',
					count: 4,
					live: false,
					country: 'germany',
				},
				{
					name: 'ESEA Season 35: Advanced Division',
					count: 21,
					live: false,
					country: 'empty',
				},
				{
					name: 'EBLAST Premier Fall 2020',
					count: 6,
					live: true,
					country: 'empty',
				},
				{
					name: 'Svenska Elitserien 2020 Fall',
					count: 5,
					live: true,
					country: 'empty',
				},
				{
					name: 'ESEA Season 35: Advanced Division',
					count: 4,
					live: false,
					country: 'germany',
				},
			],
		},
	]

	return (
		<div className={styles.gameInfo}>
			<div className={styles.header}>
				<div className={styles.headerTitle}>LIVE лиги</div>
				<label className={styles.checkboxLabel}>
					<input
						className={styles.checkbox}
						type='checkbox'
						checked={isChecked}
						onChange={() => setIsChecked(prev => !prev)}
					/>
				</label>
			</div>
			<div className={styles.listsWrapper}>
				{arrGames.map((item, index) => (
					<div key={index} className={styles.listWrapper}>
						<button className={styles.listTitle}>{item.title}</button>
						<ul className={styles.list}>
							{item.games.map((game, index) =>
								isChecked && game.live === true ? (
									<li key={index} className={styles.item}>
										<div
											className={clsx(
												styles.itemTextWrapper,
												styles[game.country],
												{ [styles.itemTextWrapperLive]: game.live }
											)}
										>
											<div className={styles.itemText}>{game.name}</div>
										</div>
										<div className={styles.itemCount}>{game.count}</div>
									</li>
								) : !isChecked ? (
									<li key={index} className={styles.item}>
										<div
											className={clsx(
												styles.itemTextWrapper,
												styles[game.country],
												{ [styles.itemTextWrapperLive]: game.live }
											)}
										>
											<div className={styles.itemText}>{game.name}</div>
										</div>
										<div className={styles.itemCount}>{game.count}</div>
									</li>
								) : null
							)}
						</ul>
					</div>
				))}
			</div>
		</div>
	)
}

export default GameInfo
