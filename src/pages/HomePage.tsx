import { MainSlider, Sport, Broadcast, Multiple, Menu } from '../components/'
import Search from '../components/Search'

function HomePage() {
	return (
		<>
			<Menu />
			<Search />
			<main className='page page--index scroll'>
				<MainSlider />
				<Sport />
			</main>
			<aside className='aside aside--index scroll'>
				<Broadcast />
				<Multiple />
			</aside>
		</>
	)
}

export default HomePage
