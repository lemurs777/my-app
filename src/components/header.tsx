import React from 'react';
import { Link } from 'react-router-dom';

import HeaderBest from '../assets/images/header-best.png';

function Header() {
  return (
      <header className="header">
        <div className="header__container">
          <Link to="/" className="header__logo" aria-label="Hello Logo">
            <svg className="header__logo-img" width="128" height="40" viewBox="0 0 128 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_19_2192)">
              <path d="M24.0896 18.6667L25.4464 13.7067H31.7696C35.0976 13.7067 37.12 12.1334 38.0416 8.80002L38.5536 6.96002C39.7312 2.72002 37.8112 0.0800171 33.6128 0.0800171H6.11841L0.998413 18.6667H24.0896ZM33.5872 5.06668L32.512 9.12002H26.7264L27.8272 5.09335H33.5872V5.06668Z" fill="#F7FF13"/>
              <path d="M40.9088 18.6667L42.5984 15.5467H50.432V18.6667H55.5776V0.0533447H45.4656L34.944 18.6667H40.9088ZM48.3072 5.12001H50.432V11.04H45.056L48.3072 5.12001Z" fill="#F7FF13"/>
              <path d="M76.5696 8.61335L77.0304 6.93334C78.208 2.64001 76.288 0.0533447 72.0896 0.0533447H62.3104L57.1904 18.6667H62.5408L63.9488 13.5467H67.2768L68.7872 18.6667H74.2912L72.6784 13.2C74.624 12.5867 75.904 11.0667 76.5696 8.61335ZM66.2784 5.06668H72.0384L70.9632 9.09334H65.1776L66.2784 5.06668Z" fill="#F7FF13"/>
              <path d="M81.5872 18.6667L86.7072 0.0533447H81.3312L76.2368 18.6667H81.5872Z" fill="#F7FF13"/>
              <path d="M48.7936 21.3067L42.752 28.7467L40.2688 21.3067H17.1008L12.0064 39.9467H35.0976L37.9136 29.6533L39.7824 35.4133H43.2384L48.2304 29.28L45.2864 39.9467H50.6368L55.7312 21.3067H48.7936Z" fill="#F7FF13"/>
              <path d="M62.8992 21.3067L52.352 39.92H58.3168L60.0064 36.8H67.84V39.92H72.9856V21.3333L62.8992 21.3067ZM62.4896 32.32L65.7152 26.4H67.84V32.32H62.4896Z" fill="#F7FF13"/>
              <path d="M91.0848 26.64L92.544 21.3067H76.288L74.8288 26.64H80.7168L77.056 39.9467H82.4064L86.0672 26.64H91.0848Z" fill="#F7FF13"/>
              <path d="M98.2272 26.64H106.342L107.827 21.3333H99.1744C95.8464 21.3333 93.824 22.9067 92.9024 26.24L91.008 33.04C89.8048 37.3867 91.7504 39.92 95.9488 39.92H102.682L104.141 34.6133H96.0256L98.2272 26.64Z" fill="#F7FF13"/>
              <path d="M121.651 21.3067L119.808 27.9733H113.69L115.507 21.3067H110.157L105.062 39.9467H110.413L112.23 33.28H118.349L116.531 39.9467H121.907L127.002 21.3067H121.651Z" fill="#F7FF13"/>
              </g>
              <defs>
              <clipPath id="clip0_19_2192">
              <rect width="128" height="40" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </Link>
          <div className="header__best">
            <img className="header__best-img" src={HeaderBest} width="60" height="60" alt="Best of the best" />
            <div className="header__best-text">
              <span className="header__best-text-accent">Лучший</span> Онлайн&nbsp;букмекер
            </div>
          </div>
          <nav className="header__nav">
            <menu className="header__nav-menu">
              <li className="header__nav-item">
                <Link className="header__nav-link header__nav-link--active" to="/"> Спорт</Link>
              </li>
              <li className="header__nav-item">
                <Link className="header__nav-link" to="/">Киберспорт</Link>
              </li>
              <li className="header__nav-item">
                <Link className="header__nav-link" to="/">Казино</Link>
              </li>
              <li className="header__nav-item">
                <Link className="header__nav-link" to="/">TV Ставки</Link>
              </li>
              <li className="header__nav-item">
                <Link className="header__nav-link" to="/">Виртуальный спорт</Link>
              </li>
              <li className="header__nav-item">
                <Link className="header__nav-link" to="/promotions/">Акции</Link>
              </li>
              <li className="header__nav-item">
                <button className="header__nav-btn-show-more-link">
                  Показать другие ссылки
                  <svg className="header__nav-btn-show-more-link-svg" width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className="header__nav-btn-show-more-link-svg-line" cx="3" cy="3" r="2" fill="#474747"/>
                    <circle className="header__nav-btn-show-more-link-svg-line" cx="10" cy="3" r="2" fill="#474747"/>
                    <circle className="header__nav-btn-show-more-link-svg-line" cx="17" cy="3" r="2" fill="#474747"/>
                  </svg>
                </button>
              </li>
            </menu>
          </nav>
          <div className="header__sign-in-wrapper">
            <Link className="header__sign-in-btn" to="/">Войти</Link>
            <Link className="header__sign-in-btn header__sign-in-btn--registration" to="/">Регистрация</Link>
          </div>
        </div>
        <div className="header__bottom">
          <div className="header__bottom-bg"></div>
          <div className="header__bottom-content">
            <label className="header__search-label">
              <input className="header__search" type="text" placeholder="Найти команду, страну, лигу.."/>
              <svg className="header__search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="header__search-icon-path" d="M15.7 14.3L11.5 10.1C11.3 9.9 11 9.8 10.7 9.8C11.5 8.8 12 7.4 12 6C12 2.7 9.3 0 6 0C2.7 0 0 2.7 0 6C0 9.3 2.7 12 6 12C7.4 12 8.8 11.5 9.8 10.6C9.8 10.9 9.8 11.2 10.1 11.4L14.3 15.6C14.5 15.8 14.8 15.9 15 15.9C15.2 15.9 15.5 15.8 15.7 15.6C16.1 15.3 16.1 14.7 15.7 14.3ZM6 10.5C3.5 10.5 1.5 8.5 1.5 6C1.5 3.5 3.5 1.5 6 1.5C8.5 1.5 10.5 3.5 10.5 6C10.5 8.5 8.5 10.5 6 10.5Z" fill="#898989"/>
              </svg>
            </label>
            <ul className="header__bottom-list">
              <li className="header__bottom-item">
                <Link className="header__bottom-link header__bottom-link--custom" to="/">LIVE события</Link>
              </li>
              <li className="header__bottom-item">
                <Link className="header__bottom-link" to="/">3ч</Link>
              </li>
              <li className="header__bottom-item">
                <Link className="header__bottom-link" to="/">6ч</Link>
              </li>
              <li className="header__bottom-item">
                <Link className="header__bottom-link" to="/">12ч</Link>
              </li>
              <li className="header__bottom-item">
                <Link className="header__bottom-link header__bottom-link--active" to="/">Сегодня</Link>
              </li>
              <li className="header__bottom-item">
                <Link className="header__bottom-link" to="/">завтра</Link>
              </li>
              <li className="header__bottom-item">
                <Link className="header__bottom-link" to="/">Суббота</Link>
              </li>
              <li className="header__bottom-item">
                <Link className="header__bottom-link" to="/">Воскресенье</Link>
              </li>
            </ul>
            <div className="header__bottom-info">
              <div className="header__bottom-time">
                17:43 (GMT+3)
              </div>
              <div className="header__bottom-apps">
                <Link className="header__bottom-link-app header__bottom-link-app--iphone" to="/apps/">Приложение для iPhone</Link>
                <Link className="header__bottom-link-app header__bottom-link-app--android" to="/apps/">Приложение для Android</Link>
              </div>
              <button className="header__bottom-select-language header__bottom-select-language--ru">RU</button>
            </div>
          </div>
        </div>
      </header>
  );
}

export default Header;
