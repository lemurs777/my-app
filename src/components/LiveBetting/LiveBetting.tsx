import React from 'react'

import styles from './LiveBetting.module.scss'
import clsx from 'clsx'

const LiveBetting = () => {
	const navLink = [
		{ status: 'active', title: 'вСЕ' },
		{ status: '', title: 'пРЕТМАТЧ' },
		{ status: '', title: 'LIVE события' },
	]
	return (
		<ul className={styles.nav}>
			{navLink.map(item => (
				<li key={item.title} className={clsx(styles.item, styles[item.status])}>
					{item.title}
				</li>
			))}
		</ul>
	)
}

export default LiveBetting
