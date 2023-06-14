import { useLocation } from "react-router";
import { 
	Request,
} from '../components/';

function RequestPage() {
	let data = useLocation();
	return (
		<Request numRequest={data.state.numRequest}/>
	);
};

export default RequestPage;
