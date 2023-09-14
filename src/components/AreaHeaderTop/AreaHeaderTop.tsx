import React from 'react'

import styles from './AreaHeaderTop.module.scss'

function AreaHeaderTop() {
  return (
    <div className={styles.areaHeader}>
      <div className={styles.areaHeader__inner}>
        <button type='button' className={styles.areaHeader__icon}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 3C8.77093 3 6.05393 5.49 5.67993 8.794L5.33493 11.838C5.2508 12.5909 4.94446 13.3018 4.45493 13.88C3.42193 15.096 4.26093 17 5.82993 17H18.1699C19.7399 17 20.5779 15.096 19.5439 13.88C19.0548 13.3017 18.7488 12.5908 18.6649 11.838L18.3199 8.794C17.9459 5.491 15.2299 3 11.9999 3ZM14.9719 19.072C14.5149 20.198 13.3569 21 11.9999 21C10.6429 21 9.48493 20.2 9.02793 19.071C9.00386 19.0071 8.99564 18.9382 9.00397 18.8704C9.0123 18.8026 9.03692 18.7379 9.07574 18.6816C9.11456 18.6254 9.16642 18.5794 9.22688 18.5476C9.28735 18.5158 9.35461 18.4991 9.42293 18.499H14.5769C14.6454 18.4991 14.7128 18.5158 14.7733 18.5476C14.8339 18.5795 14.8858 18.6256 14.9247 18.6819C14.9635 18.7383 14.9881 18.8032 14.9963 18.8711C15.0046 18.9391 14.9962 19.008 14.9719 19.072Z" />
        </svg>
        </button>
        <div className={styles.areaHeader__info}>
          <div className={styles.areaHeader__infoTitle}><span>Дмитрий Власов</span></div>
          <div className={styles.areaHeader__infoBottom}>
            <div className={styles.areaHeader__price}><span>1250.00₽</span></div>
            <button type='button' className={styles.areaHeader__more}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="4" viewBox="0 0 18 4" fill="none">
                <circle cx="2" cy="2" r="2" fill="#474747" />
                <circle cx="9" cy="2" r="2" fill="#474747" />
                <circle cx="16" cy="2" r="2" fill="#474747" />
              </svg>
            </button>

          </div>
        </div>
        <button type='button' className={`${styles.areaHeader__btn} button button--accent`}>+ <span>ПОПОЛНИТЬ</span></button>
      </div>
    </div>
  )
}

export default AreaHeaderTop