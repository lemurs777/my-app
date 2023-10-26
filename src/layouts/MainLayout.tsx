import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/'

type MyComponentProps = React.PropsWithChildren<{}>

function MainLayout({ children }: MyComponentProps) {
	return (
		<>
			<Header showBottom={true} showTop={true} isLogIn={false}/>
			{children}
			<Outlet />
		</>
	)
}

export default MainLayout
