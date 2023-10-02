import React, { useEffect, useState } from 'react'
import {
	Header,
	HeaderBottom,
	HeaderBottomProfile,
	HeaderBottomPromotion,
	HeaderTop,
} from '../components'
import { Outlet } from 'react-router-dom'
import HeaderTopProfile from '../components/HeaderTopProfile'
import HeaderBottomEvent from '../components/HeaderBottomEvent'
type MyComponentProps = React.PropsWithChildren<{}>

const StatisticOneLayout = ({ children }: MyComponentProps) => {
	return (
		<>
			{/*<Header showBottom={true} showTopProfile={true} />*/}
			<HeaderTopProfile />
			<div className='desktop'>
				<HeaderBottom />
			</div>
			<div className='mobile'>
				<HeaderBottomPromotion />
			</div>

			{children}
			<Outlet />
		</>
	)
}

export default StatisticOneLayout
