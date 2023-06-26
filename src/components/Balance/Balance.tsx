import clsx from 'clsx';

import styles from './Balance.module.scss';

function Balance() {
return (
	<div className={styles.balance}>
		<div className={styles.header}>
			<button className={styles.btnCopy}>
				ID 537073408
			</button>
			<button className={styles.btnUpdate}>
				Update information
			</button>
			<button className={styles.btnShow}>
				Show information
			</button>
		</div>
		<div className={styles.count}>
			1850.00₽
		</div>
		<div className={styles.text}>
			Баланс
		</div>
		<div className={styles.btnWrapper}>
			<button className={clsx(styles.btn, styles.btnAdd)}>
				+ Пополнить
			</button>
			<button className={clsx(styles.btn, styles.btnVerification)}>
				Начать верификацию
			</button>
		</div>
		<div className={styles.info}>
			<div className={styles.infoGame}>
				<div className={styles.infoCount}>1850.00₽</div>
				<div className={styles.infoText}>В игре</div>
			</div>
			<div className={styles.infoGame}>
				<div className={styles.infoCount}>0.00₽</div>
				<div className={styles.infoText}>На выплату</div>
			</div>
		</div>
	</div>
);
}

export default Balance;
