import { Link } from 'react-router-dom';
import clsx from 'clsx';

function ChoiceSport() {

	const arrSports = [
		{
            id: 1,
			name : 'Футбол',
            link : '/choice-of-country',
            icon: 'football'
        },
        {
            id: 2,
			name : 'Баскетбол',
            link : '/choice-of-country',
            icon: 'basketball'
        },
        {
            id: 3,
			name : 'Хоккей',
            link : '/choice-of-country',
            icon: 'hockey'
        },
        {
            id: 4,
			name : 'Гандбол',
            link : '/choice-of-country',
            icon: 'handball'
        },
        {
            id: 5,
			name : 'Волейбол',
            link : '/choice-of-country',
            icon: 'volleyball'
        },
        {
            id: 6,
			name : 'Бадминтон',
            link : '/choice-of-country',
            icon: 'badminton'
        },
        {
            id: 7,
			name : 'Бейсбол',
            link : '/choice-of-country',
            icon: 'baseball'
        },
        {
            id: 8,
			name : 'Австралийский футбол',
            link : '/choice-of-country',
            icon: 'australian-football'
        },
        {
            id: 9,
			name : 'Автоспорт',
            link : '/choice-of-country',
            icon: 'autosport'
        },
        {
            id: 10,
			name : 'Американский футбол',
            link : '/choice-of-country',
            icon: 'american-football'
        },
        {
            id: 11,
			name : 'Водное поло',
            link : '/choice-of-country',
            icon: 'water-polo'
        },
        {
            id: 12,
			name : 'Дартс',
            link : '/choice-of-country',
            icon: 'darts'
        },
        {
            id: 13,
			name : 'Кёрлинг',
            link : '/choice-of-country',
            icon: 'curling'
        },
        {
            id: 14,
			name : 'Настольный теннис',
            link : '/choice-of-country',
            icon: 'table-tennis'
        },
        {
            id: 15,
			name : 'Песапалло',
            link : '/choice-of-country',
            icon: 'pesapallo'
        },
        {
            id: 16,
			name : 'Пляжный футбол',
            link : '/choice-of-country',
            icon: 'beach-soccer'
        },
        {
            id: 17,
			name : 'Регби',
            link : '/choice-of-country',
            icon: 'rugby'
        },
        {
            id: 18,
			name : 'Сквош',
            link : '/choice-of-country',
            icon: 'squash'
        },
        {
            id: 19,
			name : 'Снукер',
            link : '/choice-of-country',
            icon: 'snooker'
        },
        {
            id: 20,
			name : 'Теннис',
            link : '/choice-of-country',
            icon: 'tennis'
        },
        {
            id: 21,
			name : 'Флорбол',
            link : '/choice-of-country',
            icon: 'floorball'
        },
        {
            id: 22,
			name : 'Футзал',
            link : '/choice-of-country',
            icon: 'futsal'
        },
        {
            id: 23,
			name : 'Хоккей на траве',
            link : '/choice-of-country',
            icon: 'field-hockey'
        },
        {
            id: 24,
			name : 'Хоккей с мячом',
            link : '/choice-of-country',
            icon: 'bandy'
        },
    ];
    

	return (
		<div className="choice-sport">
            <div className="choice-sport__wrapper">
                <h1 className="choice-sport__title">Статистика PARI</h1>
                <ul className="choice-sport__list">
                    {arrSports.map((sport, index) => (
                    <li key={index} className="choice-sport__item">
                        <Link 
                            to={sport.link} 
                            state ={{numRequest: sport.id}} 
                            className="choice-sport__link">
                            <div className={clsx(
                                'choice-sport__link-icon',
                                `choice-sport__link-icon--${sport.icon}`
                            )}></div>
                            <div className="choice-sport__link-name">{sport.name}</div>
                        </Link>
                    </li>
                ))}
                </ul>
            </div>
		</div>
	);
}

export default ChoiceSport;