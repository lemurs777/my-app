import React from 'react';
import { Outlet } from "react-router-dom";
import { 
	Header,
} from '../components/';

type MyComponentProps = React.PropsWithChildren<{}>

function PromotionsLayout( {children}:  MyComponentProps) {
	return (
		<>
			<Header />
			<main className="page page--promotions scroll">
				{children}
				<Outlet />
			</main>
		</>
	);
};

export default PromotionsLayout;