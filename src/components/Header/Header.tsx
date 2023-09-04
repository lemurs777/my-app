import {  
	HeaderTop,
	HeaderBottom,
	HeaderBottomProfile,
	HeaderBottomPromotion,
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
			{props.showBottomPromotion && (
				<HeaderBottomPromotion />
			)}
		</header>
	);
}

export default Header;