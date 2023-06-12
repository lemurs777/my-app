import React from 'react';
import { Outlet } from "react-router-dom";
import { 
	Header,
    Balance,
    RequestsMenu,
} from '../components/';

type MyComponentProps = React.PropsWithChildren<{}>

function RequestsLayout( {children}:  MyComponentProps) {
	return (
		<>
			<Header />
            <main className="page page--requests">
				<div className="column-left column-left--requests">
					<Balance />
                    <RequestsMenu />
				</div>
				<div className="column-right column-right--requests scroll">
					{children}
					<Outlet />
				</div>
			</main>
		</>
	);
};

export default RequestsLayout;