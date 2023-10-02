import { Link, NavLink } from 'react-router-dom'
import clsx from 'clsx'

import styles from './MenuMobile.module.scss'

function MenuMobile() {
	const arrLinks = [
		{
			name: 'Топ',
			class: 'top',
			link: '/',
			live: false,
			active: true,
		},
		{
			name: 'Футбол',
			class: 'soccer',
			link: '/events',
			live: true,
			active: false,
		},
		{
			name: 'Хоккей',
			class: 'hockey',
			link: '/hockey',
			live: true,
			active: false,
		},
		{
			name: 'Баскетбол',
			class: 'basketball',
			link: '/basketball',
			live: false,
			active: false,
		},
		{
			name: 'Теннис',
			class: 'tennis',
			link: '/tennis',
			live: false,
			active: false,
		},
		{
			name: 'Рэгби',
			class: 'rugby',
			link: '/rugby',
			live: true,
			active: false,
		},
		{
			name: 'Воллейбол',
			class: 'volleyball',
			link: '/volleyball',
			live: false,
			active: false,
		},
		{
			name: 'MMA',
			class: 'mma',
			link: '/mma',
			live: false,
			active: false,
		},
		{
			name: 'Крикет',
			class: 'cricket',
			link: '/cricket',
			live: false,
			active: false,
		},
		{
			name: 'Гонки',
			class: 'racing',
			link: '/racing',
			live: false,
			active: false,
		},
		{
			name: 'Шахматы',
			class: 'chess',
			link: '/chess',
			live: false,
			active: false,
		},
		{
			name: 'Атлетика',
			class: 'athletics',
			link: '/athletics',
			live: false,
			active: false,
		},
	]

	return (
		<div className={styles.menu}>
			<ul className={styles.list}>
				{arrLinks.map((item, index) => (
					<li key={index} className={styles.item}>
						<NavLink
							to={item.link}
							className={({ isActive, isPending }) =>
								clsx(
									isActive ? styles.active : null,
									styles.link,
									styles[item.class],
									{ [styles.live]: item.live }
									// { [styles.active]: item.active },
								)
							}
						>
							{item.name}
						</NavLink>
					</li>
				))}
			</ul>
			{/*<Link className={styles.more} to="/">More sports</Link>*/}
		</div>
	)
}

export default MenuMobile
