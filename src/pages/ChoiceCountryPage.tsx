import { useLocation } from "react-router";

import { 
	ChoiceCountry,
} from '../components';

function ChoiceCountryPage(){
	let data = useLocation();
	return (
		<main className="page page--statistics-six scroll">
			<ChoiceCountry numRequest={data.state.numRequest}/>
		</main>
	);
};

export default ChoiceCountryPage;