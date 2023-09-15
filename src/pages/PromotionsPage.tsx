import {
	PromoSlider,
	PromoList,
} from '../components'

import PromoBanner1 from '../assets/images/promo-banner-1-x2.min.jpg'
import PromoBanner2 from '../assets/images/promo-banner-2-x2.min.jpg'
import SportFooter from '../components/SportFooter'

function PromotionsPage() {

	const promoList = {
		title: 'Акции',
		items: [
			{
				link: '/promotions/promo',
				image: PromoBanner1,
				alt: 'Promotion',
				dateStart: '02.07.2020',
				dateEnd: '03.07.2020',
				title: 'Получи броню от Parimatch во время игр..',
				info: 'Покупка бронежилетов в каждом раунде CS:GO – важная инвестиция в игру, которая повысит ваши шансы на победу.'
			},
			{
				link: '/promotions/promo',
				image: PromoBanner2,
				alt: 'Promotion',
				dateStart: '02.07.2020',
				dateEnd: '03.07.2020',
				title: 'Заводи двигатель и получи 50 фриспинов',
				info: 'Вам знакомо то сильное чувство, которое вы испытываете, когда едете быстро, чувствуете прилив адреналина, и ваше сердце начинает биться намного быстрее?'
			},
			{
				link: '/promotions/promo',
				image: PromoBanner1,
				alt: 'Promotion',
				dateStart: '02.07.2020',
				dateEnd: '03.07.2020',
				title: 'Получи броню от Parimatch во время игр..',
				info: 'Покупка бронежилетов в каждом раунде CS:GO – важная инвестиция в игру, которая повысит ваши шансы на победу.'
			},
		]
	}

	const bonusList = {
		title: 'Бонусы',
		items: [
			{
				link: '/promotions/promo',
				image: PromoBanner2,
				alt: 'Promotion',
				dateStart: '02.07.2020',
				dateEnd: '03.07.2020',
				title: 'Заводи двигатель и получи 50 фриспинов',
				info: 'Вам знакомо то сильное чувство, которое вы испытываете, когда едете быстро, чувствуете прилив адреналина, и ваше сердце начинает биться намного быстрее?'
			},
			{
				link: '/promotions/promo',
				image: PromoBanner1,
				alt: 'Promotion',
				dateStart: '02.07.2020',
				dateEnd: '03.07.2020',
				title: 'Получи броню от Parimatch во время игр..',
				info: 'Покупка бронежилетов в каждом раунде CS:GO – важная инвестиция в игру, которая повысит ваши шансы на победу.'
			},
			{
				link: '/promotions/promo',
				image: PromoBanner2,
				alt: 'Promotion',
				dateStart: '02.07.2020',
				dateEnd: '03.07.2020',
				title: 'Заводи двигатель и получи 50 фриспинов',
				info: 'Вам знакомо то сильное чувство, которое вы испытываете, когда едете быстро, чувствуете прилив адреналина, и ваше сердце начинает биться намного быстрее?'
			},
		]
	}

	return (
		<main className="page page--promotions scroll">
			<div className="promotions">

				<PromoSlider />

				<PromoList data={promoList} />

				<PromoList data={bonusList} />
				<SportFooter />
			</div>
		</main>
	)
};

export default PromotionsPage