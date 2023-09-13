import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import styles from './Balance.module.scss'

function Balance() {

	const [isShow, setIsShow] = useState(true)

	const updateShow = () => {
		setIsShow(current => !current)
	}
	return (
		<div className={styles.balance}>
			<div className={styles.header}>
				<button className={styles.btnCopy} onClick={() => window.navigator.clipboard.writeText('537073408')}>
					ID 537073408
				</button>

				<button className={styles.btnUpdate}>
					Update information
				</button>
				<button className={styles.btnShow} onClick={updateShow}>
					Show information
				</button>
			</div>
			<div className={styles.inner}>
				<div className={styles.item}>
					<div className={styles.count}>{isShow ? '1850.00₽' : '••••••••'}</div>
					<div className={styles.text}>
						Баланс
					</div>
				</div>
				<div className={`${styles.info} ${styles.mobile}`}>
				<div className={styles.infoGame}>
					<div className={styles.infoCount}>{isShow ? '1850.00₽' : '••••••••'}</div>
					<div className={styles.infoText}>В игре</div>
				</div>
				<div className={styles.infoGame}>
					<div className={styles.infoCount}>{isShow ? '0.00₽' : '••••••••'}</div>
					<div className={styles.infoText}>На выплату</div>
				</div>
			</div>
			</div>

			<div className={styles.btnWrapper}>
				<button className={clsx(styles.btn, styles.btnAdd)}>
					+ Пополнить
				</button>
				<Link className={clsx(styles.btn, styles.btnVerification)} to="/profile/verification">
					Начать верификацию
				</Link>
			</div>
			<div className={styles.info}>
				<div className={styles.infoGame}>
					<div className={styles.infoCount}>{isShow ? '1850.00₽' : '••••••••'}</div>
					<div className={styles.infoText}>В игре</div>
				</div>
				<div className={styles.infoGame}>
					<div className={styles.infoCount}>{isShow ? '0.00₽' : '••••••••'}</div>
					<div className={styles.infoText}>На выплату</div>
				</div>
			</div>
		</div>
	)
}

export default Balance
