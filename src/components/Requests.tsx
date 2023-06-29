import clsx from 'clsx';
import { Link } from 'react-router-dom';

import Modal from "./Modal";
import useModal from "../hooks/useModal";
import ModalRequest from './ModalRequest';

function Requests() {

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
									<Link
										to = "/requests/request"
										state = {{ numRequest: request.id }}
        								className="requests__item-link">
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
										<div className="requests__item-content">Опишите вашу проблему: {request.request}</div>
									</Link>
								</li> ) : null
							))}
						</ul>
					) }
				</div>
			</div>
			<Modal isOpen={isOpen} toggleModal={toggleModal}>
				<ModalRequest toggleModal={toggleModal}/>
			</Modal>
		</div>
	);
}

export default Requests;