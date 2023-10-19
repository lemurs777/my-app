import React from 'react'
import styles from './CyberEventScore.module.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as ArrowIcon} from '../../assets/images/svg/arrow.svg'
import {ReactComponent as AddIcon} from '../../assets/images/svg/events-info-add.svg'
import nemigaImg from '../../assets/images/team-icons/nemiga.png'
import winstrikeImg from '../../assets/images/team-icons/winstrike.png'

const CyberEventScore = () => {
    const data = [
        {img: nemigaImg, nickname: 'Nemiga', score: 7},
        {img: winstrikeImg, nickname: 'Winstrike', score: 5},
    ]
    return (
        <div className={styles.score}>
            <div className={styles.score__inner}>
                <div className={styles.score__btns}>
                    <Link to={'../'} className={styles.score__btn}>
                        <ArrowIcon/>
                    </Link>
                    <button className={styles.score__btn}>
                        <AddIcon/>
                    </button>
                </div>
                <div className={styles.score__content}>
                    <div className={styles.score__item}>
                        <div className={styles.score__img}>
                            <img src={nemigaImg} alt='nemiga'/>
                        </div>
                        <div className={styles.score__nickname}>Nemiga</div>
                    </div>
                    <div className={styles.score__central}>
                        <div className={styles.score__label}>89’ <span>MAP 2</span></div>
                        <div className={styles.score__nums}>
                            <div className={styles.score__num}>7</div>
                            :
                            <div className={styles.score__num}>5</div>
                        </div>
                    </div>
                    <div className={styles.score__item}>
                        <div className={styles.score__img}>
                            <img src={winstrikeImg} alt='Winstrike'/>
                        </div>
                        <div className={styles.score__nickname}>Winstrike</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CyberEventScore
