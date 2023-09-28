import React from 'react';
import HeaderSearch from "../HeaderSearch";
import MobileApps from "../MobileApps";
import styles from './HeaderBottomEvent.module.scss'
import Language from "../Language";
import HeaderInfo from "../HeaderInfo";
import HeaderBreadCrumb from "../HeaderComnonents/HeaderBreadCrumb";

const HeaderBottomEvent = () => {
  return (
    <div className={styles.headerBottom}>
      <div className={styles.headerBottom__col}>
        <HeaderSearch/>
      </div>
      <div className={styles.headerBottom__col}>
        <HeaderBreadCrumb/>
      </div>
      <div className={styles.headerBottom__col}>
        <HeaderInfo/>
        <MobileApps/>
        <Language/>
      </div>
    </div>
  );
};

export default HeaderBottomEvent;