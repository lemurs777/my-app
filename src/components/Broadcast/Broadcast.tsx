import clsx from 'clsx';

import styles from './Broadcast.module.scss';
import {Navigation} from 'swiper';
import BroadcastLive from '../../assets/images/broadcast-live-x2.min.jpg';
import React, {useState} from "react";
import {ReactComponent as SoccerIcon} from "../../assets/images/svg/soccer.svg";
import {Swiper, SwiperSlide} from "swiper/react";

import broadcastLiveBest1 from '../../assets/images/broadcast-live-best-1.min.jpg';
import broadcastLiveBest2 from '../../assets/images/broadcast-live-best-2.min.jpg';
import broadcastLiveBest3 from '../../assets/images/broadcast-live-best-3.min.jpg';
import {Link} from "react-router-dom";

function Broadcast() {
  const [showTranslation, setShowTranslation] = useState(false)
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
  const bestMoment = [
    {
      img: broadcastLiveBest1,
      label: '24’',
      icon: <SoccerIcon/>
    },
    {
      img: broadcastLiveBest2,
      label: '24’',
      icon: <SoccerIcon/>
    },
    {
      img: broadcastLiveBest3,
      label: '24’',
      icon: <SoccerIcon/>
    },
    {
      img: broadcastLiveBest1,
      label: '24’',
      icon: <SoccerIcon/>
    },
    {
      img: broadcastLiveBest2,
      label: '24’',
      icon: <SoccerIcon/>
    },
  ]
  return (

    <div className={styles.broadcast}>
      <div className={clsx(styles.translation, showTranslation ? null : styles.margin)}>


        <div className={styles.header}>
          <button className={clsx(styles.headerBtn, styles.headerBtnLock)}>Lock</button>
          <h2 className={styles.headerTitle}>Трансляция</h2>
          <button className={clsx(styles.headerBtn, styles.headerBtnArrow,showTranslation ? styles.active : null)}
                  onClick={() => setShowTranslation(!showTranslation)}>Open
          </button>
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
        {!showTranslation && (
          <button className={styles.translation__more} onClick={() => setShowTranslation(true)}>+ 5 ПОКАЗАТЬ
            БОЛЬШЕ</button>

        )}
        {showTranslation && (
          <div className={styles.broadcast__content}>
            <img className={styles.liveImg} src={BroadcastLive} alt="Live"/>
          </div>
        )}
      </div>
      <div className={styles.best}>
        <div className={styles.best__head}>

          <h3 className={styles.bestTitle}>Лучшие моменты</h3>
          <div className={styles.best__nav}>
            <button type='button' className='bestPrev'></button>
            <button type='button' className='bestNext'></button>
          </div>
        </div>
        <Swiper
          spaceBetween={10}
          slidesPerView={3.5}
          navigation={{
            nextEl: '.bestNext',
            prevEl: '.bestPrev'
          }}
          modules={[Navigation]}
          className={styles.bestSwiper}
        >
          {bestMoment.map((item, index) => {
            return <SwiperSlide>
              <Link to='/' className={styles.bestSlide}>
                <div className={styles.bestSlide__label}>
                  <div className={styles.bestSlide__icon}>
                    {item.icon}
                  </div>
                  <span>{item.label}</span></div>
                <div className={styles.bestSlide__img}>
                  <img src={item.img} alt=""/>
                </div>
              </Link>
            </SwiperSlide>
          })}

        </Swiper>
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
