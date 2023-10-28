import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderTopProfile from '../components/NotUse/HeaderTopProfile'
import HeaderBottomEvent from '../components/HeaderBottomEvent'
import {Header} from "../components";

type MyComponentProps = React.PropsWithChildren<{}>
//@ts-ignore
const EventsLayout = ({ children, icon, link }: MyComponentProps) => {
	return (
		<>
			{/*<HeaderTopProfile />*/}
			{/*<HeaderBottomEvent icon={icon} link={link} />*/}
			{/*<Header isLogIn={true}  showBottomPromotion={true}/>*/}
			{children}
			<Outlet />
		</>
	)
}

export default EventsLayout
