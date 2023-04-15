import { 
	Balance,
	Faq,
	Exit,
	MyProfile,
} from '../components/';

function Profile(){
	return (
		<main className="page page--profile">
			<div className="column-left column-left--profile">
				<Balance />
				<Faq />
				<Exit />
			</div>
			<div className="column-right column-right--profile">
				<MyProfile />
			</div>
		</main>
	);
};

export default Profile;
