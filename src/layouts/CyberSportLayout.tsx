import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderBottomEvent from '../components/HeaderBottomEvent'
import HeaderTopProfile from '../components/NotUse/HeaderTopProfile'
type MyComponentProps = React.PropsWithChildren<{}>
const CyberSportLayout = ({ children }: MyComponentProps) => {
	return (
		<>
			{children}
			<Outlet />
		</>
	)
}

export default CyberSportLayout
