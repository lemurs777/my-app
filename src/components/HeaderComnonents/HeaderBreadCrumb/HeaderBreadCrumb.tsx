import React, {useEffect, useRef, useState} from 'react';

import styles from './HeaderBreadCrumb.module.scss'
import {Link} from "react-router-dom";

import {ReactComponent as SoccerIcon} from "../../../assets/images/svg/menu-soccer.svg";
import clsx from "clsx";

const HeaderBreadCrumb = () => {
  const selectList = [
    {
      title: 'Германия',
      sublist: [
        {
          text: 'Бундеслига',
          counter: '8'
        },
        {
          text: 'Бундеслига',
          counter: '8'
        },
        {
          text: 'Бундеслига',
          counter: '8'
        },
      ]
    },
    {
      title: 'Бундеслига',
      sublist: [
        {
          text: 'Бундеслига',
          counter: '8'
        },
        {
          text: 'Бундеслига',
          counter: '8'
        },
        {
          text: 'Бундеслига',
          counter: '8'
        },
      ]
    },
    {
      title: 'Бавария - Айнтрахт Франкфурт',
      sublist: [
        {
          text: 'Бундеслига',
          counter: '8'
        },
        {
          text: 'Бундеслига',
          counter: '8'
        },
        {
          text: 'Бундеслига',
          counter: '8'
        },
      ]
    }
  ]
  const selectRef = useRef(null)
  const selectRef2 = useRef(null)
  const selectRef3 = useRef(null)

  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  return (
    <div className={styles.breadcrumb}>
      <ul className={styles.breadcrumb__list}>
        <li><Link to='/' className={styles.item}>
          <div className={styles.item__icon}>
            <SoccerIcon/>
          </div>
          <span>Футбол</span>
        </Link></li>
        <li className={styles.item} ref={selectRef}>
          <div className={styles.select}>
            <button className={clsx(styles.select__btn, isOpen ? styles.select__btnActive : null)}
                    onClick={() => {
                      setIsOpen(!isOpen)
                    }}>Германия
            </button>
            {isOpen && (
              <ul className={clsx(styles.select__content, styles.select__contentCountry)}>
                <li className={styles.selectSearch}>
                  <div className={styles.search}>
                    <input type="text" className={styles.searchInput} placeholder={'Поиск по стране'}/>
                  </div>
                </li>
                <li className={styles.selectSearchChoose}>
                  <div className={styles.select__item}>
                    Германия
                  </div>
                </li>
                <li className={styles.select__item}>
                  <div className={styles.select__name}>Германия</div>
                </li>
                <li className={styles.select__item}>
                  <div className={styles.select__name}>Германия</div>
                </li>
                <li className={styles.select__item}>
                  <div className={styles.select__name}>Германия</div>
                </li>
              </ul>
            )}
          </div>
        </li>

        <li className={styles.item} ref={selectRef2}>
          <div className={styles.select}>
            <button className={clsx(styles.select__btn, isOpen2 ? styles.select__btnActive : null)}
                    onClick={() => {
                      setIsOpen2(!isOpen2)
                    }}>Бундеслига
            </button>
            {isOpen2 && (
              <ul className={styles.select__content}>
                <li className={styles.select__item}>
                  <div className={styles.select__name}>Бундеслига</div>
                  <div className={styles.select__num}>8</div>
                </li>
                <li className={styles.select__item}>
                  <div className={styles.select__name}>Бундеслига</div>
                  <div className={styles.select__num}>8</div>
                </li>
                <li className={styles.select__item}>
                  <div className={styles.select__name}>Бундеслига</div>
                  <div className={styles.select__num}>8</div>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li className={styles.item} ref={selectRef3}>
          <div className={styles.select}>
            <button className={clsx(styles.select__btn, isOpen3 ? styles.select__btnActive : null)}
                    onClick={() => {
                      setIsOpen3(!isOpen3)
                    }}>Бавария - Айнтрахт Франкфурт
            </button>
            {isOpen3 && (
              <div className={clsx(styles.select__content, styles.select__contentTable)}>
                <div className={styles.table}>
                  <div className={styles.table__content}>
                    <div className={styles.tableItem}>
                      <div className={styles.tableItem__left}>
                        <div className={styles.tableItem__row}>
                          <div className={styles.tableItem__time}>
                            18:15
                          </div>
                          <div className={styles.tableItem__command}>
                            Севилья
                          </div>
                          <div className={styles.tableItem__check}>0</div>
                        </div>
                        <div className={styles.tableItem__row}>
                          <div className={styles.tableItem__date}>
                            21 Aug
                          </div>
                          <div className={styles.tableItem__command}>
                            Атлетико Мадрид
                          </div>
                          <div className={styles.tableItem__check}>0</div>
                        </div>
                      </div>
                      <div className={styles.tableItem__right}>
                        <div className={styles.tableItem__section}>
                          <div className={styles.tableItem__block}>
                            9.1
                          </div>
                          <div className={styles.tableItem__block}>
                            9.1
                          </div>
                          <div className={styles.tableItem__block}>
                            9.1
                          </div>
                        </div>
                        <div className={styles.tableItem__section}>
                          <div className={styles.tableItem__block}>
                            9.1
                          </div>
                          <div className={styles.tableItem__block}>
                            9.1
                          </div>
                          <div className={styles.tableItem__block}>
                            9.1
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </li>
        {/*{selectList.map((item, index) => {*/
        }
        {/*  return <li key={index} className={styles.item}>*/
        }
        {/*    <div className={styles.select}>*/
        }
        {/*      <button className={clsx(styles.select__btn, isOpen ? styles.select__btnActive : null)}*/
        }
        {/*              onClick={(event) => {*/
        }
        {/*                if (event.currentTarget) {*/
        }

        {/*                  setIsOpen(!isOpen)*/
        }
        {/*                }*/
        }
        {/*              }}>{item.title}</button>*/
        }
        {/*      {isOpen && (*/
        }
        {/*        <ul className={styles.select__content}>*/
        }
        {/*          {item.sublist.map((subItem, index) => (*/
        }
        {/*            <li key={index} className={styles.select__item}>*/
        }
        {/*              <div className={styles.select__name}>{subItem.text}</div>*/
        }
        {/*              <div className={styles.select__num}>{subItem.counter}</div>*/
        }
        {/*            </li>*/
        }
        {/*          ))}*/
        }
        {/*        </ul>*/
        }
        {/*      )}*/
        }
        {/*    </div>*/
        }
        {/*  </li>*/
        }
        {/*})}*/
        }
      </ul>
    </div>
  )
    ;
};

export default HeaderBreadCrumb;