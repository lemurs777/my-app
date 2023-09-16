import React from 'react';

import styles from './CouponEmpty.module.scss'
import {ReactComponent as Setting} from "../../assets/images/svg/setting.svg";
import img from '../../assets/images/emptyCoupon.png'
const CouponEmpty = () => {
  return (
    <div className={styles.coupon}>
      <button className={styles.coupon__setting}><Setting/></button>
      <h4 className={styles.coupon__title}>КУПОН ПУСТ</h4>
      <div className={styles.coupon__text}>
        <p>Чтобы добавить ставку в купон, нажмите на коэффициент в событии</p>
      </div>
      <div className={styles.coupon__img}>
        <img src={img} alt="coupon"/>
      </div>
      <div className={styles.coupon__btns}>
        <button className={styles.coupon__btn}>КАК НАЧАТЬ ИГРАТЬ?</button>
        <button className={styles.coupon__btn}>КАК СДЕЛАТЬ СТАВКУ?</button>
      </div>

    </div>
  );
};

export default CouponEmpty;