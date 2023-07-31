	import { 
		Modal,
		ModalLogIn,
		ModalSettings
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
					<button className={styles.btn} onClick={() => { CurrentModal('login', true)}}>Вход</button>
					<button className={styles.btn} onClick={() => { CurrentModal('settings', false) }}>Настройки</button>
				</div>
				<Modal isOpen={isOpen} toggleModal={toggleModal} full={isFull}>
					{ (isName === 'login') ? (
						<ModalLogIn toggleModal={toggleModal}/>
					) : null}
					{ (isName === 'settings') ? (
						<ModalSettings toggleModal={toggleModal}/>
					) : null}
				</Modal>
			</>
		);
	};

	export default Modals;