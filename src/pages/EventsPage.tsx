import {  
	Menu,
    EventsToday,
} from '../components/';

function EventsPage(){
	return (
        <>
			<Menu />
			<main className="page page--events">
                <EventsToday />
			</main>
		</>	
	);
};

export default EventsPage;