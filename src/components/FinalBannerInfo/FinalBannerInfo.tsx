import React from 'react';
import styles from './FinalBannerInfo.module.scss'
import GameStreamIcon1 from "../../assets/images/svg/game-banner-icon-1.svg";
import GameStreamIcon2 from "../../assets/images/svg/game-banner-icon-2.svg";
import clsx from "clsx";

const FinalBannerInfo = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.banner__inner}>
                <div className={styles.infoWrapper}>
                    <div className={styles.info}>
                        <div className={styles.infoIconWrapper}>
                            <div className={styles.infoIcon}>
                                <div className={styles.infoIconInner}>
                                    <img className={styles.infoIconImg} src={GameStreamIcon1} alt="Icon"/>
                                </div>
                            </div>
                            <div className={styles.infoIconText}>Nemiga</div>
                        </div>
                        <div className={styles.infoContentWrapper}>
                            <div className={styles.infoContentName}>IEM New York CIS</div>
                            <div className={styles.infoContentTime}>89’</div>
                            <div className={styles.infoContentDate}>MAP 2</div>
                            <div className={styles.infoContentScore}>7 : 5</div>
                        </div>
                        <div className={styles.infoIconWrapper}>
                            <div className={styles.infoIcon}>
                                <div className={styles.infoIconInner}>
                                    <img className={styles.infoIconImg} src={GameStreamIcon2} alt="Icon"/>
                                </div>
                            </div>
                            <div className={styles.infoIconText}>Winstrike</div>
                        </div>
                    </div>
                    <button className={styles.tableBtn}>play</button>
                    <div className={styles.table}>
                        <div className={styles.table__blocks}>
                            <div className={styles.table__block}>
                                <div className={styles.table__text}>1</div>
                                <div className={styles.table__num}>9.1</div>
                            </div>
                            <div className={styles.table__block}>
                                <div className={styles.table__text}>2</div>
                                <div className={styles.table__num}>9.1</div>
                            </div>
                        </div>
                        <div className={styles.table__blocks}>
                            <div className={styles.table__block}>
                                <div className={styles.table__text}>1</div>
                                <div className={styles.table__num}>10.2</div>
                            </div>
                            <div className={styles.table__block}>
                                <div className={styles.table__text}>H</div>
                                <div className={clsx(styles.table__numDifference, styles.table__num)}>+ 2.5 -</div>
                            </div>
                            <div className={styles.table__block}>
                                <div className={styles.table__text}>2</div>
                                <div className={styles.table__num}>8.7</div>
                            </div>
                        </div>
                        <div className={styles.table__blocks}>
                            <div className={styles.table__block}>
                                <div className={styles.table__text}>Т</div>
                                <div className={clsx(styles.table__numDifference, styles.table__num)}>2.5</div>
                            </div>
                            <div className={styles.table__block}>
                                <div className={styles.table__text}>Б</div>
                                <div className={clsx(styles.table__numMore, styles.table__num)}>9.1</div>
                            </div>
                            <div className={styles.table__block}>
                                <div className={styles.table__text}>М</div>
                                <div className={clsx(styles.table__numLess, styles.table__num)}>9.1</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.general}>+637</div>
                </div>
            </div>
        </div>
    );
};

export default FinalBannerInfo;