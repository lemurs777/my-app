import {  
	Menu,
    EventsToday,
	EventsInfo,
	Multiple,
	Broadcast
} from '../components/';

function EventsDetailedPage(){

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
	];

	const accordionItems = [
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
							class: '',
						},
						{
							name: 'Ничья',
							countOne: '5.20',
							countTwo: null,
							class: '',
						},
						{
							name: 'Наполи',
							countOne: '5.20',
							countTwo: null,
							class: '',
						},
					],
				},
				{
					arrRow: [
						{
							name: 'Лечче или ничья',
							countOne: '2.00',
							countTwo: null,
							class: '', 
						},
						{
							name: 'Лечче или ничья',
							countOne: '2.00',
							countTwo: null,
							class: '',
						},
						{
							name: 'Ничья или Наполи',
							countOne: '2.00',
							countTwo: null,
							class: '',
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
							class: '', 
						},
						{
							name: 'Тотал 0.5',
							countOne: '5.9',
							countTwo: null,
							class: '',
						},
					],
				},
				{
					arrRow: [
						{
							name: 'Тотал 1.0',
							countOne: '2.4',
							countTwo: null,
							class: '', 
						},
						{
							name: 'Тотал 1.0',
							countOne: '5.9',
							countTwo: null,
							class: '',
						},
					],
				},
				{
					arrRow: [
						{
							name: 'Тотал 1.5',
							countOne: '2.4',
							countTwo: null,
							class: '', 
						},
						{
							name: 'Тотал 1.5',
							countOne: '5.9',
							countTwo: null,
							class: '',
						},
					],
				},
				{
					arrRow: [
						{
							name: 'Тотал 2.0',
							countOne: '2.4',
							countTwo: null,
							class: '', 
						},
						{
							name: 'Тотал 2.0',
							countOne: '5.9',
							countTwo: null,
							class: '',
						},
					],
				},
				{
					arrRow: [
						{
							name: 'Тотал 2.5',
							countOne: '2.4',
							countTwo: null,
							class: '', 
						},
						{
							name: 'Тотал 2.5',
							countOne: '5.9',
							countTwo: null,
							class: '',
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
							class: '', 
						},
						{
							name: 'Фора 0.5',
							countOne: '5.9',
							countTwo: null,
							class: '',
						},
					],
				},
				{
					arrRow: [
						{
							name: 'Фора 1.0',
							countOne: '2.4',
							countTwo: null,
							class: '', 
						},
						{
							name: 'Фора 1.0',
							countOne: '5.9',
							countTwo: null,
							class: '',
						},
					],
				},
				{
					arrRow: [
						{
							name: 'Фора 1.5',
							countOne: '2.4',
							countTwo: null,
							class: '', 
						},
						{
							name: 'Фора 1.5',
							countOne: '5.9',
							countTwo: null,
							class: '',
						},
					],
				},
				{
					arrRow: [
						{
							name: 'Фора 2.0',
							countOne: '2.4',
							countTwo: null,
							class: '', 
						},
						{
							name: 'Фора 2.0',
							countOne: '5.9',
							countTwo: null,
							class: '',
						},
					],
				},
				{
					arrRow: [
						{
							name: 'Фора 2.5',
							countOne: '2.4',
							countTwo: null,
							class: '', 
						},
						{
							name: 'Фора 2.5',
							countOne: '5.9',
							countTwo: null,
							class: '',
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
							class: '', 
						},
						{
							name: 'НАПОЛЛИ',
							countOne: 'БОЛЬШЕ',
							countTwo: 'МЕНЬШЕ',
							class: '',
						},
					],
				},
				{
					arrRow: [
						{
							name: 'Победа и ж/карт у соперника < 1.5',
							countOne: '2.4',
							countTwo: '2.4',
							class: '', 
						},
						{
							name: 'Победа и ж/карт у соперника < 1.5',
							countOne: '2.4',
							countTwo: '2.4',
							class: '',
						},
					],
				},
				{
					arrRow: [
						{
							name: 'Победа и ж/карт у соперника < 1.5',
							countOne: '2.4',
							countTwo: '2.4',
							class: '', 
						},
						{
							name: 'Победа и ж/карт у соперника < 1.5',
							countOne: '2.4',
							countTwo: '2.4',
							class: '',
						},
					],
				},
				{
					arrRow: [
						{
							name: 'Победа и ж/карт у соперника < 1.5',
							countOne: '2.4',
							countTwo: '2.4',
							class: '', 
						},
						{
							name: 'Победа и ж/карт у соперника < 1.5',
							countOne: '2.4',
							countTwo: '2.4',
							class: '',
						},
					],
				},
				{
					arrRow: [
						{
							name: 'Победа и ж/карт у соперника < 1.5',
							countOne: '2.4',
							countTwo: '2.4',
							class: '', 
						},
						{
							name: 'Победа и ж/карт у соперника < 1.5',
							countOne: '2.4',
							countTwo: '2.4',
							class: '',
						},
					],
				},
				{
					arrRow: [
						{
							name: 'Победа и ж/карт у соперника < 1.5',
							countOne: '2.4',
							countTwo: '2.4',
							class: '', 
						},
						{
							name: 'Победа и ж/карт у соперника < 1.5',
							countOne: '2.4',
							countTwo: '2.4',
							class: '',
						},
					],
				},
				{
					arrRow: [
						{
							name: 'Победа и ж/карт у соперника < 1.5',
							countOne: '2.4',
							countTwo: '2.4', 
							class: '', 
						},
						{
							name: 'Победа и ж/карт у соперника < 1.5',
							countOne: '2.4',
							countTwo: '2.4',
							class: '',
						},
					],
				},
			],
		},
	];

	return (
        <>
			<Menu />
			<main className="page page--events">
                <EventsToday />
				<EventsInfo dataCategory={arrCategory} dataItems={accordionItems}/>
			</main>
			<aside className="aside aside--events scroll">
				<Broadcast />
				<Multiple />
			</aside>
		</>	
	);
};

export default EventsDetailedPage;