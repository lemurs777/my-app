import {  
	Menu,
    EventsToday,
	EventsInfo,
	Multiple,
	Broadcast
} from '../components/';


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
	];

	return (
        <>
			<Menu />
			<main className="page page--events">
                <EventsToday />
				<EventsInfo dataCategory={arrCategory}/>
			</main>
			<aside className="aside aside--events scroll">
				<Broadcast />
				<Multiple />
			</aside>
		</>	
	);
};

export default EventsPage;