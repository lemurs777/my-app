import { Link } from 'react-router-dom';
import clsx from 'clsx';

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
		class: 'cs-go',
		link: '/',
		live: true,
		active: false,
	},
	{
		name: 'Dota 2',
		class: 'dota-2',
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
		class: 'starcraft-1',
		link: '/',
		live: false,
		active: false,
	},
	{
		name: 'StarCraft II',
		class: 'starcraft-2',
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
		class: 'call-of-duty',
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
	<div className="menu">
		<ul className="menu__list">
			{arrLinks.map((item, index) => (
            <li key={index} className="menu__item">
                <Link to={item.link} className={clsx(
					'menu__item-link',
                    'menu__item-link--game',
					`menu__item-link--${item.class}`,
					{'menu__item-link--live': item.live},
					{'menu__item-link--active': item.active},
				)}>{item.name}</Link>
            </li>
            ))}
		</ul>
		<Link className="menu__more" to="/">More sports</Link>
	</div>
);
}

export default MenuGame;