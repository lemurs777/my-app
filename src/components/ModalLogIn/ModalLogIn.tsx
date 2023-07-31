import clsx from 'clsx';
import { useState } from "react";

import { ModalType } from './types';

import styles from './ModalLogIn.module.scss';

function ModalLogIn (props: ModalType) {

	const [isTab, setIsTab] = useState('email');

	return (
		<div className={styles.modalLogIn}>
			<h2 className={styles.title}>Вход</h2>
			<div className={styles.btnWrapper}>
				<button 
					onClick={() => setIsTab('email')}
					className={clsx(
						styles.tabBtn,
						{[styles.tabBtnActive] : isTab === 'email' }
					)}
				>Почта</button>
				<button 
					onClick={() => setIsTab('phone')}
					className={clsx(
						styles.tabBtn,
						{[styles.tabBtnActive] : isTab === 'phone' }
					)}
				>Телефон</button>
			</div>
			<div className={clsx(
				styles.tab,
				{[styles.tabActive] : isTab === 'email' }
			)}>
				<label className={styles.label}>
					<div className={styles.labelInfo}>Почта</div>
					<input className={styles.labelInput} type='email' placeholder='test@yandex.ru'/>
				</label>
				<button className={styles.btn}>Продолжить</button>
			</div>
			<div className={clsx(
				styles.tab,
				{[styles.tabActive] : isTab === 'phone' }
			)}>
				<div className={styles.label}>
					<div className={styles.labelInfo}>Номер телефона</div>
					<div className={styles.inputWrapper}>
						<div className={styles.selectCode}>+7</div>
						<input className={styles.labelInputPhone} type='text' placeholder='950–046–14–87'/>
					</div>
				</div>
				<button className={styles.btn}>Продолжить</button>
			</div>
		</div>
	);
}

export default ModalLogIn;
