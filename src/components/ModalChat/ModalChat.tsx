import clsx from 'clsx';
import {useState} from "react";

import {ModalType} from './types';

import styles from './ModalChat.module.scss';

function ModalChat(props: ModalType) {

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
                        {[styles.contentUser]: item.author === 'user'},
                        {[styles.contentSupport]: item.author === 'support'}
                    )}>
                        <div className={styles.messageInfo}>
                            {item.author === 'support' ? (
                                <div className={styles.messageInfoAbout}>Support</div>
                            ) : null}
                            <div className={styles.messageInfoTime}>{item.info}</div>
                        </div>
                        <div key={index} className={clsx(
                            styles.message,
                            {[styles.messageUser]: item.author === 'user'},
                            {[styles.messageSupport]: item.author === 'support'}
                        )}>
                            {item.text}
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.inputWrapper}>
                <div className={styles.add}>
                    <input type="file"/>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M12 8V16M16 12H8M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
                <input className={styles.input} type='text' value={message} onChange={handleMessage}
                       placeholder='Введите сообщение'/>
                <button className={styles.btn}>Отправить</button>
            </div>
        </div>
    );
}

export default ModalChat;
