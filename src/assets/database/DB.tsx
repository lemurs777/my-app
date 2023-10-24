import hotImg from '../images/svg/sports-list-top.svg'
import {ReactComponent as HotImg} from "../assets/images/svg/category-menu/hot.svg";
import {ReactComponent as BookmarksImg} from "../assets/images/svg/sports-list-bookmarks.svg";
import {ReactComponent as SoccerImg} from "../assets/images/svg/category-menu/football.svg";
import {ReactComponent as HockeyImg} from "../assets/images/svg/category-menu/hockey.svg";
import {ReactComponent as BasketballImg} from "../assets/images/svg/category-menu/basketball.svg";
import {ReactComponent as TennisImg} from "../assets/images/svg/category-menu/tennis.svg";
import {ReactComponent as RugbyImg} from "../assets/images/svg/category-menu/rugby.svg";
import {ReactComponent as VolleyballImg} from "../assets/images/svg/category-menu/volleyball.svg";
import {ReactComponent as MmaImg} from "../assets/images/svg/category-menu/mma.svg";
// export const sportList = [
//     {
//         image: hotImg
//     }
// ]


const sportList = [
    {
        image: <HotImg/>,
        name: 'Топ',
        // className: 'top',
        link: '/',
    },
    {
        image: <BookmarksImg/>,
        name: 'Закладки',
        // className: 'bookmarks',
        link: '/',
    },
    {
        image: <SoccerImg/>,
        name: 'Футбол',
        // className: 'soccer',
        link: '/',
    },
    {
        image: <HockeyImg/>,
        name: 'Хоккей',
        // className: 'hockey',
        link: '/',
    },
    {
        image: <BasketballImg/>,
        name: 'Баскетбол',
        // className: 'basketball',
        link: '/',
    },
    {
        image: <TennisImg/>,
        name: 'Теннис',
        // className: 'tennis',
        link: '/',
    },
    {
        image: <RugbyImg/>,
        name: 'Рэгби',
        // className: 'regby',
        link: '/',
    },
    {
        image: <VolleyballImg/>,
        name: 'Воллейбол',
        // className: 'volleyball',
        link: '/',
    },
    {
        image: <MmaImg/>,
        name: 'MMA',
        // className: 'mma',
        link: '/',
    },
];