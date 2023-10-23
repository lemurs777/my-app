import {Link} from 'react-router-dom';
import clsx from 'clsx';

import styles from './SportList.module.scss';
import {useState} from "react";
import {ReactComponent as HotImg} from "../../assets/images/svg/category-menu/hot.svg";
import {ReactComponent as BookmarksImg} from "../../assets/images/svg/sports-list-bookmarks.svg";
import {ReactComponent as SoccerImg} from "../../assets/images/svg/category-menu/football.svg";
import {ReactComponent as HockeyImg} from "../../assets/images/svg/category-menu/hockey.svg";
import {ReactComponent as BasketballImg} from "../../assets/images/svg/category-menu/basketball.svg";
import {ReactComponent as TennisImg} from "../../assets/images/svg/category-menu/tennis.svg";
import {ReactComponent as RugbyImg} from "../../assets/images/svg/category-menu/rugby.svg";
import {ReactComponent as VolleyballImg} from "../../assets/images/svg/category-menu/volleyball.svg";
import {ReactComponent as MmaImg} from "../../assets/images/svg/category-menu/mma.svg";

function SportList() {

    const [active, setActive] = useState(0)
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


    return (
        <div className={styles.sportList}>
            <ul className={styles.list}>
                {sportList.map((item, index) => (
                    <li className={styles.item} key={index} onClick={() => setActive(index)}>
                        <Link className={clsx(
                            styles.link,
                            active === index ? styles.link__active : null
                            // styles[item.className]
                        )} to={item.link}>
                            {item.image}
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SportList;