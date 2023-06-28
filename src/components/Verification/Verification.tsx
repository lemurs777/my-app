import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './Verification.module.scss';

function Verification() {
	return (
		<div className={styles.verification}>
			<div className={styles.header}>
				<Link className={styles.headerBtn} to="/profile/">Profile</Link>
				<h1 className={styles.headerTitle}>Верификация аккаунта</h1>
			</div>
			<div className={styles.content}>
				<h2 className={styles.contentTitle}>Пожалуйста, пройдите 3-х шаговую верификацию</h2>
				<label className={clsx(styles.label, styles.labelPhone)}>
					<p className={styles.labelText}>Номер телефона<span className={styles.labelTextaAcent}>*</span></p>
					<input className={styles.input} type="text" placeholder="+7 (___) ___-__-__" />
				</label>
				<label className={clsx(styles.label, styles.labelCode)}>
					<p className={styles.labelText}>Код подтверждения<span className={styles.labelTextaAcent}>*</span></p>
					<input className={styles.input} type="text" placeholder="_ _ _ _" />
				</label>
				<button className={styles.btnNext}>Продолжить</button>
			</div>
		</div>
	);
}

export default Verification;