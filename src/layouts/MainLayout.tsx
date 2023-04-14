import React from 'react';
import { Outlet } from "react-router-dom";
import { 
	Header,
	Menu,
} from '../components/';

type MyComponentProps = React.PropsWithChildren<{}>

function MainLayout( {children}:  MyComponentProps) {
	return (
		<>
			<Header />
			<Menu />
			{children}
			<Outlet />
		</>
	);
};

export default MainLayout;