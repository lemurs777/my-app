import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { 
	Modal,
	ModalPromoCode,
} from '../../components/';

import { PromoCodeData, PromoData } from './types';

import useModal from "../../hooks/useModal";

import styles from './Promo.module.scss';

import PromoBanner1 from '../../assets/images/profile-promo-banner-1-x2.min.jpg';
import PromoBanner2 from '../../assets/images/profile-promo-banner-2-x2.min.jpg';
import PromoBanner3 from '../../assets/images/profile-promo-banner-3-x2.min.jpg';

function Promo() {

	const { isOpen, toggleModal} = useModal();

	const arrPromocode: PromoCodeData = [
		{
			date: '2023-03-31',
			name: 'Промокод один',
			info: 'Описание бонусов от применённого промокода. Описание бонусов от применённого промокода',
		},
		{
			date: '2023-03-31',
			name: 'Промокод два',
			info: 'Описание бонусов от применённого промокода',
		},
		{
			date: '2023-03-31',
			name: 'Промокод три',
			info: 'Описание бонусов от применённого промокода. Описание бонусов от применённого промокода',
		},
		{
			date: '2023-03-31',
			name: 'Промокод четыре',
			info: 'Описание бонусов от применённого промокода',
		},
    ]

	const arrPromo: PromoData = [
		{
			src: PromoBanner1,
			title: 'Фрибет 1 000 рублей новым клиентам БК “Пари”',
			link: '/profile/',
			btnText: 'Получить фрибет',
		},
		{
			src: PromoBanner2,
			title: 'Бонус за депозит 5 000 рублей в  БК “Пари”',
			link: '/profile/',
			btnText: 'Получить промокод',
		},
		{
			src: PromoBanner3,
			title: 'Страховка экспресса в  БК “Пари”',
			link: '/profile/',
			btnText: 'Получить страховку',
		},

	];

	return (
		<>
			<div className={styles.promo}>
				<div className={styles.header}>
					<Link className={styles.headerBtn} to="/profile/">Profile</Link>
					<h1 className={styles.headerTitle}>Мои промокоды</h1>
				</div>
				<div className={clsx(
					styles.contentPromo,
					{[styles.contentPromoEmpty] : arrPromocode.length === 0}
				)}>
					{arrPromocode.length === 0 ? (
						<h2 className={styles.title}>У вас пока нет бонусов</h2>
					) : (
						<div className={styles.table}>
							<div className={styles.tableHeader}>
								<div className={styles.tableHeaderCell}>Дата активации</div>
								<div className={styles.tableHeaderCell}>Название промокода</div>
								<div className={styles.tableHeaderCell}>Информация о промокоде</div>
							</div>
							<ul className={styles.tableRows}>
								{arrPromocode.map((item, index) => (
									<li key={index} className={styles.tableRow}>
										<div className={styles.tableCell}>{item.date}</div>
										<div className={styles.tableCell}>{item.name}</div>
										<div className={styles.tableCell}>{item.info}</div>
									</li>
								))}
							</ul>
						</div>
					)}
					<p className={styles.info}>Введите промокод,чтобы добавить бонусы</p>
					<button className={styles.btn} onClick={toggleModal}>Ввести промокод</button>
				</div>
				<div className={styles.content}>
					<ul className={styles.list}>
						{arrPromo.map((item, index) => (
							<li key={index} className={styles.item}>
								<img className={styles.itemImg} src={item.src} alt={item.title} />
								<div className={styles.itemInfo}>
									<h2 className={styles.itemTitle}>{item.title}</h2>
									<Link className={styles.itemLink} to={item.link}>Подробнее</Link>
									<div className={styles.itemBtnWrapper}>
										<button className={styles.itemBtn}>{item.btnText}</button>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
			<Modal isOpen={isOpen} toggleModal={toggleModal} full={true}>
				<ModalPromoCode toggleModal={toggleModal}/>
			</Modal>
		</>
	);
}

export default Promo;