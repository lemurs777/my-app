import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useState } from "react";

import Modal from "./Modal";
import useModal from "../hooks/useModal";

function Requests() {

	const { isOpen, toggleModal } = useModal();

	const [isTopic, setIsTopic] = useState('');

	const arrRequests = [
		{
			topic: 'Общий вопрос',
			date: '10.04.23',
			time: '19:57',
			request: 'Опишите вашу проблему: В экспрессе ты заключаешь пари на несколько исходов: их может быть от 2 до 30. Чтобы выиграть, все они должны состояться. Если не пройдет хотя бы один, ты проиграешь. Экспресс может принести большой выигрыш: коэффициенты всех исходов в составе пари перемножаются.',
			label: 'progress',
			show: true,
		},
		{
			topic: 'Общий вопрос',
			date: '10.04.23',
			time: '19:57',
			request: 'Опишите вашу проблему: В экспрессе ты заключаешь пари на несколько исходов: их может быть от 2 до 30. Чтобы выиграть, все они должны состояться. Если не пройдет хотя бы один, ты проиграешь. Экспресс может принести большой выигрыш: коэффициенты всех исходов в составе пари перемножаются.',
			label: 'done',
			show: true,
		},
		{
			topic: 'Общий вопрос',
			date: '10.04.23',
			time: '19:57',
			request: 'Опишите вашу проблему: В экспрессе ты заключаешь пари на несколько исходов: их может быть от 2 до 30. Чтобы выиграть, все они должны состояться. Если не пройдет хотя бы один, ты проиграешь. Экспресс может принести большой выигрыш: коэффициенты всех исходов в составе пари перемножаются.',
			label: 'done',
			show: true,
		},
	];

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
		<div className="requests">
			<div className="requests__wrapper">
				<div className="requests__header">
					<h1 className="requests__header-title">Запросы</h1>
					<button className="requests__header-btn" onClick={toggleModal}>+ Новый запрос</button>
				</div>
				<div className={clsx(
						'requests__content',
						{'requests__content--empty': Object.values(arrRequests).filter(el=>el.show).length === 0}
					)}>
					{ (Object.values(arrRequests).filter(el=>el.show).length === 0) ? (
						<div className="requests__empty">Список текущих запросов пуст</div>
					) : (
						<ul className="requests__list">
							{arrRequests.map((request, index) => (
								(request.show === true) ? (
								<li key={index} className="requests__item">
									<button className="requests__item-btn-close">Close</button>
									<Link to="/" className="requests__item-link">
										<div className="requests__item-header">
											<div className="requests__item-header-topic">{request.topic}</div>
											<div className="requests__item-header-info">{request.date} {request.time}</div>
											{ (request.label === 'progress') ? (
												<div className="requests__item-header-label requests__item-header-label--progress">вВработе</div>
												) : (request.label === 'done') ? (
													<div className="requests__item-header-label requests__item-header-label--done">Решено</div>
												) : null
											}	
										</div>
										<div className="requests__item-content">Опишите вашу проблему: В экспрессе ты заключаешь пари на несколько исходов: их может быть от 2 до 30. Чтобы выиграть, все они должны состояться. Если не пройдет хотя бы один, ты проиграешь. Экспресс может принести большой выигрыш: коэффициенты всех исходов в составе пари перемножаются.</div>
									</Link>
								</li> ) : null
							))}
						</ul>
					) }
				</div>
			</div>
			<Modal isOpen={isOpen} toggleModal={toggleModal}>
				<div className="modal-request">
					<div className="modal-request__title">Новый запрос</div>
					<button className="modal-request__item-btn-close" onClick={toggleModal}>Close</button>
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
						<button className="modal-request__btn" onClick={toggleModal}>Oтмена</button>
						<button className="modal-request__btn" disabled={isTopic === '' ? true : false } onClick={toggleModal}>Отправить запрос</button>
					</div>
				</div>
			</Modal>
		</div>
	);
}

export default Requests;