import { Header, StatisticsTables } from '../components/'

function StatisticsPageTables() {
	return (
		<>
			<Header showBottom={true} showTopProfile={true} />
			<main className='page page--statistics-main scroll'>
				<StatisticsTables />
			</main>
		</>
	)
}

export default StatisticsPageTables
