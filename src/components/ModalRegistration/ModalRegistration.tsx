import clsx from 'clsx';
import { useState } from "react";

import { ModalType } from './types';

import { registration as registrationApi, Registration as RegistrationData } from '../../services/api'

import styles from './ModalRegistration.module.scss';

function ModalRegistration (props: ModalType) {

	const ArrСurrency = [
		{
			name: 'Российский рубль',
			code: 'RUB',
		},
		{
			name: 'Доллар США',
			code: 'USD',
		},
		{
			name: 'Евро',
			code: 'EUR',
		},
	];

	const [isСurrencyOpen, setIsСurrencyOpen] = useState(false);
	const [isСurrency, setIsСurrency] = useState(0);
	const [isApprove, setIsApprove] = useState(false);

	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');

	function handleEmail(event: any) {
		setEmail(event.target.value);
	}

	function handlePhone(event: any) {
		setPhone(event.target.value);
	}

	const toggeSelect = () => {
		setIsСurrencyOpen(current => !current);
	}

	function UpdateСurrency(index: number) {
		setIsСurrency(index);
		toggeSelect();
	}

	const [isTab, setIsTab] = useState('email');

	return (
		<div className={styles.ModalRegistration}>
			<h2 className={styles.title}>Регистрация</h2>
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
			<div className={styles.text}>Валюта</div>
			<div className={styles.selectСurrencyWrapper}>
				<div 
					onClick={toggeSelect}
					className={clsx(
					styles.selectСurrency,
					{[styles.selectСurrencyRu] : ArrСurrency[isСurrency].code === 'RUB'},
					{[styles.selectСurrencyRu] : ArrСurrency[isСurrency].code === 'USD'},
					{[styles.selectСurrencyRu] : ArrСurrency[isСurrency].code === 'EUR'}
				)}>
					{ArrСurrency[isСurrency].code} ({ArrСurrency[isСurrency].name})
				</div>
				<ul className={clsx(
					styles.selectСurrencyList,
					{[styles.selectСurrencyListOpen] : isСurrencyOpen}
				)}>
					{ArrСurrency.map((item, index) => (
						<li 
							key={index} 
							className={clsx(
								styles.selectСurrencyItem,
								{[styles.selectСurrencyItemRu] : item.code === 'RUB'},
								{[styles.selectСurrencyItemRu] : item.code === 'USD'},
								{[styles.selectСurrencyItemRu] : item.code === 'EUR'},
							)}
							onClick={() => { UpdateСurrency(index)}}>
							{item.code} ({item.name})
						</li>
					))}
				</ul>
			</div>
			<label className={clsx(
					styles.approveLabel,
					{ [styles.approveLabelActive] : isApprove},
				)}>
				<input className={styles.approveCheckbox} type="checkbox" checked={isApprove} onChange={() => setIsApprove((approve) => !approve)} />Я даю согласие на обработку моих персональных данных
			</label>
			<button className={clsx(
				styles.btn,
				{ [styles.btnActive] : isApprove},
			)} onClick={async () => {
				const data = {
					Email: email,
					Phone: phone,
					Currency: ArrСurrency[isСurrency].code
				}
				const reply = await registrationApi(data as RegistrationData);
				console.log(reply);
			}}>Продолжить</button>
		</div>
	);
}

export default ModalRegistration;
