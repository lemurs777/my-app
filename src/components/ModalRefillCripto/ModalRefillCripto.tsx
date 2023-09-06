import { ModalType } from './types';
import clsx from 'clsx';
import { useState } from "react";

import styles from './ModalRefillCripto.module.scss';

function ModalRefillCripto (props: ModalType) {

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
		{ 
			name: 'USDT',
			class: 'Usdt',
		},
		{ 
			name: 'Tron',
			class: 'Tron',
		},
		{ 
			name: 'Bitcoin',
			class: 'Bitcoin',
		},
		{ 
			name: 'Solana',
			class: 'Solana', 
		},
		{ 
			name: 'Ethereum',
			class: 'Ethereum',
		},
		{ 
			name: 'BNB',
			class: 'Bnb',
		},
		{ 
			name: 'USDC',
			class: 'Usdc', 
		},
		{ 
			name: 'Matic',
			class: 'Matic', 
		},
		{ 
			name: 'Dai',
			class: 'Dai', 
		},
		{ 
			name: 'Toncoin',
			class: 'Toncoin',
		},
	];

	return (
		<div className={styles.modalRefillCripto}>
			<h2 className={styles.title}>Пополнение счёта</h2>
			<div className={styles.text}>Выбор криптовалюты</div>
			<div className={styles.selectMethodWrapper}>
				<div 
					onClick={toggeSelectMethod}
					className={clsx(
						styles.selectMethod,
						styles[`selectMethod${ArrMethod[isMethod].class}`],
					)}
				>
					{ArrMethod[isMethod].name}
				</div>
				<ul className={clsx(
					styles.selectMethodList,
					{[styles.selectMethodListOpen] : isMethodOpen}
				)}>
					{ArrMethod.map((item, index) => (index !== isMethod) ? (
						<li 
							key={index} 
							className={clsx(
								styles.selectMethodItem,
								styles[`selectMethodItem${ArrMethod[index].class}`],
							)}
							onClick={() => { UpdateMethod(index)}}
						>
							{item.name}
						</li>
					) : null )}
				</ul>
			</div>
			<button className={styles.btn}>Продолжить</button>
		</div>
	);
}

export default ModalRefillCripto;
