import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './RequestsMenu.module.scss';

function RequestsMenu() {

	const arrLinks = [
		{
			name: 'Мой профиль',
			link: '/',
			icon: 'linkIconProfile',
			active: false,
		},
		{
			name: 'Пополнение и выплаты',
			link: '/',
			icon: 'linkIconWallet',
			active: false,
		},
		{
			name: 'История операций',
			link: '/',
			icon: 'linkIconStory',
			active: false,
		},
		{
			name: 'Запросы',
			link: '/requests/',
			icon: 'linkIconRequests',
			active: true,
		},
		{
			name: 'Бонусы и акции',
			link: '/',
			icon: 'linkIconBonus',
			active: false,
		},
		{
			name: 'Идентификация',
			link: '/',
			icon: 'linkIconIdentification',
			active: false,
		},
		{
			name: 'Ответственная игра',
			link: '/',
			icon: 'linkIconResponsibility',
			active: false,
		},
	];
	
	return (
		<ul className={styles.requestsMenu}>
			{arrLinks.map((item, index) => (
			<li key={index} className={styles.item}>
				<Link to={item.link} className={clsx(
					styles.link,
					{[styles.linkActive] : item.active}
				)}>
					<div className={clsx(
						styles.linkIcon,
						styles[item.icon]
					)}></div>
					<div className={styles.linkText}>{item.name}</div>
				</Link>
			</li>
			))}
		</ul>
	);
}

export default RequestsMenu;
