import { Menu, TableLeagues } from '../components/'
import LiveBetting from '../components/LiveBetting'
import MenuMobile from '../components/MenuMobile'

function StatisticsPageFive() {
	return (
		<>
			<div className='liveBettingStatusFive'>
				<LiveBetting />
			</div>
			<MenuMobile />
			<Menu />
			<main className='page page--statistics-five scroll'>
				<TableLeagues />
			</main>
		</>
	)
}

export default StatisticsPageFive
