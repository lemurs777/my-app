import {MainSlider, Sport, Multiple, Menu} from '../components/'
import Search from '../components/Search'

import {SportMenuDB as sport} from '../assets/database/SportMenuDB'
import Broadcast from "../components/Broadcast";
import {SupportChat} from "../components";

function HomePage() {
    return (
        <>
            <SupportChat/>
            <main className={'main'}>
                {/*<Menu />*/}
                <div className="desktop">
                    <Menu data={sport}/>
                </div>
                <Search/>
                {/*<main className='page page--index scroll'>*/}
                <div className={'central'}>
                    <MainSlider/>
                    <Sport/>
                </div>
                <aside className='aside aside--index scroll'>
                    <Broadcast auth={false}/>
                    <Multiple/>
                </aside>
            </main>
        </>
    )
}

export default HomePage
