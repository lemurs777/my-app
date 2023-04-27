import { Link } from 'react-router-dom';

import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";

import PromoMainBanner1 from '../assets/images/promo-main-banner-1-x2.min.jpg';
import PromoBanner1 from '../assets/images/promo-banner-1-x2.min.jpg';
import PromoBanner2 from '../assets/images/promo-banner-2-x2.min.jpg';

function PromotionsPage(){

	const arrBanners = [
		{
			img: PromoMainBanner1,
			alt: 'Banner 1',
			dateStart: '02.07.2020',
			dateEnd: '03.07.2020',
			title: 'Ставь на киберспорт и выиграй спец. призы',
			text: 'Здесь должно быть описание акции, но я его ещё не перевел на русский язык',
		},
		{
			img: PromoMainBanner1,
			alt: 'Banner 2',
			dateStart: '02.08.2020',
			dateEnd: '03.08.2020',
			title: 'Ставь на киберспорт и выиграй спец. призы',
			text: 'Здесь должно быть описание акции, но я его ещё не перевел на русский язык',
		},
		{
			img: PromoMainBanner1,
			alt: 'Banner 3',
			dateStart: '02.09.2020',
			dateEnd: '03.09.2020',
			title: 'Ставь на киберспорт и выиграй спец. призы',
			text: 'Здесь должно быть описание акции, но я его ещё не перевел на русский язык',
		},
		{
			img: PromoMainBanner1,
			alt: 'Banner 4',
			dateStart: '02.10.2021',
			dateEnd: '03.10.2021',
			title: 'Ставь на киберспорт и выиграй спец. призы',
			text: 'Здесь должно быть описание акции, но я его ещё не перевел на русский язык',
		},
		{
			img: PromoMainBanner1,
			alt: 'Banner 5',
			dateStart: '02.11.2022',
			dateEnd: '03.11.2022',
			title: 'Ставь на киберспорт и выиграй спец. призы',
			text: 'Здесь должно быть описание акции, но я его ещё не перевел на русский язык',
		},
	];

	return (
		<div className="promotions">
			<section className="promotions__banner">
				<div className="promotions__banner-left">
					<Swiper
						slidesPerView={1}
						loop={true} 
						autoplay={{
							delay: 25000,
						}}
						speed={5000}
						modules={[Autoplay, Navigation]}
						onSlideChange={() => console.log('slide change')}
						onSwiper={(swiper) => console.log(swiper)}
						className="promotions__banner-info-swiper"
					>
						{arrBanners.map((banner, index) => (
							<SwiperSlide key={index}>
								<div className="promotions__info-wrapper">
									<div className="promotions__info-content">
										<div className="promotions__info-date"><span>{banner.dateStart}</span> - <span>{banner.dateEnd}</span></div>
										<h2 className="promotions__info-title">{banner.title}</h2>
										<p className="promotions__info-text">{banner.text}</p>
									</div>
								</div>
							</SwiperSlide>
						))}	
					</Swiper> 
				</div>
				<div className="promotions__banner-right">
					<Swiper
						slidesPerView={1}
						loop={true} 
						autoplay={{
							delay: 2500,
						}}
						speed={500}
						modules={[Autoplay]}
						onSlideChange={() => console.log('slide change')}
						onSwiper={(swiper) => console.log(swiper)}
						className="promotions__banner-swiper"
					>
						{arrBanners.map((banner, index) => (
							<SwiperSlide key={index}>
								<div className="promotions__img-wrapper">
									<img className="promotions__img" src={banner.img} alt={banner.alt} />
								</div>
							</SwiperSlide>
						))}	
					</Swiper>    
				</div>
			</section>
			<section className="promotions__info">
				<h2 className="promotions__title">Акции</h2>
				<ul className="promotions__list">
					<li className="promotions__item">
						<Link className="promotions__item-link" to="/promotions/">
							<img className="promotions__item-img" src={PromoBanner1} alt="Promotion" />
							<div className="promotions__item-dates">02.07.2020 - 03.07.2020</div>
							<h3 className="promotions__item-title">Получи броню от Parimatch во время игр..</h3>
							<p className="promotions__item-text">Покупка бронежилетов в каждом раунде CS:GO – важная инвестиция в игру, которая повысит ваши шансы на победу.</p>
						</Link>
					</li>
					<li className="promotions__item">
						<Link className="promotions__item-link" to="/promotions/">
							<img className="promotions__item-img" src={PromoBanner2} alt="Promotion" />
							<div className="promotions__item-dates">02.07.2020 - 03.07.2020</div>
							<h3 className="promotions__item-title">Заводи двигатель и получи 50 фриспинов</h3>
							<p className="promotions__item-text">Вам знакомо то сильное чувство, которое вы испытываете, когда едете быстро, чувствуете прилив адреналина, и ваше сердце начинает биться намного быстрее?</p>
						</Link>
					</li>
					<li className="promotions__item">
						<Link className="promotions__item-link" to="/promotions/">
							<img className="promotions__item-img" src={PromoBanner1} alt="Promotion" />
							<div className="promotions__item-dates">02.07.2020 - 03.07.2020</div>
							<h3 className="promotions__item-title">Получи броню от Parimatch во время игр..</h3>
							<p className="promotions__item-text">Покупка бронежилетов в каждом раунде CS:GO – важная инвестиция в игру, которая повысит ваши шансы на победу.</p>
						</Link>
					</li>
				</ul>
			</section>
			<section className="promotions__info">
				<h2 className="promotions__title">Бонусы</h2>
				<ul className="promotions__list">
					<li className="promotions__item">
						<Link className="promotions__item-link" to="/promotions/">
							<img className="promotions__item-img" src={PromoBanner2} alt="Promotion" />
							<div className="promotions__item-dates">02.07.2020 - 03.07.2020</div>
							<h3 className="promotions__item-title">Заводи двигатель и получи 50 фриспинов</h3>
							<p className="promotions__item-text">Вам знакомо то сильное чувство, которое вы испытываете, когда едете быстро, чувствуете прилив адреналина, и ваше сердце начинает биться намного быстрее?</p>
						</Link>
					</li>
					<li className="promotions__item">
						<Link className="promotions__item-link" to="/promotions/">
							<img className="promotions__item-img" src={PromoBanner1} alt="Promotion" />
							<div className="promotions__item-dates">02.07.2020 - 03.07.2020</div>
							<h3 className="promotions__item-title">Получи броню от Parimatch во время игр..</h3>
							<p className="promotions__item-text">Покупка бронежилетов в каждом раунде CS:GO – важная инвестиция в игру, которая повысит ваши шансы на победу.</p>
						</Link>
					</li>
					<li className="promotions__item">
						<Link className="promotions__item-link" to="/promotions/">
							<img className="promotions__item-img" src={PromoBanner2} alt="Promotion" />
							<div className="promotions__item-dates">02.07.2020 - 03.07.2020</div>
							<h3 className="promotions__item-title">Заводи двигатель и получи 50 фриспинов</h3>
							<p className="promotions__item-text">Вам знакомо то сильное чувство, которое вы испытываете, когда едете быстро, чувствуете прилив адреналина, и ваше сердце начинает биться намного быстрее?</p>
						</Link>
					</li>
				</ul>
			</section>
		</div>
	);
};

export default PromotionsPage;