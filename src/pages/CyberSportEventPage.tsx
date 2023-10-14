import React from 'react'
import { GameInfo, HeaderBottomProfile, HeaderTop, Menu } from '../components'
import CouponEmpty from '../components/CouponEmpty'
import MenuCyberSport from '../components/MenuCyberSport'
import Broadcast from '../components/Broadcast'
import Stream from '../components/Stream'
import CyberEventScore from '../components/CyberEventScore'

const CyberSportEventPage = () => {
	return (
		<>
			<HeaderTop />
			<HeaderBottomProfile />
			<main className='main main--cyberSport'>
				<MenuCyberSport />
				<GameInfo />
				<div className='central'>
					<CyberEventScore />
					<Stream />
				</div>
				<aside className='aside'>
					<Broadcast auth={true} />
					<CouponEmpty />
				</aside>
			</main>
		</>
	)
}

export default CyberSportEventPage
