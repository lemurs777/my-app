import clsx from 'clsx'
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import styles from './LiveEventTime.module.scss'

// @ts-ignore
const LiveEventTime = ({data}) => {
    const [active,setActive] = useState(4)
    return (
        <ul className={styles.list}>
            <li className={styles.item}>
                <Link className={clsx(styles.link, styles.linkCustom)} to='/'>
                    LIVE события
                </Link>
            </li>
            {data.map((item:any,index:number) => (
                <li className={styles.item} key={index} onClick={()=>setActive(index)}>
                    <button className={clsx(styles.link,active === index ? styles.linkActive : null)}>
                        {item}
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default LiveEventTime
