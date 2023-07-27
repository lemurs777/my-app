import {  
	HeaderTop,
	HeaderBottom,
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
		</header>
	);
}

export default Header;