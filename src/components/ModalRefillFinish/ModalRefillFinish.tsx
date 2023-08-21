import { useState, useEffect } from 'react';

import { ModalType } from './types';

import QR from '../../assets/images/refill-qr-x2.min.png';

import styles from './ModalRefillFinish.module.scss';

function ModalRefillFinish (props: ModalType) {

	const [over, setOver] = useState(false);
	const [[m, s], setTime] = useState([15, 0]);

	const wallet = 'TEVw6QZ1HCkkYJQp26JxfGAtHUCYCYjCTbd';
	const sumOne = '10 USDT';
	const sumTwo = '1800₸';

	const tick = () => {
		if (over) return;
		if (m === 0 && s === 0) {
			setOver(true);
		} else if (s === 0) {
			setTime([m - 1, 59]);
		} else {
			setTime([m, s - 1]);
		}
	};

	useEffect(() => {
		const timerID = setInterval(() => tick(), 1000);
		return () => clearInterval(timerID);
	});

	return (
		<div className={styles.modalRefillFinish}>
			<h2 className={styles.title}>Пополнение счёта</h2>
			<div className={styles.wrapper}>
				<img className={styles.qr} src={QR} alt="QR code" />
				<div className={styles.text}>Кошелек для пополнения</div>
				<input className={styles.wallet} type="text" value={wallet} readOnly />
				<div className={styles.sumWrapper}>
					<input className={styles.sumInput} type="text" value={sumOne} readOnly />
					<div className={styles.sumText}>=</div>
					<input className={styles.sumInput} type="text" value={sumTwo} readOnly />
				</div>
				<div className={styles.infoAboutWrapper}>
					<div className={styles.infoAbout}>
						<div className={styles.infoText}>Оставшееся время на оплату</div>
						<div className={styles.infoTime}>{`${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</div>
					</div>
					<div className={styles.infoAbout}>
						<div className={styles.infoText}>Сумма для оплаты</div>
						<div className={styles.infoMoney}>{sumTwo}</div>
					</div>
				</div>
				<div className={styles.btnWrapper}>
					<button className={styles.btnInfo}>Изменить</button>
					<button className={styles.btnInfo} onClick={props.toggleModal}>Отменить</button>
				</div>
			</div>
			<button className={styles.btn}>Продолжить</button>
		</div>
	);
}

export default ModalRefillFinish;
