import clsx from 'clsx';
import { useState } from "react";

import { ModalType } from './types';

import styles from './ModalRegistrationFull.module.scss';

function ModalRegistrationFull (props: ModalType) {

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

	const ArrСountry = [
		{
			name: 'Россия',
			code: 'ru',
		},
		{
			name: 'Польша',
			code: 'pl',
		},
		{
			name: 'Германия',
			code: 'de',
		},
	];

	const [isСountryOpen, setIsСountryOpen] = useState(false);
	const [isСountry, setIsСountry] = useState(0);

	const [isСurrencyOpen, setIsСurrencyOpen] = useState(false);
	const [isСurrency, setIsСurrency] = useState(0);

	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [promocode, setPromocode] = useState('');
	const [date, setDate] = useState('');
	const [address, setAddress] = useState('');

	function handleFirstname(event: any) {
		setFirstname(event.target.value);
	}

	function handleLastname(event: any) {
		setLastname(event.target.value);
	}

	function handleEmail(event: any) {
		setEmail(event.target.value);
	}

	function handlePhone(event: any) {
		setPhone(event.target.value);
	}

	const handlePromocode = (e: any) => {
		const regex = /^[0-9\b]+$/;
		if (e.target.value === "" || regex.test(e.target.value)) {
			setPromocode(e.target.value);
		}
	};

	function handleDate(event: any) {
		setDate(event.target.value);
	}

	const toggeSelectСountry = () => {
		setIsСountryOpen(current => !current);
	}

	function handleAddress(event: any) {
		setAddress(event.target.value);
	}

	function UpdateСountry(index: number) {
		setIsСountry(index);
		toggeSelectСountry();
	}

	const toggeSelect = () => {
		setIsСurrencyOpen(current => !current);
	}

	function UpdateСurrency(index: number) {
		setIsСurrency(index);
		toggeSelect();
	}

	return (
		<div className={styles.ModalRegistrationFull}>
			<h2 className={styles.title}>Регистрация</h2>
			<label className={styles.label}>
				<div className={styles.labelInfo}>Имя</div>
				<input className={styles.labelInput} type='text' value={firstname} onChange={handleFirstname} placeholder='Введите имя'/>
			</label>
			<label className={styles.label}>
				<div className={styles.labelInfo}>Фамилия</div>
				<input className={styles.labelInput} type='text' value={lastname} onChange={handleLastname} placeholder='Введите фамилию'/>
			</label>
			<label className={styles.label}>
				<div className={styles.labelInfo}>Почта</div>
				<input className={styles.labelInput} type='email' value={email} onChange={handleEmail} placeholder='test@yandex.ru'/>
			</label>
			<div className={styles.label}>
				<div className={styles.labelInfo}>Номер телефона</div>
				<input className={styles.labelInput} type='text' value={phone} onChange={handlePhone} placeholder='+7XXXXXXXXXX'/>
			</div>
			<div className={clsx(styles.label, styles.labelCode)}>
				<div className={styles.labelInfo}>Код подтверждения</div>
				<div className={styles.codeWrapper}>
					<input className={styles.labelInput} type='text' value={promocode} onChange={handlePromocode} placeholder='______' maxLength={6}/>
				</div>
			</div>
			<button className={styles.btn}>Отправить повторно</button>
			<div className={styles.btnText}>Отправка доступна через 0 с</div>
			<label className={styles.label}>
				<div className={styles.labelInfo}>Дата рождения</div>
				<input className={styles.labelInput} type='text' value={date} onChange={handleDate} placeholder='Введите дату рождения'/>
			</label>
			<div className={styles.text}>Выбор страны</div>
			<div className={styles.selectСountryWrapper}>
				<div 
					onClick={toggeSelectСountry}
					className={clsx(
					styles.selectСountry,
				)}>
					{ArrСountry[isСountry].name}
				</div>
				<ul className={clsx(
					styles.selectСountryList,
					{[styles.selectСountryListOpen] : isСountryOpen}
				)}>
					{ArrСountry.map((item, index) => (
						<li 
							key={index} 
							className={clsx(styles.selectСountryItem)}
							onClick={() => { UpdateСountry(index)}}
						>
							{item.name}
						</li>
					))}
				</ul>
			</div>
			<label className={styles.label}>
				<div className={styles.labelInfo}>Адрес</div>
				<input className={styles.labelInput} type='text' value={address} onChange={handleAddress} placeholder='Введите адрес'/>
			</label>
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
		</div>
	);
}

export default ModalRegistrationFull;
