import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './CyberSportList.module.scss';

function CyberSportList() {

	const cyberSportList = [
		{
			name: 'Топ',
			className: 'top',
			link: '/',
		},
		{
			name: 'Закладки',
			className: 'bookmarks',
			link: '/',
		},
		{
			name: 'CS:GO',
			className: 'cs-go',
			link: '/',
		},
		{
			name: 'Dota 2',
			className: 'dota-2',
			link: '/',
		},
		{
			name: 'Overwatch',
			className: 'overwatch',
			link: '/',
		},
		{
			name: 'LoL',
			className: 'lol',
			link: '/',
		},
		{
			name: 'Valorant',
			className: 'valorant',
			link: '/',
		},
		{
			name: 'StarCraft I',
			className: 'starcraft-1',
			link: '/',
		},
		{
			name: 'StarCraft II',
			className: 'starcraft-2',
			link: '/',
		},
		{
			name: 'Hearthstone',
			className: 'hearthstone',
			link: '/',
		},
		{
			name: 'Call Of Duty',
			className: 'call-of-duty',
			link: '/',
		},
		{
			name: 'TF2',
			className: 'tf2',
			link: '/',
		},
		{
			name: 'HoS',
			className: 'hos',
			link: '/',
		},
	];


return (
	<div className={styles.sportList}>
		<ul className={styles.list}>
			{cyberSportList.map((item, index) => (
				<li className={styles.item} key={index}>
					<Link className={clsx(
						styles.link,
						styles[item.className]
					)} to={item.link}>{item.name}</Link>
				</li>
			))}
		</ul>
	</div>
);
}

export default CyberSportList;