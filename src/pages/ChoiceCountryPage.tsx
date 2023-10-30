import { useLocation } from "react-router";

import { 
	ChoiceCountry,
} from '../components';

function ChoiceCountryPage(){
	return (
		<main className="page page--statistics-six scroll">
			<ChoiceCountry />
		</main>
	);
};

export default ChoiceCountryPage;