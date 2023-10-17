import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderTopProfile from '../components/HeaderTopProfile'
import HeaderBottomEvent from '../components/HeaderBottomEvent'

type MyComponentProps = React.PropsWithChildren<{}>
//@ts-ignore
const EventsLayout = ({ children, icon, link }: MyComponentProps) => {
	return (
		<>
			<HeaderTopProfile />
			{/*<HeaderBottomEvent icon={icon} link={link} />*/}
			{children}
			<Outlet />
		</>
	)
}

export default EventsLayout
