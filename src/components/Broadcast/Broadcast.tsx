import clsx from 'clsx'

import styles from './Broadcast.module.scss'
import { Navigation } from 'swiper'
import BroadcastLive from '../../assets/images/broadcast-live-x2.min.jpg'
import React, {ReactNode, useRef, useState} from 'react'
import { ReactComponent as SoccerIcon } from '../../assets/images/svg/soccer.svg'
import { Swiper, SwiperSlide } from 'swiper/react'

import broadcastLiveBest1 from '../../assets/images/broadcast-live-best-1.min.jpg'
import broadcastLiveBest2 from '../../assets/images/broadcast-live-best-2.min.jpg'
import broadcastLiveBest3 from '../../assets/images/broadcast-live-best-3.min.jpg'
import { Link } from 'react-router-dom'
import ButtonAccent from '../Buttons/ButtonAccent'
import {
	Modal, ModalChat, ModalCheck, ModalCheckCode,
	ModalLogIn, ModalNavigation, ModalNotifications, ModalOtherCountry,
	ModalPaymentStatus,
	ModalPromoCode, ModalRefill, ModalRefillCripto, ModalRefillFinish,
	ModalRegistration,
	ModalRegistrationFull, ModalSettings, ModalSupport, ModalTicketInfo,
	ModalVerification, ModalWithdrawMoney
} from "../index";
import useModal from "../../hooks/useModal";
type IProps = {
	auth: boolean
}
const Broadcast = ({ auth }: IProps) => {
	const [showDropdown, setShowDropdown] = useState(false)
	const [menuOpen, setMenuOpen] = useState(false)
	const {isOpen, toggleModal} = useModal()
	const [isName, setIsName] = useState('login')
	const [isFull, setIsFull] = useState(true)
	// const [menuOpen, setMenuOpen] = useState(false)
	const gamesArr = [
		{
			nameOne: 'СПАРТАК МОСКВА',
			nameTwo: 'ЛОКОМОТИВ МОСКВА',
			isLive: true,
		},
	]
	const [showTranslation, setShowTranslation] = useState(false)
	function CurrentModal(name: string, full: boolean) {
		setIsFull(full)
		setIsName(name)
		toggleModal()
	}
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
						<ButtonAccent className={styles.broadcast__btn} title={'войти'} handleClick={() => {
							CurrentModal('login', true)
						}}/>
					</div>
				)}
			</div>
			<Modal isOpen={isOpen} toggleModal={toggleModal} full={isFull}>
				{isName === 'login' ? <ModalLogIn toggleModal={toggleModal}/> : null}
				{isName === 'registration' ? (
					<ModalRegistration toggleModal={toggleModal}/>
				) : null}
				{isName === 'registration-full' ? (
					<ModalRegistrationFull toggleModal={toggleModal}/>
				) : null}
				{isName === 'verification' ? (
					<ModalVerification toggleModal={toggleModal}/>
				) : null}
				{isName === 'promocode' ? (
					<ModalPromoCode toggleModal={toggleModal}/>
				) : null}
				{isName === 'payment-status' ? (
					<ModalPaymentStatus toggleModal={toggleModal}/>
				) : null}
				{isName === 'check-code' ? (
					<ModalCheckCode toggleModal={toggleModal}/>
				) : null}
				{isName === 'other-country' ? (
					<ModalOtherCountry toggleModal={toggleModal}/>
				) : null}
				{isName === 'notifications' ? (
					<ModalNotifications toggleModal={toggleModal}/>
				) : null}
				{isName === 'ticket-info' ? (
					<ModalTicketInfo toggleModal={toggleModal}/>
				) : null}
				{isName === 'chat' ? <ModalChat toggleModal={toggleModal}/> : null}
				{isName === 'support' ? (
					<ModalSupport toggleModal={toggleModal}/>
				) : null}
				{isName === 'withdraw-money' ? (
					<ModalWithdrawMoney toggleModal={toggleModal}/>
				) : null}
				{isName === 'refill' ? <ModalRefill toggleModal={toggleModal}/> : null}
				{isName === 'refill-cripto' ? (
					<ModalRefillCripto toggleModal={toggleModal}/>
				) : null}
				{isName === 'refill-finish' ? (
					<ModalRefillFinish toggleModal={toggleModal}/>
				) : null}
				{isName === 'navigation' ? (
					<ModalNavigation toggleModal={toggleModal}/>
				) : null}
				{isName === 'settings' ? (
					<ModalSettings toggleModal={toggleModal}/>
				) : null}
				{isName === 'check' ? <ModalCheck toggleModal={toggleModal}/> : null}
			</Modal>
		</div>
	)
}

export default Broadcast
