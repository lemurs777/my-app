import {useState} from "react";

import {ModalType} from './types';

import styles from './ModalRequest.module.scss';

function ModalRequest(props: ModalType) {
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
    <div className={styles.modalRequest}>
      <div className={styles.title}>Новый запрос</div>
      <div className={styles.select}>
        <input className={styles.selectInput} type="text" value={isTopic} onChange={(event) => {
          setIsTopic(event.target.value)
        }} placeholder="Выберите тип запроса"/>
        <ul className={styles.selectList}>
          {arrTopic.filter(item => item.topic.toLowerCase().includes(isTopic.toLowerCase())).map((item, index) => (
            <li key={index} className={styles.selectItem} onClick={() => setIsTopic(() => item.topic)}>
              <button className={styles.selectItemBtn}>{item.topic}</button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.btnWrapper}>
        <button className={styles.btn} onClick={props.toggleModal}>Oтмена</button>
        <button className={styles.btn} disabled={isTopic === '' ? true : false} onClick={props.toggleModal}>Отправить
          запрос
        </button>
      </div>
    </div>
  );
}

export default ModalRequest;
