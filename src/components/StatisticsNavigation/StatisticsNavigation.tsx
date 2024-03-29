import clsx from 'clsx'
import { Link } from 'react-router-dom'

import { Settings } from './types'

import styles from './StatisticsNavigation.module.scss'
import Select from 'react-select'

function StatisticsNavigation(props: Settings) {
	const select = [
		{ value: 'Обзор', label: 'Обзор' },
		{ value: 'Очные', label: 'Очные' },
		{ value: 'Календарь', label: 'Календарь' },
		{ value: 'Таблица', label: 'Таблица' },
		{ value: 'Команды', label: 'Команды' },
		{ value: 'Архив', label: 'Архив' },
	]
	const info = {
		sport: 'Баскетбол',
		region: 'Океания',
		country: 'Австралия',
		tournament: 'Big V 2023',
	}

	const arrLinks = [
		{
			text: 'Обзор',
			link: '/statistics/overview',
			name: 'overview',
		},
		{
			text: 'Очные',
			link: '/statistics/in-person',
			name: 'in-person',
		},
		{
			text: 'Календарь',
			link: '/statistics/calendar',
			name: 'calendar',
		},
		{
			text: 'Таблица',
			link: '/statistics/tables',
			name: 'tables',
		},
		{
			text: 'Команды',
			link: '/statistics/search',
			name: 'search',
		},
		{
			text: 'Архив',
			link: '/statistics/archive',
			name: 'archive',
		},
	]

	return (
		<div className={styles.statisticsNavigation}>
			<div className={styles.info}>
				<div className={styles.infoTop}>
					<div className={styles.infoText}>{info.sport}</div>
					<div className={styles.infoText}>{info.region}</div>
					<div className={styles.infoText}>{info.country}</div>
				</div>
				<div className={styles.infoName}>{info.tournament}</div>
			</div>
			<div className={styles.infoMobileSelect}>
				<Select
					options={select}
					defaultValue={select[0]}
					classNamePrefix='statisticsNavigationSelect'
				/>
			</div>
			<ul className={styles.list}>
				{arrLinks.map((item, index) => (
					<li key={index} className={styles.item}>
						<Link
							className={clsx(styles.link, {
								[styles.linkActive]: item.name === props.name,
							})}
							to={item.link}
						>
							{item.text}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default StatisticsNavigation
