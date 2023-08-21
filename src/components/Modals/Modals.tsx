import { 
	Modal,
	ModalLogIn,
	ModalRegistration,
	ModalRegistrationFull,
	ModalVerification,
	ModalPromoCode,
	ModalPaymentStatus,
	ModalCheckCode,
	ModalOtherCountry,
	ModalNotifications,
	ModalTicketInfo,
	ModalChat,
	ModalSupport,
	ModalWithdrawMoney,
	ModalRefillFinish,
	ModalSettings,
} from '../../components/';

import { useState } from 'react';

import styles from './Modals.module.scss';

import useModal from "../../hooks/useModal";

function Modals() {

	const { isOpen, toggleModal} = useModal();
	const [ isName, setIsName ] = useState('login');
	const [ isFull, setIsFull ] = useState(true);

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
				<button className={styles.btn} onClick={() => { CurrentModal('registration-full', true)}}>Регистрация (полная)</button>
				<button className={styles.btn} onClick={() => { CurrentModal('verification', true) }}>Проверка личности</button>
				<button className={styles.btn} onClick={() => { CurrentModal('promocode', true) }}>Промокод</button>
				<button className={styles.btn} onClick={() => { CurrentModal('payment-status', true) }}>Статус оплаты</button>
				<button className={styles.btn} onClick={() => { CurrentModal('check-code', true) }}>Подтверждение</button>
				<button className={styles.btn} onClick={() => { CurrentModal('other-country', true) }}>Предупреждение</button>
				<button className={styles.btn} onClick={() => { CurrentModal('notifications', true) }}>Уведомления</button>
				<button className={styles.btn} onClick={() => { CurrentModal('ticket-info', true) }}>Информация о билете</button>
				<button className={styles.btn} onClick={() => { CurrentModal('chat', true) }}>Чат с поддержкой</button>
				<button className={styles.btn} onClick={() => { CurrentModal('support', true) }}>Поддержка</button>
				<button className={styles.btn} onClick={() => { CurrentModal('withdraw-money', true) }}>Вывод средств</button>
				<button className={styles.btn} onClick={() => { CurrentModal('refill-finish', true) }}>Пополнение счёта (итог)</button>
				<button className={styles.btn} onClick={() => { CurrentModal('settings', false) }}>Настройки</button>
			</div>
			<Modal isOpen={isOpen} toggleModal={toggleModal} full={isFull}>
				{ (isName === 'login') ? (
					<ModalLogIn toggleModal={toggleModal}/>
				) : null}
				{ (isName === 'registration') ? (
					<ModalRegistration toggleModal={toggleModal}/>
				) : null}
				{ (isName === 'registration-full') ? (
					<ModalRegistrationFull toggleModal={toggleModal}/>
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
				{ (isName === 'other-country') ? (
					<ModalOtherCountry toggleModal={toggleModal}/>
				) : null}
				{ (isName === 'notifications') ? (
					<ModalNotifications toggleModal={toggleModal}/>
				) : null}
				{ (isName === 'ticket-info') ? (
					<ModalTicketInfo toggleModal={toggleModal}/>
				) : null}
				{ (isName === 'chat') ? (
					<ModalChat toggleModal={toggleModal}/>
				) : null}
				{ (isName === 'support') ? (
					<ModalSupport toggleModal={toggleModal}/>
				) : null}
				{ (isName === 'withdraw-money') ? (
					<ModalWithdrawMoney toggleModal={toggleModal}/>
				) : null}
				{ (isName === 'refill-finish') ? (
					<ModalRefillFinish toggleModal={toggleModal}/>
				) : null}
				{ (isName === 'settings') ? (
					<ModalSettings toggleModal={toggleModal}/>
				) : null}
			</Modal>
		</>
	);
};

export default Modals;