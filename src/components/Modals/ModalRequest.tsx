import { useState } from "react";

interface ModalType {
	toggleModal: () => void;
}

function ModalRequest (props: ModalType) {
	const [isTopic, setIsTopic] = useState('');

	const arrTopic = [
		{
			topic: 'Общий вопрос 1',
		},
		{
			topic: 'Общий вопрос 2',
		},
		{
			topic: 'Общий вопрос 3',
		},
		{
			topic: 'Общий вопрос 4',
		},
		{
			topic: 'Общий вопрос 5',
		},
	];

	return (
		<div className="modal-request">
			<div className="modal-request__title">Новый запрос</div>
			<div className="modal-request__select">
				<input className="modal-request__select-input" type="text" value={isTopic} readOnly placeholder="Выберите тип запроса"/>
				<ul className="modal-request__select-list">
					{arrTopic.map((item, index) => (
						<li key={index} className="modal-request__select-item" onClick={() => setIsTopic(() => item.topic)}>
							<button className="modal-request__select-item-btn">{item.topic}</button>
						</li>
					))}
				</ul>
			</div>
			<div className="modal-request__btn-wrapper">
				<button className="modal-request__btn" onClick={props.toggleModal}>Oтмена</button>
				<button className="modal-request__btn" disabled={isTopic === '' ? true : false } onClick={props.toggleModal}>Отправить запрос</button>
			</div>
		</div>
	);
}

export default ModalRequest;
