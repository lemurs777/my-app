import { Link } from 'react-router-dom'
import clsx from 'clsx'

import {
	Modal,
	ModalNavigation,
} from '../../components/'

import HeaderBest from '../../assets/images/header-best.png'

import styles from './HeaderTop.module.scss'

import useModal from "../../hooks/useModal"
import { useState } from 'react'

function HeaderTop() {

	const { isOpen, toggleModal } = useModal()
	const [menuOpen, setMenuOpen] = useState(false)



	return (
		<div className={styles.headerTop}>
			{/* <button type='button' className={`${styles.burger} ${menuOpen ? 'open' : ''}`} onClick={() => { setMenuOpen(!menuOpen) }}> */}
			<button type='button' className={`${menuOpen ? [styles.burger, styles.open].join(' ') : [styles.burger]}`} onClick={() => { setMenuOpen(!menuOpen) }}>
				<span></span>
			</button>
			<Link to="/" className={styles.logo} aria-label="Hello Logo">
				<svg className={styles.logoImg} width="128" height="40" viewBox="0 0 128 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clipPath="url(#clip0_19_2192)">
						<path d="M24.0896 18.6667L25.4464 13.7067H31.7696C35.0976 13.7067 37.12 12.1334 38.0416 8.80002L38.5536 6.96002C39.7312 2.72002 37.8112 0.0800171 33.6128 0.0800171H6.11841L0.998413 18.6667H24.0896ZM33.5872 5.06668L32.512 9.12002H26.7264L27.8272 5.09335H33.5872V5.06668Z" fill="#F7FF13" />
						<path d="M40.9088 18.6667L42.5984 15.5467H50.432V18.6667H55.5776V0.0533447H45.4656L34.944 18.6667H40.9088ZM48.3072 5.12001H50.432V11.04H45.056L48.3072 5.12001Z" fill="#F7FF13" />
						<path d="M76.5696 8.61335L77.0304 6.93334C78.208 2.64001 76.288 0.0533447 72.0896 0.0533447H62.3104L57.1904 18.6667H62.5408L63.9488 13.5467H67.2768L68.7872 18.6667H74.2912L72.6784 13.2C74.624 12.5867 75.904 11.0667 76.5696 8.61335ZM66.2784 5.06668H72.0384L70.9632 9.09334H65.1776L66.2784 5.06668Z" fill="#F7FF13" />
						<path d="M81.5872 18.6667L86.7072 0.0533447H81.3312L76.2368 18.6667H81.5872Z" fill="#F7FF13" />
						<path d="M48.7936 21.3067L42.752 28.7467L40.2688 21.3067H17.1008L12.0064 39.9467H35.0976L37.9136 29.6533L39.7824 35.4133H43.2384L48.2304 29.28L45.2864 39.9467H50.6368L55.7312 21.3067H48.7936Z" fill="#F7FF13" />
						<path d="M62.8992 21.3067L52.352 39.92H58.3168L60.0064 36.8H67.84V39.92H72.9856V21.3333L62.8992 21.3067ZM62.4896 32.32L65.7152 26.4H67.84V32.32H62.4896Z" fill="#F7FF13" />
						<path d="M91.0848 26.64L92.544 21.3067H76.288L74.8288 26.64H80.7168L77.056 39.9467H82.4064L86.0672 26.64H91.0848Z" fill="#F7FF13" />
						<path d="M98.2272 26.64H106.342L107.827 21.3333H99.1744C95.8464 21.3333 93.824 22.9067 92.9024 26.24L91.008 33.04C89.8048 37.3867 91.7504 39.92 95.9488 39.92H102.682L104.141 34.6133H96.0256L98.2272 26.64Z" fill="#F7FF13" />
						<path d="M121.651 21.3067L119.808 27.9733H113.69L115.507 21.3067H110.157L105.062 39.9467H110.413L112.23 33.28H118.349L116.531 39.9467H121.907L127.002 21.3067H121.651Z" fill="#F7FF13" />
					</g>
					<defs>
						<clipPath id="clip0_19_2192">
							<rect width="128" height="40" fill="white" />
						</clipPath>
					</defs>
				</svg>
			</Link>
			<Link to="/sitemap" className={styles.best}>
				<img className={styles.bestImg} src={HeaderBest} width="60" height="60" alt="Best of the best" />
				<div className={styles.bestText}>
					<span className={styles.bestTextAccent}>Лучший</span> Онлайн&nbsp;букмекер
				</div>
			</Link>
			<nav className={` ${menuOpen ? [styles.nav, styles.show].join(' ') : [styles.nav]}`} onClick={() => { setMenuOpen(false) }}>
				<menu className={styles.navMenu}>
					<li className={styles.navItem}>
						<Link className={clsx(styles.navLink, styles.navLinkActive)} to="/"> Спорт</Link>
					</li>
					<li className={styles.navItem}>
						<Link className={styles.navLink} to="/cybersport">Киберспорт</Link>
					</li>
					<li className={styles.navItem}>
						<Link className={styles.navLink} to="/">Казино</Link>
					</li>
					<li className={styles.navItem}>
						<Link className={styles.navLink} to="/">TV Ставки</Link>
					</li>
					<li className={styles.navItem}>
						<Link className={styles.navLink} to="/">Виртуальный спорт</Link>
					</li>
					<li className={styles.navItem}>
						<Link className={styles.navLink} to="/promotions/">Акции</Link>
					</li>
					<li className={styles.navItem}>
						<button className={styles.navBtnShowMoreLink} onClick={() => toggleModal()}>
							Показать другие ссылки
							<svg className={styles.navBtnShowMoreLinkSvg} width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle className={styles.navBtnShowMoreLinkLine} cx="3" cy="3" r="2" fill="#474747" />
								<circle className={styles.navBtnShowMoreLinkLine} cx="10" cy="3" r="2" fill="#474747" />
								<circle className={styles.navBtnShowMoreLinkLine} cx="17" cy="3" r="2" fill="#474747" />
							</svg>
						</button>
					</li>
				</menu>
			</nav>
			<div className={styles.signInWrapper}>
				<Link className={styles.signInBtn} to="/">Войти</Link>
				<Link className={clsx(styles.signInBtn, styles.signInBtnRegistration)} to="/">Регистрация</Link>
			</div>
			<Modal isOpen={isOpen} toggleModal={toggleModal} full={true}>
				<ModalNavigation toggleModal={toggleModal} />
			</Modal>
		</div>
	)
}

export default HeaderTop