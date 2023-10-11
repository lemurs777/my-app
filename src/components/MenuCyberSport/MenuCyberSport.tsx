import clsx from 'clsx'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './MenuCyberSport.module.scss'
import { GamesDB as games } from '../../assets/database/GamesDB'
import { ReactComponent as TopIcon } from '../../assets/images/svg/top.svg'
import { ReactComponent as MoreIcon } from '../../assets/images/svg/show-more.svg'
const MenuCyberSport = () => {
	const gameList = [
		{
			category: 'Топ',
			icon: <TopIcon />,
			path: '/top',
			live: true,
			games,
		},
	]
	return (
		<div className={styles.menu}>
			{gameList.map(item => (
				<div key={item.category} className={styles.menu__inner}>
					<NavLink
						to={item.path}
						className={clsx(styles.itemCategory, styles.itemCategoryActive)}
					>
						<div className={styles.itemCategory__icon}>
							{item.live && <span className={styles.item__badge}>badge</span>}
							{item.icon}
						</div>
						<div className={styles.itemCategory__title}>
							<span>{item.category}</span>
						</div>
					</NavLink>
					{item.games && (
						<div className={styles.menu__list}>
							{item.games.map(item => (
								<NavLink
									className={clsx(
										styles.item,
										item.live ? styles.itemLive : null
									)}
									key={item.title}
									to={item.link}
								>
									<div className={styles.item__icon}>
										{item.live && (
											<span className={styles.item__badge}>badge</span>
										)}
										<img src={item.image} alt={item.title} />
									</div>
									<div className={styles.item__title}>
										<span>{item.title}</span>
									</div>
								</NavLink>
							))}
						</div>
					)}
				</div>
			))}
			<div className={styles.menu__more}>
				<Link className={styles.menu__showMore} to={'/'}>
					<MoreIcon />
				</Link>
			</div>
		</div>
	)
}

export default MenuCyberSport
