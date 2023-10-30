import {
	Menu,
	EventsToday,
	EventsInfo,
	Multiple, Header, CategoryList, EventsList,
	//Broadcast,
} from '../components/'
import HeaderBottomEvent from "../components/HeaderBottomEvent";
import {SportMenuDB as sports} from "../assets/database/SportMenuDB";
import EventInfo from "../components/EventInfo";
import Broadcast from "../components/Broadcast";
import BestMomentProfile from "../components/BestMomentProfile";
import Broadcasts from "../components/BroadcastsOld/Broadcasts";
import SportFooter from "../components/SportFooter";
import React from "react";

function EventsDetailedPage() {
	const arrCategory = [
		{
			name: 'Исходы',
			active: true,
		},
		{
			name: 'Тоталы',
			active: false,
		},
		{
			name: 'Форы',
			active: false,
		},
		{
			name: 'Инд.тоталы',
			active: false,
		},
	]
	const gameList = [' Футбол', ' Футбол', ' Футбол']
	const eventItems = [
		{
			title: 'Исходы',
			favourite: false,
			arrInfo: [
				{
					arrRow: [
						{
							name: 'Лечче',
							countOne: '5.20',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: 'Ничья',
							countOne: '5.20',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: 'Наполи',
							countOne: '5.20',
							countTwo: null,
							up: false,
							down: false,
						},
					],
				},
				{
					arrRow: [
						{
							name: 'Лечче или ничья',
							countOne: '2.00',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: 'Лечче или ничья',
							countOne: '2.00',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: 'Ничья или Наполи',
							countOne: '2.00',
							countTwo: null,
							up: false,
							down: false,
						},
					],
				},
			],
		},
		{
			title: 'Тоталы',
			favourite: false,
			arrInfo: [
				{
					arrRow: [
						{
							name: 'Тотал 0.5',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: 'Тотал 0.5',
							countOne: '5.9',
							countTwo: null,
							up: false,
							down: false,
						},
					],
				},
				{
					arrRow: [
						{
							name: 'Тотал 1.0',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: 'Тотал 1.0',
							countOne: '5.9',
							countTwo: null,
							up: false,
							down: false,
						},
					],
				},
				{
					arrRow: [
						{
							name: 'Тотал 1.5',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: 'Тотал 1.5',
							countOne: '5.9',
							countTwo: null,
							up: false,
							down: false,
						},
					],
				},
				{
					arrRow: [
						{
							name: 'Тотал 2.0',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: 'Тотал 2.0',
							countOne: '5.9',
							countTwo: null,
							up: false,
							down: false,
						},
					],
				},
				{
					arrRow: [
						{
							name: 'Тотал 2.5',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: 'Тотал 2.5',
							countOne: '5.9',
							countTwo: null,
							up: false,
							down: false,
						},
					],
				},
			],
		},
		{
			title: 'Форы',
			favourite: true,
			arrInfo: [
				{
					arrRow: [
						{
							name: 'Фора 0.5',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: 'Фора 0.5',
							countOne: '5.9',
							countTwo: null,
							up: false,
							down: false,
						},
					],
				},
				{
					arrRow: [
						{
							name: 'Фора 1.0',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: 'Фора 1.0',
							countOne: '5.9',
							countTwo: null,
							up: false,
							down: false,
						},
					],
				},
				{
					arrRow: [
						{
							name: 'Фора 1.5',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: 'Фора 1.5',
							countOne: '5.9',
							countTwo: null,
							up: false,
							down: false,
						},
					],
				},
				{
					arrRow: [
						{
							name: 'Фора 2.0',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: 'Фора 2.0',
							countOne: '5.9',
							countTwo: null,
							up: false,
							down: false,
						},
					],
				},
				{
					arrRow: [
						{
							name: 'Фора 2.5',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: 'Фора 2.5',
							countOne: '5.9',
							countTwo: null,
							up: false,
							down: false,
						},
					],
				},
			],
		},
		{
			title: 'Индтоталы',
			favourite: false,
			arrInfo: [
				{
					arrRow: [
						{
							name: 'ЛЕЧЧЕ',
							countOne: 'БОЛЬШЕ',
							countTwo: 'МЕНЬШЕ',
							up: false,
							down: false,
						},
						{
							name: 'НАПОЛЛИ',
							countOne: 'БОЛЬШЕ',
							countTwo: 'МЕНЬШЕ',
							up: false,
							down: false,
						},
					],
				},
				{
					arrRow: [
						{
							name: 'Победа и ж/карт у соперника < 1.5',
							countOne: '2.4',
							countTwo: '2.4',
							up: false,
							down: false,
						},
						{
							name: 'Победа и ж/карт у соперника < 1.5',
							countOne: '2.4',
							countTwo: '2.4',
							up: false,
							down: false,
						},
					],
				},
				{
					arrRow: [
						{
							name: 'Победа и ж/карт у соперника < 1.5',
							countOne: '2.4',
							countTwo: '2.4',
							up: false,
							down: false,
						},
						{
							name: 'Победа и ж/карт у соперника < 1.5',
							countOne: '2.4',
							countTwo: '2.4',
							up: false,
							down: false,
						},
					],
				},
				{
					arrRow: [
						{
							name: 'Победа и ж/карт у соперника < 1.5',
							countOne: '2.4',
							countTwo: '2.4',
							up: false,
							down: false,
						},
						{
							name: 'Победа и ж/карт у соперника < 1.5',
							countOne: '2.4',
							countTwo: '2.4',
							up: false,
							down: false,
						},
					],
				},
				{
					arrRow: [
						{
							name: 'Победа и ж/карт у соперника < 1.5',
							countOne: '2.4',
							countTwo: '2.4',
							up: false,
							down: false,
						},
						{
							name: 'Победа и ж/карт у соперника < 1.5',
							countOne: '2.4',
							countTwo: '2.4',
							up: false,
							down: false,
						},
					],
				},
				{
					arrRow: [
						{
							name: 'Победа и ж/карт у соперника < 1.5',
							countOne: '2.4',
							countTwo: '2.4',
							up: false,
							down: false,
						},
						{
							name: 'Победа и ж/карт у соперника < 1.5',
							countOne: '2.4',
							countTwo: '2.4',
							up: false,
							down: false,
						},
					],
				},
				{
					arrRow: [
						{
							name: 'Победа и ж/карт у соперника < 1.5',
							countOne: '2.4',
							countTwo: '2.4',
							up: false,
							down: false,
						},
						{
							name: 'Победа и ж/карт у соперника < 1.5',
							countOne: '2.4',
							countTwo: '2.4',
							up: false,
							down: false,
						},
					],
				},
			],
		},
	]
	const arrTables = [
		{
			name: 'Испания. Примера',
			time: '18:15',
			date: '21 Aug',
			nameOne: 'Севилья',
			nameTwo: 'Атлетико Мадрид',
			lastNumber: 21,
			checkOne: 0,
			checkTwo: 2,
			arrNumbers: [
				{
					number: 9.1,
					class: 'empty',
				},
				{
					number: 9.1,
					class: 'empty',
				},
				{
					number: 9.1,
					class: 'empty',
				},
			],
			arrNumbers2: [
				{
					number: 9.1,
					class: 'upp',
				},
				{
					number: 9.1,
					class: 'down',
				},
				{
					number: 2.5,
					class: 'disableTable',
				},
			],
		},
		{
			name: 'Испания. Примера',
			time: '32`',
			date: '21 Aug',
			nameOne: 'Севилья',
			nameTwo: 'Атлетико Мадрид',
			lastNumber: 21,
			class: 'danger',
			checkOne: 0,
			checkTwo: 1,
			arrNumbers: [
				{
					number: 9.1,
					class: 'empty',
				},
				{
					number: 9.1,
					class: 'empty',
				},
				{
					number: 9.1,
					class: 'empty',
				},
			],
			arrNumbers2: [
				{
					number: 9.1,
					class: 'upp',
				},
				{
					number: 9.1,
					class: 'down',
				},
				{
					number: 2.5,
					class: 'disableTable',
				},
			],
		},
		{
			name: 'Испания. Примера',
			time: '18:15',
			date: '21 Aug',
			nameOne: 'Севилья',
			nameTwo: 'Атлетико Мадрид',
			lastNumber: 21,
			checkOne: 0,
			checkTwo: 1,
			arrNumbers: [
				{
					number: 9.1,
					class: 'empty',
				},
				{
					number: 9.1,
					class: 'empty',
				},
				{
					number: 9.1,
					class: 'empty',
				},
			],
			arrNumbers2: [
				{
					number: 9.1,
					class: 'upp',
				},
				{
					number: 9.1,
					class: 'down',
				},
				{
					number: 2.5,
					class: 'disableTable',
				},
			],
		},
		{
			name: 'Испания. Примера',
			time: '18:15',
			date: '21 Aug',
			nameOne: 'Севилья',
			nameTwo: 'Атлетико Мадрид',
			lastNumber: 21,
			checkOne: 0,
			checkTwo: 1,
			arrNumbers: [
				{
					number: 9.1,
					class: 'empty',
				},
				{
					number: 9.1,
					class: 'empty',
				},
				{
					number: 9.1,
					class: 'empty',
				},
			],
			arrNumbers2: [
				{
					number: 9.1,
					class: 'upp',
				},
				{
					number: 9.1,
					class: 'down',
				},
				{
					number: 2.5,
					class: 'disableTable',
				},
			],
		},
	]
	return (
		<>
			<Header isLogIn={true} showBottom={false}/>
			<HeaderBottomEvent
				icon={false}
				link={'Спорт'}
				data={gameList}
				dataTable={arrTables}
				dataTableTitle={'Таиланд. премьер-лига'}
			/>
			<main className='main'>
				<div className="events__menu">
					<Menu data={sports}/>
				</div>
				<EventsToday/>
				<div className="central">
					<EventInfo bottom={false}/>
					<CategoryList data={arrCategory}/>
					<EventsList dataList={eventItems}/>
				</div>
				<aside className='aside events__aside'>
					<Broadcast auth={false}/>
					<BestMomentProfile/>
					<Broadcasts/>
					<Multiple/>
				</aside>
			</main>
			<SportFooter/>
		</>
	)
}

export default EventsDetailedPage
