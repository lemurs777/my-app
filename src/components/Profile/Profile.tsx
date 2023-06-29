import { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { 
	Modal,
	ModalSettings,
} from '../../components/';

import useModal from "../../hooks/useModal";

import styles from './Profile.module.scss';

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
					name: 'Верификация аккаунта +',
					link: '/profile/verification',
					isProblem: true,
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
					name: 'Транзакции +',
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
					name: 'История ставок +',
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
					name: 'Мои промокоды +',
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
					name: 'Настройки +',
					link: '/profile/',
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
					link: '/profile/',
					isProblem: false,
					isModal: false,
				},
				{
					name: 'Полезная информация',
					link: '/profile/',
					isProblem: false,
					isModal: false,
				},
			],
		},
	];

	return (
		<div className={styles.profile}>
			<div className={styles.titleWrapper}>
				<h2 className={styles.title}>Мой профиль</h2>
				<button className={styles.titleBtn}>More</button>
			</div>
			<ul className={styles.list}>
				{arrProfileInfo.map((profileInfo, index) => (
					<ProfileItem key={index} data={profileInfo}/>
				))}
			</ul>
		</div>
	);
}

export default Profile;

function ProfileItem(
	{ data } : 
	{ data: {
		title: string,
		info: string,
		iconClass: string,
		infoItems: Array<{ 
			name: string, 
			link: string, 
			isProblem: boolean,
			isModal: boolean,
		}>
	}
	}) {

	const [isOpenTab, setIsOpenTab] = useState(false);
	const { isOpen, toggleModal } = useModal();

	const handleClick = () => {
		setIsOpenTab(current => !current);
	}
	return (
		<li className={styles.item}>
			<div className={styles.header}>
				<div className={clsx(
				styles.headerIcon,
				styles[data.iconClass],
				{[styles.headerIconOpen]: isOpenTab },
			)}></div>
				<h3 className={styles.title}>{data.title}</h3>
				<button className={styles.headerBtnMore} onClick={handleClick}>More</button>
			</div>
			<div className={clsx(
				styles.itemInfo,
				{[styles.itemInfoOpen]: !isOpenTab}
			)}>{data.info}</div>
			<ul className={clsx(
				styles.subList,
				{[styles.subListOpen]: isOpenTab}
			)}>
				{data.infoItems.map((infoItem, index) => (
					<li key={index} className={styles.subItem}>
						{infoItem.isModal ? (
							<>
							<button className={clsx(
								styles.link,
								{[styles.linkProblem] : infoItem.isProblem}
							)} 
							onClick={toggleModal}>{infoItem.name}</button>
							<Modal isOpen={isOpen} toggleModal={toggleModal}>
								<ModalSettings toggleModal={toggleModal}/>
							</Modal>
							</>
						) : (
							<Link className={clsx(
								styles.link,
								{[styles.linkProblem] : infoItem.isProblem}
							)} to={infoItem.link}>{infoItem.name}</Link>
						)}
					</li>
				))}
			</ul>
		</li>
	);
};
