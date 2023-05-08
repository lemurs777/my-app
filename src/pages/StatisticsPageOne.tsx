import { 
	 Menu,
     StatisticsOne,
} from '../components/';

function StatisticsPageOne(){
	return (
		<>
			<Menu />
			<main className="page page--statistics-one scroll">
                <StatisticsOne />
			</main>
		</>	
	);
};

export default StatisticsPageOne;