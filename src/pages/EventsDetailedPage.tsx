import {
	Menu,
	EventsToday,
	EventsInfo,
	Multiple,
	Broadcast,
} from '../components/'

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

	return (
		<>
			<Menu />
			<div className='main'>
				<main className='page page--events'>
					<EventsToday />
					<EventsInfo dataCategory={arrCategory} dataItems={eventItems} />
				</main>
				<aside className='aside aside--events scroll'>
					<Broadcast />
					<Multiple />
				</aside>
			</div>
		</>
	)
}

export default EventsDetailedPage
