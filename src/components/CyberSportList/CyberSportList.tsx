import {Link} from 'react-router-dom';
import clsx from 'clsx';

import styles from './CyberSportList.module.scss';
import {ReactComponent as HotIcon} from "../../assets/images/svg/category-menu/hot.svg";
import {ReactComponent as BookmarksIcon} from "../../assets/images/svg/sports-list-bookmarks.svg";
import csGoImg from '../../assets/images/games/cs_go.svg'
import dota2Img from '../../assets/images/games/dota-2.svg'
import overwatchImg from '../../assets/images/games/overwatch.svg'
import lolImg from '../../assets/images/games/lol.svg'
import valorantImg from '../../assets/images/games/valorant.svg'
import sc1Img from '../../assets/images/games/sc-1.svg'
import sc2Img from '../../assets/images/games/sc-2.svg'
import hearthstoneImg from '../../assets/images/games/hearthstone.svg'
import codImg from '../../assets/images/games/cod.svg'
import tf2Img from '../../assets/images/games/tf2.svg'
import hosImg from '../../assets/images/games/hos.svg'
import {useState} from "react";

function CyberSportList() {
    const [active, setActive] = useState(0)
    const cyberSportList = [
        {
            name: 'Топ',
            // className: 'top',
            icon: <HotIcon/>,
            link: '/',
            live: true

        },
        {
            // name: 'Закладки',
            title: 'Закладки',
            // className: 'bookmarks',
            icon: <BookmarksIcon/>,
            link: '/',
        },
        {
            name: 'CS:GO',
            // className: 'cs-go',
            image: csGoImg,
            link: '/',
        },
        {
            name: 'Dota 2',
            // className: 'dota-2',
            image: dota2Img,
            link: '/',
        },
        {
            name: 'Overwatch',
            // className: 'overwatch',
            image: overwatchImg,
            link: '/',
        },
        {
            name: 'LoL',
            // className: 'lol',
            image: lolImg,
            link: '/',
        },
        {
            name: 'Valorant',
            // className: 'valorant',
            image: valorantImg,
            link: '/',
        },
        {
            name: 'StarCraft I',
            // className: 'starcraft-1',
            image: sc1Img,
            link: '/',
        },
        {
            name: 'StarCraft II',
            // className: 'starcraft-2',
            image: sc2Img,
            link: '/',
        },
        {
            name: 'Hearthstone',
            // className: 'hearthstone',
            image: hearthstoneImg,
            link: '/',
        },
        {
            name: 'Call Of Duty',
            // className: 'call-of-duty',
            image: codImg,
            link: '/',
        },
        {
            name: 'TF2',
            // className: 'tf2',
            image: tf2Img,
            link: '/',
        },
        {
            name: 'HoS',
            // className: 'hos',
            image: hosImg,
            link: '/',
        },
    ];


    return (
        <div className={styles.sportList}>
            <ul className={styles.list}>
                {cyberSportList.map((item, index) => (
                    <li className={styles.item} key={index}>
                        <Link className={clsx(
                            styles.link,
                            active === index ? styles.link__active : null
                            // styles[item.className]
                        )} to={item.link}
                              onClick={() => setActive(index)}
                        >
                            <div className={styles.link__icon}>
                                {item.live && <span className={styles.link__live}></span>}
                                {item.icon && (
                                    item.icon
                                )}
                                {item.image && (
                                    <img src={item.image} alt={item.name}/>
                                )}
                            </div>
                            {item.title && <span>{item.title}</span>}
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CyberSportList;