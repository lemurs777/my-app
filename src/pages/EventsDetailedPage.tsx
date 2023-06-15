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

export default EventsDetailedPage;