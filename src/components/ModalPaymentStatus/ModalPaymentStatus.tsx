import { ModalType } from './types';

import PaymentGood from '../../assets/images/svg/modals/payment-good.svg';
import PaymentError from '../../assets/images/svg/modals/payment-error.svg';

import styles from './ModalPaymentStatus.module.scss';

function ModalPaymentStatus (props: ModalType) {

	let status = 'good'; // good, error

	return (
		<div className={styles.modalPaymentStatus}>
			<h2 className={styles.title}>Пополнение счёта</h2>
			{ status === 'good' ? (
				<>
					<img className={styles.img} src={PaymentGood} alt="Успешное пополнение" />
					<div className={styles.text}>Оплата прошла успешно</div>
				</>
			) : status === 'error' ? (
				<>
					<img className={styles.img} src={PaymentError} alt="Ошибка пополнения" />
					<div className={styles.text}>Ошибка, попробуйте снова</div>
				</>
			) : null}

			<button className={styles.btn}>Продолжить</button>
		</div>
	);
}

export default ModalPaymentStatus;
