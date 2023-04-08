import MainLayout from '../layouts/MainLayout';
import { 
	MainBanner, 
	Sports,
	Broadcast,
	Multiple, 
} from '../components/';

function HomePage(){
	return (
		<MainLayout>
			<main className="page page--index">
				<MainBanner />
				<Sports />
			</main>
			<aside className="aside aside--index">
				<Broadcast />
				<Multiple />
			</aside>
		</MainLayout> 
	);
};

export default HomePage;
