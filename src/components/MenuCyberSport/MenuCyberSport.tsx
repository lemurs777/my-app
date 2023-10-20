import clsx from 'clsx'
import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import styles from './MenuCyberSport.module.scss'
import {GamesDB as games} from '../../assets/database/GamesDB'
import {ReactComponent as TopIcon} from '../../assets/images/svg/top.svg'
import {ReactComponent as MoreIcon} from '../../assets/images/svg/show-more.svg'

const MenuCyberSport = () => {
    const [active, setActive] = useState(0)
    // const gameList = [
    // 	{
    // 		category: 'Топ',
    // 		icon: <TopIcon />,
    // 		// path: '/top',
    // 		live: true,
    // 		games,
    // 	},
    // ]
    return (
        <div className={styles.menu}>
            {/*{gameList.map(item => (*/}
            {/*	// <div key={item.category} className={styles.menu__inner}>*/}
            {/*<button*/}
            {/*	// to={item.path}*/}
            {/*	className={clsx(styles.itemCategory, styles.itemCategoryActive)}*/}
            {/*>*/}
            {/*	<div className={styles.itemCategory__icon}>*/}
            {/*		{item.live && <span className={styles.item__badge}>badge</span>}*/}
            {/*		{item.icon}*/}
            {/*	</div>*/}
            {/*	<div className={styles.itemCategory__title}>*/}
            {/*		<span>{item.category}</span>*/}
            {/*	</div>*/}
            {/*</button>*/}
            {/*{item.games && (*/}
            {games && (
                <div className={styles.menu__list}>
                    {games.map((item,index) => (
                        <button
                            className={clsx(
                                styles.item,
                                item.live ? styles.itemLive : null,
                                active === index ? styles.itemCategoryActive : null
                            )}
                            key={item.title}
                            // to={item.link}
                            onClick={()=>setActive(index)}
                        >
                            <div className={styles.item__icon}>
                                {item.live && (
                                    <span className={styles.item__badge}>badge</span>
                                )}
                                {item.icon ? (
                                    <>
                                        {item.icon}
                                    </>
                                ) : <img src={item.image} alt={item.title}/>
                                }
                            </div>
                            <div className={styles.item__title}>
                                <span>{item.title}</span>
                            </div>
                        </button>
                    ))}
                </div>
            )}
            {/*</div>*/}
            {/*))}*/}
            <div className={styles.menu__more}>
                <Link className={styles.menu__showMore} to={'/'}>
                    <MoreIcon/>
                </Link>
            </div>
        </div>
    )
}

export default MenuCyberSport
