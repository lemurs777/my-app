import React from 'react'
import {
    CategoryList,
    EventsInfo, EventsList,
    GameInfo,
    HeaderTop,
} from '../components'
import CouponEmpty from '../components/CouponEmpty'
import MenuCyberSport from '../components/MenuCyberSport'
import Broadcast from '../components/Broadcast'
import Stream from '../components/Stream'
import CyberEventScore from '../components/CyberEventScore'
import HeaderBottomEvent from '../components/HeaderBottomEvent'

import {ReactComponent as GameIcon} from '../assets/images/svg/game.svg'
import {CategoryData, ItemsData} from "../components/EventsInfo/types";

const CyberSportEventPage = () => {
    const arrCategory = [
        {
            name: 'Все',
            active: true,
        },
        {
            name: 'Двойной исход',
            active: false,
        },
        {
            name: 'Гандикап',
            active: false,
        },
        {
            name: 'Тотал',
            active: false,
        },
        {
            name: 'Точный счёт',
            active: false,
        },
        {
            name: 'Кто забьёт первый',
            active: false,
        },
        {
            name: '1-й тайм: 1Х2',
            active: false,
        },
        {
            name: '1-й тайм: Гандикап',
            active: false,
        },
        {
            name: '2-й тайм: 1Х2',
            active: false,
        },
        {
            name: '2-й тайм: Гандикап',
            active: false,
        },
    ]

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
    const eventItems = [
        {
            title: 'Winner',
            collapse: true,
            showIcon: false,
            favourite: false,
            arrInfo: [
                {
                    arrRow: [
                        {
                            name: 'Nemiga',
                            countOne: '2.4',
                            countTwo: null,
                            up: false,
                            down: false,
                        },
                        {
                            name: 'Winsrike',
                            countOne: '5.9',
                            countTwo: null,
                            up: false,
                            down: false,
                        },
                    ],
                },
            ],
        },
        {
            title: 'Map Advantage',
            favourite: false,
            arrInfo: [
                {
                    arrRow: [
                        {
                            name: 'Nemiga',
                            countOne: '2.4',
                            countTwo: null,
                            up: false,
                            down: false,
                        },
                        {
                            name: 'Winsrike',
                            countOne: '5.9',
                            countTwo: null,
                            up: false,
                            down: false,
                        },
                    ],
                },
                {
                    arrRow: [
                        {
                            name: 'Больше (2)',
                            countOne: '2.4',
                            countTwo: null,
                            up: false,
                            down: false,
                        },
                        {
                            name: 'Меньше (2)',
                            countOne: '5.9',
                            countTwo: null,
                            up: false,
                            down: false,
                        },
                    ],
                },
            ],
        },
        {
            title: 'Total Maps Played',
            favourite: false,
            arrInfo: [
                {
                    arrRow: [
                        {
                            name: 'Over (2.5)',
                            countOne: '2.4',
                            countTwo: null,
                            up: false,
                            down: false,
                        },
                        {
                            name: 'Under (2.5)',
                            countOne: '5.9',
                            countTwo: null,
                            up: false,
                            down: false,
                        },
                    ],
                },
            ],
        },
        {
            title: 'Winner Map 1',
            favourite: false,
            arrInfo: [
                {
                    arrRow: [
                        {
                            name: 'Nemiga',
                            countOne: '2.4',
                            countTwo: null,
                            up: false,
                            down: false,
                        },
                        {
                            name: 'Under (2.5)',
                            countOne: '5.9',
                            countTwo: null,
                            up: false,
                            down: false,
                        },
                    ],
                },
            ],
        },
        {
            title: 'Winner Map 1',
            favourite: false,
            arrInfo: [
                {
                    arrRow: [
                        {
                            name: 'Over (2.5)',
                            countOne: '2.4',
                            countTwo: null,
                            up: false,
                            down: false,
                        },
                        {
                            name: 'Winsrike',
                            countOne: '5.9',
                            countTwo: null,
                            up: false,
                            down: false,
                        },
                    ],
                },
            ],
        },
        {
            title: 'Total Map',
            favourite: false,
            arrInfo: [
                {
                    arrRow: [
                        {
                            name: 'Over (2.5)',
                            countOne: '2.4',
                            countTwo: null,
                            up: false,
                            down: false,
                        },
                        {
                            name: 'Under (2.5)',
                            countOne: '5.9',
                            countTwo: null,
                            up: false,
                            down: false,
                        },
                    ],
                },
                {
                    arrRow: [
                        {
                            name: 'Over (2.5)',
                            countOne: '2.4',
                            countTwo: null,
                            up: false,
                            down: false,
                        },
                        {
                            name: 'Under (2.5)',
                            countOne: '5.9',
                            countTwo: null,
                            up: false,
                            down: false,
                        },
                    ],
                },
                {
                    arrRow: [
                        {
                            name: 'Over (2.5)',
                            countOne: '2.4',
                            countTwo: null,
                            up: false,
                            down: false,
                        },
                        {
                            name: 'Under (2.5)',
                            countOne: '5.9',
                            countTwo: null,
                            up: false,
                            down: false,
                        },
                    ],
                },
                {
                    arrRow: [
                        {
                            name: 'Over (2.5)',
                            countOne: '2.4',
                            countTwo: null,
                            up: false,
                            down: false,
                        },
                        {
                            name: 'Under (2.5)',
                            countOne: '5.9',
                            countTwo: null,
                            up: false,
                            down: false,
                        },
                    ],
                },
                {
                    arrRow: [
                        {
                            name: 'Over (2.5)',
                            countOne: '2.4',
                            countTwo: null,
                            up: false,
                            down: false,
                        },
                        {
                            name: 'Under (2.5)',
                            countOne: '5.9',
                            countTwo: null,
                            up: false,
                            down: false,
                        },
                    ],
                },
            ],
        },
    ]
    const gameList = ['Counter-Strike', 'Dota 2', 'Overwatch']
    return (
        <>
            <HeaderTop/>


            <HeaderBottomEvent
                icon={<GameIcon/>}
                link={'eSport'}
                data={gameList}
                dataTable={arrTables}
                dataTableTitle={'Nemiga - Winstrike'}
            />

            <main className='main main--cyberSport'>
                <div className="desktop">
                    <MenuCyberSport/>
                </div>
                <GameInfo/>
                <div className='central'>
                    <CyberEventScore/>
                    <Stream/>
                    <CategoryList data={arrCategory}/>
                    <EventsList dataList={eventItems}/>

                </div>
                <aside className='aside'>
                    <Broadcast auth={true}/>
                    <CouponEmpty/>
                </aside>
            </main>
        </>
    )
}

export default CyberSportEventPage
