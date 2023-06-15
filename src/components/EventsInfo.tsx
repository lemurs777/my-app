import { Link } from 'react-router-dom';
import { useState } from 'react';
import {  
	CategoryList,
    AccordionItem,
} from '../components/';

import Logo1 from '../assets/images/events-info-live-logo-fc-bayern-x2.min.png';
import Logo2 from '../assets/images/events-info-live-logo-fc-frankfurt-x2.min.png';

function EventsInfo(
	{
		dataCategory
	}: {
		dataCategory: Array<{
			name: string,
			active: boolean,
		}>;
	}
) {

const accordionItems = [
	{
		title: 'Результат',
		favourite: true,
		arrInfo: [
			{
				arrRow: [
					{
						name: 'Бавария',
						count: '2.4',
						class: 'accordion-item__cell--up', 
					},
					{
						name: 'Ничья',
						count: '2.4',
						class: '',
					},
					{
						name: 'Бавария',
						count: '2.4',
						class: 'accordion-item__cell--down',
					},
				],
			},
		],
	},
	{
		title: 'Двойной исход',
		favourite: true,
		arrInfo: [
			{
				arrRow: [
					{
						name: 'Бавария',
						count: '2.4',
						class: 'accordion-item__cell--up', 
					},
					{
						name: 'Ничья',
						count: '2.4',
						class: '',
					},
					{
						name: 'Бавария',
						count: '2.4',
						class: 'accordion-item__cell--down',
					},
				],
			},
		],
	},
	{
		title: 'Гандикап',
		favourite: true,
		arrInfo: [
			{
				arrRow: [
					{
						name: 'Бавария',
						count: '2.4',
						class: 'accordion-item__cell--up', 
					},
					{
						name: 'Ничья',
						count: '2.4',
						class: '',
					},
					{
						name: 'Бавария',
						count: '2.4',
						class: 'accordion-item__cell--down',
					},
				],
			},			
		],
	},
	{
		title: 'Тотал',
		favourite: false,
		arrInfo: [
			{
				arrRow: [
					{
						name: 'Больше (1.5)',
						count: '2.4',
						class: '', 
					},
					{
						name: 'Меньше (1.5)',
						count: '5.9',
						class: '',
					},
				],
			},
			{
				arrRow: [
					{
						name: 'Больше (2)',
						count: '2.4',
						class: '', 
					},
					{
						name: 'Меньше (2)',
						count: '5.9',
						class: '',
					},
				],
			},
			{
				arrRow: [
					{
						name: 'Больше (2.5)',
						count: '2.4',
						class: '', 
					},
					{
						name: 'Меньше (2.5)',
						count: '5.9',
						class: '',
					},
				],
			},
			{
				arrRow: [
					{
						name: 'Больше (3)',
						count: '2.4',
						class: '', 
					},
					{
						name: 'Меньше (3)',
						count: '5.9',
						class: '',
					},
				],
			},
			{
				arrRow: [
					{
						name: 'Больше (3.5)',
						count: '2.4',
						class: '', 
					},
					{
						name: 'Меньше (3.5)',
						count: '5.9',
						class: '',
					},
				],
			},		
		],
	},
	{
		title: 'Точный счёт',
		favourite: false,
		arrInfo: [
			{
				arrRow: [
					{
						name: '1:0',
						count: '2.4',
						class: 'accordion-item__cell--up', 
					},
					{
						name: '1:1',
						count: '2.4',
						class: '',
					},
					{
						name: '0:1',
						count: '2.4',
						class: 'accordion-item__cell--down',
					},
				],
			},
			{
				arrRow: [
					{
						name: '2:0',
						count: '2.4',
						class: 'accordion-item__cell--up', 
					},
					{
						name: '2:2',
						count: '2.4',
						class: '',
					},
					{
						name: '0:2',
						count: '2.4',
						class: 'accordion-item__cell--down',
					},
				],
			},
			{
				arrRow: [
					{
						name: '2:1',
						count: '2.4',
						class: 'accordion-item__cell--up', 
					},
					{
						name: '3:3',
						count: '2.4',
						class: '',
					},
					{
						name: '1:2',
						count: '2.4',
						class: 'accordion-item__cell--down',
					},
				],
			},
			{
				arrRow: [
					{
						name: '3:1',
						count: '2.4',
						class: 'accordion-item__cell--up', 
					},
					{
						name: '4:4',
						count: '2.4',
						class: '',
					},
					{
						name: '1:3',
						count: '2.4',
						class: 'accordion-item__cell--down',
					},
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
				<div className="events-info__live-bottom-timeline-wrapper scroll-horizontal">
					<div className="events-info__live-bottom-timeline">
						<div className="events-info__live-bottom-goal"></div>
						<div className="events-info__live-bottom-goal"></div>
						<div className="events-info__live-bottom-goal"></div>
						<div className="events-info__live-bottom-goal events-info__live-bottom-goal--bottom"></div>
						<div className="events-info__live-bottom-goal events-info__live-bottom-goal--bottom"></div>
						<div className="events-info__live-bottom-goal events-info__live-bottom-goal--bottom"></div>
					</div>
				</div>
			</div>
			<CategoryList categoryList={dataCategory}/>
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
