import clsx from 'clsx';
import { useState } from "react";

import { ModalType } from './types';

import { login as loginApi, Login as LoginData } from '../../services/api';

import styles from './ModalLogIn.module.scss';

function ModalLogIn (props: ModalType) {

	let social = true;

	const [isTab, setIsTab] = useState('email');

	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');

	function handleEmail(event: any) {
		setEmail(event.target.value);
	}

	function handlePhone(event: any) {
		setPhone(event.target.value);
	}

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
					<input className={styles.labelInput} type='email' value={email} onChange={handleEmail} placeholder='test@yandex.ru'/>
				</label>
			</div>
			<div className={clsx(
				styles.tab,
				{[styles.tabActive] : isTab === 'phone' }
			)}>
				<div className={styles.label}>
					<div className={styles.labelInfo}>Номер телефона</div>
					<div className={styles.inputWrapper}>
						<div className={styles.selectCode}>+7</div>
						<input className={styles.labelInputPhone} type='text' value={phone} onChange={handlePhone} placeholder='950–046–14–87'/>
					</div>
				</div>
			</div>
			{ social ? (
				<>
					<div className={styles.socialText}>или используйте соц. сети</div>
					<div className={styles.socialWrapper}>
						<button className={clsx(styles.socialBtn, styles.socialBtnGoogle)}></button>
						<button className={clsx(styles.socialBtn, styles.socialBtnTg)}></button>
						<button className={clsx(styles.socialBtn, styles.socialBtnTw)}></button>
						<button className={clsx(styles.socialBtn, styles.socialBtnFb)}></button>
					</div>
				</>
			) : null}
			<button className={styles.btn} onClick={async () => {
				const data = {
					Email: email,
					Phone: phone
				}
				const reply = await loginApi(data as LoginData);
				console.log(reply);
			}}>Продолжить</button>
		</div>
	);
}

export default ModalLogIn;
