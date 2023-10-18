import React, {ReactNode, useRef, useState} from 'react'
import styles from '../HeaderComnonents/HeaderBreadCrumb/HeaderBreadCrumb.module.scss'
import clsx from 'clsx'
import {useClickOutside} from "../../hooks/useClickOutside";
// @ts-ignore
type Props = {
    title: string,
    children: ReactNode,
    open?: boolean
}
const CustomDropdown = ({title, children, open}: Props) => {
    const menuRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)
    useClickOutside(menuRef, () => setIsOpen(false))
    return (
        <div className={styles.select} ref={menuRef}>
            <button
                className={clsx(
                    styles.select__btn,
                    isOpen ? styles.select__btnActive : null
                )}
                onClick={() => {
                    setIsOpen(!isOpen)
                }}
            >
                {title}
            </button>
            {isOpen && (
                <div
             

                    className={clsx(
                        styles.select__content,
                        // styles.select__contentCountry
                    )}
                >
                    {children}
                </div>
            )}
        </div>
    )
}

export default CustomDropdown
