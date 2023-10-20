import {MainSlider, Sport, Multiple, Menu, MenuCyberSport} from '../components/'
import Search from '../components/Search'

function HomePage() {
    return (
        <>

            <main className={'main'}>
                {/*<Menu />*/}
                <MenuCyberSport/>
                <Search/>
                {/*<main className='page page--index scroll'>*/}
                <div className={'central'}>
                    <MainSlider/>
                    <Sport/>
                </div>
                <aside className='aside aside--index scroll'>
                    {/*<Broadcast />*/}
                    <Multiple/>
                </aside>
            </main>
        </>
    )
}

export default HomePage
