import React, {useState} from 'react';
import styles from "./Multiple.module.scss";
import clsx from "clsx";


// @ts-ignore
const Items = ({data,handleRemove}) => {
    // const [check, setCheck] = useState(false)
    return (
        <ul className={styles.list}>
            {data.map((item: any, index: number) => (
                <li key={index} className={styles.item}>
                    <div className={styles.itemTop}>
                        <button className={clsx(styles.itemTopBtn, styles.itemTopBtnCheck)

                        }

                        >Убрать
                        </button>
                        <div className={styles.itemTopNames}>{item.nameOne} - {item.nameTwo}</div>
                        <button className={clsx(styles.itemTopBtn, styles.itemTopBtnClose)}
                                onClick={()=>handleRemove(item.id)}
                        >Удалить
                        </button>
                    </div>
                    <div className={styles.itemBottom}>
                        <div className={styles.itemBottomLeft}>
                            <div className={clsx(
                                styles.itemBottomLeftTitle,
                                {[styles.itemBottomLeftTitleLive]: item.live}
                            )}>
                                {item.info}
                            </div>
                            <div className={styles.itemBottomLeftInfo}>
                                {item.more}
                            </div>
                        </div>
                        <div className={styles.itemBottomRight}>
                            <div className={clsx(
                                styles.itemBottomRightCoefficient,
                                {[styles.up]: item.coefficient > item.coefficientOld},
                                {[styles.down]: item.coefficient < item.coefficientOld},
                            )}>
                                {item.coefficient}
                            </div>
                            {(item.coefficient !== item.coefficientOld) ? (
                                <div className={styles.itemBottomRightOldCoefficient}>
                                    {item.coefficientOld}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Items;