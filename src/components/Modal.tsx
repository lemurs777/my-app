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
				<div className="modal" onClick={props.toggleModal}>
					<div onClick={(e) => e.stopPropagation()} className="modal__box">
						<button className="modal__close" onClick={props.toggleModal}>Close</button>
						{props.children}
					</div>
				</div>
			)}
		</>
	);
}

export default Modal;