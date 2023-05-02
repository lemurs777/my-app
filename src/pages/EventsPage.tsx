import {  
	Menu,
    EventsToday,
	EventsInfo,
} from '../components/';

function EventsPage(){
	return (
        <>
			<Menu />
			<main className="page page--events">
                <EventsToday />
				<EventsInfo />
			</main>
		</>	
	);
};

export default EventsPage;