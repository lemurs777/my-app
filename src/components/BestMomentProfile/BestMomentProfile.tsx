import React, { useState } from 'react'
import styles from './BestMomentProfile.module.scss'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Link } from 'react-router-dom'
import { Navigation } from 'swiper';

import broadcastLiveBest1 from '../../assets/images/broadcast-live-best-1.min.jpg';
import broadcastLiveBest2 from '../../assets/images/broadcast-live-best-2.min.jpg';
import broadcastLiveBest3 from '../../assets/images/broadcast-live-best-3.min.jpg';


import { ReactComponent as SoccerIcon } from "../../assets/images/svg/soccer.svg";
import clsx from 'clsx';

const BestMomentProfile = () => {
  const bestMoment = [
    {
      img: broadcastLiveBest1,
      label: '24’',
      icon: <SoccerIcon />
    },
    {
      img: broadcastLiveBest2,
      label: '24’',
      icon: <SoccerIcon />
    },
    {
      img: broadcastLiveBest3,
      label: '24’',
      icon: <SoccerIcon />
    },
    {
      img: broadcastLiveBest1,
      label: '24’',
      icon: <SoccerIcon />
    },
    {
      img: broadcastLiveBest2,
      label: '24’',
      icon: <SoccerIcon />
    },
    {
      img: broadcastLiveBest1,
      label: '24’',
      icon: <SoccerIcon />
    },
    {
      img: broadcastLiveBest2,
      label: '24’',
      icon: <SoccerIcon />
    },
    {
      img: broadcastLiveBest3,
      label: '24’',
      icon: <SoccerIcon />
    },
    {
      img: broadcastLiveBest1,
      label: '24’',
      icon: <SoccerIcon />
    },
    {
      img: broadcastLiveBest2,
      label: '24’',
      icon: <SoccerIcon />
    },
    {
      img: broadcastLiveBest1,
      label: '24’',
      icon: <SoccerIcon />
    },
    {
      img: broadcastLiveBest2,
      label: '24’',
      icon: <SoccerIcon />
    },
    {
      img: broadcastLiveBest3,
      label: '24’',
      icon: <SoccerIcon />
    },
    {
      img: broadcastLiveBest1,
      label: '24’',
      icon: <SoccerIcon />
    },
    {
      img: broadcastLiveBest2,
      label: '24’',
      icon: <SoccerIcon />
    },
  ]
  const [showMoment, setShowMoment] = useState(false)
  return (
    <div className={styles.best}>
      <div className={clsx(styles.best__head, !showMoment ? styles.active : null)}>
        <h3 className={styles.bestTitle}>Лучшие моменты</h3>
        <button className={styles.hide} onClick={() => setShowMoment(!showMoment)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9797 11.791C13.8509 11.9248 13.6762 12 13.4941 12C13.312 12 13.1373 11.9248 13.0085 11.791L7.99967 6.58519L2.99081 11.791C2.86201 11.9248 2.68735 12 2.50524 12C2.32312 12 2.14846 11.9248 2.01967 11.791L1.53409 11.2863C1.40534 11.1525 1.33301 10.971 1.33301 10.7817C1.33301 10.5924 1.40534 10.4109 1.53409 10.277L7.27097 4.31385C7.36664 4.21435 7.48024 4.13542 7.60528 4.08157C7.73031 4.02772 7.86433 4 7.99967 4C8.13502 4 8.26903 4.02772 8.39407 4.08157C8.5191 4.13542 8.6327 4.21435 8.72837 4.31385L14.4653 10.277C14.594 10.4109 14.6663 10.5924 14.6663 10.7817C14.6663 10.971 14.594 11.1525 14.4653 11.2863L13.9797 11.791Z" fill="#484848" />
          </svg>
        </button>
      </div>
      {showMoment && (
        <Swiper
          spaceBetween={10}
          slidesPerView={'auto'}
          modules={[Navigation]}
          className={styles.bestSwiper}
        >
          {bestMoment.map((item, index) => {
            return <SwiperSlide className={styles.bestSlideWrapper}>
              <Link to='/' className={styles.bestSlide}>
                <div className={styles.bestSlide__label}>
                  <div className={styles.bestSlide__icon}>
                    {item.icon}
                  </div>
                  <span>{item.label}</span></div>
                <div className={styles.bestSlide__img}>
                  <img src={item.img} alt="" />
                </div>
              </Link>
            </SwiperSlide>
          })}

        </Swiper>
      )}

    </div>
  )
}

export default BestMomentProfile