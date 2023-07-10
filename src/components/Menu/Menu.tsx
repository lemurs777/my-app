import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './Menu.module.scss';

function Menu() {

const arrLinks = [
	{
		name: 'Топ',
		class: 'top',
		link: '/',
		live: false,
		active: true,
	},
	{
		name: 'Футбол',
		class: 'soccer',
		link: '/',
		live: true,
		active: false,
	},
	{
		name: 'Хоккей',
		class: 'hockey',
		link: '/',
		live: true,
		active: false,
	},
	{
		name: 'Баскетбол',
		class: 'basketball',
		link: '/',
		live: false,
		active: false,
	},
	{
		name: 'Теннис',
		class: 'tennis',
		link: '/',
		live: false,
		active: false,
	},
	{
		name: 'Рэгби',
		class: 'rugby',
		link: '/',
		live: true,
		active: false,
	},
	{
		name: 'Воллейбол',
		class: 'volleyball',
		link: '/',
		live: false,
		active: false,
	},
	{
		name: 'MMA',
		class: 'mma',
		link: '/',
		live: false,
		active: false,
	},
	{
		name: 'Крикет',
		class: 'cricket',
		link: '/',
		live: false,
		active: false,
	},
	{
		name: 'Гонки',
		class: 'racing',
		link: '/',
		live: false,
		active: false,
	},
	{
		name: 'Шахматы',
		class: 'chess',
		link: '/',
		live: false,
		active: false,
	},
	{
		name: 'Атлетика',
		class: 'athletics',
		link: '/',
		live: false,
		active: false,
	},
];

	
return (
	<div className={styles.menu}>
		<ul className={styles.list}>
			{arrLinks.map((item, index) => (
            <li key={index} className={styles.item}>
                <Link to={item.link} className={clsx(
					styles.link,
					styles[item.class],
					{[styles.live] : item.live},
					{[styles.active]: item.active},
				)}>{item.name}</Link>
            </li>
            ))}
		</ul>
		<Link className={styles.more} to="/">More sports</Link>
	</div>
);
}

export default Menu;
