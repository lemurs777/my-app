import { 
	MainBanner, 
	Sports,
	Broadcast,
	Multiple, 
	Menu, 
} from '../components/';

function HomePage(){
	return (
		<>
			<Menu />
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
