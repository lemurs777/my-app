import {
	GameInfo,
	Broadcast,
	Multiple, 
	MenuGame, 
} from '../components/';

function HomePageGames(){
	return (
		<>
			<MenuGame />
			<main className="page page--game">
				<GameInfo />
			</main>
			<aside className="aside aside--index scroll">
				<Broadcast />
				<Multiple />
			</aside>
		</>	
	);
};

export default HomePageGames;