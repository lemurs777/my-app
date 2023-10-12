import React from 'react'
import { HeaderBottomProfile, HeaderTop, Menu } from '../components'
import CouponEmpty from '../components/CouponEmpty'
import MenuCyberSport from '../components/MenuCyberSport'
import Broadcast from '../components/Broadcast'
import Stream from '../components/Stream'

const CyberSportEventPage = () => {
	return (
		<>
			<HeaderTop />
			<HeaderBottomProfile />
			<main className='main main--cyberSport'>
				<MenuCyberSport />
				<Stream />
				<aside className='aside'>
					<Broadcast auth={true} />
					<CouponEmpty />
				</aside>
			</main>
		</>
	)
}

export default CyberSportEventPage
