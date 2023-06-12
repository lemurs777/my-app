import { Link } from 'react-router-dom';
import clsx from 'clsx';

function RequestsMenu() {

	const arrLinks = [
		{
			name: 'Мой профиль',
			link: '/',
			icon: 'profile',
			active: false,
		},
		{
			name: 'Пополнение и выплаты',
			link: '/',
			icon: 'wallet',
			active: false,
		},
		{
			name: 'История операций',
			link: '/',
			icon: 'story',
			active: false,
		},
		{
			name: 'Запросы',
			link: '/',
			icon: 'requests',
			active: true,
		},
		{
			name: 'Бонусы и акции',
			link: '/',
			icon: 'bonus',
			active: false,
		},
		{
			name: 'Идентификация',
			link: '/',
			icon: 'identification',
			active: false,
		},
		{
			name: 'Ответственная игра',
			link: '/',
			icon: 'responsibility',
			active: false,
		},
	];
	
	return (
		<ul className="requests-menu">
			{arrLinks.map((item, index) => (
			<li key={index} className="requests-menu__item">
				<Link to={item.link} className={clsx(
					'requests-menu__link',
					{'requests-menu__link--active': item.active}
				)}>
					<div className={clsx(
						'requests-menu__link-icon',
						`requests-menu__link-icon--${item.icon}`
					)}></div>
					<div className="requests-menu__link-text">{item.name}</div>
				</Link>
			</li>
			))}
		</ul>
	);
}

export default RequestsMenu;
