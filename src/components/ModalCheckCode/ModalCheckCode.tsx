import clsx from 'clsx';
import { useState, useCallback } from "react";

import { ModalType } from './types';

import styles from './ModalCheckCode.module.scss';

function ModalCheckCode (props: ModalType) {

	let type = 'email'; // email/phone
	let error = false;
	let errorMessage = false;

	const codeLength = 6;

	const emptyPin = Array.from(Array(codeLength).keys()).map((item) => ({
		id: Number(item),
		value: ""
	}));

	const [pin, setPin] = useState(emptyPin);
	const [activeNumber, setActiveNumber] = useState(0);
	const autoFocus = useCallback((el: any) => (el ? el.focus() : null), []);

	const handleOnChange = (event :any) => {
		if (event.target.value) {
		const newPin = pin.map((num) => {
			if (num.id === +event.target.id) {
			return { id: +event.target.id, value: event.target.value };
			} else return num;
		});
		setPin(newPin);
		setActiveNumber(activeNumber + 1);
		}
	};

	const handleOnFocus = (event: any) => {
		if (event.target.value) {
			setActiveNumber(+event.target.id);
			let code = document.getElementById(event.target.id) as HTMLInputElement;
			code.select();
		}
	};

	//const pinToString = pin.map((num) => num.value).join("");

	return (
		<div className={styles.modalCheckCode}>
			<h2 className={styles.title}>Подтверждение</h2>
			{ type === 'phone' ? (
				<div className={styles.info}>
					<div className={styles.infoText}>Подтвердите телефон кодом из SMS</div>
					<div className={styles.infoWrapper}>
						<div className={styles.infoData}>+7 (950) <span>&bull;&bull;&bull;&bull;</span> 14–87</div>
						<button className={styles.infoBtn}>изменить</button>
					</div>	
				</div>
			) : type === 'email' ? (
				<div className={styles.info}>
					<div className={styles.infoText}>Мы отправили код на почту</div>
					<div className={styles.infoWrapper}>
						<div className={styles.infoData}>D1 <span>&bull;&bull;&bull;&bull;</span> @ya.ru</div>
					</div>
				</div>
			) : null }
			<div className={styles.name}>Код подтверждения</div>
			<div className={clsx(
				styles.codeContainer,
				{[styles.codeContainerError]: error},
				{[styles.codeContainerErrorMessage]: errorMessage},
			)}>
				<div className={styles.codeMessage}>Код подтверждения устарел</div>
				{Array.from(Array(codeLength).keys()).map((item) => (
					<input
						className={styles.input}
						key={item}
						type="text"
						id={item.toString()}
						maxLength={1}
						onChange={handleOnChange}
						onFocus={handleOnFocus}
						ref={item === activeNumber ? autoFocus : undefined}
					/>
				))}
			</div>
			<button className={styles.btnSend} disabled={true}>Отправить повторно</button>
			<div className={styles.time}>Отправка доступна через 32 с</div>
			<button className={styles.btn}>Продолжить</button>
			{type === 'email' ? (
				<div className={styles.more}>
					<div className={styles.moreTitle}>Совет</div>
					<div className={styles.moreText}>
					Вы можете перейти на вход по номеру телефона, это удобнее
					</div>
				</div>
			) : null }
		</div>
	);
}

export default ModalCheckCode;
