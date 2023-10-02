import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/'

type MyComponentProps = React.PropsWithChildren<{}>

function AppsLayout({ children }: MyComponentProps) {
	return (
		<>
			<Header showBottom={false} />
			<main className='page page--apps scroll'>
				{children}
				<Outlet />
			</main>
		</>
	)
}

export default AppsLayout
