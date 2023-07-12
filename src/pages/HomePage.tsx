import { 
	MainSlider, 
	Sport,
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
				<Sport />
			</main>
			<aside className="aside aside--index scroll">
				<Broadcast />
				<Multiple />
			</aside>
		</>	
	);
};

export default HomePage;
