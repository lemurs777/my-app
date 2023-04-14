import { 
	MainBanner, 
	Sports,
	Broadcast,
	Multiple, 
} from '../components/';

function HomePage(){
	return (
		<>
			<main className="page page--index">
				<MainBanner />
				<Sports />
			</main>
			<aside className="aside aside--index">
				<Broadcast />
				<Multiple />
			</aside>
		</>	
	);
};

export default HomePage;
