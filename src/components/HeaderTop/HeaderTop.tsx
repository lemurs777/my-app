import {Link, NavLink} from 'react-router-dom'
import clsx from 'clsx'
import {PriorityNav, ToggleButton} from "react-priority-navigation";

import HeaderBest from '../../assets/images/header-best.png'

import styles from './HeaderTop.module.scss'
import React, {useRef, useState} from 'react'
import {ReactComponent as MoreIcon} from "../../assets/images/more.svg";
import {useClickOutside} from "../../hooks/useClickOutside";

import {ReactComponent as LogoIcon} from "../../assets/images/logo.svg";
import ButtonAccent from "../Buttons/ButtonAccent";
import {
    Modal,
    ModalChat, ModalCheck,
    ModalCheckCode,
    ModalLogIn,
    ModalNavigation,
    ModalNotifications,
    ModalOtherCountry,
    ModalPaymentStatus,
    ModalPromoCode,
    ModalRefill,
    ModalRefillCripto, ModalRefillFinish,
    ModalRegistration,
    ModalRegistrationFull, ModalSettings,
    ModalSupport,
    ModalTicketInfo,
    ModalVerification,
    ModalWithdrawMoney
} from "../index";
import useModal from "../../hooks/useModal";

type Props = {
    dropdownItems?: any, buttonProps?: any
}

function HeaderTop() {
    const [showDropdown, setShowDropdown] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const {isOpen, toggleModal} = useModal()
    const [isName, setIsName] = useState('login')
    const [isFull, setIsFull] = useState(true)
    // const [menuOpen, setMenuOpen] = useState(false)
    const wrapRef = useRef(null)

    function CurrentModal(name: string, full: boolean) {
        setIsFull(full)
        setIsName(name)
        toggleModal()
    }

    const menuList = [
        {
            title: 'Спорт',
            path: '/'
        },
        {
            title: 'киберспорт',
            path: '/cyber-sport'
        },
        {
            title: 'казино',
            path: '/casino'
        },
        {
            title: 'tv ставки',
            path: '/tv-reates'
        },
        {
            title: 'виртуальный спорт',
            path: '/virtual-sport'
        },
        {
            title: 'акции',
            path: '/stock'
        },
        {
            title: 'Link',
            path: '/linkOne'
        },
        {
            title: 'another link',
            path: '/LinkTwo'
        },
    ]
    useClickOutside(wrapRef, () => setShowDropdown(false))
    // @ts-ignore
    // @ts-ignore
    return (
        <div className={styles.headerTop}>
            <button
                type='button'
                className={`${
                    menuOpen ? [styles.burger, styles.open].join(' ') : [styles.burger]
                }`}
                onClick={() => {
                    setMenuOpen(!menuOpen)
                }}
            >
                <span></span>
            </button>
            <Link to='/' className={styles.logo} aria-label='Hello Logo'>
                <LogoIcon/>
            </Link>
            <Link to='/sitemap' className={styles.best}>
                <img
                    className={styles.bestImg}
                    src={HeaderBest}
                    width='60'
                    height='60'
                    alt='Best of the best'
                />
                <div className={styles.bestText}>
                    <span className={styles.bestTextAccent}>Лучший</span>
                    Онлайн&nbsp;букмекер
                </div>
            </Link>
            <div className="mobile">
                <nav
                    className={` ${
                        menuOpen ? [styles.nav, styles.show].join(' ') : [styles.nav]
                    }`}
                    onClick={() => {
                        setMenuOpen(false)
                    }}
                >
                    <menu className={styles.navMenu}>
                        {/*<li className={styles.navItem}>*/}
                        {/*    <NavLink className={clsx(styles.navLink, styles.navLinkActive)} to='/'>*/}
                        {/*        Спорт*/}
                        {/*    </NavLink>*/}
                        {/*</li>*/}
                        {/*<li className={styles.navItem}>*/}
                        {/*    <Link className={styles.navLink} to='/cyber-sport'>*/}
                        {/*        Киберспорт*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        {/*<li className={styles.navItem}>*/}
                        {/*    <Link className={styles.navLink} to='/'>*/}
                        {/*        Казино*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        {/*<li className={styles.navItem}>*/}
                        {/*    <Link className={styles.navLink} to='/'>*/}
                        {/*        TV Ставки*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        {/*<li className={styles.navItem}>*/}
                        {/*    <Link className={styles.navLink} to='/'>*/}
                        {/*        Виртуальный спорт*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        {/*<li className={styles.navItem}>*/}
                        {/*    <Link className={styles.navLink} to='/promotions/'>*/}
                        {/*        Акции*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        {menuList.map(item => (
                            <li className={styles.navItem} key={item.title}>
                                <NavLink
                                    // className={clsx(styles.navLink)}
                                    className={({isActive}) => clsx(styles.navLink, isActive ? styles.navLinkActive : null)}
                                    to={item.path}>{item.title}</NavLink>
                            </li>
                        ))}
                    </menu>
                </nav>
            </div>
            <div className="desktop">
                <menu className={styles.navMenu} ref={wrapRef}>
                    <PriorityNav
                        className={styles.priorityNav}
                        dropdown={({dropdownItems}: Props) => (
                            <div className={styles.dropdown}>
                                {showDropdown && (
                                    <div className={styles.dropdown__menu}>
                                        <ul className={styles.dropdown__list}>
                                            {dropdownItems.map((item: any, i: number) => (
                                                <li key={i} {...item.props} className={styles.dropdown__item}></li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                <button
                                    className={styles.navBtnShowMoreLink}
                                    onClick={() => setShowDropdown(!showDropdown)}
                                >
                                    Показать другие ссылки
                                    <MoreIcon/>
                                </button>
                            </div>
                        )}
                    >
                        {menuList.map(item => (
                            <li className={styles.navItem} key={item.title}>
                                <NavLink
                                    // className={clsx(styles.navLink)}
                                    className={({isActive}) => clsx(styles.navLink, isActive ? styles.navLinkActive : null)}
                                    to={item.path}>{item.title}</NavLink>
                            </li>
                        ))}
                    </PriorityNav>
                </menu>
            </div>
            <div className={styles.signInWrapper}>
                <button onClick={() => {
                    CurrentModal('login', true)
                }} className={styles.signInBtn}>
                    Войти
                </button>

                <ButtonAccent handleClick={() => CurrentModal('registration', true)}
                              className={styles.signInBtnRegistration} title={'Регистрация'}/>

            </div>


            <Modal isOpen={isOpen} toggleModal={toggleModal} full={isFull}>
                {isName === 'login' ? <ModalLogIn toggleModal={toggleModal}/> : null}
                {isName === 'registration' ? (
                    <ModalRegistration toggleModal={toggleModal}/>
                ) : null}
                {isName === 'registration-full' ? (
                    <ModalRegistrationFull toggleModal={toggleModal}/>
                ) : null}
                {isName === 'verification' ? (
                    <ModalVerification toggleModal={toggleModal}/>
                ) : null}
                {isName === 'promocode' ? (
                    <ModalPromoCode toggleModal={toggleModal}/>
                ) : null}
                {isName === 'payment-status' ? (
                    <ModalPaymentStatus toggleModal={toggleModal}/>
                ) : null}
                {isName === 'check-code' ? (
                    <ModalCheckCode toggleModal={toggleModal}/>
                ) : null}
                {isName === 'other-country' ? (
                    <ModalOtherCountry toggleModal={toggleModal}/>
                ) : null}
                {isName === 'notifications' ? (
                    <ModalNotifications toggleModal={toggleModal}/>
                ) : null}
                {isName === 'ticket-info' ? (
                    <ModalTicketInfo toggleModal={toggleModal}/>
                ) : null}
                {isName === 'chat' ? <ModalChat toggleModal={toggleModal}/> : null}
                {isName === 'support' ? (
                    <ModalSupport toggleModal={toggleModal}/>
                ) : null}
                {isName === 'withdraw-money' ? (
                    <ModalWithdrawMoney toggleModal={toggleModal}/>
                ) : null}
                {isName === 'refill' ? <ModalRefill toggleModal={toggleModal}/> : null}
                {isName === 'refill-cripto' ? (
                    <ModalRefillCripto toggleModal={toggleModal}/>
                ) : null}
                {isName === 'refill-finish' ? (
                    <ModalRefillFinish toggleModal={toggleModal}/>
                ) : null}
                {isName === 'navigation' ? (
                    <ModalNavigation toggleModal={toggleModal}/>
                ) : null}
                {isName === 'settings' ? (
                    <ModalSettings toggleModal={toggleModal}/>
                ) : null}
                {isName === 'check' ? <ModalCheck toggleModal={toggleModal}/> : null}
            </Modal>
        </div>
    )
}

export default HeaderTop
