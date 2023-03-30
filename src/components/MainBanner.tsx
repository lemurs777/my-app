import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";

import HelloBanner1 from '../assets/images/hello-banner-x2.min.png';

function MainSlider() {

	const banners = [
		{
			img: HelloBanner1,
			alt: 'Banner 1',
			infoItems: [
				{ name: 'ARSENAL LONDON', coefficient: 2.65 },
				{ name: 'DRAW', coefficient: 3.65 },
				{ name: 'LIVERPOOL', coefficient: 1.65, isActive: true },
			],
		},
		{
			img: HelloBanner1,
			alt: 'Banner 2',
			infoItems: [
				{ name: 'ARSENAL LONDON', coefficient: 2.65 },
				{ name: 'DRAW', coefficient: 3.65 },
				{ name: 'LIVERPOOL', coefficient: 1.65, isActive: true },
			],
		},
		{
			img: HelloBanner1,
			alt: 'Banner 3',
			infoItems: [
				{ name: 'ARSENAL LONDON', coefficient: 2.65 },
				{ name: 'DRAW', coefficient: 3.65 },
				{ name: 'LIVERPOOL', coefficient: 1.65, isActive: true },
			],
		},
	];

	return (
		<section className="main-slider">
			<Swiper
				slidesPerView={1}
				loop={true} 
                autoplay={{
                    delay: 2500,
                }}
				speed={500}
				modules={[Autoplay, Navigation]}
                navigation={true}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
				className="main-slider__swiper"
			>
				{banners.map((banner, index) => (
					<SwiperSlide key={index}>
						<div className="main-slider__img-wrapper">
							<img className="main-slider__img" src={banner.img} alt={banner.alt} />
						</div>
						<div className="main-slider__info-wrapper">
							<ul className="main-slider__info-list">
								{banner.infoItems.map((infoItem, index) => (
									<li key={index} className="main-slider__info-item">
										<button className={clsx(
											'main-slider__info-btn',
											{'main-slider__info-btn--active': infoItem.isActive}
										)}>
											<span className="main-slider__info-name">{infoItem.name}</span>
											<span className="main-slider__info-coefficient">{infoItem.coefficient}</span>
										</button>
									</li>
								))};
							</ul>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default MainSlider; 
