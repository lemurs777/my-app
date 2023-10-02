import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './LiveEventTime.module.scss'

const LiveEventTime = () => {
	return (
		<ul className={styles.list}>
			<li className={styles.item}>
				<Link className={clsx(styles.link, styles.linkCustom)} to='/'>
					LIVE события
				</Link>
			</li>
			<li className={styles.item}>
				<Link className={styles.link} to='/'>
					3ч
				</Link>
			</li>
			<li className={styles.item}>
				<Link className={styles.link} to='/'>
					6ч
				</Link>
			</li>
			<li className={styles.item}>
				<Link className={styles.link} to='/'>
					12ч
				</Link>
			</li>
			<li className={styles.item}>
				<Link className={clsx(styles.link, styles.linkActive)} to='/'>
					<span> Сегодня</span>
				</Link>
			</li>
		</ul>
	)
}

export default LiveEventTime
