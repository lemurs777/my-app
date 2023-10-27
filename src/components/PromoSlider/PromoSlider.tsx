import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from './PromoSlider.module.scss';

import PromoMainBanner1 from '../../assets/images/promo-main-banner-1-x2.min.jpg';

function PromoSlider() {

	const arrBanners = [
		{
			img: PromoMainBanner1,
			alt: 'Banner 1',
			dateStart: '02.07.2020',
			dateEnd: '03.07.2020',
			title: 'Ставь на киберспорт и выиграй спец. призы',
			text: 'Здесь должно быть описание акции, но я его ещё не перевел на русский язык',
			linkOne: '/promotions/promo',
			linkTwo: '/promotions/promo',
		},
		{
			img: PromoMainBanner1,
			alt: 'Banner 2',
			dateStart: '02.08.2020',
			dateEnd: '03.08.2020',
			title: 'Ставь на киберспорт и выиграй спец. призы призы призы',
			text: 'Здесь должно быть описание акции, но я его ещё не перевел на русский язык на русский язык',
			linkOne: '/promotions/promo',
			linkTwo: '/promotions/promo',
		},
		{
			img: PromoMainBanner1,
			alt: 'Banner 3',
			dateStart: '02.09.2020',
			dateEnd: '03.09.2020',
			title: 'Ставь на киберспорт и выиграй спец. призы и выиграй спец. призы',
			text: 'Здесь должно быть описание акции, но я его ещё не перевел на русский язык',
			linkOne: '/promotions/promo',
			linkTwo: '/promotions/promo',
		},
		{
			img: PromoMainBanner1,
			alt: 'Banner 4',
			dateStart: '02.10.2021',
			dateEnd: '03.10.2021',
			title: 'Ставь на киберспорт и выиграй спец. призы',
			text: 'Здесь должно быть описание акции, но я его ещё не перевел на русский язык, но я его ещё не перевел на русский язык',
			linkOne: '/promotions/promo',
			linkTwo: '/promotions/promo',
		},
		{
			img: PromoMainBanner1,
			alt: 'Banner 5',
			dateStart: '02.11.2022',
			dateEnd: '03.11.2022',
			title: 'Ставь на киберспорт и выиграй спец. призы  и выиграй спец. призы',
			text: 'Здесь должно быть описание акции, но я его ещё не перевел на русский язык язык',
			linkOne: '/promotions/promo',
			linkTwo: '/promotions/promo',
		},
	];

	return (
		<section className={styles.promoSlider}>
			<div className={styles.promoSliderLeft}>
				<Swiper
					slidesPerView={1}
					loop={true}
					modules={[Navigation, Pagination]} 
					navigation={true}
					pagination={{ clickable: true }}
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}
					className={clsx(styles.promoSliderLeft, 'promo-slider')}
				>
					{arrBanners.map((banner, index) => (
						<SwiperSlide key={index}>
							<div className={styles.infoWrapper}>
								<div className={styles.infoContent}>
									<div className={styles.date}><span>{banner.dateStart}</span> - <span>{banner.dateEnd}</span></div>
									<h2 className={styles.title}>{banner.title}</h2>
									<p className={styles.text}>{banner.text}</p>
									<div className={styles.btnWrapper}>
										<Link className={clsx(styles.btn,'accent-btn')} to={banner.linkOne}>Участвовать</Link>
										<Link className={styles.btn} to={banner.linkTwo}>Подробнее</Link>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}	
				</Swiper> 
			</div>
			<div className={styles.promoSliderRight}>
				<Swiper
					slidesPerView={1}
					loop={true}
					className={styles.promoSliderRight}
				>
					{arrBanners.map((banner, index) => (
						<SwiperSlide key={index}>
							<div className={styles.imgWrapper}>
								<img className={styles.img} src={banner.img} alt={banner.alt} />
							</div>
						</SwiperSlide>
					))}	
				</Swiper>    
			</div>
		</section>
	);
}

export default PromoSlider;