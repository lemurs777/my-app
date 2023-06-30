import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './ChoiceSport.module.scss';

function ChoiceSport() {

	const arrSports = [
		{
            id: 1,
			name : 'Футбол',
            link : '/choice-of-country',
            icon: 'linkIconFootball'
        },
        {
            id: 2,
			name : 'Баскетбол',
            link : '/choice-of-country',
            icon: 'linkIconBasketball'
        },
        {
            id: 3,
			name : 'Хоккей',
            link : '/choice-of-country',
            icon: 'linkIconHockey'
        },
        {
            id: 4,
			name : 'Гандбол',
            link : '/choice-of-country',
            icon: 'linkIconHandball'
        },
        {
            id: 5,
			name : 'Волейбол',
            link : '/choice-of-country',
            icon: 'linkIconVolleyball'
        },
        {
            id: 6,
			name : 'Бадминтон',
            link : '/choice-of-country',
            icon: 'linkIconBadminton'
        },
        {
            id: 7,
			name : 'Бейсбол',
            link : '/choice-of-country',
            icon: 'linkIconBaseball'
        },
        {
            id: 8,
			name : 'Австралийский футбол',
            link : '/choice-of-country',
            icon: 'linkIconAustralianFootball'
        },
        {
            id: 9,
			name : 'Автоспорт',
            link : '/choice-of-country',
            icon: 'linkIconAutosport'
        },
        {
            id: 10,
			name : 'Американский футбол',
            link : '/choice-of-country',
            icon: 'linkIconAmericanFootball'
        },
        {
            id: 11,
			name : 'Водное поло',
            link : '/choice-of-country',
            icon: 'linkIconWaterPolo'
        },
        {
            id: 12,
			name : 'Дартс',
            link : '/choice-of-country',
            icon: 'linkIconDarts'
        },
        {
            id: 13,
			name : 'Кёрлинг',
            link : '/choice-of-country',
            icon: 'linkIconCurling'
        },
        {
            id: 14,
			name : 'Настольный теннис',
            link : '/choice-of-country',
            icon: 'linkIconTableTennis'
        },
        {
            id: 15,
			name : 'Песапалло',
            link : '/choice-of-country',
            icon: 'linkIconPesapallo'
        },
        {
            id: 16,
			name : 'Пляжный футбол',
            link : '/choice-of-country',
            icon: 'linkIconBeachSoccer'
        },
        {
            id: 17,
			name : 'Регби',
            link : '/choice-of-country',
            icon: 'linkIconRugby'
        },
        {
            id: 18,
			name : 'Сквош',
            link : '/choice-of-country',
            icon: 'linkIconSquash'
        },
        {
            id: 19,
			name : 'Снукер',
            link : '/choice-of-country',
            icon: 'linkIconSnooker'
        },
        {
            id: 20,
			name : 'Теннис',
            link : '/choice-of-country',
            icon: 'linkIconTennis'
        },
        {
            id: 21,
			name : 'Флорбол',
            link : '/choice-of-country',
            icon: 'linkIconFloorball'
        },
        {
            id: 22,
			name : 'Футзал',
            link : '/choice-of-country',
            icon: 'linkIconFutsal'
        },
        {
            id: 23,
			name : 'Хоккей на траве',
            link : '/choice-of-country',
            icon: 'linkIconFieldHockey'
        },
        {
            id: 24,
			name : 'Хоккей с мячом',
            link : '/choice-of-country',
            icon: 'linkIconBandy'
        },
    ];
    

	return (
		<div className={styles.choiceSport}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Статистика PARI</h1>
                <ul className={styles.list}>
                    {arrSports.map((sport, index) => (
                    <li key={index} className={styles.item}>
                        <Link 
                            to={sport.link} 
                            state ={{numRequest: sport.id}} 
                            className={styles.link}>
                            <div className={clsx(
                                styles.linkIcon,
                                styles[sport.icon]
                            )}></div>
                            <div className={styles.linkName}>{sport.name}</div>
                        </Link>
                    </li>
                ))}
                </ul>
            </div>
		</div>
	);
}

export default ChoiceSport;