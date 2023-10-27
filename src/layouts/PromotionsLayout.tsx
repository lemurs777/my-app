import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/'

type MyComponentProps = React.PropsWithChildren<{}>

function PromotionsLayout({ children }: MyComponentProps) {
	return (
		<>
			<Header isLogIn={true}  showBottomPromotion={true}/>
			{children}
			<Outlet />
		</>
	)
}

export default PromotionsLayout
