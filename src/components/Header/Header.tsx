import {  
	HeaderTop,
	HeaderBottom,
	HeaderBottomProfile,
	HeaderBottomPromotion,
} from '../';

import { HeaderSettings } from './types';

import styles from './Header.module.scss';
import HeaderTopProfile from '../HeaderTopProfile'

function Header(props: HeaderSettings) {

	return (
		<header className={styles.header}>
			{/* <HeaderTop /> */}
			<HeaderTopProfile />
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