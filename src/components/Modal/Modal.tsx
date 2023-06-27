import { ReactNode } from "react";

import styles from './Modal.module.scss';

interface ModalType {
	children?: ReactNode;
	isOpen: boolean;
	toggleModal: () => void;
}

function Modal(props: ModalType) {
	
	return (
		<>
			{props.isOpen && (
				<div className={styles.modal} onClick={props.toggleModal}>
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