import React, { useRef, useState, useEffect } from 'react'
import styles from './Search.module.scss'
import { ReactComponent as SearchIcon } from '../../assets/images/svg/header-search.svg'
import clsx from 'clsx'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import { useClickOutside } from '../../hooks/useClickOutside'

const Search = () => {
  const [isFocus, setIsFocus] = useState(false)
  const [closeSearch, setCloseSearch] = useState(true)
  const searchRef = useRef(null)
  const team = [
    {
      type: 'ФУТБОЛ',
      list: [
        {
          teamName: 'Россия. Премьер-Лига. Статистические показатели ЦСКА',
          sublist: [
            {
              info: 'Футбол. Россия. Премьер-Лига',
              players: 'ЦСКА Москва - Крылья Советов',
              date: '15 апреля 2023'
            },
            {
              info: 'Футбол. Россия. Премьер-Лига',
              players: 'ЦСКА Москва - Крылья Советов',
              date: '15 апреля 2023'
            },
            {
              info: 'Футбол. Россия. Премьер-Лига',
              players: 'ЦСКА Москва - Крылья Советов',
              date: '15 апреля 2023'
            },
          ]
        },
        {
          teamName: 'Россия. Премьер-Лига. Статистические показатели ЦСКА',
          sublist: [
            {
              info: 'Футбол. Россия. Премьер-Лига',
              players: 'ЦСКА Москва - Крылья Советов',
              date: '15 апреля 2023'
            },
            {
              info: 'Футбол. Россия. Премьер-Лига',
              players: 'ЦСКА Москва - Крылья Советов',
              date: '15 апреля 2023'
            },
            {
              info: 'Футбол. Россия. Премьер-Лига',
              players: 'ЦСКА Москва - Крылья Советов',
              date: '15 апреля 2023'
            },
          ]
        },
      ]
    },
    {
      type: 'ХОККЕЙ',
      list: [{
        teamName: 'Россия. Премьер-Лига. Статистические показатели ЦСКА',
        sublist: [
          {
            info: 'Футбол. Россия. Премьер-Лига',
            players: 'ЦСКА Москва - Крылья Советов',
            date: '15 апреля 2023'
          },
          {
            info: 'Футбол. Россия. Премьер-Лига',
            players: 'ЦСКА Москва - Крылья Советов',
            date: '15 апреля 2023'
          },

        ]
      },
      ]
    },
    {
      type: 'ФУТБОЛ',
      list: [{
        teamName: 'Цска 1948 София',
        sublist: [
          {
            info: 'Футбол. Россия. Премьер-Лига',
            players: 'ЦСКА Москва - Крылья Советов',
            date: '15 апреля 2023'
          },
          {
            info: 'Футбол. Россия. Премьер-Лига',
            players: 'ЦСКА Москва - Крылья Советов',
            date: '15 апреля 2023'
          },
          {
            info: 'Футбол. Россия. Премьер-Лига',
            players: 'ЦСКА Москва - Крылья Советов',
            date: '15 апреля 2023'
          },
        ]
      },
      {
        teamName: 'Цска 1948 София',
        sublist: [
          {
            info: 'Футбол. Россия. Премьер-Лига',
            players: 'ЦСКА Москва - Крылья Советов',
            date: '15 апреля 2023'
          },
          {
            info: 'Футбол. Россия. Премьер-Лига',
            players: 'ЦСКА Москва - Крылья Советов',
            date: '15 апреля 2023'
          },
          {
            info: 'Футбол. Россия. Премьер-Лига',
            players: 'ЦСКА Москва - Крылья Советов',
            date: '15 апреля 2023'
          },
        ]
      },
      {
        teamName: 'Цска 1948 София',
        sublist: [
          {
            info: 'Футбол. Россия. Премьер-Лига',
            players: 'ЦСКА Москва - Крылья Советов',
            date: '15 апреля 2023'
          },
          {
            info: 'Футбол. Россия. Премьер-Лига',
            players: 'ЦСКА Москва - Крылья Советов',
            date: '15 апреля 2023'
          },
          {
            info: 'Футбол. Россия. Премьер-Лига',
            players: 'ЦСКА Москва - Крылья Советов',
            date: '15 апреля 2023'
          },
        ]
      },
      ]
    },
  ]
  const wrapRef = useRef(null)
  useClickOutside(wrapRef, () => {
    setCloseSearch(false)
    console.log(closeSearch)

  })

  return (
    <>
      {closeSearch ? (
        <div className={styles.searchWrapper} >
          <div
            className={styles.search}

            ref={wrapRef}
          >
            <div className={styles.search__inner}>
              <div
                className={clsx(
                  styles.search__item,
                  isFocus ? styles.isFocus : null
                )}
                ref={searchRef}
              >
                <input
                  type='text'
                  placeholder='Поиск по акциям'
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                />
                <button className={styles.search__btn} type='submit'>
                  <SearchIcon />
                </button>
              </div>
            </div>

            <div className={styles.search__body}>

              <Tabs className={styles.tabs}>
                <TabList className={styles.tabs__list}>
                  {team.map((item, index) => (
                    <>
                      <div key={index} className={styles.tabTitle} >
                        {item.type}
                      </div>
                      {item.list.map((item, index) => (
                        <Tab className={styles.tabs__btn} selectedClassName={styles.tabActive}
                          key={index}>{item.teamName}</Tab>
                      ))
                      }
                    </ >
                  ))}
                </TabList>
                {team.map((item, index) => (
                  <>
                    {
                      item.list.map((item, index) => (
                        <TabPanel selectedClassName={styles.tabPanelActive} key={index}
                          className={styles.tabPanel}>
                          <div className={styles.tabTitle}>
                            {item.teamName}
                          </div>
                          {item.sublist.map((item, index) => (
                            <div key={index} className={styles.tabPanel__row}>
                              <div className={styles.tabPanel__teams}>
                                {item.players}
                              </div>
                              <div className={styles.tabpanel__date}>
                                {item.date}
                              </div>
                            </div>

                          ))}

                        </TabPanel>
                      ))
                    }

                  </>
                ))}
              </Tabs>
            </div>
          </div >
        </div >
      ) : null}
    </>
  )
}

export default Search
