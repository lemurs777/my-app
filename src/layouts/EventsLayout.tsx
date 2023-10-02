import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderTopProfile from '../components/HeaderTopProfile'
import HeaderBottomEvent from '../components/HeaderBottomEvent'

type MyComponentProps = React.PropsWithChildren<{}>
const EventsLayout = ({ children }: MyComponentProps) => {
	return (
		<>
			<HeaderTopProfile />
			<HeaderBottomEvent />
			{children}
			<Outlet />
		</>
	)
}

export default EventsLayout
