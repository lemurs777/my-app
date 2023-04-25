import React from 'react';
import { Outlet } from "react-router-dom";
import { 
	HeaderTop,
} from '../components/';

type MyComponentProps = React.PropsWithChildren<{}>

function AppsLayout( {children}:  MyComponentProps) {
	return (
		<>
			<HeaderTop />
            <main className="page page-apps scroll">
                {children}
                <Outlet />
            </main>
		</>
	);
};

export default AppsLayout;