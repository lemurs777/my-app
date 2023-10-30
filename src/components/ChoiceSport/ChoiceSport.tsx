import {Link} from 'react-router-dom';
import clsx from 'clsx';

import styles from './ChoiceSport.module.scss';
import {ReactComponent as LinkIconFootball} from "../../assets/images/svg/sports/football.svg";
import {ReactComponent as LinkIconBasketball} from "../../assets/images/svg/sports/basketball.svg";
import {ReactComponent as LinkIconHockey} from "../../assets/images/svg/sports/hockey.svg";
import {ReactComponent as LinkIconHandball} from "../../assets/images/svg/sports/handball.svg";
import {ReactComponent as LinkIconVolleyball} from "../../assets/images/svg/sports/volleyball.svg";
import {ReactComponent as LinkIconBadminton} from "../../assets/images/svg/sports/badminton.svg";
import {ReactComponent as LinkIconBaseball} from "../../assets/images/svg/sports/baseball.svg";
import {ReactComponent as LinkIconAustralianFootball} from "../../assets/images/svg/sports/australian-football.svg";
import {ReactComponent as LinkIconAutosport} from "../../assets/images/svg/sports/autosport.svg";
import {ReactComponent as LinkIconAmericanFootball} from "../../assets/images/svg/sports/american-football.svg";
import {ReactComponent as LinkIconWaterPolo} from "../../assets/images/svg/sports/water-polo.svg";
import {ReactComponent as LinkIconDarts} from "../../assets/images/svg/sports/darts.svg";
import {ReactComponent as LinkIconCurling} from "../../assets/images/svg/sports/curling.svg";
import {ReactComponent as LinkIconTableTennis} from "../../assets/images/svg/sports/table-tennis.svg";
import {ReactComponent as LinkIconPesapallo} from "../../assets/images/svg/sports/pesapallo.svg";
import {ReactComponent as LinkIconBeachSoccer} from "../../assets/images/svg/sports/beach-soccer.svg";
import {ReactComponent as LinkIconRugby} from "../../assets/images/svg/sports/rugby.svg";
import {ReactComponent as LinkIconSquash} from "../../assets/images/svg/sports/squash.svg";
import {ReactComponent as LinkIconSnooker} from "../../assets/images/svg/sports/snooker.svg";
import {ReactComponent as LinkIconTennis} from "../../assets/images/svg/sports/tennis.svg";
import {ReactComponent as LinkIconFloorball} from "../../assets/images/svg/sports/floorball.svg";
import {ReactComponent as LinkIconFutsal} from "../../assets/images/svg/sports/futsal.svg";
import {ReactComponent as LinkIconFieldHockey} from "../../assets/images/svg/sports/field-hockey.svg";
import {ReactComponent as LinkIconBandy} from "../../assets/images/svg/sports/bandy.svg";

function ChoiceSport() {

    const arrSports = [
        {
            id: 1,
            name: 'Футбол',
            link: '/choice-of-country',
            icon: <LinkIconFootball/>
        },
        {
            id: 2,
            name: 'Баскетбол',
            link: '/choice-of-country',
            icon: <LinkIconBasketball/>
        },
        {
            id: 3,
            name: 'Хоккей',
            link: '/choice-of-country',
            icon: <LinkIconHockey/>
        },
        {
            id: 4,
            name: 'Гандбол',
            link: '/choice-of-country',
            icon: <LinkIconHandball/>
        },
        {
            id: 5,
            name: 'Волейбол',
            link: '/choice-of-country',
            icon: <LinkIconVolleyball/>
        },
        {
            id: 6,
            name: 'Бадминтон',
            link: '/choice-of-country',
            icon: <LinkIconBadminton/>
        },
        {
            id: 7,
            name: 'Бейсбол',
            link: '/choice-of-country',
            icon: <LinkIconBaseball/>
        },
        {
            id: 8,
            name: 'Австралийский футбол',
            link: '/choice-of-country',
            icon: <LinkIconAustralianFootball/>
        },
        {
            id: 9,
            name: 'Автоспорт',
            link: '/choice-of-country',
            icon: <LinkIconAutosport/>
        },
        {
            id: 10,
            name: 'Американский футбол',
            link: '/choice-of-country',
            icon: <LinkIconAmericanFootball/>
        },
        {
            id: 11,
            name: 'Водное поло',
            link: '/choice-of-country',
            icon: <LinkIconWaterPolo/>
        },
        {
            id: 12,
            name: 'Дартс',
            link: '/choice-of-country',
            icon: <LinkIconDarts/>
        },
        {
            id: 13,
            name: 'Кёрлинг',
            link: '/choice-of-country',
            icon: <LinkIconCurling/>
        },
        {
            id: 14,
            name: 'Настольный теннис',
            link: '/choice-of-country',
            icon: <LinkIconTableTennis/>
        },
        {
            id: 15,
            name: 'Песапалло',
            link: '/choice-of-country',
            icon: <LinkIconPesapallo/>
        },
        {
            id: 16,
            name: 'Пляжный футбол',
            link: '/choice-of-country',
            icon: <LinkIconBeachSoccer/>
        },
        {
            id: 17,
            name: 'Регби',
            link: '/choice-of-country',
            icon: <LinkIconRugby/>
        },
        {
            id: 18,
            name: 'Сквош',
            link: '/choice-of-country',
            icon: <LinkIconSquash/>
        },
        {
            id: 19,
            name: 'Снукер',
            link: '/choice-of-country',
            icon: <LinkIconSnooker/>
        },
        {
            id: 20,
            name: 'Теннис',
            link: '/choice-of-country',
            icon: <LinkIconTennis/>
        },
        {
            id: 21,
            name: 'Флорбол',
            link: '/choice-of-country',
            icon: <LinkIconFloorball/>
        },
        {
            id: 22,
            name: 'Футзал',
            link: '/choice-of-country',
            icon: <LinkIconFutsal/>
        },
        {
            id: 23,
            name: 'Хоккей на траве',
            link: '/choice-of-country',
            icon: <LinkIconFieldHockey/>
        },
        {
            id: 24,
            name: 'Хоккей с мячом',
            link: '/choice-of-country',
            icon: <LinkIconBandy/>
        },
    ];


    return (
        <div className={styles.choiceSport}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Статистика PARI</h1>
                <ul className={styles.list}>
                    {arrSports.map((sport, index) => (
                        <li key={index} className={styles.item}>
                            <Link
                                to={sport.link}
                                state={{numRequest: sport.id}}
                                className={styles.link}>
                                <div className={clsx(
                                    styles.linkIcon
                                )}>
                                    {sport.icon}
                                </div>
                                <div className={styles.linkName}>{sport.name}</div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ChoiceSport;