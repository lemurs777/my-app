import clsx from 'clsx';
import { useState } from "react";

import { ModalType } from './types';

import styles from './ModalChat.module.scss';

function ModalChat (props: ModalType) {

	const arrChat = [
		{
			author: 'user',
			info: 'Сегодня, 11:20',
			text: 'Здравствуйте, мне нужна помощь',
		},
		{
			author: 'support',
			info: 'Сегодня, 11:21',
			text: 'Здравствуйте! В чем ваша проблема?',
		},
	];

	const [message, setMessage] = useState('');

	function handleMessage(event: any) {
		setMessage(event.target.value);
	}

	return (
		<div className={styles.modalChat}>
			<h2 className={styles.title}>Чат с поддержкой</h2>
			<div className={styles.chatWrapper}>
				{arrChat.map((item, index) => (
				<div key={index} className={clsx(
					styles.content,
					{[styles.contentUser] : item.author === 'user'},
					{[styles.contentSupport] : item.author === 'support'}
				)}>
					<div className={styles.messageInfo}>
						{item.author === 'support' ? (
							<div className={styles.messageInfoAbout}>Support</div>
						) : null }
						<div className={styles.messageInfoTime}>{item.info}</div>
					</div>
					<div key={index} className={clsx(
						styles.message,
						{[styles.messageUser] : item.author === 'user'},
						{[styles.messageSupport] : item.author === 'support'}
					)}>
						{item.text}
					</div>
				</div>
				))}
			</div>
			<div className={styles.inputWrapper}>
				<input className={styles.input} type='text' value={message} onChange={handleMessage} placeholder='Введите сообщение'/>
				<button className={styles.btn}>Отправить</button>
			</div>
		</div>
	);
}

export default ModalChat;
