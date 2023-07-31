import clsx from 'clsx';
import { Link } from 'react-router-dom';

import Modal from "../Modal";
import ModalRequest from '../ModalRequest';
import useModal from "../../hooks/useModal";

import { RequestData } from './types';

import styles from './Request.module.scss';

function Request(data: RequestData) {

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

	const arrRequestsFilter = arrRequests.filter((info) => info.id === data.numRequest);
	
	return (
		<div className={styles.request}>
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<h1 className={styles.headerTitle}>Запросы</h1>
					<button className={styles.headerBtn} onClick={toggleModal}>+ Новый запрос</button>
				</div>
				<div className={styles.top}>
					<Link className={styles.topBtn} to="/requests/">Requests</Link>
					<div className={styles.topTitle}>Основная информация</div>
				</div>
				{arrRequestsFilter.map((item, index) => (
					<div key={index} className={styles.content}>
						<div key={index} className={styles.contentTop}>
							<p className={styles.contentText}>Номер обращения: {item.number}</p>
							<p className={styles.contentText}>Время создания: {item.date} {item.time}</p>
							<div className={styles.contentLabelWrapper}>
								<p className={styles.contentLabelText}>Статус:</p>
								{ (item.label === 'progress') ? (
									<div className={clsx(styles.label, styles.labelProgress)}>В работе</div>
									) : (item.label === 'done') ? (
										<div className={clsx(styles.label, styles.labelDone)}>Решено</div>
									) : null
								}
							</div>
							<p className={styles.contentText}>Электронная почта: {item.email}</p>
							<p className={styles.contentText}>Опишите вашу проблему: {item.request}</p>
							<p className={styles.contentText}>Приклепленные фото:</p>
							<div className={styles.contentPhotoWrapper}>
								<div className={clsx(styles.contentPhoto, styles.contentPhotoOne)}></div>
								<div className={clsx(styles.contentPhoto, styles.contentPhotoTwo)}></div>
								<div className={clsx(styles.contentPhoto, styles.contentPhotoThree)}></div>
							</div>
							<p className={styles.contentText}>История разговора:</p>
						</div>
						<div className={styles.messagesWrapper}>
							<div className={styles.messagesDate}>{item.messagesInfo.date} {item.messagesInfo.time}</div>
							<div className={styles.messages}>
								{item.messagesInfo.messages.map((message, index) => (
									<div key={index} className={clsx(
										styles.message,
										{[styles.messageAnswer]: !message.user}
									)}>
										<div className={styles.messageContent}>
											<div className={styles.messageText}>{message.message}</div>
											<div className={styles.messageTime}>{message.time}</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>	
				))}
			</div>
			<Modal isOpen={isOpen} toggleModal={toggleModal} full={false}>
				<ModalRequest toggleModal={toggleModal} />
			</Modal>
		</div>
	);
}

export default Request;