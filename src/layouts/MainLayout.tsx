import React from 'react';
import { Outlet } from "react-router-dom";
import { 
	Header,
} from '../components/';

type MyComponentProps = React.PropsWithChildren<{}>

function MainLayout( {children}:  MyComponentProps) {
	return (
		<>
			<Header />
			{children}
			<Outlet />
		</>
	);
};

export default MainLayout;