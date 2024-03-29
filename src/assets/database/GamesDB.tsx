import csGoImg from '../images/games/cs_go.svg'
import dota2Img from '../images/games/dota-2.svg'
import overwatchImg from '../images/games/overwatch.svg'
import lolImg from '../images/games/lol.svg'
import valorantImg from '../images/games/valorant.svg'
import sc1Img from '../images/games/sc-1.svg'
import sc2Img from '../images/games/sc-2.svg'
import hearthstoneImg from '../images/games/hearthstone.svg'
import codImg from '../images/games/cod.svg'
import tf2Img from '../images/games/tf2.svg'
import hosImg from '../images/games/hos.svg'
import topImg from '../images/games/top.svg'
import {ReactComponent as TopIcon} from '..//images/svg/top.svg'

export const GamesDB = [
    {

        title: 'Топ',
        icon: <TopIcon/>,
        link: '/cyber-sport/event',
        live: true,
    },
    {
        title: 'CS:GO',
        image: csGoImg,
        link: '/cyber-sport/event',
        live: true
    },
    {
        title: 'Dota 2',
        image: dota2Img,
        link: '/cyber-sport/event',
        live: true
    },
    {
        title: 'Overwatch',
        image: overwatchImg,
        link: '/cyber-sport/event',
        live: false
    },
    {
        title: 'LoL',
        image: lolImg,
        link: '/cyber-sport/event',
        live: true
    },
    {
        title: 'Valorant',
        image: valorantImg,
        link: '/cyber-sport/event',
        live: false
    },
    {
        title: 'StarCraft I',
        image: sc1Img,
        link: '/cyber-sport/event',
        live: false
    },
    {
        title: 'StarCraft II',
        image: sc2Img,
        link: '/cyber-sport/event',
        live: false
    },
    {
        title: 'Hearthstone',
        image: hearthstoneImg,
        link: '/cyber-sport/event',
        live: true,
    },
    {
        title: 'Call Of Duty',
        image: codImg,
        link: '/cyber-sport/event',
        live: false
    },
    {
        title: 'TF2',
        image: tf2Img,
        link: '/cyber-sport/event',
        live: false
    },
    {
        title: 'HoS',
        image: hosImg,
        link: '/cyber-sport/event',
        live: false
    },
]
