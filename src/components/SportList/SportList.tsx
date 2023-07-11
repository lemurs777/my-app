import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './SportList.module.scss';

function SportList() {

	const sportList = [
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
			name: 'Футбол',
			className: 'soccer',
			link: '/',
		},
		{
			name: 'Хоккей',
			className: 'hockey',
			link: '/',
		},
		{
			name: 'Баскетбол',
			className: 'basketball',
			link: '/',
		},
		{
			name: 'Теннис',
			className: 'tennis',
			link: '/',
		},
		{
			name: 'Рэгби',
			className: 'regby',
			link: '/',
		},
		{
			name: 'Воллейбол',
			className: 'volleyball',
			link: '/',
		},
		{
			name: 'MMA',
			className: 'mma',
			link: '/',
		},
	];


return (
	<div className={styles.sportList}>
		<ul className={styles.list}>
			{sportList.map((item, index) => (
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

export default SportList;