import {OverviewInfoData} from './types';

import styles from './OverviewInfo.module.scss';
import clsx from "clsx";

function OverviewInfo({data}: { data: OverviewInfoData }) {

  return (
    <div className={styles.overviewInfo}>
      <h2 className={styles.title}>{data.title}</h2>
      <div className={styles.inner}>
        <div className={clsx(styles.column, styles.columnTop)}>
          <div className={styles.text}>{data.centerText}</div>
          <div className={styles.num}>{data.centerNum}</div>
        </div>
        <div className={styles.content}>
          <div className={styles.column}>
            <div className={styles.num}>{data.leftNum}</div>
            <div className={styles.text}>{data.leftText}</div>
          </div>

          <div className={styles.divider}>
            <div className={styles.percentLeft} style={{width: `calc(${data.percentLeft}% - .5rem)`}}></div>
            <div className={styles.percentRight} style={{width: `calc(${data.percentRight}% - .5rem)`}}></div>
          </div>
          <div className={styles.column}>
            <div className={styles.num}>{data.rightNum}</div>
            <div className={styles.text}>{data.rightText}</div>
          </div>
      </div>
          <div className={clsx(styles.column, styles.columnBottom)}>
            <div className={styles.text}>{data.allText}</div>
            <div className={styles.num}>{data.allNum}</div>
          </div>
        </div>
    </div>
  );
}

export default OverviewInfo;