import {
    GameInfo,
    GameBanner,
    CyberSport,
    //Broadcast,
    Multiple,
    //MenuGame,
    HeaderTop,
    HeaderBottom,
} from '../components/'
import CouponEmpty from '../components/CouponEmpty'
import SportFooter from '../components/SportFooter'
import {FinalBannerInfo, Menu} from "../components";
import {GamesDB as games} from "../assets/database/GamesDB";
import Broadcast from "../components/Broadcast";

function HomePageGames() {
    return (
        <>
            <HeaderTop/>
            <HeaderBottom/>
            {/*<MenuGame />*/}
            <main className='main'>
                <Menu data={games}/>
                <div className="game-page__game-info">
                    <GameInfo/>
                </div>
                {/*<div className='game-wrapper scroll'>*/}
                <div className="central">
                    <div className="game-page__game-banner">
                        <GameBanner/>
                    </div>
                    <div className="game-page__game-banner-final">
                        <FinalBannerInfo/>
                    </div>
                    <CyberSport/>
                    <SportFooter/>
                </div>
                {/*<aside className='aside aside--index aside--cyber scroll'>*/}
                <aside className='aside'>
                    {/*<Broadcast />*/}
                    {/*<Multiple />*/}
                    <Broadcast auth={true}/>
                    <CouponEmpty/>
                </aside>
            </main>
        </>
    )
}

export default HomePageGames
