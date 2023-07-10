import { Link } from 'react-router-dom';

import styles from './Deposit.module.scss';

function Deposit() {

	const arrDeposit = {
		name: 'Сумма пополнения',
		sum: 8500,
		currency: '₽',
		depositList: [
			{
				title: 'Банковские карты',
				depositSubList : [
					{
						subtitle: 'Банковская карта',
						min: 100,
						max: 20000,
					},
				]
			},
			{
				title: 'QIWI',
				depositSubList : [
					{
						subtitle: 'QIWI кошелёк',
						min: 100,
						max: 20000,
					},
				]
			},
			{
				title: 'Мобильные платежи',
				depositSubList : [
					{
						subtitle: 'Билайн',
						min: 100,
						max: 20000,
					},
					{
						subtitle: 'МТС',
						min: 100,
						max: 20000,
					},
					{
						subtitle: 'Теле 2',
						min: 100,
						max: 20000,
					},
				]
			},
			{
				title: 'Интернет кошельки',
				depositSubList : [
					{
						subtitle: 'Яндекс кошелёк',
						min: 100,
						max: 20000,
					},
				]
			},
		] 
	}

	return (
		<div className={styles.deposit}>
			<div className={styles.header}>
				<Link className={styles.headerBtn} to="/profile/">Profile</Link>
				<h1 className={styles.headerTitle}>Пополнение счёта</h1>
			</div>
			<div className={styles.topWrapper}>
				<div className={styles.top}>
					<div className={styles.topText}>{arrDeposit.name}</div>
					<div className={styles.topSum}>{arrDeposit.sum}{arrDeposit.currency}</div>
				</div>
			</div>
			<ul className={styles.list}>
			{arrDeposit.depositList.map((item, index) => (
				<li key={index} className={styles.item}>
					<h2 className={styles.itemTitle}>{item.title}</h2>
					<ul className={styles.sublist}>
					{item.depositSubList.map((item, index) => (
						<li key={index} className={styles.subitem}>
							<div className={styles.subitemInfo}>
								<h3 className={styles.subitemTitle}>{item.subtitle}</h3>
								<div className={styles.subitemSum}>{item.min}{arrDeposit.currency} -{item.max}{arrDeposit.currency}</div>
							</div>
							<button className={styles.subitemBtn}>More</button>
						</li>
					))}
					</ul>
				</li>
			))}
			</ul>
		</div>
	);
}

export default Deposit;