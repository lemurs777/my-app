import { Header, Menu, StatisticsOne } from '../components/'
import LiveEventTime from '../components/LiveEventTime'
import MenuMobile from '../components/MenuMobile'

function StatisticsPageOne() {
	return (
		<>

			<MenuMobile />
			<main className='page page--statistics-one scroll'>
				<StatisticsOne />
			</main>
		</>
	)
}

export default StatisticsPageOne
