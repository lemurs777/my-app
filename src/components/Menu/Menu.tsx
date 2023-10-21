import clsx from 'clsx'
import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import styles from './Menu.module.scss'
import {ReactComponent as TopIcon} from '../../assets/images/svg/top.svg'
import {ReactComponent as MoreIcon} from '../../assets/images/svg/show-more.svg'

// @ts-ignore
const Menu = ({data}) => {
    const [active, setActive] = useState(0)

    return (
        <div className={styles.menu}>


            <div className={styles.menu__list}>
                {data.map((item: any, index: number) => (
                    <button
                        className={clsx(
                            styles.item,
                            item.live ? styles.itemLive : null,
                            active === index ? styles.itemCategoryActive : null
                        )}
                        key={item.title}
                        // to={item.link}
                        onClick={() => setActive(index)}
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
            <div className={styles.menu__more}>
                <Link className={styles.menu__showMore} to={'/'}>
                    <MoreIcon/>
                </Link>
            </div>
        </div>
    )
}

export default Menu
