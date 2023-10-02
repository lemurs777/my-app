import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Balance, FaqSmallList, Exit } from '../components/'

type MyComponentProps = React.PropsWithChildren<{}>

function ProfileLayout({ children }: MyComponentProps) {
	return (
		<>
			<Header showBottom={false} showBottomProfile={true} />
			<main className='page page--profile'>
				<div className='column-left column-left--profile'>
					<Balance />
					<FaqSmallList />
					<Exit />
				</div>
				<div className='column-right column-right--profile scroll'>
					{children}
					<Outlet />
				</div>
			</main>
		</>
	)
}

export default ProfileLayout
