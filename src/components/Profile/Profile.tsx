import { useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import {
	Modal,
	ModalChat,
	ModalSupport,
	ModalSettings,
} from '../../components/'

import useModal from '../../hooks/useModal'

import styles from './Profile.module.scss'

function Profile() {
	const arrProfileInfo = [
		{
			title: 'Персональные данные',
			info: 'Персональная информация и верификация аккаунта',
			iconClass: 'headerIconInfo',
			infoItems: [
				{
					name: 'Персональная информация',
					link: '/profile/',
					isProblem: false,
					isModal: false,
				},
				{
					name: 'Верификация аккаунта',
					link: '/profile/verification',
					isProblem: true,
					isModal: false,
				},
				{
					name: 'Ограничения',
					link: '/profile/limits',
					isProblem: false,
					isModal: false,
				},
			],
		},
		{
			title: 'Транзакции',
			info: 'Пополнение, вывод и история транзакций',
			iconClass: 'headerIconTransactions',
			infoItems: [
				{
					name: 'Транзакции',
					link: '/profile/conclusions',
					isProblem: false,
					isModal: false,
				},
			],
		},
		{
			title: 'Мои ставки',
			info: 'Ваши активные и рассчитанные ставки',
			iconClass: 'headerIconBets',
			infoItems: [
				{
					name: 'История ставок',
					link: '/profile/betting',
					isProblem: false,
					isModal: false,
				},
			],
		},
		{
			title: 'Мои промокоды',
			info: 'Промокоды, которые подходят именно вам',
			iconClass: 'headerIconPromo',
			infoItems: [
				{
					name: 'Мои промокоды',
					link: '/profile/promo',
					isProblem: false,
					isModal: false,
				},
			],
		},
		{
			title: 'Настройки платформы',
			info: 'Настройка сервиса под себя',
			iconClass: 'headerIconSettings',
			infoItems: [
				{
					name: 'Настройки',
					link: 'settings',
					isProblem: false,
					isModal: true,
				},
			],
		},
		{
			title: 'Помощь и информация',
			info: 'Служба поддержки и полезная информация',
			iconClass: 'headerIconSupport',
			infoItems: [
				{
					name: 'Служба поддержки',
					link: 'chat',
					isProblem: false,
					isModal: true,
				},
				{
					name: 'Полезная информация',
					link: 'support',
					isProblem: false,
					isModal: true,
				},
			],
		},
	]

	return (
		<div className={styles.profile}>
			<div className={styles.titleWrapper}>
				<h2 className={styles.title}>Мой профиль</h2>
				<button className={styles.titleBtn}>More</button>
			</div>
			<ul className={styles.list}>
				{arrProfileInfo.map((profileInfo, index) => (
					<ProfileItem key={index} data={profileInfo} />
				))}
			</ul>
		</div>
	)
}

export default Profile

function ProfileItem({
	data,
}: {
	data: {
		title: string
		info: string
		iconClass: string
		infoItems: Array<{
			name: string
			link: string
			isProblem: boolean
			isModal: boolean
		}>
	}
}) {
	const [isOpenTab, setIsOpenTab] = useState(false)
	const { isOpen, toggleModal } = useModal()

	const [isName, setIsName] = useState('')

	function CurrentModal(name: string) {
		setIsName(name)
		toggleModal()
	}

	const handleClick = () => {
		setIsOpenTab(current => !current)
	}

	return (
		<li className={styles.item}>
			<div className={styles.btnTab} onClick={handleClick}>
				<div className={styles.header}>
					<div
						className={clsx(styles.headerIcon, styles[data.iconClass], {
							[styles.headerIconOpen]: isOpenTab,
						})}
					></div>
					<h3 className={styles.title}>{data.title}</h3>
					<div className={styles.headerBtnMore}></div>
				</div>
				<div
					className={clsx(styles.itemInfo, {
						[styles.itemInfoOpen]: !isOpenTab,
					})}
				>
					{data.info}
				</div>
			</div>
			<ul className={clsx(styles.subList, { [styles.subListOpen]: isOpenTab })}>
				{data.infoItems.map((infoItem, index) => (
					<li key={index} className={styles.subItem}>
						{infoItem.isModal ? (
							<>
								<button
									className={clsx(styles.link, {
										[styles.linkProblem]: infoItem.isProblem,
									})}
									onClick={() => {
										CurrentModal(infoItem.link)
									}}
								>
									{infoItem.name}
								</button>
								<Modal isOpen={isOpen} toggleModal={toggleModal} full={true}>
									{isName === 'chat' ? (
										<ModalChat toggleModal={toggleModal} />
									) : null}
									{isName === 'support' ? (
										<ModalSupport toggleModal={toggleModal} />
									) : null}
									{isName === 'settings' ? (
										<ModalSettings toggleModal={toggleModal} />
									) : null}
								</Modal>
							</>
						) : (
							<Link
								className={clsx(styles.link, {
									[styles.linkProblem]: infoItem.isProblem,
								})}
								to={infoItem.link}
							>
								{infoItem.name}
							</Link>
						)}
					</li>
				))}
			</ul>
		</li>
	)
}
