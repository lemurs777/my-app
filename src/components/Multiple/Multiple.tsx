import clsx from 'clsx';

import styles from './Multiple.module.scss';
import {useEffect, useState} from "react";
import Items from "./Items";

export const betsArr = [
    {
        id: 0,
        nameOne: 'Бавария',
        nameTwo: 'Айнтрахт Франкфурт',
        info: '3:2',
        live: false,
        more: 'Точный счёт',
        coefficient: 3.05,
        coefficientOld: 3.05,
    },
    {
        id: 1,
        nameOne: 'Боруссия дортмунд',
        nameTwo: 'Шальке',
        info: 'Сток Сити (-1.0)',
        live: true,
        more: '1-я карта: кто получит первый',
        coefficient: 2.63,
        coefficientOld: 2.10,
    },
    {
        id: 2,
        nameOne: 'Боруссия дортмунд',
        nameTwo: 'Шальке',
        info: 'Сток Сити (-1.0)',
        live: true,
        more: '1-я карта: кто получит первый',
        coefficient: 2.63,
        coefficientOld: 2.83,
    },
    {
        id: 3,
        nameOne: 'Штутгарт',
        nameTwo: 'Кёльн',
        info: 'X2',
        live: false,
        more: 'Двойной исход',
        coefficient: 1.75,
        coefficientOld: 1.75,
    },
]

function Multiple() {
    const betsInfo = {
        bonus: 1.5,
        coefficient: 21.06,
        bet: 500,
        win: 10530,
        currency: '₽',
        betsArr: [
            {
                id: 0,
                nameOne: 'Бавария',
                nameTwo: 'Айнтрахт Франкфурт',
                info: '3:2',
                live: false,
                more: 'Точный счёт',
                coefficient: 3.05,
                coefficientOld: 3.05,
            },
            {
                id: 1,
                nameOne: 'Боруссия дортмунд',
                nameTwo: 'Шальке',
                info: 'Сток Сити (-1.0)',
                live: true,
                more: '1-я карта: кто получит первый',
                coefficient: 2.63,
                coefficientOld: 2.10,
            },
            {
                id: 2,
                nameOne: 'Боруссия дортмунд',
                nameTwo: 'Шальке',
                info: 'Сток Сити (-1.0)',
                live: true,
                more: '1-я карта: кто получит первый',
                coefficient: 2.63,
                coefficientOld: 2.83,
            },
            {
                id: 3,
                nameOne: 'Штутгарт',
                nameTwo: 'Кёльн',
                info: 'X2',
                live: false,
                more: 'Двойной исход',
                coefficient: 1.75,
                coefficientOld: 1.75,
            },
        ],
    };
// @ts-ignore
    const [bets, setBets] = useState(betsArr)
    const [betsLength, setBetsLength] = useState(bets.length)

    const deleteItem = (id: any) => {
        let result = bets.filter(t => t.id !== id)
        setBets(result)
        setBetsLength(betsLength - 1)
    }
    useEffect(() => {
        setBetsLength(betsLength)
        console.log(betsLength)
    }, [bets])
    return (
        <div className={styles.multiple}>
            <div className={styles.lightBg}>
                <div className={styles.header}>
                    <button className={clsx(styles.headerBtn, styles.headerBtnSettings)}>Настройки</button>
                    <h2 className={styles.headerTitle}>Экспресс ({betsLength})</h2>
                    <button className={clsx(styles.headerBtn, styles.headerBtnDelete)}>Удалить</button>
                </div>
                <ul className={clsx(styles.list, bets.length === 0 ? styles.listEmpty : null)}>
                    {/*    {betsInfo.betsArr.map((item, index) => (*/}
                    {/*        <li key={index} className={styles.item}>*/}
                    {/*            <div className={styles.itemTop}>*/}
                    {/*                <button*/}
                    {/*                    className={clsx(styles.itemTopBtn, styles.itemTopBtnCheck, check ? styles.checked : null)}*/}
                    {/*                    onClick={() => setCheck(!check)}*/}

                    {/*                >Убрать*/}
                    {/*                </button>*/}
                    {/*                <div className={styles.itemTopNames}>{item.nameOne} - {item.nameTwo}</div>*/}
                    {/*                <button className={clsx(styles.itemTopBtn, styles.itemTopBtnClose)}*/}
                    {/*                >Удалить*/}
                    {/*                </button>*/}
                    {/*            </div>*/}
                    {/*            <div className={styles.itemBottom}>*/}
                    {/*                <div className={styles.itemBottomLeft}>*/}
                    {/*                    <div className={clsx(*/}
                    {/*                        styles.itemBottomLeftTitle,*/}
                    {/*                        {[styles.itemBottomLeftTitleLive]: item.live}*/}
                    {/*                    )}>*/}
                    {/*                        {item.info}*/}
                    {/*                    </div>*/}
                    {/*                    <div className={styles.itemBottomLeftInfo}>*/}
                    {/*                        {item.more}*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div className={styles.itemBottomRight}>*/}
                    {/*                    <div className={clsx(*/}
                    {/*                        styles.itemBottomRightCoefficient,*/}
                    {/*                        {[styles.up]: item.coefficient > item.coefficientOld},*/}
                    {/*                        {[styles.down]: item.coefficient < item.coefficientOld},*/}
                    {/*                    )}>*/}
                    {/*                        {item.coefficient}*/}
                    {/*                    </div>*/}
                    {/*                    {(item.coefficient !== item.coefficientOld) ? (*/}
                    {/*                        <div className={styles.itemBottomRightOldCoefficient}>*/}
                    {/*                            {item.coefficientOld}*/}
                    {/*                        </div>*/}
                    {/*                    ) : null}*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </li>*/}
                    {/*    ))}*/}
                    <Items data={bets} handleRemove={deleteItem}/>
                </ul>
            </div>
            <div className={styles.totalWrapper}>
                <div className={styles.totalContent}>
                    <div className={styles.totalBonus}>
                        <div className={styles.totalBonusText}>Дополнительный бонус</div>
                        <div className={styles.totalBonusCount}>{betsInfo.bonus}</div>
                    </div>
                    <div className={styles.total}>
                        <div className={styles.totalText}>Итоговый коэффициент:</div>
                        <div className={styles.totalCount}>{betsInfo.coefficient}</div>
                    </div>
                </div>
            </div>
            <div className={styles.betPayout}>
                <div className={styles.bet}>
                    <div className={styles.betText}>Ваша ставка</div>
                    <div className={styles.betCount}>{betsInfo.bet}{betsInfo.currency}</div>
                </div>
                <div className={styles.payout}>
                    <div className={styles.payoutText}>Возможный выигрыш</div>
                    <div className={styles.payoutCount}>{betsInfo.win}{betsInfo.currency}</div>
                </div>
            </div>
            <div className={styles.btnBetWrapper}>
                <button className={styles.btnBet}>Сделать ставку</button>
            </div>
        </div>
    );
}

export default Multiple;
