import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import styles from './BestMoments.module.scss'

import { Autoplay, Navigation } from 'swiper'

function BestSlider() {
	const bestList = [
		{
			nameOne: 'Манчестер Юнайтед',
			nameTwo: 'Галатасарай',
			className: 'soccet',
			link: '/',
		},
		{
			nameOne: 'Phoenix Suns',
			nameTwo: 'Atlanta Hawks',
			className: 'basketball',
			link: '/',
		},
		{
			nameOne: 'Chicago Bulls',
			nameTwo: 'Brooklyn Nets',
			className: 'hockey',
			link: '/',
		},
		{
			nameOne: 'Челси',
			nameTwo: 'Барселона',
			className: 'soccet',
			link: '/',
		},
		{
			nameOne: 'Марин Чилич',
			nameTwo: 'Андрей Рублев',
			className: 'tennis',
			link: '/',
		},
		{
			nameOne: 'Chicago Bulls',
			nameTwo: 'Brooklyn Nets',
			className: 'hockey',
			link: '/',
		},
		{
			nameOne: 'Зенит',
			nameTwo: 'Локомотив',
			className: 'soccet',
			link: '/',
		},
		{
			nameOne: 'Манчестер Юнайтед',
			nameTwo: 'Галатасарай',
			className: 'soccet',
			link: '/',
		},
		{
			nameOne: 'Phoenix Suns',
			nameTwo: 'Atlanta Hawks',
			className: 'basketball',
			link: '/',
		},
		{
			nameOne: 'Chicago Bulls',
			nameTwo: 'Brooklyn Nets',
			className: 'hockey',
			link: '/',
		},
		{
			nameOne: 'Челси',
			nameTwo: 'Барселона',
			className: 'soccet',
			link: '/',
		},
		{
			nameOne: 'Марин Чилич',
			nameTwo: 'Андрей Рублев',
			className: 'tennis',
			link: '/',
		},
		{
			nameOne: 'Chicago Bulls',
			nameTwo: 'Brooklyn Nets',
			className: 'hockey',
			link: '/',
		},
		{
			nameOne: 'Зенит',
			nameTwo: 'Локомотив',
			className: 'soccet',
			link: '/',
		},
	]

	return (
		<div className={styles.bestMoments}>
			<h2 className={styles.title}>Лучшие моменты дня</h2>
			<Swiper
				slidesPerView={'auto'}
				loop={true}
				autoplay={{
					delay: 2500,
				}}
				speed={300}
				modules={[Autoplay, Navigation]}
				navigation={true}
				//onSlideChange={() => console.log('slide change')}
				//onSwiper={(swiper) => console.log(swiper)}
				className={clsx(styles.list, 'best-slider')}
			>
				{bestList.map((item, index) => (
					<SwiperSlide className={styles.item} key={index}>
						<Link
							className={clsx(styles.link, styles[item.className])}
							to={item.link}
						>
							<h3 className={styles.linkTitle}>
								<span className={styles.linkTitleOne}>{item.nameOne}</span>
								<span className={styles.linkTitleTwo}>{item.nameTwo}</span>
							</h3>
							<div className={styles.live}>live</div>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default BestSlider
