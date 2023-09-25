import {useState} from 'react';
import clsx from 'clsx';

import styles from './LimitSelf.module.scss';

function LimitSelf() {

  const [isLimitSelf, setIsLimitSelf] = useState(false);

  const ArrLimit = [
    {
      name: 'Нет самооисключения',
      value: 0,
    },
    {
      name: '12 часов',
      value: 12,
    },
    {
      name: '24 часа',
      value: 24,
    },
    {
      name: '48 часов',
      value: 48,
    },
    {
      name: '72 часа',
      value: 72,
    },
  ];

  const [isLimitOpen, setIsLimitOpen] = useState(false);
  const [isLimit, setIsLimit] = useState(0);

  const toggeSelect = () => {
    setIsLimitOpen(current => !current);
  }

  function UpdateLimit(index: number) {
    setIsLimit(index);
    toggeSelect();
  }

  return (

    <div className={styles.limitSelf}>
      <div className={styles.hand}></div>
      <div className={styles.info}>
        <div className={styles.infoText}>
          Режим “Самоисключение из игры” не может быть отменён или прерван до тех пор, пока не истечет срок его
          действия. Ты не сможешь пользоваться аккаунтом на протяжении всего срока самоисключения.
        </div>
        <label className={clsx(
          styles.infoLabel,
          {[styles.infoLabelActive]: isLimitSelf},
        )}>
          <input className={styles.infoCheckbox} type="checkbox" checked={isLimitSelf}
                 onChange={() => setIsLimitSelf((check) => !check)}/>Включить ограничение сессии
        </label>
        <div className={styles.mobileWrap}>
          <div className={styles.infoName}>Самоисключение из игры</div>
          <div className={styles.infoSelectWrapper}>
            <div className={styles.infoSelect}
                 onClick={toggeSelect}>{isLimit === 0 ? 'Выберите срок самоисключения' : ArrLimit[isLimit].name}</div>
            <ul className={clsx(
              styles.selectLimitList,
              {[styles.selectLimitListOpen]: isLimitOpen}
            )}>
              {ArrLimit.map((item, index) => (
                <li
                  key={index}
                  className={styles.selectLimitItem}
                  onClick={() => {
                    UpdateLimit(index)
                  }}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <button className={styles.btn}>Сохранить</button>
        </div>
      </div>
    </div>

  );
}

export default LimitSelf;