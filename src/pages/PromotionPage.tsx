import { Header, Promotion } from '../components'

function PromotionPage() {
	return (
		<>
			<Header
				showBottom={false}
				showBottomPromotion={true}
				showTopProfile={true}
			/>
			<main className='page page--promotions scroll'>
				<Promotion />
			</main>
		</>
	)
}

export default PromotionPage
