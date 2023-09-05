import { ModalType } from './types';
import clsx from 'clsx';
import { useState } from "react";

import styles from './ModalRefill.module.scss';

function ModalRefill (props: ModalType) {

	const [isMethodOpen, setIsMethodOpen] = useState(false);
	const [isMethod, setIsMethod] = useState(0);

	const toggeSelectMethod = () => {
		setIsMethodOpen(current => !current);
	}

	function UpdateMethod(index: number) {
		setIsMethod(index);
		toggeSelectMethod();
	}

	const ArrMethod = [
		{ name: 'VISA' },
		{ name: 'MASTERCARD' },
		{ name: 'МИР' },
		{ name: 'American Express' },
		{ name: 'UnionPay' },
		{ name: 'QIWI KZ' },
		{ name: 'КРИПТА' },
		{ name: 'WebMoney' },
		{ name: 'Баланс телефона' },
		{ name: 'Терминал QIWI' },
		{ name: 'Apple Pay' },
		{ name: 'Google Pay' },
		{ name: 'Capitalist' },
		{ name: 'Samsung Pay' },
		{ name: 'PayPal' },
		{ name: 'PAYEER' },
		{ name: 'MuchBetter' },
	];

	const [isСurrencyOpen, setIsСurrencyOpen] = useState(false);
	const [isСurrency, setIsСurrency] = useState(0);

	const toggeSelectСurrency = () => {
		setIsСurrencyOpen(current => !current);
	}

	function UpdateСurrency(index: number) {
		setIsСurrency(index);
		toggeSelectСurrency();
	}

	const ArrСurrency = [
		{ name: '₸' },
		{ name: '$' },
		{ name: '€' },
		{ name: '₽' },
		{ name: '₿' },
		{ name: '¥' },
	];

	const [sum, setSum] = useState("");

	const updateSum = (e: any) => {
		const regex = /^[\D0]+|\D/;
		if (e.target.value === "" || !regex.test(e.target.value)) {
			setSum(e.target.value);
		}
	}

	return (
		<div className={styles.modalRefill}>
			<h2 className={styles.title}>Пополнение счёта</h2>
			<div className={styles.text}>Способ оплаты</div>
			<div className={styles.selectMethodWrapper}>
				<div 
					onClick={toggeSelectMethod}
					className={clsx(
					styles.selectMethod,
				)}>
					{ArrMethod[isMethod].name}
				</div>
				<ul className={clsx(
					styles.selectMethodList,
					{[styles.selectMethodListOpen] : isMethodOpen}
				)}>
					{ArrMethod.map((item, index) => (
						<li 
							key={index} 
							className={clsx(styles.selectMethodItem)}
							onClick={() => { UpdateMethod(index)}}
						>
							{item.name}
						</li>
					))}
				</ul>
			</div>
			<div className={styles.text}>Сумма пополнения</div>
			<div className={styles.selectСurrencyBigWrapper}>
				<div className={styles.selectСurrencyWrapper}>
					<div 
						onClick={toggeSelectСurrency}
						className={clsx(
						styles.selectСurrency,
					)}>
						{ArrСurrency[isСurrency].name}
					</div>
					<ul className={clsx(
						styles.selectСurrencyList,
						{[styles.selectСurrencyListOpen] : isСurrencyOpen}
					)}>
						{ArrСurrency.map((item, index) => (
							<li 
								key={index} 
								className={clsx(styles.selectСurrencyItem)}
								onClick={() => { UpdateСurrency(index)}}
							>
								{item.name}
							</li>
						))}
					</ul>
				</div>
				<input className={styles.itemInput} type="text" placeholder="Введите сумму" value={sum} onChange={updateSum}/>
			</div>
			<button className={styles.btn}>К оплате</button>
		</div>
	);
}

export default ModalRefill;
