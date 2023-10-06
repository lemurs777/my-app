import { Header, StatisticsOverview } from '../components/'

function StatisticsPageOverview() {
	return (
		<>
			<Header showTop={true} showBottom={false} />
			<main className='page page--statistics-main scroll'>
				<StatisticsOverview />
			</main>
		</>
	)
}

export default StatisticsPageOverview
