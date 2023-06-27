import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './Menu.module.scss';

function Menu() {

const arrLinks = [
	{
		name: 'Top',
		class: 'top',
		link: '/',
		live: false,
		active: true,
	},
	{
		name: 'Soccer',
		class: 'soccer',
		link: '/',
		live: true,
		active: false,
	},
	{
		name: 'Hockey',
		class: 'hockey',
		link: '/',
		live: true,
		active: false,
	},
	{
		name: 'Basketball',
		class: 'basketball',
		link: '/',
		live: false,
		active: false,
	},
	{
		name: 'Tennis',
		class: 'tennis',
		link: '/',
		live: false,
		active: false,
	},
	{
		name: 'Rugby',
		class: 'rugby',
		link: '/',
		live: true,
		active: false,
	},
	{
		name: 'Volleyball',
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
		name: 'Cricket',
		class: 'cricket',
		link: '/',
		live: false,
		active: false,
	},
	{
		name: 'Racing',
		class: 'racing',
		link: '/',
		live: false,
		active: false,
	},
	{
		name: 'Chess',
		class: 'chess',
		link: '/',
		live: false,
		active: false,
	},
	{
		name: 'Athletics',
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
