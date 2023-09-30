import React from 'react'
import styles from './SportFooter.module.scss'
function SportFooter() {
  return (
    <div className={styles.sport}>
      <div className={styles.sport__inner}>
        <div className={styles.sport__icon}><span>Спорт</span></div>
        <ul className={styles.sport__list}>
          <li><button className={styles.sportItem}><div className={styles.sportItem__icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14.1615 0V16L8.34838 12.3134C8.24307 12.2466 8.12057 12.2119 7.99994 12.2119C7.87932 12.2119 7.75682 12.2463 7.6515 12.3134L1.83838 16V0H14.1615Z" fill="" />
            </svg></div>
            <span>Закладки</span>
          </button>
          </li>
          <li><button className={styles.sportItem}><div className={styles.sportItem__icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clipPath="url(#clip0_60_13676)">
                <path fillRule="evenodd" clipRule="evenodd" d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0ZM7.55556 8C7.55556 8.24548 7.75452 8.44444 8 8.44444H11.5042C11.7497 8.44444 11.9487 8.24548 11.9487 8C11.9487 7.75456 11.7497 7.55556 11.5042 7.55556H8.44444V3.29412C8.44444 3.04864 8.24544 2.84967 8 2.84967C7.75452 2.84967 7.55556 3.04864 7.55556 3.29412V8Z" fill="" />
              </g>
              <defs>
                <clipPath id="clip0_60_13676">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg></div>
            <span>Мои ставки</span>
          </button>
          </li>
        </ul>
        <div className={styles.sport__coupon}>
          <span>3</span>
          Купон
        </div>
      </div>
    </div>
  )
}

export default SportFooter