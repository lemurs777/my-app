import { ReactNode } from "react";

interface ModalType {
	children?: ReactNode;
	isOpen: boolean;
	toggleModal: () => void;
}

function Modal(props: ModalType) {
	
	return (
		<>
			{props.isOpen && (
				<div className="modal-overlay" onClick={props.toggleModal}>
					<div onClick={(e) => e.stopPropagation()} className="modal-box">
						{props.children}
					</div>
				</div>
			)}
		</>
	);
}

export default Modal;