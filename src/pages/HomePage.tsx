import { 
	MainSlider, 
	Sports,
	Broadcast,
	Multiple, 
	Menu, 
} from '../components/';

function HomePage(){
	return (
		<>
			<Menu />
			<main className="page page--index scroll">
				<MainSlider />
				<Sports />
			</main>
			<aside className="aside aside--index scroll">
				<Broadcast />
				<Multiple />
			</aside>
		</>	
	);
};

export default HomePage;
