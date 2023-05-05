import {  
	Menu,
    EventsToday,
	EventsInfo,
	Multiple,
	Broadcast
} from '../components/';

function EventsPage(){
	return (
        <>
			<Menu />
			<main className="page page--events">
                <EventsToday />
				<EventsInfo />
			</main>
			<aside className="aside aside--events scroll">
				<Broadcast />
				<Multiple />
			</aside>
		</>	
	);
};

export default EventsPage;