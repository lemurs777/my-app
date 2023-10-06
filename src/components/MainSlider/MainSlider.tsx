import clsx from 'clsx'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import { Autoplay, Navigation } from 'swiper'

import HelloBanner1 from '../../assets/images/hello-banner-x2.min.png'

import styles from './MainSlider.module.scss'

function MainSlider() {
	const banners = [
		{
			img: HelloBanner1,
			alt: 'Banner 1',
			infoItems: [
				{ name: 'Арсенал Лондон', coefficient: 2.65 },
				{ name: 'Ничья', coefficient: 3.65 },
				{ name: 'Ливерпуль', coefficient: 1.65, isActive: true },
			],
		},
		{
			img: HelloBanner1,
			alt: 'Banner 2',
			infoItems: [
				{ name: 'Арсенал Лондон', coefficient: 2.65 },
				{ name: 'Ничья', coefficient: 3.65 },
				{ name: 'Ливерпуль', coefficient: 1.65, isActive: true },
			],
		},
		{
			img: HelloBanner1,
			alt: 'Banner 3',
			infoItems: [
				{ name: 'Арсенал Лондон', coefficient: 2.65 },
				{ name: 'Ничья', coefficient: 3.65 },
				{ name: 'Ливерпуль', coefficient: 1.65, isActive: true },
			],
		},
	]

	return (
		<section className={styles.mainSlider}>
			<Swiper
				slidesPerView={1}
				loop={true}
				autoplay={{
					delay: 2500,
				}}
				speed={500}
				modules={[Autoplay, Navigation]}
				navigation={true}
				//onSlideChange={() => console.log('slide change')}
				//onSwiper={(swiper) => console.log(swiper)}
				className={clsx(styles.swiper, 'main-slider')}
			>
				{banners.map((banner, index) => (
					<SwiperSlide key={index}>
						<div className={styles.imgWrapper}>
							<img className={styles.img} src={banner.img} alt={banner.alt} />
						</div>
						<div className={styles.infoWrapper}>
							<ul className={styles.infoList}>
								{banner.infoItems.map((infoItem, index) => (
									<li key={index} className={styles.infoItem}>
										<button
											className={clsx(styles.infoBtn, {
												[styles.infoBtnActive]: infoItem.isActive,
											})}
										>
											<span className={styles.infoName}>{infoItem.name}</span>
											<span className={styles.infoCoefficient}>
												{infoItem.coefficient}
											</span>
										</button>
									</li>
								))}
							</ul>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default MainSlider
