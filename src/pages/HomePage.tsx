import { MainSlider, Sport, Multiple, Menu } from '../components/'
import Search from '../components/Search'

import { SportMenuDB as sport } from '../assets/database/SportMenuDB'
import Broadcast from "../components/Broadcast"
import { SupportChat } from "../components"

function HomePage() {
  return (
    <>

      <main className={'main'}>
        <div className="desktop">
          <Menu data={sport} />
        </div>
        <Search />
        <div className={'central'}>
          <MainSlider />
          <Sport />
        </div>
        <aside className='aside aside--index scroll'>
          <Broadcast auth={false} />
          <Multiple />
        </aside>
      </main>
    </>
  )
}

export default HomePage
