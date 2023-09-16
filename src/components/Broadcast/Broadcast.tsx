import clsx from 'clsx';

import styles from './Broadcast.module.scss';

import BroadcastLive from '../../assets/images/broadcast-live-x2.min.jpg';
import {useState} from "react";

/*import broadcastLiveBest1 from '../assets/images/broadcast-live-best-1.min.jpg';
import broadcastLiveBest2 from '../assets/images/broadcast-live-best-2.min.jpg';
import broadcastLiveBest3 from '../assets/images/broadcast-live-best-3.min.jpg';*/

function Broadcast() {
  // const [lock, setLock] = useState(false)
  const arrInfo = [
    {
      name: 'Удары',
      countOne: 64,
      countTwo: 63,
    },
    {
      name: 'В цель',
      countOne: 16,
      countTwo: 17,
    },
    {
      name: 'Владение %',
      countOne: 36,
      countTwo: 64,
    },
    {
      name: 'Угловые',
      countOne: 0,
      countTwo: 1,
    },
    {
      name: 'Офсайды',
      countOne: 3,
      countTwo: 1,
    },
  ];

  const gamesArr = [
    {
      nameOne: 'Бавария',
      nameTwo: 'Айнтрахт Франкфурт',
      isLive: true,
    },
  ];

  return (
    <div className={styles.broadcast}>
      <div className={styles.header}>
        <button className={clsx(styles.headerBtn, styles.headerBtnLock)}>Lock</button>
        <h2 className={styles.headerTitle}>Трансляция</h2>
        <button className={clsx(styles.headerBtn, styles.headerBtnArrow)}>Open</button>
      </div>
      <ul className={styles.list}>
        {gamesArr.map((gamesItem, index) => (
          <li key={index} className={clsx(
            styles.item,
            {[styles.itemLive]: gamesItem.isLive}
          )}>
            {gamesItem.nameOne} - {gamesItem.nameTwo}
          </li>
        ))}
      </ul>
      <img className={styles.liveImg} src={BroadcastLive} alt="Live"/>
      <div className={styles.best}>
        <h3 className={styles.bestTitle}>Лучшие моменты</h3>
      </div>
      <div className={styles.statistics}>
        <h3 className={styles.statisticsTitle}>Статистика</h3>
        <ul className={styles.statisticsList}>
          {arrInfo.map((item, index) => (
            <li key={index} className={styles.statisticsItem}>
							<span className={clsx(
                styles.statisticsCount,
                {[styles.statisticsCountAccent]: item.countOne > item.countTwo}
              )}>{item.countOne}</span>
              <span className={styles.statisticsName}>{item.name}</span>
              <span className={clsx(
                styles.statisticsCount,
                {[styles.statisticsCountAccent]: item.countTwo > item.countOne}
              )}>{item.countTwo}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Broadcast;
