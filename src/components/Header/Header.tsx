import {  
	HeaderTop,
	HeaderBottom,
} from '../';

import styles from './Header.module.scss';

interface HeaderSettings {
	showBottom: boolean;
}

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