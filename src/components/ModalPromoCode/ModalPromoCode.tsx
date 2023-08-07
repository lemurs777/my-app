import clsx from 'clsx';
import { useState } from "react";

import { ModalType } from './types';

import { promocode as promocodeApi, Promocode as PromocodeData } from '../../services/api';

import styles from './ModalPromoCode.module.scss';

function ModalPromoCode (props: ModalType) {

	let status = 0;

	const [promocode, setPromocode] = useState("");

	const handlePromocode = (e: any) => {
		const regex = /^[0-9\b]+$/;
		if (e.target.value === "" || regex.test(e.target.value)) {
			setPromocode(e.target.value);
		}
	};
  

	return (
		<div className={styles.modalPromoCode }>
			<h2 className={styles.title}>Введите промокод</h2>
			<div className={clsx(
				styles.wrapper,
				{ [styles.wrapperError] : status === 1 || status === 2 || status === 3 || status === 4},
				{ [styles.wrapperGood] : status === 5 },
			)}>
				<input 
					className={styles.codeInput} 
					type="text" 
					placeholder="Введите промокод"
					value={promocode}
        			onChange={handlePromocode}
					maxLength={6}
				/>
				<button className={styles.codeBtn} onClick={async () => {
					const data = {
						Promocode: promocode,
					}
					const reply = await promocodeApi(data as PromocodeData);
					console.log(reply);
				}}>Применить</button>
			</div>
			{ status === 1 ? (
				<div className={styles.text}>
					<span className={styles.textError}>Неверный промокод.</span> Пожалуйста, проверьте правильность ввода и попробуйте снова.
				</div>
			) : status === 2 ? (
				<div className={styles.text}>
					<span className={styles.textError}>Промокод уже использован.</span> Вы не можете использовать его еще раз.
				</div>
			) : status === 3 ? (
				<div className={styles.text}>
					<span className={styles.textError}>Этот промокод вам недоступен.</span> Пожалуйста, обратитесь к условиям акции или свяжитесь с нашей службой поддержки, чтобы получить дополнительную информацию.
				</div>
			) : status === 4 ? (
				<div className={styles.text}>
					<span className={styles.textError}>Превышен лимит использования данного промокода.</span> Вы не можете использовать его больше ограниченного количества раз.
				</div>
			) : status === 5 ? (
				<div className={styles.text}>
					<span className={styles.textGood}>Промокод успешно применен!</span> Скидка или бонус будет зачислен на ваш счет в ближайшее время.
				</div>
			) : null}
		</div>
	);
}

export default ModalPromoCode;
