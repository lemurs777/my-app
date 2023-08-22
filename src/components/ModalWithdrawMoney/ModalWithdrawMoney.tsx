import { Link } from 'react-router-dom';
import { useState } from 'react';

import { ModalType } from './types';

import styles from './ModalWithdrawMoney.module.scss';

function ModalWithdrawMoney (props: ModalType) {

	const [isShowOne, setIsShowOne] = useState(true);

	const updateShowOne = () => {
		setIsShowOne(current => !current);
	}

	const [isShowTwo, setIsShowTwo] = useState(true);

	const updateShowTwo = () => {
		setIsShowTwo(current => !current);
	}

	return (
		<div className={styles.modalWithdrawMoney}>
			<h2 className={styles.title}>Вывод средств</h2>
			<div className={styles.moneyWrapper}>
				<div className={styles.moneyContent}>
					<div className={styles.header}>
						<button className={styles.btnCopy} onClick={() => window.navigator.clipboard.writeText('537073408')}>
							ID 537073408
						</button>
						<button className={styles.btnUpdate}>
							Обновить
						</button>
						<button className={styles.btnShow} onClick={updateShowOne}>
							Показать/скрыть
						</button>
					</div>
					<div className={styles.money}>
						<div className={styles.moneyInfo}>
							<div className={styles.moneyCount}>{isShowOne ? '1850.00₽' : '••••••••'}</div>
							<div className={styles.moneyText}>Баланс</div>
						</div>
						<div className={styles.moneyInfo}>
							<div className={styles.moneyCount}>{isShowOne ? '1850.00₽' : '••••••••'}</div>
							<div className={styles.moneyText}>В игре</div>
						</div>
						<div className={styles.moneyInfo}>
							<div className={styles.moneyCount}>{isShowOne ? '0.00₽' : '••••••••'}</div>
							<div className={styles.moneyText}>На выплату</div>
						</div>
					</div>
				</div>
				<div className={styles.moneyContent}>
					<div className={styles.header}>
						<button className={styles.btnCopy} onClick={() => window.navigator.clipboard.writeText('673130422')}>
							ID 673130422
						</button>
						<button className={styles.btnUpdate}>
							Обновить
						</button>
						<button className={styles.btnShow} onClick={updateShowTwo}>
							Показать/скрыть
						</button>
					</div>
					<div className={styles.money}>
						<div className={styles.moneyInfo}>
							<div className={styles.moneyCount}>{isShowTwo ? '7550.00₽' : '••••••••'}</div>
							<div className={styles.moneyText}>Баланс</div>
						</div>
						<div className={styles.moneyInfo}>
							<div className={styles.moneyCount}>{isShowTwo ? '2760.00₽' : '••••••••'}</div>
							<div className={styles.moneyText}>В игре</div>
						</div>
						<div className={styles.moneyInfo}>
							<div className={styles.moneyCount}>{isShowTwo ? '0.00₽' : '••••••••'}</div>
							<div className={styles.moneyText}>На выплату</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.text}>Платежные методы</div>
			<ul className={styles.paymentList}>
				<li className={styles.paymentItemList}>
					<button className={styles.itemBtn}>
						<div className={styles.itemBtnTitle}>QIWI кошелёк</div>
						<div className={styles.itemBtnIcon}></div>
					</button>
				</li>
				<li className={styles.paymentItemList}>
					<button className={styles.itemBtn}>
						<div className={styles.itemBtnTitle}>Яндекс кошелёк</div>
						<div className={styles.itemBtnIcon}></div>
					</button>
				</li>
			</ul>
			<div className={styles.brnWrapper}>
				<button className={styles.btn}>Добавить новый метод</button>
				<Link className={styles.btnHistory} to='/profile/conclusions'>Истории выводов</Link>
			</div>
		</div>
	);
}

export default ModalWithdrawMoney;
