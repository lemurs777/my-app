import {
	Menu,
	EventsToday,
	EventsInfo,
	Multiple,
	//Broadcast
} from '../components/'
import BestMomentProfile from '../components/BestMomentProfile'
import SportFooter from '../components/SportFooter'

function EventsPage() {
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
			showIcon: true,
			title: 'Результат',
			favourite: true,
			arrInfo: [
				{
					arrRow: [
						{
							name: 'Бавария',
							countOne: '2.4',
							countTwo: null,
							up: true,
							down: false,
						},
						{
							name: 'Ничья',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: 'Бавария',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: true,
						},
					],
				},
			],
		},
		{
			showIcon: true,
			title: 'Двойной исход',
			favourite: true,
			arrInfo: [
				{
					arrRow: [
						{
							name: 'Бавария',
							countOne: '2.4',
							countTwo: null,
							up: true,
							down: false,
						},
						{
							name: 'Ничья',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: 'Бавария',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: true,
						},
					],
				},
			],
		},
		{
			showIcon: true,
			title: 'Гандикап',
			favourite: true,
			arrInfo: [
				{
					arrRow: [
						{
							name: 'Бавария',
							countOne: '2.4',
							countTwo: null,
							up: true,
							down: false,
						},
						{
							name: 'Ничья',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: 'Бавария',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: true,
						},
					],
				},
			],
		},
		{
			showIcon: true,
			title: 'Тотал',
			favourite: false,
			arrInfo: [
				{
					arrRow: [
						{
							name: 'Больше (1.5)',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: 'Меньше (1.5)',
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
				{
					arrRow: [
						{
							name: 'Больше (2.5)',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: 'Меньше (2.5)',
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
							name: 'Больше (3)',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: 'Меньше (3)',
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
							name: 'Больше (3.5)',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: 'Меньше (3.5)',
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
			showIcon: true,
			title: 'Точный счёт',
			favourite: false,
			arrInfo: [
				{
					arrRow: [
						{
							name: '1:0',
							countOne: '2.4',
							countTwo: null,
							up: true,
							down: false,
						},
						{
							name: '1:1',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: '0:1',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: true,
						},
					],
				},
				{
					arrRow: [
						{
							name: '2:0',
							countOne: '2.4',
							countTwo: null,
							up: true,
							down: false,
						},
						{
							name: '2:2',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: '0:2',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: true,
						},
					],
				},
				{
					arrRow: [
						{
							name: '2:1',
							countOne: '2.4',
							countTwo: null,
							up: true,
							down: false,
						},
						{
							name: '3:3',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: '1:2',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: true,
						},
					],
				},
				{
					arrRow: [
						{
							name: '3:1',
							countOne: '2.4',
							countTwo: null,
							up: true,
							down: false,
						},
						{
							name: '4:4',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: false,
						},
						{
							name: '1:3',
							countOne: '2.4',
							countTwo: null,
							up: false,
							down: true,
						},
					],
				},
			],
		},
	]

	return (
		<>
			{/*<Menu />*/}
			<div className='main'>
				<main className='page page--events'>
					<EventsToday />

					<EventsInfo dataCategory={arrCategory} dataItems={eventItems}  />
				</main>
				<aside className='aside aside--events scroll'>
					{/*<Broadcast />*/}
					<Multiple />
				</aside>
			</div>
			<SportFooter />
		</>
	)
}

export default EventsPage
