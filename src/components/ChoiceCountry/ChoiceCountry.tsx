import { Link } from 'react-router-dom';

import styles from './ChoiceCountry.module.scss';

import Au from '../../assets/images/flags/au.png';
import At from '../../assets/images/flags/at.png';
import Az from '../../assets/images/flags/az.png';
import Al from '../../assets/images/flags/al.png';
import Dz from '../../assets/images/flags/dz.png';
import En from '../../assets/images/flags/en.png';
import Ao from '../../assets/images/flags/ao.png';
import Ad from '../../assets/images/flags/ad.png';
import Ar from '../../assets/images/flags/ar.png';
import Am from '../../assets/images/flags/am.png';
import Bd from '../../assets/images/flags/bd.png';
import Bh from '../../assets/images/flags/bh.png';
import By from '../../assets/images/flags/by.png';
import Be from '../../assets/images/flags/be.png';
import Bg from '../../assets/images/flags/bg.png';
import Bo from '../../assets/images/flags/bo.png';
import Ba from '../../assets/images/flags/ba.png';
import Bw from '../../assets/images/flags/bw.png';
import Br from '../../assets/images/flags/br.png';
import Bi from '../../assets/images/flags/bi.png';
import Hu from '../../assets/images/flags/hu.png';
import Ve from '../../assets/images/flags/ve.png';
import Vn from '../../assets/images/flags/vn.png';
import Gh from '../../assets/images/flags/gh.png';
import Gt from '../../assets/images/flags/gt.png';
import De from '../../assets/images/flags/de.png';
import Gi from '../../assets/images/flags/gi.png';
import Nl from '../../assets/images/flags/nl.png';
import Hn from '../../assets/images/flags/hn.png';
import Hk from '../../assets/images/flags/hk.png';
import Gr from '../../assets/images/flags/gr.png';
import Ge from '../../assets/images/flags/ge.png';

type RequestData = {
	numRequest: number
};

function ChoiceCountry(props: RequestData) {

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

	const arrCountry = [
		{
			id: 1,
			name: 'Австралия',
			flag: Au,
		},
		{
			id: 2,
			name: 'Австрия',
			flag: At,
		},
		{
			id: 3,
			name: 'Австрия любители',
			flag: At,
		},
		{
			id: 4,
			name: 'Азербайджан',
			flag: Az,
		},
		{
			id: 5,
			name: 'Албания',
			flag: Al,
		},
		{
			id: 6,
			name: 'Алжир',
			flag: Dz,
		},
		{
			id: 7,
			name: 'Англия',
			flag: En,
		},
		{
			id: 8,
			name: 'Англия любители',
			flag: En,
		},
		{
			id: 9,
			name: 'Ангола',
			flag: Ao,
		},
		{
			id: 10,
			name: 'Андора',
			flag: Ad,
		},
		{
			id: 11,
			name: 'Аргентина',
			flag: Ar,
		},
		{
			id: 12,
			name: 'Армения',
			flag: Am,
		},
		{
			id: 13,
			name: 'Багладеш',
			flag: Bd,
		},
		{
			id: 14,
			name: 'Бахрейн',
			flag: Bh,
		},
		{
			id: 15,
			name: 'Беларусь',
			flag: By,
		},
		{
			id: 16,
			name: 'Бельгия',
			flag: Be,
		},
		{
			id: 17,
			name: 'Болгария',
			flag: Bg,
		},
		{
			id: 18,
			name: 'Боливия',
			flag: Bo,
		},
		{
			id: 19,
			name: 'Босния и Герцеговина',
			flag: Ba,
		},
		{
			id: 20,
			name: 'Ботсвана',
			flag: Bw,
		},
		{
			id: 21,
			name: 'Бразилия',
			flag: Br,
		},
		{
			id: 22,
			name: 'Бурунди',
			flag: Bi,
		},
		{
			id: 23,
			name: 'Венгрия',
			flag: Hu,
		},
		{
			id: 24,
			name: 'Венесуэла',
			flag: Ve,
		},
		{
			id: 25,
			name: 'Вьетнам',
			flag: Vn,
		},
		{
			id: 26,
			name: 'Гана',
			flag: Gh,
		},
		{
			id: 27,
			name: 'Гватемала',
			flag: Gt,
		},
		{
			id: 28,
			name: 'Германия',
			flag: De,
		},
		{
			id: 29,
			name: 'Германия любители',
			flag: De,
		},
		{
			id: 30,
			name: 'Гибралтар',
			flag: Gi,
		},
		{
			id: 31,
			name: 'Голландия (Нидерланды)',
			flag: Nl,
		},
		{
			id: 32,
			name: 'Гондурас',
			flag: Hn,
		},
		{
			id: 33,
			name: 'Гонконг, Китай',
			flag: Hk,
		},
		{
			id: 34,
			name: 'Греция',
			flag: Gr,
		},
		{
			id: 35,
			name: 'Грузия',
			flag: Ge,
		},

	];

	const sport = arrSports.filter((sport) => sport.id === props.numRequest);

	return (
		<div className={styles.choiceCountry}>
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<Link className={styles.headerBtn} to="/choice-of-sport">Choise of Sports</Link>
					<h1 className={styles.headerTitle}>{sport[0].name}</h1>
				</div>
				<ul className={styles.list}>
					{arrCountry.map((country, index) => (
						<li key={index} className={styles.item}>
							<Link className={styles.itemLink} to="/">
								<img className={styles.itemFlag} src={country.flag} alt={country.name} />
								<div className={styles.itemName}>{country.name}</div>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default ChoiceCountry;