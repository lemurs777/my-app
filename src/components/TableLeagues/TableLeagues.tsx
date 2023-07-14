import clsx from 'clsx';

import styles from './TableLeagues.module.scss';

function TableLeagues() {

    const arrRows = [
		{
            title: 'АНГЛИЯ. ЧЕМПИОН-ЛИГА',
            rows: [
                {
                    numbers: [
                        {
                            number: 'АНГЛИЯ. ЧЕМПИОН-ЛИГА',
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 2.5,
                            disable: true,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: '',
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: '+21',
                            disable: false,
                        },
                    ],
                },
                {
                    numbers: [
                        {
                            number: '1-й тайм',
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 2.5,
                            disable: true,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: '',
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: '+21',
                            disable: false,
                        },
                    ],
                },
                {
                    numbers: [
                        {
                            number: 'угловые',
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 2.5,
                            disable: true,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: '',
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: '+21',
                            disable: false,
                        },
                    ],
                },
            ],
        },
        {
            title: 'FIFA 23. H2H LIGA-1. 2X4 МИН. ХАБАРОВСК',
            rows: [
                {
                    numbers: [
                        {
                            number: 'FIFA 23. H2H LIGA-1. 2X4 МИН. ХАБАРОВСК',
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 2.5,
                            disable: true,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: '',
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: '+21',
                            disable: false,
                        },
                    ],
                },
                {
                    numbers: [
                        {
                            number: '1-й тайм',
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 2.5,
                            disable: true,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: '',
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: '+21',
                            disable: false,
                        },
                    ],
                },
                {
                    numbers: [
                        {
                            number: 'угловые',
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 2.5,
                            disable: true,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: '',
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: '+21',
                            disable: false,
                        },
                    ],
                },
            ],
        },
        {
            title: 'ИСЛАНДИЯ. КУБОК. 2-Й РАУНД',
            rows: [
                {
                    numbers: [
                        {
                            number: 'ИСЛАНДИЯ. КУБОК. 2-Й РАУНД',
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 2.5,
                            disable: true,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: '',
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: '+21',
                            disable: false,
                        },
                    ],
                },
                {
                    numbers: [
                        {
                            number: '1-й тайм',
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 2.5,
                            disable: true,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: '',
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: '+21',
                            disable: false,
                        },
                    ],
                },
                {
                    numbers: [
                        {
                            number: 'угловые',
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 2.5,
                            disable: true,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: '',
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: 9.1,
                            disable: false,
                        },
                        {
                            number: '+21',
                            disable: false,
                        },
                    ],
                },
            ],
        },
    ]

	return (
		<div className={styles.tableLeagues}>
            <ul className={styles.list}>
                {arrRows.map((item, index) => (
                <li key={index} className={styles.item}>
                    <div className={styles.header}>
                        <div className={styles.headerCell}>{item.title}</div>
                        <div className={styles.headerCell}>1</div>
                        <div className={styles.headerCell}>X</div>
                        <div className={styles.headerCell}>2</div>
                        <div className={styles.headerCell}>1Х</div>
                        <div className={styles.headerCell}>12</div>
                        <div className={styles.headerCell}>Х2</div>
                        <div className={styles.headerCell}>ФОРА 1</div>
                        <div className={styles.headerCell}></div>
                        <div className={styles.headerCell}>ФОРА 2</div>
                        <div className={styles.headerCell}>ТОТАЛ</div>
                        <div className={styles.headerCell}>Б</div>
                        <div className={styles.headerCell}>М</div>
                        <div className={styles.headerCell}>
                            <button className={styles.headerCellBtn}></button>
                        </div>
                    </div>
                    {item.rows.map((rowItem, index) => (
                        <div key={index} className={styles.row}>
                            {rowItem.numbers.map((rowInfo, index) => (
                                (index !== 8)
									? <div key={index} className={clsx(
                                        styles.cell,
                                        { [styles.cellDisable] : rowInfo.disable } 
                                    )}>{rowInfo.number}</div>
									: <div key={index} className={clsx(
                                        styles.cell,
                                        styles.cellBtnWrapper
                                    )}>
                                        <button className={styles.cellBtn}></button>
                                        <button className={styles.cellBtn}></button>
                                    </div>
                            ))}
                        </div>
                    ))}
                </li>
                ))}
            </ul>
		</div>
	);
}

export default TableLeagues;