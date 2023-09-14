import { Link } from 'react-router-dom';

import styles from './Conclusions.module.scss';


function Conclusions() {

    const arrRows = [
        {
            number: '187323',
            cardName: 'Visa Platinum',
            cardNumber: '**** 5534',
            date: '2023-03-31',
            time: '20:31:41',
            sum: '- 83 096,25',
            currency: 'руб.',
            status: 'Обрабатывается',
        },
        {
            number: '187323',
            cardName: 'Visa Platinum',
            cardNumber: '**** 5534',
            date: '2023-03-31',
            time: '20:31:41',
            sum: '- 83 096,25',
            currency: 'руб.',
            status: 'Выплачен',
        },
        {
            number: '187323',
            cardName: 'Visa Platinum',
            cardNumber: '**** 5534',
            date: '2023-03-31',
            time: '20:31:41',
            sum: '- 83 096,25',
            currency: 'руб.',
            status: 'Выплачен',
        },
        {
            number: '187323',
            cardName: 'Visa Platinum',
            cardNumber: '**** 5534',
            date: '2023-03-31',
            time: '20:31:41',
            sum: '- 83 096,25',
            currency: 'руб.',
            status: 'Выплачен',
        },
        {
            number: '187323',
            cardName: 'Visa Platinum',
            cardNumber: '**** 5534',
            date: '2023-03-31',
            time: '20:31:41',
            sum: '- 83 096,25',
            currency: 'руб.',
            status: 'Обрабатывается',
        },
        {
            number: '187323',
            cardName: 'Visa Platinum',
            cardNumber: '**** 5534',
            date: '2023-03-31',
            time: '20:31:41',
            sum: '- 83 096,25',
            currency: 'руб.',
            status: 'Обрабатывается',
        },
        {
            number: '187323',
            cardName: 'Visa Platinum',
            cardNumber: '**** 5534',
            date: '2023-03-31',
            time: '20:31:41',
            sum: '- 83 096,25',
            currency: 'руб.',
            status: 'Обрабатывается',
        },
        {
            number: '187323',
            cardName: 'Visa Platinum',
            cardNumber: '**** 5534',
            date: '2023-03-31',
            time: '20:31:41',
            sum: '- 83 096,25',
            currency: 'руб.',
            status: 'Обрабатывается',
        },
    ]

	return (
		<div className={styles.conclusions}>
			<div className={styles.header}>
				<Link className={styles.headerBtn} to="/profile/">Profile</Link>
				<h1 className={styles.headerTitle}>Транзакции</h1>
			</div>
            <div className={styles.content}>
                <div className={styles.contentTop}>
                    <div className={styles.contentTopTitle}>История выводов</div>
                    <button  className={styles.contentTopBtn}>More</button>
                </div>
                <div className={styles.table}>
                    <div className={styles.tableHeader}>
                        <div className={styles.tableHeaderCell}>Номер</div>
                        <div className={styles.tableHeaderCell}>Счет пополнения</div>
                        <div className={styles.tableHeaderCell}>Дата</div>
                        <div className={styles.tableHeaderCell}>Время</div>
                        <div className={styles.tableHeaderCell}>Сумма</div>
                        <div className={styles.tableHeaderCell}>Статус</div>
                    </div>
                    <ul className={styles.tableRows}>
                        {arrRows.map((item, index) => (
                            <li key={index} className={styles.tableRow}>
                                {/* <div className={styles.tableCell}>{item.number}</div> */}
                                <div className={styles.tableCell}>
                                    <div className={styles.tableCellTop}>{item.number}</div>
                                    <div className={`${styles.tableCellBottom} mobile`}>{item.date}</div>
                                </div>
                                <div className={styles.tableCell}>
                                    <div className={styles.tableCellTop}>{item.cardName}</div>
                                    <div className={styles.tableCellBottom}>{item.cardNumber}</div>
                                </div>
                                <div className={styles.tableCell}>{item.date}</div>
                                <div className={styles.tableCell}>{item.time}</div>
                                {/* <div className={styles.tableCell}>{item.sum} {item.currency}</div> */}
                                <div className={styles.tableCell}>
                                    <div className={styles.tableCellTop}>{item.sum} {item.currency}</div>
                                    <div className={`${styles.tableCellBottom} mobile`}>{item.status}</div>
                                </div>
                                <div className={styles.tableCell}>{item.status}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
		</div>
	);
}

export default Conclusions;