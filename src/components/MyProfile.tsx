import { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { 
	Modal,
} from '../components/';

import useModal from "../hooks/useModal";
import ModalSettings from './Modals/ModalSettings';

function MyProfile() {

	const arrProfileInfo = [
		{
			title: 'Персональные данные',
			info: 'Персональная информация и верификация аккаунта',
			iconClass: 'profile__header-icon--info',
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
			iconClass: 'profile__header-icon--transactions',
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
			iconClass: 'profile__header-icon--bets',
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
			iconClass: 'profile__header-icon--promo',
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
			iconClass: 'profile__header-icon--settings',
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
			iconClass: 'profile__header-icon--support',
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
		<div className="profile">
			<div className="profile__title-wrapper">
				<h2 className="profile__title">Мой профиль</h2>
				<button className="profile__title-btn">More</button>
			</div>
			<ul className="profile__list">
				{arrProfileInfo.map((profileInfo, index) => (
					<MyProfileItem key={index} data={profileInfo}/>
				))}
			</ul>
		</div>
	);
}

export default MyProfile;

function MyProfileItem(
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
		<li className="profile__item">
			<div className="profile__header">
				<div className={clsx(
				'profile__header-icon',
				data.iconClass,
				{'profile__header-icon--open': isOpenTab}
			)}></div>
				<h3 className="profile__header-title">{data.title}</h3>
				<button className="profile__header-btn-more" onClick={handleClick}>More</button>
			</div>
			<div className={clsx(
				'profile__item-info',
				{'profile__item-info--open': !isOpenTab}
			)}>{data.info}</div>
			<ul className={clsx(
				'profile__sublist',
				{'profile__sublist--open': isOpenTab}
			)}>
				{data.infoItems.map((infoItem, index) => (
					<li key={index} className="profile__subitem">
						{infoItem.isModal ? (
							<>
							<button className={clsx(
								'profile__link',
								{'profile__link--problem': infoItem.isProblem}
							)} 
							onClick={toggleModal}>{infoItem.name}</button>
							<Modal isOpen={isOpen} toggleModal={toggleModal}>
								<ModalSettings toggleModal={toggleModal}/>
							</Modal>
							</>
						) : (
							<Link className={clsx(
								'profile__link',
								{'profile__link--problem': infoItem.isProblem}
							)} to={infoItem.link}>{infoItem.name}</Link>
						)}
					</li>
				))}
			</ul>
		</li>
	);
};
