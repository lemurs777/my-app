import React from 'react';
import styles from './MobileApps.module.scss'
import {Link} from "react-router-dom";
import clsx from "clsx";

const MobileApps = () => {
  return (
    <div className={styles.apps}>
      <Link className={clsx(styles.linkApp, styles.linkAppIphone)} to="/apps/">Приложение для iPhone</Link>
      <Link className={clsx(styles.linkApp, styles.linkAppAndroid)} to="/apps/">Приложение для Android</Link>
    </div>
  );
};

export default MobileApps;