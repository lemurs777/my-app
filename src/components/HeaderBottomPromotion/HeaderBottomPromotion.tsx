import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './HeaderBottomPromotion.module.scss';

function HeaderBottomPromotion() {
return (
	<div className={styles.headerBottomPromotion}>
		<div className={styles.content}>
			<label className={styles.searchLabel}>
				<input className={styles.search} type="text" placeholder="Поиск по акциям"/>
				<svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path className={styles.searchIconPath} d="M15.7 14.3L11.5 10.1C11.3 9.9 11 9.8 10.7 9.8C11.5 8.8 12 7.4 12 6C12 2.7 9.3 0 6 0C2.7 0 0 2.7 0 6C0 9.3 2.7 12 6 12C7.4 12 8.8 11.5 9.8 10.6C9.8 10.9 9.8 11.2 10.1 11.4L14.3 15.6C14.5 15.8 14.8 15.9 15 15.9C15.2 15.9 15.5 15.8 15.7 15.6C16.1 15.3 16.1 14.7 15.7 14.3ZM6 10.5C3.5 10.5 1.5 8.5 1.5 6C1.5 3.5 3.5 1.5 6 1.5C8.5 1.5 10.5 3.5 10.5 6C10.5 8.5 8.5 10.5 6 10.5Z" fill="#898989"/>
				</svg>
			</label>
			<div className={styles.info}>
				<div className={styles.time}>
					17:43 (GMT+3)
				</div>
				<div className={styles.apps}>
					<Link className={clsx(styles.linkApp, styles.linkAppIphone)} to="/apps/">Приложение для iPhone</Link>
					<Link className={clsx(styles.linkApp, styles.linkAppAndroid)} to="/apps/">Приложение для Android</Link>
				</div>
				<button className={clsx(styles.selectLanguage, styles.ru)}>RU</button>
			</div>
		</div>
	</div>
);
}

export default HeaderBottomPromotion;