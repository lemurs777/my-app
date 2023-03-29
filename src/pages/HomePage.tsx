import MainLayout from '../layouts/MainLayout';
import { 
	MainBanner, 
	Sports,
} from '../components/';

function HomePage(){
	return (
		<MainLayout>
			<main className="page page--index">
				<MainBanner />
				<Sports />
			</main>
		</MainLayout> 
	);
};

export default HomePage;
