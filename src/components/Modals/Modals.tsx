	import { 
		Modal,
		ModalLogIn,
		ModalRegistration,
		ModalVerification,
		ModalPromoCode,
		ModalPaymentStatus,
		ModalCheckCode,
		ModalSettings,
	} from '../../components/';

	import { useState } from 'react';

	import styles from './Modals.module.scss';

	import useModal from "../../hooks/useModal";

	function Modals() {

		const { isOpen, toggleModal} = useModal();
		const [ isName, setIsName ] = useState('login');
		const [ isFull, setIsFull ] = useState(false);

		function CurrentModal(name: string, full: boolean) {
			setIsFull(full);
			setIsName(name);
			toggleModal();
		};

		return (
			<>
				<div className={styles.btnWrapper}>
					<button className={styles.btn} onClick={() => { CurrentModal('login', true)}}>Вход (телефон, почта, соцсети)</button>
					<button className={styles.btn} onClick={() => { CurrentModal('registration', true)}}>Регистрация</button>
					<button className={styles.btn} onClick={() => { CurrentModal('verification', false) }}>Проверка личности</button>
					<button className={styles.btn} onClick={() => { CurrentModal('promocode', false) }}>Промокод</button>
					<button className={styles.btn} onClick={() => { CurrentModal('payment-status', false) }}>Статус оплаты</button>
					<button className={styles.btn} onClick={() => { CurrentModal('check-code', false) }}>Подтверждение</button>
					<button className={styles.btn} onClick={() => { CurrentModal('settings', false) }}>Настройки</button>
				</div>
				<Modal isOpen={isOpen} toggleModal={toggleModal} full={isFull}>
					{ (isName === 'login') ? (
						<ModalLogIn toggleModal={toggleModal}/>
					) : null}
					{ (isName === 'registration') ? (
						<ModalRegistration toggleModal={toggleModal}/>
					) : null}
					{ (isName === 'verification') ? (
						<ModalVerification toggleModal={toggleModal}/>
					) : null}
					{ (isName === 'promocode') ? (
						<ModalPromoCode toggleModal={toggleModal}/>
					) : null}
					{ (isName === 'payment-status') ? (
						<ModalPaymentStatus toggleModal={toggleModal}/>
					) : null}
					{ (isName === 'check-code') ? (
						<ModalCheckCode toggleModal={toggleModal}/>
					) : null}
					{ (isName === 'settings') ? (
						<ModalSettings toggleModal={toggleModal}/>
					) : null}
				</Modal>
			</>
		);
	};

	export default Modals;