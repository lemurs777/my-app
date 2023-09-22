import clsx from 'clsx';

import {InPersonInfoData} from './types';

import styles from './InPersonInfo.module.scss';

function InPersonMain(
  {data}: { data: InPersonInfoData }
) {

  return (
    <>
      <h2 className={styles.title}>{data.title}</h2>
      <div className={styles.info}>
        <div className={styles.header}>
          <div className={styles.headerName}>Дата</div>
          <div className={styles.headerName}>Турнир</div>
          <div className={styles.headerName}>Раунд</div>
          <div className={styles.headerName}>Матч</div>
        </div>
        <div className={styles.content}>
          <div className={styles.contentNames}>
            <div className={styles.contentName}>{data.nameOne}</div>
            <div className={styles.contentName}>{data.scoreOne} : {data.scoreTwo}</div>
            <div className={styles.contentName}>{data.nameTwo}</div>
          </div>
          <div className={styles.colOne}>
            <div className={styles.colOneDate}>{data.date}</div>
            <div className={styles.colOneName}>Таблица</div>
            <div className={styles.colOneMiniTable}>
              <div className={styles.colOneMiniTableNum}
                   style={{bottom: `${data.tablePercentOne * 100}%`}}>#{data.tablePositionOne}</div>
            </div>
            <div className={styles.colOneInfo}>{data.tablePercentOne}%</div>
          </div>
          <div className={styles.colTwo}>
            <div className={styles.colTwoTitle}>{data.tournament}</div>
            <div className={styles.colTwoInfoWrapper}>
              <svg viewBox="0 0 36 36" className={styles.colTwoInfoChart}>
                <path className={styles.colTwoInfoCircleOne}
                      strokeDasharray="100, 100"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className={styles.colTwoInfoCircleTwo}
                      strokeDasharray={`${data.efficiencyOne}, 100`}
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className={styles.colTwoInfoContent}>
                <div className={styles.colTwoInfoContentNum}>{data.efficiencyOne}%</div>
                <div className={styles.colTwoInfoContentText}>Результативность</div>
              </div>
            </div>
            <div className={styles.colTwoName}>Результативность</div>
            <div className={styles.forms}>
              {data.formsOne.map((form, index) => (
                <div
                  key={index}
                  className={clsx(
                    styles.form,
                    {[styles.formWin]: form.form === 'win'},
                    {[styles.formLoss]: form.form === 'loss'},
                  )}>
                  {form.form === 'win' ? 'В' : 'П'}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.colThree}>
            <div className={styles.colThreeAbout}>
              <div className={styles.colThreeAboutWin}>

                <div className={styles.colThreeAboutWinCount}>{data.winOne}</div>
                <div className={styles.colThreeAboutWinText}>ПОБЕДЫ</div>
              </div>
              <ul className={styles.colThreeAboutList}>
                <li className={styles.colThreeAboutItem}>
                  <div className={styles.colThreeAboutItemText}>Самая крупная победа</div>
                  <div className={styles.colThreeAboutItemCount}>{data.bigWinOne}</div>
                </li>
                <li className={styles.colThreeAboutItem}>
                  <div className={styles.colThreeAboutItemText}>Всего очков</div>
                  <div className={styles.colThreeAboutItemCount}>{data.pointsOne}</div>
                </li>
                <li className={styles.colThreeAboutItem}>
                  <div className={styles.colThreeAboutItemText}>Сред. очки/матч</div>
                  <div className={styles.colThreeAboutItemCount}>{data.mediumPointsOne}</div>
                </li>
              </ul>
            </div>
            <div className={styles.colThreeInfo}>
              <div className={styles.colThreeInfoText}>{data.round}</div>
              <div className={styles.colThreeInfoWrapper}>
                <svg viewBox="0 0 36 36" className={styles.colThreeInfoChart}>
                  <path className={styles.colThreeInfoCircleOne}
                        strokeDasharray="100, 100"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path className={styles.colThreeInfoCircleTwoMore}
                        strokeDasharray={`${data.mainPercent + 2}, 100`}
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path className={styles.colThreeInfoCircleTwo}
                        strokeDasharray={`${data.mainPercent}, 100`}
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className={styles.colThreeInfoContent}>
                  <div className={styles.colThreeInfoContentNum}>{data.mainPercent}%</div>
                  <div className={styles.colThreeInfoContentText}>Результативность</div>
                </div>
              </div>
            </div>
            <div className={styles.colThreeAbout}>
              <div className={styles.colThreeAboutWin}>
                <div className={styles.colThreeAboutWinCount}>{data.winTwo}</div>
                <div className={styles.colThreeAboutWinText}>ПОБЕДЫ</div>
              </div>
              <ul className={styles.colThreeAboutList}>
                <li className={styles.colThreeAboutItem}>
                  <div className={styles.colThreeAboutItemText}>Самая крупная победа</div>
                  <div className={styles.colThreeAboutItemCount}>{data.bigWinTwo}</div>
                </li>
                <li className={styles.colThreeAboutItem}>
                  <div className={styles.colThreeAboutItemText}>Всего очков</div>
                  <div className={styles.colThreeAboutItemCount}>{data.pointsTwo}</div>
                </li>
                <li className={styles.colThreeAboutItem}>
                  <div className={styles.colThreeAboutItemText}>Сред. очки/матч</div>
                  <div className={styles.colThreeAboutItemCount}>{data.mediumPointsTwo}</div>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.colTwo}>
            <div className={styles.colTwoTitle}></div>
            <div className={styles.colTwoInfoWrapper}>
              <svg viewBox="0 0 36 36" className={styles.colTwoInfoChart}>
                <path className={styles.colTwoInfoCircleOne}
                      strokeDasharray="100, 100"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className={styles.colTwoInfoCircleTwo}
                      strokeDasharray={`${data.efficiencyTwo}, 100`}
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className={styles.colTwoInfoContent}>
                <div className={styles.colTwoInfoContentNum}>{data.efficiencyTwo}%</div>
                <div className={styles.colTwoInfoContentText}>Результативность</div>
              </div>
            </div>
            <div className={styles.colTwoName}>Результативность</div>
            <div className={styles.forms}>
              {data.formsTwo.map((form, index) => (
                <div
                  key={index}
                  className={clsx(
                    styles.form,
                    {[styles.formWin]: form.form === 'win'},
                    {[styles.formLoss]: form.form === 'loss'},
                  )}>
                  {form.form === 'win' ? 'В' : 'П'}
                </div>
              ))}
            </div>
          </div>
          <div className={clsx(styles.colOne, styles.colOneRight)}>
            <div className={styles.colOneName}>Таблица</div>
            <div className={clsx(styles.colOneMiniTable, styles.colOneMiniTableRight)}>
              <div className={clsx(styles.colOneMiniTableNum, styles.colOneMiniTableNumRight)}
                   style={{bottom: `${data.tablePercentTwo * 100}%`}}>#{data.tablePositionTwo}</div>
            </div>
            <div className={styles.colOneInfo}>{data.tablePercentTwo}%</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InPersonMain;