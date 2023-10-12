import clsx from 'clsx'

import styles from './Broadcast.module.scss'
import { Navigation } from 'swiper'
import BroadcastLive from '../../assets/images/broadcast-live-x2.min.jpg'
import React, { ReactNode, useState } from 'react'
import { ReactComponent as SoccerIcon } from '../../assets/images/svg/soccer.svg'
import { Swiper, SwiperSlide } from 'swiper/react'

import broadcastLiveBest1 from '../../assets/images/broadcast-live-best-1.min.jpg'
import broadcastLiveBest2 from '../../assets/images/broadcast-live-best-2.min.jpg'
import broadcastLiveBest3 from '../../assets/images/broadcast-live-best-3.min.jpg'
import { Link } from 'react-router-dom'
import ButtonAccent from '../Buttons/ButtonAccent'
type IProps = {
	auth: boolean
}
const Broadcast = ({ auth }: IProps) => {
	const gamesArr = [
		{
			nameOne: 'СПАРТАК МОСКВА',
			nameTwo: 'ЛОКОМОТИВ МОСКВА',
			isLive: true,
		},
	]
	const [showTranslation, setShowTranslation] = useState(false)

	return (
		<div className={styles.broadcast}>
			<div
				className={clsx(
					styles.translation,
					showTranslation ? null : styles.margin
				)}
			>
				<div className={styles.header}>
					<button className={clsx(styles.headerBtn, styles.headerBtnLock)}>
						Lock
					</button>
					<h2 className={styles.headerTitle}>Трансляция</h2>
					<button
						className={clsx(
							styles.headerBtn,
							styles.headerBtnArrow,
							showTranslation ? styles.active : null
						)}
						onClick={() => {
							if (!auth) {
								setShowTranslation(!showTranslation)
							}
						}}
					>
						Open
					</button>
				</div>
				<ul className={styles.list}>
					{gamesArr.map((gamesItem, index) => (
						<li
							key={index}
							className={clsx(styles.item, {
								[styles.itemLive]: gamesItem.isLive,
							})}
						>
							{gamesItem.nameOne} - {gamesItem.nameTwo}
						</li>
					))}
				</ul>
				{!showTranslation && (
					<button
						className={styles.translation__more}
						onClick={() => {
							if (!auth) {
								setShowTranslation(true)
							}
						}}
					>
						+ 5 ПОКАЗАТЬ БОЛЬШЕ
					</button>
				)}
				{showTranslation && (
					<div className={styles.broadcast__content}>
						<img className={styles.liveImg} src={BroadcastLive} alt='Live' />
					</div>
				)}
				{auth && (
					<div className={styles.broadcast__reg}>
						<div className={styles.broadcast__text}>
							<span>
								Трансляция доступна только авторизованным пользователям
							</span>
						</div>
						<ButtonAccent className={styles.broadcast__btn} title={'войти'} />
					</div>
				)}
			</div>
		</div>
	)
}

export default Broadcast
