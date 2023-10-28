import {
    Menu,
    EventsToday,
    EventsList,

} from '../components/'
import BestMomentProfile from '../components/BestMomentProfile'
import SportFooter from '../components/SportFooter'
import Broadcast from "../components/Broadcast";
import {SportMenuDB as sports} from "../assets/database/SportMenuDB";
import React from "react";
import {CategoryList, Header, Multiple, StatisticsTables} from "../components";
import EventInfo from "../components/EventInfo";
import StatisticOneLayout from "../layouts/StatisticOneLayout";
import Broadcasts from "../components/NotUse/BroadcastsOld";
import HeaderBottomEvent from "../components/HeaderBottomEvent";

function EventsPage() {
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

    const eventItems = [
        {
            showIcon: true,
            title: 'Результат',
            favourite: true,
            arrInfo: [
                {
                    arrRow: [
                        {
                            name: 'Бавария',
                            countOne: '2.4',
                            countTwo: null,
                            up: true,
                            down: false,
                        },
                        {
                            name: 'Ничья',
                            countOne: '2.4',
                            countTwo: null,
                            up: false,
                            down: false,
                        },
                        {
                            name: 'Бавария',
                            countOne: '2.4',
                            countTwo: null,
                            up: false,
                            down: true,
                        },
                    ],
                },
            ],
        },
        {
            showIcon: true,
            title: 'Двойной исход',
            favourite: true,
            arrInfo: [
                {
                    arrRow: [
                        {
                            name: 'Бавария',
                            countOne: '2.4',
                            countTwo: null,
                            up: true,
                            down: false,
                        },
                        {
                            name: 'Ничья',
                            countOne: '2.4',
                            countTwo: null,
                            up: false,
                            down: false,
                        },
                        {
                            name: 'Бавария',
                            countOne: '2.4',
                            countTwo: null,
                            up: false,
                            down: true,
                        },
                    ],
                },
            ],
        },
        {
            showIcon: true,
            title: 'Гандикап',
            favourite: true,
            arrInfo: [
                {
                    arrRow: [
                        {
                            name: 'Бавария',
                            countOne: '2.4',
                            countTwo: null,
                            up: true,
                            down: false,
                        },
                        {
                            name: 'Ничья',
                            countOne: '2.4',
                            countTwo: null,
                            up: false,
                            down: false,
                        },
                        {
                            name: 'Бавария',
                            countOne: '2.4',
                            countTwo: null,
                            up: false,
                            down: true,
                        },
                    ],
                },
            ],
        },
        {
            showIcon: true,
            title: 'Тотал',
            favourite: false,
            arrInfo: [
                {
                    arrRow: [
                        {
                            name: 'Больше (1.5)',
                            countOne: '2.4',
                            countTwo: null,
                            up: false,
                            down: false,
                        },
                        {
                            name: 'Меньше (1.5)',
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
                {
                    arrRow: [
                        {
                            name: 'Больше (2.5)',
                            countOne: '2.4',
                            countTwo: null,
                            up: false,
                            down: false,
                        },
                        {
                            name: 'Меньше (2.5)',
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
                            name: 'Больше (3)',
                            countOne: '2.4',
                            countTwo: null,
                            up: false,
                            down: false,
                        },
                        {
                            name: 'Меньше (3)',
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
                            name: 'Больше (3.5)',
                            countOne: '2.4',
                            countTwo: null,
                            up: false,
                            down: false,
                        },
                        {
                            name: 'Меньше (3.5)',
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
            showIcon: true,
            title: 'Точный счёт',
            favourite: false,
            arrInfo: [
                {
                    arrRow: [
                        {
                            name: '1:0',
                            countOne: '2.4',
                            countTwo: null,
                            up: true,
                            down: false,
                        },
                        {
                            name: '1:1',
                            countOne: '2.4',
                            countTwo: null,
                            up: false,
                            down: false,
                        },
                        {
                            name: '0:1',
                            countOne: '2.4',
                            countTwo: null,
                            up: false,
                            down: true,
                        },
                    ],
                },
                {
                    arrRow: [
                        {
                            name: '2:0',
                            countOne: '2.4',
                            countTwo: null,
                            up: true,
                            down: false,
                        },
                        {
                            name: '2:2',
                            countOne: '2.4',
                            countTwo: null,
                            up: false,
                            down: false,
                        },
                        {
                            name: '0:2',
                            countOne: '2.4',
                            countTwo: null,
                            up: false,
                            down: true,
                        },
                    ],
                },
                {
                    arrRow: [
                        {
                            name: '2:1',
                            countOne: '2.4',
                            countTwo: null,
                            up: true,
                            down: false,
                        },
                        {
                            name: '3:3',
                            countOne: '2.4',
                            countTwo: null,
                            up: false,
                            down: false,
                        },
                        {
                            name: '1:2',
                            countOne: '2.4',
                            countTwo: null,
                            up: false,
                            down: true,
                        },
                    ],
                },
                {
                    arrRow: [
                        {
                            name: '3:1',
                            countOne: '2.4',
                            countTwo: null,
                            up: true,
                            down: false,
                        },
                        {
                            name: '4:4',
                            countOne: '2.4',
                            countTwo: null,
                            up: false,
                            down: false,
                        },
                        {
                            name: '1:3',
                            countOne: '2.4',
                            countTwo: null,
                            up: false,
                            down: true,
                        },
                    ],
                },
            ],
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
    const gameList = [' Футбол', ' Футбол', ' Футбол']
    return (
        <>

            <Header isLogIn={true} showBottom={false}/>
            <HeaderBottomEvent
                icon={false}
                link={'Спорт'}
                data={gameList}
                dataTable={arrTables}
                dataTableTitle={'Таиланд. премьер-лига'}
            />
            <main className='main'>
                <div className="events__menu">
                    <Menu data={sports}/>
                </div>
                <EventsToday/>
                <div className="central">
                    <EventInfo/>
                    <CategoryList data={arrCategory}/>
                    <EventsList dataList={eventItems}/>
                </div>
                <aside className='aside events__aside'>
                    <Broadcast auth={false}/>
                    <BestMomentProfile/>
                    <Broadcasts/>
                    <Multiple/>
                </aside>
            </main>
            <SportFooter/>
        </>
    )
}

export default EventsPage
