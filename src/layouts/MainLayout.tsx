import React from 'react';
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
		</>
	);
};

export default MainLayout;