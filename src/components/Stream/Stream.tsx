import React from 'react'
import styles from './Stream.module.scss'
import streamImg from '../../assets/images/game-stream-x2.min.jpg'
import clsx from "clsx";


const Stream = () => {
    return (
        <div className={styles.stream}>
            <img src={streamImg} alt='stream'/>
            <button className={styles.stream__play}>Play</button>
        </div>
    )
}

export default Stream
