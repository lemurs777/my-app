import React from 'react'
import { Broadcast, HeaderBottomProfile, HeaderTop, Menu } from '../components'
import CouponEmpty from '../components/CouponEmpty'
import MenuCyberSport from '../components/MenuCyberSport'

const CyberSportEventPage = () => {
	return (
		<>
			<HeaderTop />
			<HeaderBottomProfile />
			<main className='main main--cyberSport'>
				<MenuCyberSport />
				<aside className='aside'>
					<CouponEmpty />
				</aside>
			</main>
		</>
	)
}

export default CyberSportEventPage
