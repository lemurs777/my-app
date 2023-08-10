import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useState } from 'react';

import Good from '../../assets/images/svg/verification-good.svg';

import { verification as verificationApi, Verification as VerificationData } from '../../services/api';

import styles from './Verification.module.scss';



function Verification() {

	const [isStep, setIsStep] = useState(1);

	const updateStep = (step: number) => {
		setIsStep((currentValue) => (currentValue = step));
	};

	const [phone, setPhone] = useState('');
	const [code, setCode] = useState('');
	const [lastname, setLastname] = useState('');
	const [firstname, setFirstname] = useState('');
	const [fathername, setFathername] = useState('');
	const [passport, setPassport] =  useState('');
	const [country, setCountry] =  useState('');
	const [address, setAddress] =  useState('');
	const [photo, setPhoto] =  useState('');

	function handlePhone(event: any) {
		setPhone(event.target.value);
	}

	function handleCode(event: any) {
		setCode(event.target.value);
	}

	function handleLastname(event: any) {
		setLastname(event.target.value);
	}

	function handleFirstname(event: any) {
		setFirstname(event.target.value);
	}

	function handleFathername(event: any) {
		setFathername(event.target.value);
	}

	function handlePassport(event: any) {
		setPassport(event.target.value);
	}

	function handleCountry(event: any) {
		setCountry(event.target.value);
	}

	function handleAddress(event: any) {
		setAddress(event.target.value);
	}

	function handlePhoto(event: any) {
		setPhoto(event.target.value);
	}

	const [fileName, setFileName] = useState('');

	const onInputChanged = (event: any) => {
		const file =  event.currentTarget.files.name;
		setFileName((currentValue) => (currentValue = file));
		handlePhoto(event.currentTarget.files);
	}

	return (
		<div className={styles.verification}>
			<div className={styles.header}>
				<Link className={styles.headerBtn} to="/profile/">Profile</Link>
				<h1 className={styles.headerTitle}>Верификация аккаунта</h1>
			</div>
			<div className={clsx(
				styles.content,
				styles.contentOne,
				{[styles.contentActive] : isStep === 1}
			)}>
				<h2 className={styles.contentTitle}>Пожалуйста, пройдите 3-х шаговую верификацию</h2>
				<label className={clsx(styles.label, styles.labelPhone)}>
					<p className={styles.labelText}>Номер телефона <span className={styles.labelTextAccent}>*</span></p>
					<input className={styles.input} type="text" value={phone} onChange={handlePhone} placeholder="+7 (___) ___-__-__" />
				</label>
				<label className={clsx(styles.label, styles.labelCode)}>
					<p className={styles.labelText}>Код подтверждения <span className={styles.labelTextAccent}>*</span></p>
					<input className={styles.input} type="text" value={code} onChange={handleCode} placeholder="_ _ _ _" />
				</label>
				<button className={styles.btnNext} onClick={() => updateStep(2)}>Продолжить</button>
			</div>
			<div className={clsx(
				styles.content,
				styles.contentTwo,
				{[styles.contentActive] : isStep === 2}
			)}>
				<label className={clsx(styles.label)}>
					<p className={styles.labelText}>Фамилия <span className={styles.labelTextAccent}>*</span></p>
					<input className={styles.input} type="text" value={lastname} onChange={handleLastname} placeholder="____________"/>
				</label>
				<label className={clsx(styles.label)}>
					<p className={styles.labelText}>Имя <span className={styles.labelTextAccent}>*</span></p>
					<input className={styles.input} type="text" value={firstname} onChange={handleFirstname} placeholder="____________" />
				</label>
				<label className={clsx(styles.label)}>
					<p className={styles.labelText}>Отчество <span className={styles.labelTextAccent}>*</span></p>
					<input className={styles.input} type="text" value={fathername} onChange={handleFathername} placeholder="____________" />
				</label>
				<label className={clsx(styles.label, styles.labelPassport)}>
					<p className={styles.labelText}>Серия и номер паспорта <span className={styles.labelTextAccent}>*</span></p>
					<input className={styles.input} type="text" value={passport} onChange={handlePassport} placeholder="__ __ ______" />
				</label>
				<button className={styles.btnNext} onClick={() => updateStep(3)}>Продолжить</button>
			</div>
			<div className={clsx(
				styles.content,
				styles.contentThree,
				{[styles.contentActive] : isStep === 3}
			)}>
				<label className={clsx(styles.label)}>
					<p className={styles.labelText}>Страна <span className={styles.labelTextAccent}>*</span></p>
					<input className={styles.input} type="text" value={country} onChange={handleCountry} placeholder="____________" />
				</label>
				<label className={clsx(styles.label)}>
					<p className={styles.labelText}>Город, улица <span className={styles.labelTextAccent}>*</span></p>
					<input className={styles.input} type="text" value={address} onChange={handleAddress} placeholder="____________" />
				</label>
				<label className={clsx(styles.label, styles.labelPhoto)}>
					<p className={styles.labelText}>Счет коммунальных услуг <span className={styles.labelTextAccent}>*</span></p>
					<div className={clsx(styles.input, styles.inputCustom)}>
						<div className={clsx(
							styles.inputBtn,
							{[styles.inputBtnActive] : fileName !== ''}
						)}> { fileName === '' ? 'Выберите файл' : 'Файл загружен'}</div>
					</div>
					<input 
						className={styles.inputFile} 
						type="file" 
						accept='image/*' 
						value={photo}
						multiple = {false}
						hidden
						onChange={(event) => onInputChanged(event)}
					/>
				</label>
				<button className={styles.btnNext} onClick={ async () => {
					updateStep(4);
					const data = {
						Phone: phone,
						Code: code,
						FirstName: firstname,
						LastName: lastname,
						FatherName: fathername,
						Passport: passport,
						Country: country,
						Address: address,
						Photo: photo,
					}
					const reply = await verificationApi(data as VerificationData);
					console.log(reply);
			}}>Продолжить</button>
			</div>
			<div className={clsx(
				styles.content,
				styles.contentFour,
				{[styles.contentActive] : isStep === 4}
			)}>
				<div className={styles.finish}>
					<img className={styles.finishImg} src={Good} alt="Верификация пройдена успешно" />
					<div className={styles.finishText}>Верификация пройдена успешно</div>
				</div>
			</div>
		</div>
	);
}

export default Verification;