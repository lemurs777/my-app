import React from 'react';
import { Outlet } from "react-router-dom";
import { 
	Header,
} from '../components/';

type MyComponentProps = React.PropsWithChildren<{}>

function StatisticsLayout( {children}:  MyComponentProps) {
	return (
		<>
			<Header showBottom={false} />
			{children}
			<Outlet />
		</>
	);
};

export default StatisticsLayout;