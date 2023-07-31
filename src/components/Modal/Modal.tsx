import clsx from 'clsx';
import { ModalType } from './types';

import styles from './Modal.module.scss';

function Modal(props: ModalType) {
	
	return (
		<>
			{props.isOpen && (
				<div className={
					clsx(
						styles.modal,
						{[styles.modalFull] : props.full}
					)
				} onClick={props.toggleModal}>
					<div onClick={(e) => e.stopPropagation()} className={styles.overlay}>
						<button className={styles.btnClose} onClick={props.toggleModal}>Close</button>
						{props.children}
					</div>
				</div>
			)}
		</>
	);
}

export default Modal;