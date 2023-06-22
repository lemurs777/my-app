import clsx from 'clsx';
import { Link } from 'react-router-dom';

import Modal from "./Modal";
import ModalRequest from './Modals/ModalRequest';
import useModal from "../hooks/useModal";

type RequestData = {
	numRequest: number
};

function Request(props: RequestData) {

	const { isOpen, toggleModal } = useModal();

	const arrRequests = [
		{
			id: 1,
			topic: 'Общий вопрос 1',
			number: 3168376,
			date: '10.04.23',
			time: '19:57',
			email: 'test@gmail.com',
			request: 'В экспрессе ты заключаешь пари на несколько исходов: их может быть от 2 до 30. Чтобы выиграть, все они должны состояться. Если не пройдет хотя бы один, ты проиграешь. Экспресс может принести большой выигрыш: коэффициенты всех исходов в составе пари перемножаются.',
			label: 'progress',
			show: true,
			messagesInfo: {
				date: '10.04.23',
				time: '21:15',
				messages: [
					{
						user: true,
						message: ' В экспрессе ты заключаешь пари на несколько исходов: их может быть от 2 до 30. Если не пройдет хотя бы один, ты проиграешь.',
						time: '21:57'
					},
					{
						user: false,
						message: 'В экспрессе ты заключаешь пари на несколько исходов: их может быть от 2 до 30. Чтобы выиграть, все они должны состояться. Если не пройдет хотя бы один, ты проиграешь. Экспресс может принести большой выигрыш: коэффициенты всех исходов в составе пари перемножаются',
						time: '19:57'
					},
				]
			}
		},
		{
			id: 2,
			topic: 'Общий вопрос 2',
			number: 3168376,
			date: '10.04.23',
			time: '19:57',
			email: 'test@gmail.com',
			request: 'В экспрессе ты заключаешь пари на несколько исходов: их может быть от 2 до 30. Чтобы выиграть, все они должны состояться. Если не пройдет хотя бы один, ты проиграешь. Экспресс может принести большой выигрыш: коэффициенты всех исходов в составе пари перемножаются.',
			label: 'done',
			show: true,
			messagesInfo: {
				date: '10.04.23',
				time: '21:15',
				messages: [
					{
						user: true,
						message: 'В экспрессе ты заключаешь пари на несколько исходов: их может быть от 2 до 30. Если не пройдет хотя бы один, ты проиграешь.',
						time: '06:22'
					},
					{
						user: false,
						message: 'В экспрессе ты заключаешь пари на несколько исходов: их может быть от 2 до 30. Чтобы выиграть, все они должны состояться. Если не пройдет хотя бы один, ты проиграешь. Экспресс может принести большой выигрыш: коэффициенты всех исходов в составе пари перемножаются',
						time: '05:22'
					},
				]
			}
		},
		{
			id: 3,
			topic: 'Общий вопрос 3',
			number: 3168376,
			date: '10.04.23',
			time: '19:57',
			email: 'test@gmail.com',
			request: 'В экспрессе ты заключаешь пари на несколько исходов: их может быть от 2 до 30. Чтобы выиграть, все они должны состояться. Если не пройдет хотя бы один, ты проиграешь. Экспресс может принести большой выигрыш: коэффициенты всех исходов в составе пари перемножаются.',
			label: 'done',
			show: true,
			messagesInfo: {
				date: '10.04.23',
				time: '21:15',
				messages: [
					{
						user: false,
						message: 'В экспрессе ты заключаешь пари на несколько исходов: их может быть от 2 до 30. Если не пройдет хотя бы один, ты проиграешь.',
						time: '21:57'
					},
					{
						user: true,
						message: 'В экспрессе ты заключаешь пари на несколько исходов: их может быть от 2 до 30. Чтобы выиграть, все они должны состояться. Если не пройдет хотя бы один, ты проиграешь. Экспресс может принести большой выигрыш: коэффициенты всех исходов в составе пари перемножаются',
						time: '19:57'
					},
					{
						user: false,
						message: 'В экспрессе ты заключаешь пари на несколько исходов: их может быть от 2 до 30. Если не пройдет хотя бы один, ты проиграешь.',
						time: '18:57'
					},
					{
						user: true,
						message: 'В экспрессе ты заключаешь пари на несколько исходов: их может быть от 2 до 30. Чтобы выиграть, все они должны состояться. Если не пройдет хотя бы один, ты проиграешь. Экспресс может принести большой выигрыш: коэффициенты всех исходов в составе пари перемножаются',
						time: '17:57'
					},
				]
			}
		},
	];

	const arrRequestsFilter = arrRequests.filter((info) => info.id === props.numRequest);
	
	return (
		<div className="request">
			<div className="request__wrapper">
				<div className="request__header">
					<h1 className="request__header-title">Запросы</h1>
					<button className="request__header-btn" onClick={toggleModal}>+ Новый запрос</button>
				</div>
				<div className="request__top">
					<Link className="request__top-btn" to="/requests/">Requests</Link>
					<div className="request__top-title">Основная информация</div>
				</div>
				{arrRequestsFilter.map((item, index) => (
					<div key={index} className="request__content">
						<div key={index} className="request__content-top">
							<p className="request__content-text">Номер обращения: {item.number}</p>
							<p className="request__content-text">Время создания: {item.date} {item.time}</p>
							<div className="request__content-label-wrapper">
								<p className="request__content-label-text">Статус:</p>
								{ (item.label === 'progress') ? (
									<div className="request__label request__label--progress">В работе</div>
									) : (item.label === 'done') ? (
										<div className="request__label request__label--done">Решено</div>
									) : null
								}
							</div>
							<p className="request__content-text">Электронная почта: {item.email}</p>
							<p className="request__content-text">Опишите вашу проблему: {item.request}</p>
							<p className="request__content-text">Приклепленные фото:</p>
							<div className="request__content-photo-wrapper">
								<div className="request__content-photo request__content-photo--one"></div>
								<div className="request__content-photo request__content-photo--two"></div>
								<div className="request__content-photo request__content-photo--three"></div>
							</div>
							<p className="request__content-text">История разговора:</p>
						</div>
						<div className="request__messages-wrapper">
							<div className="request__messages-date">{item.messagesInfo.date} {item.messagesInfo.time}</div>
							<div className="request__messages">
								{item.messagesInfo.messages.map((message, index) => (
									<div key={index} className={clsx(
										'request__message',
										{'request__message--answer': !message.user}
									)}>
										<div className="request__message-content">
											<div className="request__message-text">{message.message}</div>
											<div className="request__message-time">{message.time}</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>	
				))}
			</div>
			<Modal isOpen={isOpen} toggleModal={toggleModal}>
				<ModalRequest toggleModal={toggleModal} />
			</Modal>
		</div>
	);
}

export default Request;