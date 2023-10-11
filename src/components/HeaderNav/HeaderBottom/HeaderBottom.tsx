import React from 'react'
import styles from './HeaderBottom.module.scss'
import HeaderBreadCrumb from '../../HeaderComnonents/HeaderBreadCrumb'
import HeaderSearch from '../../HeaderSearch'
import HeaderInfo from '../../HeaderInfo'
import MobileApps from '../../MobileApps'
import { Language } from '@mui/icons-material'
const HeaderBottom = () => {
	return (
		<div className={styles.headerBottom}>
			<div className={styles.headerBottom__col}>
				<div className={styles.search}>
					<HeaderSearch />
				</div>
			</div>
			<div className={styles.headerBottom__col}>
				<HeaderBreadCrumb />
			</div>
			<div className={styles.headerBottom__col}>
				<div className={styles.info}>
					<HeaderInfo />
				</div>
				<div className={styles.apps}>
					<MobileApps />
				</div>
				<div className={styles.language}>
					<Language />
				</div>
			</div>
		</div>
	)
}

export default HeaderBottom
