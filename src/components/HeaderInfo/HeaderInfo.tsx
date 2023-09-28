import React from 'react';
import styles from "../HeaderBottom/HeaderBottom.module.scss";

const HeaderInfo = () => {
  return (
    <div className={styles.info}>
      <div className={styles.time}>
        17:43 (GMT+3)
      </div>
    </div>
  );
};

export default HeaderInfo;