interface ModalType {
	toggleModal: () => void;
}

function ModalSettings (props: ModalType) {

	return (
		<div className="modal-settings">
			<div className="modal-settings__title">Настройки</div>
		</div>
	);
}

export default ModalSettings;