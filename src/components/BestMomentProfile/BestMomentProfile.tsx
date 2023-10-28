import React, {useState} from 'react'
import styles from './BestMomentProfile.module.scss'
import {SwiperSlide, Swiper} from 'swiper/react'
import {Link} from 'react-router-dom'

import broadcastLiveBest1 from '../../assets/images/broadcast-live-best-1.min.jpg';
import broadcastLiveBest2 from '../../assets/images/broadcast-live-best-2.min.jpg';
import broadcastLiveBest3 from '../../assets/images/broadcast-live-best-3.min.jpg';


import {ReactComponent as SoccerIcon} from "../../assets/images/svg/soccer.svg";
import clsx from 'clsx';
import {Navigation} from "swiper";

const BestMomentProfile = () => {
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
    const [showMoment, setShowMoment] = useState(false)
    return (
        <div className={styles.best}>
            <div className={clsx(styles.best__head, !showMoment ? styles.active : null)}>
                <h3 className={styles.bestTitle}>Лучшие моменты</h3>
                {/*<button className={styles.hide} onClick={() => setShowMoment(!showMoment)}>*/}
                {/*  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">*/}
                {/*    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9797 11.791C13.8509 11.9248 13.6762 12 13.4941 12C13.312 12 13.1373 11.9248 13.0085 11.791L7.99967 6.58519L2.99081 11.791C2.86201 11.9248 2.68735 12 2.50524 12C2.32312 12 2.14846 11.9248 2.01967 11.791L1.53409 11.2863C1.40534 11.1525 1.33301 10.971 1.33301 10.7817C1.33301 10.5924 1.40534 10.4109 1.53409 10.277L7.27097 4.31385C7.36664 4.21435 7.48024 4.13542 7.60528 4.08157C7.73031 4.02772 7.86433 4 7.99967 4C8.13502 4 8.26903 4.02772 8.39407 4.08157C8.5191 4.13542 8.6327 4.21435 8.72837 4.31385L14.4653 10.277C14.594 10.4109 14.6663 10.5924 14.6663 10.7817C14.6663 10.971 14.594 11.1525 14.4653 11.2863L13.9797 11.791Z" fill="#484848" />*/}
                {/*  </svg>*/}
                {/*</button>*/}
                <div className={styles.bestSlider__nav}>
                    <button type='button' className={'best-prev-btn'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M7.79101 12.9787C7.92482 12.8499 8 12.6753 8 12.4931C8 12.311 7.92482 12.1364 7.79101 12.0076L2.58519 6.9987L7.79101 1.98983C7.92482 1.86104 8 1.68638 8 1.50426C8 1.32214 7.92482 1.14748 7.79101 1.01869L7.28634 0.533118C7.15248 0.404362 6.97096 0.332031 6.78168 0.332031C6.5924 0.332031 6.41087 0.404362 6.27702 0.533118L0.313848 6.27C0.21435 6.36567 0.135421 6.47927 0.0815692 6.6043C0.0277179 6.72933 0 6.86335 0 6.9987C0 7.13404 0.0277179 7.26806 0.0815692 7.39309C0.135421 7.51813 0.21435 7.63172 0.313848 7.7274L6.27702 13.4643C6.41087 13.593 6.5924 13.6654 6.78168 13.6654C6.97096 13.6654 7.15248 13.593 7.28634 13.4643L7.79101 12.9787Z"
                                  fill="#484848"/>
                        </svg>
                    </button>
                    <button type='button' className={'best-next-btn'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M4.20899 13.9787C4.07518 13.8499 4 13.6753 4 13.4931C4 13.311 4.07518 13.1364 4.20899 13.0076L9.41481 7.9987L4.20899 2.98983C4.07518 2.86104 4 2.68638 4 2.50426C4 2.32214 4.07518 2.14748 4.20899 2.01869L4.71366 1.53312C4.84752 1.40436 5.02904 1.33203 5.21832 1.33203C5.4076 1.33203 5.58913 1.40436 5.72298 1.53312L11.6862 7.27C11.7857 7.36567 11.8646 7.47927 11.9184 7.6043C11.9723 7.72933 12 7.86335 12 7.9987C12 8.13404 11.9723 8.26806 11.9184 8.39309C11.8646 8.51813 11.7857 8.63172 11.6862 8.7274L5.72298 14.4643C5.58913 14.593 5.4076 14.6654 5.21832 14.6654C5.02904 14.6654 4.84752 14.593 4.71366 14.4643L4.20899 13.9787Z"
                                  fill="#484848"/>
                        </svg>
                    </button>
                </div>
            </div>
            {/*{showMoment && (*/}
            <Swiper
                spaceBetween={10}
                slidesPerView={'auto'}
                modules={[Navigation]}
                className={styles.bestSwiper}
                navigation={{
                    nextEl: '.best-next-btn',
                    prevEl: '.best-prev-btn'
                }}
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
                                <img src={item.img} alt=""/>
                            </div>
                        </Link>
                    </SwiperSlide>
                })}

            </Swiper>
            {/*)}*/}

        </div>
    )
}

export default BestMomentProfile