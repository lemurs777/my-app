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
import HeaderBottomEvent from "../components/HeaderBottomEvent";
import {ReactComponent as FootballIcon} from "../assets/images/svg/category-menu/football.svg";
const countryList = ['Германия', 'Франция', 'Италия']
const arrTables = [
    {
        name: 'Испания. Примера',
        time: '18:15',
        date: '21 Aug',
        nameOne: 'Севилья',
        nameTwo: 'Атлетико Мадрид',
        lastNumber: 21,
        checkOne: 0,
        checkTwo: 2,
        arrNumbers: [
            {
                number: 9.1,
                class: 'empty',
            },
            {
                number: 9.1,
                class: 'empty',
            },
            {
                number: 9.1,
                class: 'empty',
            },
        ],
        arrNumbers2: [
            {
                number: 9.1,
                class: 'upp',
            },
            {
                number: 9.1,
                class: 'down',
            },
            {
                number: 2.5,
                class: 'disableTable',
            },
        ],
    },
    {
        name: 'Испания. Примера',
        time: '32`',
        date: '21 Aug',
        nameOne: 'Севилья',
        nameTwo: 'Атлетико Мадрид',
        lastNumber: 21,
        class: 'danger',
        checkOne: 0,
        checkTwo: 1,
        arrNumbers: [
            {
                number: 9.1,
                class: 'empty',
            },
            {
                number: 9.1,
                class: 'empty',
            },
            {
                number: 9.1,
                class: 'empty',
            },
        ],
        arrNumbers2: [
            {
                number: 9.1,
                class: 'upp',
            },
            {
                number: 9.1,
                class: 'down',
            },
            {
                number: 2.5,
                class: 'disableTable',
            },
        ],
    },
    {
        name: 'Испания. Примера',
        time: '18:15',
        date: '21 Aug',
        nameOne: 'Севилья',
        nameTwo: 'Атлетико Мадрид',
        lastNumber: 21,
        checkOne: 0,
        checkTwo: 1,
        arrNumbers: [
            {
                number: 9.1,
                class: 'empty',
            },
            {
                number: 9.1,
                class: 'empty',
            },
            {
                number: 9.1,
                class: 'empty',
            },
        ],
        arrNumbers2: [
            {
                number: 9.1,
                class: 'upp',
            },
            {
                number: 9.1,
                class: 'down',
            },
            {
                number: 2.5,
                class: 'disableTable',
            },
        ],
    },
    {
        name: 'Испания. Примера',
        time: '18:15',
        date: '21 Aug',
        nameOne: 'Севилья',
        nameTwo: 'Атлетико Мадрид',
        lastNumber: 21,
        checkOne: 0,
        checkTwo: 1,
        arrNumbers: [
            {
                number: 9.1,
                class: 'empty',
            },
            {
                number: 9.1,
                class: 'empty',
            },
            {
                number: 9.1,
                class: 'empty',
            },
        ],
        arrNumbers2: [
            {
                number: 9.1,
                class: 'upp',
            },
            {
                number: 9.1,
                class: 'down',
            },
            {
                number: 2.5,
                class: 'disableTable',
            },
        ],
    },
]
function HomePageGames() {
    return (
        <>
            <HeaderTop/>
            <div className="desktop">
                <HeaderBottom/>
            </div>
            <div className="mobile">
                <HeaderBottomEvent icon={<FootballIcon/>} link={'Футбол'} data={countryList} dataTable={arrTables} dataTableTitle={'Бундеслига'}/>
                    </div>
                {/*<MenuGame />*/}
                <main className='main'>
                    <div className="game-page__menu">
                        <Menu data={games}/>
                    </div>
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
