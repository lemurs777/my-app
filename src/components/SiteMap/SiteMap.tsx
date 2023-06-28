import { Link } from 'react-router-dom';

import styles from './SiteMap.module.scss';

function SiteMap() {

	const arrLinks = [
		{
			name : 'Главная',
            link : '/',
        },
        {
			name : 'Профиль',
            link : '/profile',
        },
        {
			name : 'Профиль - Верификация аккаунта',
            link : '/profile/verification',
        },
        {
			name : 'Профиль - Транзакции',
            link : '/profile/conclusions',
        },
        {
			name : 'Профиль - Мои ставки',
            link : '/profile/betting',
        },
        {
			name : 'Профиль - Мои промокоды',
            link : '/profile/promo',
        },
        {
			name : 'Профиль - Пополнение счёта',
            link : '/profile/deposit',
        },
        {
			name : 'События',
            link : '/events',
        },
        {
            name: 'Акции - разводящая',
            link: '/promotions',
        },
        {
            name: 'Акции - внутренняя',
            link: '/promotions/promo',
        },
        {
            name: 'Приожения',
            link: '/apps',
        },
        {
			name : 'Статистика',
            link : '/statistics',
        },
        {
			name : 'Статистика - Big V 2023',
            link : '/statistics/big-v-2023',
        },
        {
			name : 'Статистика - Календарь',
            link : '/statistics/calendar',
        },
        {
			name : 'Статистика - Таблица',
            link : '/statistics/table',
        },
        {
            name: 'Киберспорт',
            link: '/cybersport',
        },
        {
            name: 'Ответная игра - Самоограничения, Лимиты на пополнение, Лимиты игровой сессии',
            link: '/profile/return',
        },
        {
            name: 'Статистика - Детали',
            link: '/statistics/detailed',
        },
        {
            name: 'Статистика - Очные',
            link: '/statistics/face-to-face',
        },
        {
            name: 'Статистика - Положение команды',
            link: '/statistics/standings',
        },
        {
            name: 'Вопросы и ответы',
            link: '/faq',
        },
        {
            name: 'Запросы',
            link: '/requests'
        },
        {
            name: 'Отдельный запрос',
            link: '/requests/request',
            param: 1
        },
        {
            name: 'Событие - Детали',
            link: '/events/detailed'
        },
        {
            name: 'Выбор вида спорта',
            link: '/choice-of-sport',
        },
        {
            name: 'Выбор страны',
            link: '/choice-of-country',
            param: 2,
        },
        {
            name: 'Статистика - Поиск команды',
            link: '/statistics/search',
            param: 2,
        },
	]

	return (
		<ul className={styles.sitemap}>
            {arrLinks.map((item, index) => (
            <li key={index} className={styles.item}>
                { (item.param) ? 
                    (
                        <Link 
                            to={item.link}
                            state = {{ numRequest: item.param }}
                            className={styles.link}>
                                {item.name}
                        </Link>
                    ) : (
                        <Link to={item.link} className={styles.link}>{item.name}</Link>
                    )                
                }
            </li>
            ))}
		</ul>
	);
}

export default SiteMap;