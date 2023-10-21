import {ReactComponent as TopIcon} from '../images/svg/top.svg'
import {ReactComponent as FootballIcon} from '../images/svg/category-menu/football.svg'
import {ReactComponent as HockeyIcon} from '../images/svg/category-menu/hockey.svg'
import {ReactComponent as BasketballIcon} from '../images/svg/category-menu/basketball.svg'
import {ReactComponent as TennisIcon} from '../images/svg/category-menu/tennis.svg'
import {ReactComponent as RugbyIcon} from '../images/svg/category-menu/rugby.svg'
import {ReactComponent as VolleyballIcon} from '../images/svg/category-menu/volleyball.svg'
import {ReactComponent as MmaIcon} from '../images/svg/category-menu/mma.svg'
import {ReactComponent as CricketIcon} from '../images/svg/category-menu/cricket.svg'
import {ReactComponent as RacingIcon} from '../images/svg/category-menu/racing.svg'
import {ReactComponent as ChessIcon} from '../images/svg/category-menu/chess.svg'
import {ReactComponent as AthleticIcon} from '../images/svg/category-menu/athletics.svg'

export const SportMenuDB = [
    {

        title: 'Топ',
        icon: <TopIcon/>,
        live: false,
    },
    {
        title: 'Футбол',
        icon: <FootballIcon/>,
        live: true
    },
    {
        title: 'Хоккей',
        icon: <HockeyIcon/>,
        live: true
    },
    {
        title: 'Баскетбол',
        icon: <BasketballIcon/>,
        live: false
    },
    {
        title: 'Теннис',
        icon: <TennisIcon/>,
        live: false
    },
    {
        title: 'Рэгби',
        icon: <RugbyIcon/>,
        live: true
    },
    {
        title: 'Воллейбол',
        icon: <VolleyballIcon/>,
        live: false
    },
    {
        title: 'MMA',
        icon: <MmaIcon/>,
        live: false
    },
    {
        title: 'Крикет',
        icon: <CricketIcon/>,
        live: false
    },
    {
        title: 'Гонки',
        icon: <RacingIcon/>,
        live: false
    },
    {
        title: 'Шахматы',
        icon: <ChessIcon/>,
        live: false
    },
    {
        title: 'Атлетика',
        icon: <AthleticIcon/>,
        live: false
    },
]
