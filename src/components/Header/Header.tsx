import {  
	HeaderTop,
	HeaderBottom,
	HeaderBottomProfile,
} from '../';

import { HeaderSettings } from './types';

import styles from './Header.module.scss';

function Header(props: HeaderSettings) {

	return (
		<header className={styles.header}>
			<HeaderTop />
			{props.showBottom && (
				<HeaderBottom />
			)}
			{props.showBottomProfile && (
				<HeaderBottomProfile />
			)}
		</header>
	);
}

export default Header;