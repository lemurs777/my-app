import {
  StatisticsNavigation,
  TableLeagueFilter,
  TableLeague,
  TableNextPrevGames,
  OverviewInfo,
  TableBigSmall,
  TableBigSmallFilter,
} from '../';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import styles from './StatisticsOverview.module.scss';

import arrTables from '../../data/dataStatisticsTwo';
import clsx from "clsx";

function StatisticsOverview() {

  const dataLeagueTable = arrTables.dataLeagueTable;

  const dataPrevTable = arrTables.dataPrevTable;

  const dataNextTable = arrTables.dataNextTable;

  const dataBigSmallTable = arrTables.dataBigSmallTable;

  const overviewInfoOne = {
    title: 'Последние матчи',
    leftNum: '35.00%',
    leftText: 'Хозяева',
    centerNum: '0.00%',
    centerText: 'Ничья',
    rightNum: '65.00%',
    rightText: 'Гости',
    allNum: '20',
    allText: 'Сыгранные матчи',
    percentLeft: 35,
    percentRight: 65,
  }

  const overviewInfoTwo = {
    title: 'Очки за матч',
    leftNum: '83.75',
    leftText: 'Хозяева',
    centerNum: '179.15',
    centerText: 'Все',
    rightNum: '95.40',
    rightText: 'Гости',
    allNum: '3583',
    allText: 'Всего очков',
    percentLeft: 45,
    percentRight: 55,
  }

  return (
    <div className={styles.statisticsOverview}>
      <StatisticsNavigation name="overview"/>
      <div className={styles.wrapper}>
        <div className={styles.tableLeagueWrapper}>
          <TableLeagueFilter/>
          <TableLeague data={dataLeagueTable}/>
        </div>
        <div className={styles.overviewInfoWrapper}>
          <OverviewInfo data={overviewInfoOne}/>
          <OverviewInfo data={overviewInfoTwo}/>
        </div>
        <div className={clsx(styles.tableNextPrevGamesWrapper, 'desktop')}>
          <TableNextPrevGames data={dataPrevTable}/>
          <TableNextPrevGames data={dataNextTable}/>
        </div>
        <div className={clsx(styles.tableNextPrevGamesWrapper, 'mobile')}>
          <Tabs className={clsx(styles.tabs,'tabsGame')}>
            <TabList className={styles.tabs__list}>
              <Tab className={styles.tabs__btn} selectedClassName={styles.tabs__btnActive} >Последние матчи</Tab>
              <Tab className={styles.tabs__btn} selectedClassName={styles.tabs__btnActive}>Следующие матчи</Tab>
            </TabList>
            <TabPanel className={styles.tabs__panel}>
              <TableNextPrevGames data={dataPrevTable}/>
            </TabPanel>
            <TabPanel className={styles.tabs__panel}>
              <TableNextPrevGames data={dataNextTable}/>
            </TabPanel>
          </Tabs>
        </div>
        <TableBigSmallFilter/>
        <TableBigSmall data={dataBigSmallTable}/>
      </div>
    </div>
  );
}

export default StatisticsOverview;