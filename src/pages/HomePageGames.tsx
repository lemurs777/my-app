import {
	GameInfo,
	GameBanner,
	Sports,
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
				<div className="game-wrapper scroll">
					<GameBanner />
					<Sports />
				</div>
			</main>
			<aside className="aside aside--index scroll">
				<Broadcast />
				<Multiple />
			</aside>
		</>	
	);
};

export default HomePageGames;