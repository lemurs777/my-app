import { Link } from 'react-router-dom';
import { useState } from 'react';
import AccordionItem from './AccordionItem';

import Logo1 from '../assets/images/events-info-live-logo-fc-bayern-x2.min.png';
import Logo2 from '../assets/images/events-info-live-logo-fc-frankfurt-x2.min.png';

function EventsInfo() {

const accordionItems = [
	{
		title: 'Результат',
		arrInfo: [
			{
				arrRow: [
					{
						name: 'Бавария',
						count: '2.4',
					},
				],
			},
		],
	},
	{
		title: 'Двойной исход',
		arrInfo: [
			{
				arrRow: [
					{
						name: 'Бавария',
						count: '2.4',
					},
					{
						name: 'Айнтрахт Франкфурт',
						count: '2.4',
					}
				],
			},
		],
	},
	{
		title: 'Гандикап',
		arrInfo: [
			{
				arrRow: [
					{
						name: 'Бавария',
						count: '2.4',
					},
					{
						name: 'Ничья',
						count: '2.4',
					},
					{
						name: 'Айнтрахт Франкфурт',
						count: '2.4',
					}
				],
			},
			{
				arrRow: [
					{
						name: 'Бавария',
						count: '2.4',
					},
					{
						name: 'Ничья',
						count: '2.4',
					},
					{
						name: 'Айнтрахт Франкфурт',
						count: '2.4',
					}
				],
			},
			{
				arrRow: [
					{
						name: 'Бавария',
						count: '2.4',
					},
					{
						name: 'Ничья',
						count: '2.4',
					},
					{
						name: 'Айнтрахт Франкфурт',
						count: '2.4',
					}
				],
			},			
		],
	},
];

const [currentIdx, setCurrentIdx] = useState(-1);
const btnOnClick = (idx: number) => {
	setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
};

return (
	<div className="events-info scroll">
		<div className="events-info__live">
			<div className="events-info__live-top">
				<Link className="events-info__live-top-link events-info__live-top-link--home" to="/">Home</Link>
				<button className="events-info__live-top-link events-info__live-top-link--add">Add</button>
				<div className="events-info__live-top-left">
					<img className="events-info__live-top-logo" src={Logo1} alt="Логотип" />
					<div className="events-info__live-top-name">Бавария</div>
					<div className="events-info__live-top-statistics">
						<div className="events-info__live-top-statistic events-info__live-top-statistic--yellow">0</div>
						<div className="events-info__live-top-statistic events-info__live-top-statistic--red">0</div>
						<div className="events-info__live-top-statistic events-info__live-top-statistic--corner">0</div>
						<div className="events-info__live-top-statistic events-info__live-top-statistic--shot-on-goal">0</div>
					</div>
				</div>
				<div className="events-info__live-top-center">
					<div className="events-info__live-top-center-time">89’</div>
					<div className="events-info__live-top-center-score">3 : 2</div>
					<div className="events-info__live-top-center-half">2-й тайм</div>
				</div>
				<div className="events-info__live-top-right">
					<img className="events-info__live-top-logo" src={Logo2} alt="Логотип" />
					<div className="events-info__live-top-name">Айнтрахт Франкфурт</div>
					<div className="events-info__live-top-statistics">
						<div className="events-info__live-top-statistic events-info__live-top-statistic--yellow">5</div>
						<div className="events-info__live-top-statistic events-info__live-top-statistic--red">2</div>
						<div className="events-info__live-top-statistic events-info__live-top-statistic--corner">18</div>
						<div className="events-info__live-top-statistic events-info__live-top-statistic--shot-on-goal">12</div>
					</div>
				</div>
			</div>
			<div className="events-info__live-bottom">
				<div className="events-info__live-bottom-uniforms">
					<div className="events-info__live-bottom-uniform-name">BMU</div>
					<div className="events-info__live-bottom-uniform-name">FRA</div>
				</div>
			</div>
			<div className="events-info__categoty-list-wrapper scroll-horizontal">
				<ul className="events-info__categoty-list">
					<li className="events-info__categoty-item">
						<button className="events-info__categoty-item-btn events-info__categoty-item-btn--active">ВСЕ</button>
					</li>
					<li className="events-info__categoty-item">
						<button className="events-info__categoty-item-btn">ДВОЙНОЙ ИСХОД</button>
					</li>
					<li className="events-info__categoty-item">
						<button className="events-info__categoty-item-btn">ГАНДИКАП</button>
					</li>
					<li className="events-info__categoty-item">
						<button className="events-info__categoty-item-btn">ТОТАЛ</button>
					</li>
					<li className="events-info__categoty-item">
						<button className="events-info__categoty-item-btn">ТОЧНЫЙ СЧЁТ</button>
					</li>
					<li className="events-info__categoty-item">
						<button className="events-info__categoty-item-btn">КТО ЗАБЬЁТ ПЕРВЫЙ</button>
					</li>
					<li className="events-info__categoty-item">
						<button className="events-info__categoty-item-btn">1-Й ТАЙМ: 1X2</button>
					</li>
					<li className="events-info__categoty-item">
						<button className="events-info__categoty-item-btn">1-Й ТАЙМ: ГАНДИКАП</button>
					</li>
					<li className="events-info__categoty-item">
						<button className="events-info__categoty-item-btn">2-Й ТАЙМ: 1X2</button>
					</li>
					<li className="events-info__categoty-item">
						<button className="events-info__categoty-item-btn">2-Й ТАЙМ: ГАНДИКАП</button>
					</li>
				</ul>
			</div>
		</div>
		<ul className="events-info__accordion">
			{accordionItems.map((item, idx) => (
				<AccordionItem
					key={idx}
					data={item}
					isOpen={idx === currentIdx}
					btnOnClick={() => btnOnClick(idx)}
				/>
			))}
	  	</ul>
	</div>
);
}

export default EventsInfo;
