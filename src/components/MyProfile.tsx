import { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

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
					isProbem: false,
				},
				{
					name: 'Верификация аккаунта +',
					link: '/profile/verification',
					isProbem: true,
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
					isProbem: false,
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
					isProbem: false,
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
					isProbem: false,
				},
			],
		},
		{
			title: 'Настройки платформы',
			info: 'Настройка сервиса под себя',
			iconClass: 'profile__header-icon--settings',
			infoItems: [
				{
					name: 'Наствойки',
					link: '/profile/',
					isProbem: false,
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
					isProbem: false,
				},
				{
					name: 'Полезная информация',
					link: '/profile/',
					isProbem: false,
				},
			],
		},
	];

	const [isOpen, setIsOpen] = useState(true);

	const handleClick = (event: any) => {
		setIsOpen(current => !current);
		console.log(event.currentTarget);
	}

	return (
		<div className="profile">
			<div className="profile__title-wrapper">
				<h2 className="profile__title">Мой профиль</h2>
				<button className="profile__title-btn">More</button>
			</div>
			<ul className="profile__list">
				{arrProfileInfo.map((profileInfo, index) => (
					<li key={index} className="profile__item">
						<div className="profile__header">
							<div className={clsx(
							'profile__header-icon',
							profileInfo.iconClass,
							{'profile__header-icon--open': isOpen}
						)}></div>
							<h3 className="profile__header-title">{profileInfo.title}</h3>
							<button className="profile__header-btn-more" onClick={handleClick}>More</button>
						</div>
						<div className={clsx(
							'profile__item-info',
							{'profile__item-info--open': !isOpen}
						)}>{profileInfo.info}</div>
						<ul className={clsx(
							'profile__sublist',
							{'profile__sublist--open': isOpen}
						)}>
							{profileInfo.infoItems.map((infoItem, index) => (
								<li key={index} className="profile__subitem">
									<Link className={clsx(
											'profile__link',
											{'profile__link--problem': infoItem.isProbem}
										)} to={infoItem.link}>{infoItem.name}</Link>
								</li>
							))}
						</ul>	
					</li>	
				))}
			</ul>
		</div>
	);
}

export default MyProfile;
