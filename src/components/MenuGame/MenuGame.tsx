import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './MenuGame.module.scss';

function MenuGame() {

const arrLinks = [
	{
		name: 'Top',
		class: 'top',
		link: '/',
		live: true,
		active: true,
	},
	{
		name: 'CS:GO',
		class: 'csgo',
		link: '/',
		live: true,
		active: false,
	},
	{
		name: 'Dota 2',
		class: 'dota2',
		link: '/',
		live: true,
		active: false,
	},
	{
		name: 'Overwatch',
		class: 'overwatch',
		link: '/',
		live: false,
		active: false,
	},
	{
		name: 'LoL',
		class: 'lol',
		link: '/',
		live: true,
		active: false,
	},
	{
		name: 'Valorant',
		class: 'valorant',
		link: '/',
		live: false,
		active: false,
	},
	{
		name: 'StarCraft I',
		class: 'starcraft1',
		link: '/',
		live: false,
		active: false,
	},
	{
		name: 'StarCraft II',
		class: 'starcraft2',
		link: '/',
		live: false,
		active: false,
	},
	{
		name: 'Hearthstone',
		class: 'hearthstone',
		link: '/',
		live: false,
		active: false,
	},
	{
		name: 'Call Of Duty',
		class: 'callOfDuty',
		link: '/',
		live: false,
		active: false,
	},
	{
		name: 'TF2',
		class: 'tf2',
		link: '/',
		live: false,
		active: false,
	},
	{
		name: 'HoS',
		class: 'hos',
		link: '/',
		live: false,
		active: false,
	},
];	
	
return (
	<div className={styles.menuGame}>
		<ul className={styles.list}>
			{arrLinks.map((item, index) => (
            <li key={index} className={styles.item}>
                <Link to={item.link} className={clsx(
					styles.link,
					styles.game,
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

export default MenuGame;
