import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 

import 'swiper/css';

import HelloBanner1 from '../assets/images/hello-banner-x2.min.png';

function MainBanner() {
return (
<section className="hello">
	<Swiper
		slidesPerView={1}
		onSlideChange={() => console.log('slide change')}
		onSwiper={(swiper) => console.log(swiper)}
		className="hello__swiper"
	>
		<SwiperSlide>
			<div className="hello__img-wrapper">
				<img className="hello__img" src={HelloBanner1} alt="Banner 1" />
			</div>
			<div className="hello__info-wrapper">
				<ul className="hello__info-list">
					<li className="hello__info-item">
						<button className="hello__info-btn">
							<span className="hello__info-name">ARSENAL LONDON</span>
							<span className="hello__info-coefficient">2.65</span>
						</button>
					</li>
					<li className="hello__info-item">
						<button className="hello__info-btn">
							<span className="hello__info-name">DRAW</span>
							<span className="hello__info-coefficient">3.65</span>
						</button>
					</li>
					<li className="hello__info-item">
						<button className="hello__info-btn hello__info-btn--active">
							<span className="hello__info-name">LIVERPOOL</span>
							<span className="hello__info-coefficient">1.65</span>
						</button>
					</li>
				</ul>
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<div className="hello__img-wrapper">
				<img className="hello__img" src={HelloBanner1} alt="Banner 1" />
			</div>
			<div className="hello__info-wrapper">
				<ul className="hello__info-list"></ul>
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<div className="hello__img-wrapper">
				<img className="hello__img" src={HelloBanner1} alt="Banner 1" />
			</div>
			<div className="hello__info-wrapper">
				<ul className="hello__info-list"></ul>
			</div>
		</SwiperSlide>
	</Swiper>
</section>
);
}

export default MainBanner;
