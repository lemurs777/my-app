import React, {useEffect, useRef, useState} from 'react';
import clsx from "clsx";

import {useClickOutside} from '../../hooks/useClickOutside'

import styles from "./Language.module.scss";

import ruImg from '../../assets/images/language/ru.svg'
import ukImg from '../../assets/images/language/uk.svg'


// @ts-ignore
const Language = () => {
    const languageList = [
        {
            title: 'ru',
            flag: ruImg
        },
        {
            title: 'EN',
            flag: ukImg
        }
    ]
    const languageRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)
    const [language, setLanguage] = useState(languageList[0])
    useClickOutside(languageRef, () => setIsOpen(false))
    return (
        <div className={styles.language} ref={languageRef}>
            <button
                className={styles.language__button}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{language.title}</span>
                <div className={styles.item__icon}><img src={language.flag} alt={language.title}/></div>
            </button>
            {isOpen && (
                <ul className={styles.language__list}>
                    {languageList.map((item, index) => (
                        <li
                            className={styles.item} key={item.title}
                            onClick={() => {
                                setLanguage(item)
                                console.log(language)
                                setIsOpen(false)
                            }}
                        >
                            <span>{item.title}</span>
                            <div className={styles.item__icon}><img src={item.flag} alt={item.title}/></div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Language;