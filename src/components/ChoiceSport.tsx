import { Link } from 'react-router-dom';
import clsx from 'clsx';

function ChoiceSport() {

	const arrLinks = [
		{
			name : 'Футбол',
            link : '/apps',
            icon: 'football'
        },
        {
			name : 'Баскетбол',
            link : '/apps',
            icon: 'basketball'
        },
        {
			name : 'Хоккей',
            link : '/apps',
            icon: 'hockey'
        },
        {
			name : 'Гандбол',
            link : '/apps',
            icon: 'handball'
        },
        {
			name : 'Волейбол',
            link : '/apps',
            icon: 'volleyball'
        },
        {
			name : 'Бадминтон',
            link : '/apps',
            icon: 'badminton'
        },
        {
			name : 'Бейсбол',
            link : '/apps',
            icon: 'baseball'
        },
        {
			name : 'Австралийский футбол',
            link : '/apps',
            icon: 'australian-football'
        },
        {
			name : 'Автоспорт',
            link : '/apps',
            icon: 'autosport'
        },
        {
			name : 'Американский футбол',
            link : '/apps',
            icon: 'american-football'
        },
        {
			name : 'Водное поло',
            link : '/apps',
            icon: 'water-polo'
        },
        {
			name : 'Дартс',
            link : '/apps',
            icon: 'darts'
        },
        {
			name : 'Кёрлинг',
            link : '/apps',
            icon: 'curling'
        },
        {
			name : 'Настольный теннис',
            link : '/apps',
            icon: 'table-tennis'
        },
        {
			name : 'Песапалло',
            link : '/apps',
            icon: 'pesapallo'
        },
        {
			name : 'Пляжный футбол',
            link : '/apps',
            icon: 'beach-soccer'
        },
        {
			name : 'Регби',
            link : '/apps',
            icon: 'rugby'
        },
        {
			name : 'Сквош',
            link : '/apps',
            icon: 'squash'
        },
        {
			name : 'Снукер',
            link : '/apps',
            icon: 'snooker'
        },
        {
			name : 'Теннис',
            link : '/apps',
            icon: 'tennis'
        },
        {
			name : 'Флорбол',
            link : '/apps',
            icon: 'floorball'
        },
        {
			name : 'Футзал',
            link : '/apps',
            icon: 'futsal'
        },
        {
			name : 'Хоккей на траве',
            link : '/apps',
            icon: 'field-hockey'
        },
        {
			name : 'Хоккей с мячом',
            link : '/apps',
            icon: 'bandy'
        },
    ];
    

	return (
		<div className="choice-sport">
            <div className="choice-sport__wrapper">
                <h1 className="choice-sport__title">Статистика PARI</h1>
                <ul className="choice-sport__list">
                    {arrLinks.map((item, index) => (
                    <li key={index} className="choice-sport__item">
                        <Link to={item.link} className="choice-sport__link">
                            <div className={clsx(
                                'choice-sport__link-icon',
                                `choice-sport__link-icon--${item.icon}`
                            )}></div>
                            <div className="choice-sport__link-name">{item.name}</div>
                        </Link>
                    </li>
                ))}
                </ul>
            </div>
		</div>
	);
}

export default ChoiceSport;