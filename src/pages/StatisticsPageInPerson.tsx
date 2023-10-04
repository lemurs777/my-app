import { Header, StatisticsInPerson } from '../components/'

function StatisticsPageInPerson() {
	return (
		<>
			<Header showBottom={true} showTopProfile={true} />
			<main className='page page--statistics-main scroll'>
				<StatisticsInPerson />
			</main>
		</>
	)
}

export default StatisticsPageInPerson
