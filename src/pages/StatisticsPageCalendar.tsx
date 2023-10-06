import { TableCalendar, Header } from '../components/'

function StatisticsPageCalendar() {
	return (
		<>
			<Header showTop={true} showBottom={false} />
			<main className='page page--statistics-main scroll'>
				<TableCalendar />
			</main>
		</>
	)
}

export default StatisticsPageCalendar
