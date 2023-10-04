import { Archive } from '../components/'
import Header from '../components/Header'

function StatisticsPageArchive() {
	return (
		<>
			<Header showBottom={true} showTopProfile={true} />
			<main className='page page--statistics-main'>
				<Archive />
			</main>
		</>
	)
}

export default StatisticsPageArchive
