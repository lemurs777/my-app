import { Link } from 'react-router-dom';

function Conclusions() {
	return (
		<div className="conclusions">
			<div className="conclusions__header">
				<Link className="conclusions__header-btn" to="/profile/">Profile</Link>
				<h1 className="conclusions__header-title">Транзакции</h1>
			</div>
		</div>
	);
}

export default Conclusions;