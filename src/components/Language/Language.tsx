import React, {useEffect, useRef, useState} from 'react';
import clsx from "clsx";
import {useClickOutside} from '../../hooks/useClickOutside'

import styles from "./Language.module.scss";
import i18next from "i18next";
import {useTranslation} from "react-i18next";
import ruImg from '../../assets/images/language/ru.svg'
import ukImg from '../../assets/images/language/uk.svg'
import i18n from "i18next";


// @ts-ignore
const Language = () => {
    const languageList = [
        {
            code: 'ru',
            name: 'Русский',
            country_code: 'ru',
            flag: ruImg
        },
        {
            code: 'en',
            name: 'English',
            country_code: 'en',
            flag: ukImg
        }
    ]
    const languageRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)
    const [language, setLanguage] = useState(languageList[0])
    useClickOutside(languageRef, () => setIsOpen(false))
    const {t} = useTranslation()
    const changeLanguage = (item: any) => {
        setLanguage(item)
        setIsOpen(false)

    }
    useEffect(() => {
        setLanguage(language)
    }, [language]);
    return (
        <div className={styles.language} ref={languageRef}>

            <button
                className={styles.language__button}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{language.code}</span>
                <div className={styles.item__icon}><img src={language.flag} alt={language.code}/></div>
            </button>
            {isOpen && (
                <ul className={styles.language__list}>
                    {languageList.map((item, index) => (
                        <li
                            className={styles.item} key={item.code}
                            onClick={() => {
                                changeLanguage(item)
                            }}
                        >
                            <span>{item.code}</span>
                            <div className={styles.item__icon}><img src={item.flag} alt={item.code}/></div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Language;