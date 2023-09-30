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
        <div className={styles.search}>
          <HeaderSearch />
        </div>
      </div>
      <div className={styles.headerBottom__col}>
        <HeaderBreadCrumb />
      </div>
      <div className={styles.headerBottom__col}>
        <div className={styles.info}>
          <HeaderInfo />
        </div>
        <div className={styles.apps}>
          <MobileApps />
        </div>
        <div className={styles.language}>
          <Language />
        </div>
      </div>
    </div>
  );
};

export default HeaderBottomEvent;