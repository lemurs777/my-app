import React from 'react'
import {
	EventsInfo,
	GameInfo,
	HeaderBottomProfile,
	HeaderTop,
	Menu,
} from '../components'
import CouponEmpty from '../components/CouponEmpty'
import MenuCyberSport from '../components/MenuCyberSport'
import Broadcast from '../components/Broadcast'
import Stream from '../components/Stream'
import CyberEventScore from '../components/CyberEventScore'

const CyberSportEventPage = () => {
	const arrCategory = [
		{
			name: 'Все',
			active: true,
		},
		{
			name: 'Двойной исход',
			active: false,
		},
		{
			name: 'Гандикап',
			active: false,
		},
		{
			name: 'Тотал',
			active: false,
		},
		{
			name: 'Точный счёт',
			active: false,
		},
		{
			name: 'Кто забьёт первый',
			active: false,
		},
		{
			name: '1-й тайм: 1Х2',
			active: false,
		},
		{
			name: '1-й тайм: Гандикап',
			active: false,
		},
		{
			name: '2-й тайм: 1Х2',
			active: false,
		},
		{
			name: '2-й тайм: Гандикап',
			active: false,
		},
	]

	const eventItems = [
		{
			title: 'Winner',
			collapse: true,
			showIcon: false,
			favourite: false,
			arrInfo: [
				{
					arrRow: [
						{
							name: 'Nemiga',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: 'Winsrike',
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
			title: 'Map Advantage',
			favourite: false,
			arrInfo: [
				{
					arrRow: [
						{
							name: 'Nemiga',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: 'Winsrike',
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
							name: 'Больше (2)',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: 'Меньше (2)',
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
			title: 'Total Maps Played',
			favourite: false,
			arrInfo: [
				{
					arrRow: [
						{
							name: 'Over (2.5)',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: 'Under (2.5)',
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
			title: 'Winner Map 1',
			favourite: false,
			arrInfo: [
				{
					arrRow: [
						{
							name: 'Nemiga',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: 'Under (2.5)',
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
			title: 'Winner Map 1',
			favourite: false,
			arrInfo: [
				{
					arrRow: [
						{
							name: 'Over (2.5)',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: 'Winsrike',
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
			title: 'Total Map',
			favourite: false,
			arrInfo: [
				{
					arrRow: [
						{
							name: 'Over (2.5)',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: 'Under (2.5)',
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
							name: 'Over (2.5)',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: 'Under (2.5)',
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
							name: 'Over (2.5)',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: 'Under (2.5)',
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
							name: 'Over (2.5)',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: 'Under (2.5)',
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
							name: 'Over (2.5)',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: 'Under (2.5)',
							countOne: '5.9',
							countTwo: null,
							up: false,
							down: false,
						},
					],
				},
			],
		},
	]
	return (
		<>
			<HeaderTop />
			<HeaderBottomProfile />
			<main className='main main--cyberSport'>
				<MenuCyberSport />
				<GameInfo />
				<div className='central'>
					<CyberEventScore />
					<Stream />
					<EventsInfo dataCategory={arrCategory} dataItems={eventItems} />
				</div>
				<aside className='aside'>
					<Broadcast auth={true} />
					<CouponEmpty />
				</aside>
			</main>
		</>
	)
}

export default CyberSportEventPage
