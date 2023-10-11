import {
	GameInfo,
	GameBanner,
	CyberSport,
	Broadcast,
	Multiple,
	MenuGame,
	HeaderTop,
	HeaderBottom,
} from '../components/'
import CouponEmpty from '../components/CouponEmpty'
import SportFooter from '../components/SportFooter'

function HomePageGames() {
	return (
		<>
			<HeaderTop />
			<HeaderBottom />
			<MenuGame />
			<main className='page page--game'>
				<GameInfo />
				<div className='game-wrapper scroll'>
					<GameBanner />
					<CyberSport />
					<SportFooter />
				</div>
			</main>
			<aside className='aside aside--index aside--cyber scroll'>
				<Broadcast />
				{/*<Multiple />*/}
				<CouponEmpty />
			</aside>
		</>
	)
}

export default HomePageGames
